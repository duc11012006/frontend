const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');

const elmListCategort = document.getElementById('elm-list-categort');
const elmCategoryTitle = document.getElementById('categoryTitle');
const elmArticles = document.getElementById('articles');
const elmWidgetNews = document.getElementById('widgetNews');
const elmArticlesRecommended = document.getElementById('articlesRecommended');
const elmWidgetItem = document.getElementById('widgetItem');
const elmListGold = document.getElementById('List-Gold');
const elmListCoin = document.getElementById('list-coin');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
// const idCategory = 1;


// RENDER MENU
axios.get(`${BASE_URL}categories_news`).then((response) => {
    const categories = response.data.data;
  
    let htmlMenu = '';
    categories.forEach(item => {
      htmlMenu += `<a class="dropdown-item" href="category.html?id=${item.id}">${item.name}</a>`
    });
    elmListCategort.innerHTML = htmlMenu;
  });


//   categories_news/1

axios.get(`${BASE_URL}categories_news/${id}`).then((response) =>{
    const category = response.data.data;
    
    elmCategoryTitle.innerHTML = category.name; 
});


// categories_news/1/articles?offset=0&limit=10

axios.get(`${BASE_URL}categories_news/${id}/articles?offset=3&limit=10`).then((response) =>{
    const categories = response.data.data;
    let htmlMenu = '';
    categories.forEach(item => {
        let content = item.content.split(' ').slice(0, 20).join(' ') + "...";
        const publishate = dayjs(item.publish_date).fromNow();
      htmlMenu += /* html */ `						<div class="col-md-6 mb-4">
							<article class="card article-card article-card-sm h-100">
								<a href="article.html">
									<div class="card-image">
										<div class="post-info"> <span class="text-uppercase">${publishate}</span>
											<span class="text-uppercase">3 minutes read</span>
										</div>
										<img loading="lazy" decoding="async" src="${item.thumb}" alt="Post Thumbnail" class="w-100" width="420" height="280">
									</div>
								</a>
								<div class="card-body px-0 pb-0">
									<ul class="post-meta mb-2">
										</li>
									</ul>
									<h2><a class="post-title" href="article.html?id=${item.id}">${item.title}</a></h2>
									<p class="card-text">${content}</p>
									<div class="content"> <a class="read-more-btn" href="article.html?id=${item.id}">Read Full Article</a>
									</div>
								</div>
							</article>
						</div>`
    });
    elmArticles.innerHTML = htmlMenu;
});


axios.get(`${BASE_URL}articles?offset=7&limit=1`).then((response) => {
    const articles = response.data.data;
  
    let html = '';
    articles.forEach(item => {
      let content = item.content.split(' ').slice(0, 20).join(' ') + "...";
      html += /* html */ `              
      <div class="widget">
        <div class="widget-body">
          <img loading="lazy" decoding="async" src="${item.thumb}" alt="About Me"
            class="w-100 author-thumb-sm d-block">
          <h2 class="widget-title my-3">${item.title}</h2>
          <p class="mb-3 pb-2">${content}</p> <a href="about.html?id=${item.id}"
            class="btn btn-sm btn-outline-primary">Know
            More</a>
        </div>
      </div>
  `
    });
    elmWidgetNews.innerHTML = html;
});


axios.get(`${BASE_URL}articles?offset=9&limit=4`).then((response) => {
  const articles = response.data.data;

  let html = '';
  articles.forEach(item => {
    let content = item.content.split(' ').slice(0, 20).join(' ') + "...";
    html += /* html */ `              
        <article class="card mb-4">
                <div class="card-image">
                  <div class="post-info"> <span class="text-uppercase">1 minutes read</span>
                  </div>
                  <img loading="lazy" decoding="async" src="${item.thumb}" alt="Post Thumbnail" class="w-100">
                </div>
                <div class="card-body px-0 pb-1">
                  <h3><a class="post-title post-title-sm"
                      href="article.html?id=${item.id}">${item.title}</a></h3>
                  <p class="card-text">${content}</p>
                  <div class="content"> <a class="read-more-btn" href="article.html">Read Full Article</a>
                  </div>
                </div>
              </article>`
  });
  elmArticlesRecommended.innerHTML = html;
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



  