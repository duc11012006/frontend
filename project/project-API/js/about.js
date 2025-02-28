const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';
dayjs.extend(window.dayjs_plugin_relativeTime);


const elmListCategort = document.getElementById('elm-list-categort');
const elmArticlesRecommended = document.getElementById('articlesRecommended');
const elmSectionContainer = document.getElementById('sectionContainer');
const elmContentLeft = document.getElementById('contentLeft');
const elmListGold = document.getElementById('List-Gold');
const elmListCoin = document.getElementById('list-coin');
const elmWidgetItem = document.getElementById('widgetItem');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));



// RENDER MENU
axios.get(`${BASE_URL}categories_news`).then((response) => {
    const categories = response.data.data;
    let htmlMenu = '';
    categories.forEach(item => {
      htmlMenu += `<a class="dropdown-item" href="category.html?id=${item.id}">${item.name}</a>`
    });
    elmListCategort.innerHTML = htmlMenu;

  })


axios.get(`${BASE_URL}articles?offset=20&limit=1`).then((response) => {
    const articles = response.data.data;
  
    let html = '';
    articles.forEach(item => {
      let content = item.content.split(' ').slice(0, 50).join(' ') + "...";
      html += /* html */ `  
      <img loading="lazy" decoding="async" src="${item.thumb}" class="img-fluid w-100 mb-4" alt="Author Image">
					<h1 class="mb-4">${item.title}</h1>
					<div class="content">
						<p>${item.content}</p>
					</div>`
    });
    elmSectionContainer.innerHTML = html;
  });


// RENDER ARTICLES Recommended
axios.get(`${BASE_URL}articles?offset=15&limit=4`).then((response) => {
    const articles = response.data.data;
  
    let html = '';
    articles.forEach(item => {
      let content = item.content.split(' ').slice(0, 20).join(' ') + "...";
      const publishate = dayjs(item.publish_date).fromNow();
      html += /* html */ `              
          <article class="card mb-4">
                  <div class="card-image">
                    <div class="post-info"> <span class="text-uppercase">${publishate}</span>
                    </div>
                    <img loading="lazy" decoding="async" src="${item.thumb}" alt="Post Thumbnail" class="w-100">
                  </div>
                  <div class="card-body px-0 pb-1">
                    <h3><a class="post-title post-title-sm"
                        href="article.html?id=${item.id}">${item.title}</a></h3>
                    <p class="card-text">${content}</p>
                    <div class="content"> <a class="read-more-btn" href="article.html?id=${item.id}">Read Full Article</a>
                    </div>
                  </div>
                </article>`
    });
    elmArticlesRecommended.innerHTML = html;
  });


  axios.get(`${BASE_URL}articles?offset=5&limit=1`).then((response) => {
    const articles = response.data.data;
  
    let html = '';
    articles.forEach(item => {
      let content = item.content.split(' ').slice(0, 50).join(' ') + "...";
      const publishate = dayjs(item.publish_date).fromNow();
      html += /* html */ `  
      <div class="col-12 mb-4">            
        <article class="card article-card">
          <a href="article.html?id=${item.id}">
            <div class="card-image">
              <div class="post-info"> <span class="text-uppercase">${publishate}</span>
                <span class="text-uppercase">3 minutes read</span>
              </div>
              <img loading="lazy" decoding="async" src="${item.thumb}" alt="Post Thumbnail"
                class="w-100">
            </div>
          </a>
          <div class="card-body px-0 pb-1">
            <ul class="post-meta mb-2">
              <li> <a href="#!">travel</a>
                <a href="#!">news</a>
              </li>
            </ul>
            <h2 class="h1"><a class="post-title" href="article.html?id=${item.id}">${item.title}</a></h2>
            <p class="card-text">${content}</p>
            <div class="content"> <a class="read-more-btn" href="article.html?id=${item.id}">Read Full Article</a>
            </div>
          </div>
        </article>
        </div>`
    });
    elmSectionContainer.innerHTML = html;
  });


  axios.get(`https://apiforlearning.zendvn.com/api/get-gold`).then((response) => {
    const items = response.data;
  
    let html = '';
    items.forEach(item => {
      html += /* html */ `                
        <tr>
              <td>${item.type}</td>
              <td>${item.sell}</td>
              <td>${item.buy}</td>
        </tr>` 
    });
    elmListGold.innerHTML = html;
  });
  
  
  axios.get(`https://apiforlearning.zendvn.com/api/get-coin`).then((response) => {
    const items = response.data;
  
    let html = '';
    items.forEach(item => {
      let CoinActive = "";
      if(item.percent_change_24h < 0) {
        CoinActive = 'class ="active-coin"'
      }
      html += /* html */ `              
        <tr>
          <td class="much-coin">${item.name}</td>
          <td class="much-coin">${item.price.toFixed(2)}</td>
          <td ${CoinActive} class="much-coin">${item.percent_change_24h.toFixed(2)}</td>
        </tr>
    ` 
    });
    elmListCoin.innerHTML = html;
  }); 


  axios.get(`${BASE_URL}categories_news?offset=0&limit=10`).then((response) => {
    const categories = response.data.data;
    console.log(response)
  
  
    let html = '';
    categories.forEach(item => {
        let classActive = "";
        if(id === item.id){
            classActive = 'class="active"';
        }
      html += /* html */ `              
      <li><a ${classActive} href="category.html?id=${item.id}">${item.name}<span class="ml-auto">(${item.id})</span></a>
      </li>`
    });
    elmWidgetItem.innerHTML = html;
  });
