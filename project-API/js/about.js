const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';
dayjs.extend(window.dayjs_plugin_relativeTime);


const elmListCategort = document.getElementById('elm-list-categort');
const elmArticlesRecommended = document.getElementById('articlesRecommended');
const elmWidgetItem = document.getElementById('widgetItem');
const elmSectionContainer = document.getElementById('sectionContainer');
const elmContentLeft = document.getElementById('contentLeft')



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
      const publishate = dayjs(item.publish_date).fromNow();
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


axios.get(`${BASE_URL}categories_news?offset=0&limit=10`).then((response) => {
    const categories = response.data.data;
  
    let html = '';
    categories.forEach(item => {
      html += /* html */ `              
      <li><a href="#!">${item.name}<span class="ml-auto">(${item.id})</span></a>
      </li>`
    });
    elmWidgetItem.innerHTML = html;
  });


axios.get(`${BASE_URL}articles?offset=20&limit=1`).then((response) => {
    const articles = response.data.data;
  
    let html = '';
    articles.forEach(item => {
      let content = item.content.split(' ').slice(0, 50).join(' ') + "...";
      html += /* html */ `  
      <div class="widget">
      <div class="widget-body">
        <img loading="lazy" decoding="async" src="${item.thumb}" alt="About Me" class="w-100 author-thumb-sm d-block">
        <h2 class="widget-title my-3">${item.title}</h2>
        <p class="mb-3 pb-2">${item.content}</p> <a href="about.html" class="btn btn-sm btn-outline-primary">Know
          More</a>
      </div>
    </div>`
    });
    elmContentLeft.innerHTML = html;
  });

"${item.name} ${item.title} ${item.content} ${item.thumb}"