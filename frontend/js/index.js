const elmArticelsTrending = document.getElementById('articelsTrending');
const elmArticlesNew = document.getElementById('articlesNew');
const elmArticlesNewLarge = document.getElementById('articlesNewLarge');
const elmCategoriesFeatureWithArticles = document.getElementById('categoriesFeatureWithArticles');
const elmCategoriesFeatureTab = document.getElementById('categoriesFeatureTab');
const elmCategoriesFeatureTabContent = document.getElementById('categoriesFeatureTabContent');
const elmArticelsSlider = document.getElementById('articelsSlider');


// RENDER ARTICLES SLIDER
API.get('articles/popular?limit=4').then((response) => {
    const articles = response.data.data;
    let html = '';
    articles.forEach((item) => {
        html += `                
        <div class="swiper-slide">
                  <a href="#" class="img-bg d-flex align-items-end"
                    style="background-image: url('${thumb}')">
                    <div class="img-bg-inner">
                      <h2>${item.title}</h2>
                      <p>${item.description}</p>
                    </div>
                  </a>
                </div>`
    });

    elmArticelsSlider.innerHTML = html;
});



// RENDER ARTICLES TRENDING
API.get('articles/popular?limit=5').then((response) => {
    const articles = response.data.data;
    let html = '';
    articles.forEach((item, index) => {
        html += renderArticelsTrendingItem(item, index);
    });

    elmArticelsTrending.innerHTML = html;
});


// RENDER ARTICLES NEW

API.get('articles?limit=5').then(response => {
    const articles = response.data.data;

    let html = '';
    articles.forEach((item, index) => {
        if (index == 0) {
            elmArticlesNewLarge.innerHTML = renderArticlesNewLargeItem(item)
        } else {
            html += renderArticlesNewItem(item);
        }
    });
    elmArticlesNew.innerHTML = html;
});


//RENDER CATEGORY FEATURE WITH ARTICLES 
API.get('categories_news/articles?limit_cate=2&limit=9').then((response) => {
    const data = response.data;
    const articles = item.articles;


    let html = '';
    data.forEach((item, index) => {
        const categoryName = item.name;
        const articles = item.articles;

        html += /* html */ `
        <section class="category-section">
      <div class="container" data-aos="fade-up">
        ${renderCategorySectionTitle(categoryName)}
        ${renderArticlesByCategoryFeature(articles, index)}
      </div>
    </section>`;
    });
    elmCategoriesFeatureWithArticles.innerHTML = html;
});


//RENDER CATEGORY FEATURE WITH ARTICLES TAB
API.get('categories_news/articles?limit_cate=4&limit=4').then((response) => {
    const data = response.data;
    const articles = item.articles;


    let htmlTab = '';
    let htmlTabContent ='';
    data.forEach((item, index) => {
        const categoryName = item.name;
        const articles = item.articles;
        const slug = item.slug;
        const active = index === 0 ? 'active' : '';
        const activeShow = index === 0 ? 'activeShow' : '';

        let htmlArticles = '';

        articles.forEach(articleItem =>{
            htmlArticles += /* html */ `              
            <div class="col-md-6 col-lg-3">
                <div class="post-entry-1">
                  <a href="#"><img src="${articleItem.thumb}" alt="${articleItem.title}" class="img-fluid" /></a>
                  <div class="post-meta">
                    <span>${articleItem.publish_date}</span>
                  </div>
                  <h2><a href="#">${articleItem.title}</a></h2>
                </div>
            </div>`
        });


        htmlTab += /* html */ `          
        <li class="nav-item" role="presentation">
            <button class="nav-link ${active}" id="${slug}-tab" data-bs-toggle="tab" data-bs-target="#${slug}-tab-pane"
              type="button" role="tab" aria-controls="${slug}-tab-pane" aria-selected="false">
              ${categoryName}
            </button>
          </li>` 
       

        htmlTabContent += /*html */  `          
        <div class="tab-pane fade ${activeShow}" id="${slug}-tab-pane" role="tabpanel" aria-labelledby="${slug}-tab" tabindex="0">
            <div class="row g-5">${htmlArticles}</div>
          </div>`
    });
    elmCategoriesFeatureTab.innerHTML = htmlTab;
    elmCategoriesFeatureTabContent.innerHTML = htmlTabContent;
});





function renderCategorySectionTitle (categoryName) {
    return /* html */ `
    <div class="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>${categoryName}</h2>
          <div><a href="#" class="more">See All ${categoryName}</a></div>
    </div>`
}


function renderArticlesByCategoryFeature (articles, index){
    let htmlArticlesLeft = '';
    let htmlArticlesRight = '';

    articles.forEach((articleItem,idx) =>{
        const title = articleItem.title;
        const thumb = articleItem.thumb;
        const publishDate = articleItem.publish_date;
        const authorName = articleItem.author;
        if(index <4){
            htmlArticlesLeft += /* html*/ `              
            <div class="col-lg-6">
                <div class="post-entry-1">
                  <a href="single-post.html"><img src="${thumb}" alt="${title}"
                      class="img-fluid" /></a>
                  <div class="post-meta">
                    <span>${publishDate}</span>
                  </div>
                  <h2><a href="#">${title}</a></h2>
                </div>
              </div>`;
        }else {
            htmlArticlesRight += /* html*/ `
            <div class="post-entry-1 border-bottom">
              <div class="post-meta">
             <span>${publishDate}</span>
              </div>
              <h2 class="mb-2">
                <a href="single-post.html">${title}</a>
              </h2>
              <span class="author mb-3 d-block">${authorName}</span>
            </div>`
        }
    });
    let rowClass = 'flex-row-reverse';
    let borderClass = '';

    if(idx % 2 === 0 ) {
        rowClass = '';
        borderClass = 'border-start custom-border';
    }


    return /* html */ `
        <div class="row g-5 ${rowClass}">
          <div class="col-lg-8">
            <div class="row g-5">
            ${htmlArticlesLeft}
            </div>
          </div>
          <div class="col-lg-4" ${borderClass}>
            ${htmlArticlesRight}
          </div>
        </div>`
}



function renderArticelsTrendingItem(item, index) {
    return /* html */ `  <li>
        <a href="#">
            <span class="number">${index + 1}</span>
            <h3>${item.title}</h3>
            <span class="author">${item.author}</span>
        </a>
    </li>`;
}


function renderArticlesNewLargeItem(index) {
    return /* html */ `            
            <div class="post-entry-1 lg">
              <a href="#"><img src="${item.thumb}" alt="${item.title}" class="img-fluid" /></a>
              <div class="post-meta">
                <span class="date">${item.category.name}</span> 
                <span class="mx-1">&bullet;</span> 
                <span>${item.publish_date}</span>
              </div>
              <h2><a href="#">${item.title}</a></h2>
              <p class="mb-4 d-block">${item.description}</p>

              <div class="d-flex align-items-center author">
                <div class="photo"><img src="assets/img/person-1.jpg" alt="" class="img-fluid" /></div>
                <div class="name">
                  <h3 class="m-0 p-0">${item.author}</h3>
                </div>
              </div>
            </div>`
}


function renderArticlesNewItem(item) {
    return /* html */`              
            <div class="col-lg-6">
                <div class="post-entry-1">
                  <a href="#">
                  <img src="${item.thumb}" alt="${item.title}" class="img-fluid" />
                  </a>
                  <div class="post-meta">
                    <span class="date">${item.category.name}</span> 
                    <span class="mx-1">&bullet;</span>
                    <span>${item.publish_date}</span>
                  </div>
                  <h2><a href="single-post.html">${item.title}</a></h2>
                </div>
              </div>`;
}