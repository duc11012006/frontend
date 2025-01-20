const BASE_URL = 'https://apiforlearning.zendvn.com/api/v2/';

dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('vi');

const elmListCategort = document.getElementById('elm-list-categort');
const elmCategoryTitle = document.getElementById('categoryTitle');
const elmArticles = document.getElementById('articles');
const elmWidgetNews = document.getElementById('widgetNews');
const elmWidgetItem = document.getElementById('widgetItem');
const elmArticlesRecommended = document.getElementById('articlesRecommended');
const elmArticleNews = document.getElementById("articleNews");
const elmArticleSport = document.getElementsByClassName('articleSport');
const elmSectionCategory = document.getElementById('articleSport');
const elmTitleAritles = document.getElementById('titleAritles');
const elmListGold = document.getElementById('List-Gold')
const elmListtGold = document.getElementById('Listt-Gold')
const elmSectionContainer = document.getElementById('sectionContainer');
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


// axios.get(`${BASE_URL}articles?offset=9&limit=4`).then((response) => {
//     const articles = response.data.data;
  
//     let html = '';
//     articles.forEach(item => {
//       let content = item.content.split(' ').slice(0, 20).join(' ') + "...";
//       html += /* html */ `              
//           <article class="card mb-4">
//                   <div class="card-image">
//                     <div class="post-info"> <span class="text-uppercase">1 minutes read</span>
//                     </div>
//                     <img loading="lazy" decoding="async" src="${item.thumb}" alt="Post Thumbnail" class="w-100">
//                   </div>
//                   <div class="card-body px-0 pb-1">
//                     <h3><a class="post-title post-title-sm"
//                         href="article.html?id=${item.id}">${item.title}</a></h3>
//                     <p class="card-text">${content}</p>
//                     <div class="content"> <a class="read-more-btn" href="article.html">Read Full Article</a>
//                     </div>
//                   </div>
//                 </article>`
//     });
//     elmArticlesRecommended.innerHTML = html;
//   });
  


  function highlightCategory(categoryId) {
    const allCategories = document.querySelectorAll('#widgetItem li');
    allCategories.forEach(item => {
      item.classList.remove('active');
    });
  
    const selectedCategory = document.querySelector(`#widgetItem li a[href="category.html?id=${categoryId}"]`);
    if (selectedCategory) {
      selectedCategory.parentElement.classList.add('active');
    }
  }
  

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
                          href="article.html?id=${item.id}"
                          onclick="highlightCategory(${item.category_id})">${item.title}</a></h3>
                      <p class="card-text">${content}</p>
                      <div class="content"> 
                        <a class="read-more-btn" 
                           href="article.html?id=${item.id}"
                           onclick="highlightCategory(${item.category_id})">Read Full Article</a>
                      </div>
                    </div>
                  </article>`
      });
      elmArticlesRecommended.innerHTML = html;
  });
  

  axios.get(`${BASE_URL}articles/${id}`).then((response) => {
    const article = response.data.data;
    elmTitleAritles.innerHTML = article.category.name
    // console.log(article)
    let html = '';
    html += /*html */ `
      <img loading="lazy" decoding="async" src="${article.thumb}" alt="Post Thumbnail" class="w-100">
      <h1 class="my-3">${article.title}</h1>
      <ul class="post-meta mb-4">
      <li><a href="article.html?id=${article.id}" onclick="highlightCategory(${article.category_id}); return false;"></a></li>
      </ul>
      <div class="contentTextLeft">
        ${article.content}
        ${article.author}
      </div>`;
    elmArticleNews.innerHTML = html;
  
    highlightCategory(article.category_id);
  }); 


axios.get(`${BASE_URL}articles/${id}/related`).then((response) => {
  const items = response.data.data;
  let html = "";
  // console.log(response)
  let index = 1;
  items.forEach(item => {
    html += `						
    <div class="col-md-6 mb-4">
							<article class="card article-card article-card-sm h-100">
							  <a href="article.html?id=${item.id}">
								<img loading="lazy" decoding="async" src="${item.thumb}">
							  </a>
							  <div class="card-body px-0 pb-0">
								<h2><a class="post-title" href="article.html?id=${item.id}">${item.title}</a></h2>
							  </div>
							</article>
						</div>	`
  });
  elmSectionContainer.innerHTML = html;
})



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