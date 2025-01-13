const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';
dayjs.extend(window.dayjs_plugin_relativeTime);


const elmListCategort = document.getElementById('elm-list-categort');
const elmArticlesRecommended = document.getElementById('articlesRecommended');
const elmSectionContainer = document.getElementById('sectionContainer');
const elmWidgetNews = document.getElementById('widgetNews');
const elmWidgetItem = document.getElementById('widgetItem');
const elmArticleSport = document.getElementsByClassName('articleSport');
const elmSectionCategory = document.getElementById('sectionCategory');

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


// RENDER ARTICLES Recommended
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


axios.get(`${BASE_URL}articles/3312/related?limit=4`).then((response) => {
  const articles = response.data.data;

  let html = '';
  articles.forEach(item => {
    const publishate = dayjs(item.publish_date).fromNow();
    html += /* html */ `                
    <div class="col-md-6 mb-4">
      <article class="card article-card article-card-sm h-100">
        <a href="article.html?id=${item.id}">
          <div class="card-image">
            <div class="post-info"> <span class="text-uppercase">${publishate}</span>
              <span class="text-uppercase">2 minutes read</span>
            </div>
            <img loading="lazy" decoding="async" src="${item.thumb}" alt="Post Thumbnail"
              class="w-100">
          </div>
        </a>
        <div class="card-body px-0 pb-0">
          <ul class="post-meta mb-2">
            <li> <a href="#!">travel</a>
            </li>
          </ul>
          <h2><a class="post-title" href="article.html?id=${item.id}">${item.title}</a></h2>
          <p class="card-text">${item.description}</p>
          <div class="content"> <a class="read-more-btn" href="article.html?id=${item.id}">Read Full Article</a>
          </div>
        </div>
      </article>
    </div>`
  });
  elmSectionContainer.innerHTML += html;
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
        <p class="mb-3 pb-2">${content}</p> <a href="about.html"
          class="btn btn-sm btn-outline-primary">Know
          More</a>
      </div>
    </div>
`
  });
  elmWidgetNews.innerHTML = html;
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



// RENDER ARTICLES IN CATEGORY
axios.get(`${BASE_URL}categories_news/articles?limit_cate=3&limit=4`).then((response) => {
  const categories = response.data.data;
  let html = "";
 

  categories.forEach(item =>{
    // console.log(item)
    // console.log(item.articles)
    let htmlArticles = "";
    item.articles.forEach(itemAticle =>{
      console.log(itemAticle)
      htmlArticles += `<div class="col-md-6 mb-4">
        <article class="card article-card article-card-sm h-100">
          <a href="article.html">
            <img loading="lazy" decoding="async"
              src="${itemAticle.thumb}"
              alt="About Me" class="w-100 author-thumb-sm d-block">
          </a>
          <div class="card-body px-0 pb-0">
            <h2><a class="post-title" href="article.html">${itemAticle.title}</a></h2>
          </div>
        </article>
      </div>`
      });


    html += `<div class="articleSport">
    <div class="col-12">
      <h2 class="section-title">${item.name}</h2>
    </div>
    <div class="row" id="sectionContainer">
    ${htmlArticles}

      <div style="display: flex; justify-content: center;" class="col-12">
        <a href="category.html?id=${item.id}">
        <button
          style="border: none; padding: 5px 10px; border-radius:20px; color: #fff; background-color: green;">Read
          More</button>
          </a>
      </div>
    </div>
  </div>`
   })
   elmSectionCategory.innerHTML = html;
})

