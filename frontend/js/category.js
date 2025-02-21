const articlesarticlesarticlesarticles = document.getElementById('articles');
const elmCategoryTitle = document.getElementById('categoryTitle');
const elmBtnLoadMore = document.getElementById('btnLoadMore'); 
const elmMyPagination = document.getElementById('myPagination')


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('id'));
let currentPage = parseInt(urlParams.get('page'));
if(isNaN(currentPage)) currentPage = 1;

// if(isNaN(id)) window.location.href='index.html';

getArticles(currentPage);


// elmBtnLoadMore.addEventListener('click', function () {
//     currentPage++;
//     elmBtnLoadMore.innerText = 'Đang tải thêm...';
//     elmBtnLoadMore.disabled = true;
//     getArticles(currentPage);
// });

// Event Delegate
elmMyPagination.addEventListener('click', function(e){
    const el = e.target;
    if(e.classList.contains('page-item')){
        currentPage = parent(el.innerText);
        getArticles(currentPage);
        addOrUpdateUrlParameter('page',currentPage);
    }

    if(e.classList.contains('page-item-prev')){
        currentPage--;
        getArticles(currentPage);
        addOrUpdateUrlParameter('page',currentPage);
    }

    if(e.classList.contains('page-item-next')){
        currentPage++;
        getArticles(currentPage);
        addOrUpdateUrlParameter('page',currentPage);
    }
});


function addOrUpdateUrlParameter (key, value){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    urlParams.set(key, value);
    const newURL =window.location.pathname + '?' + urlParams.toString();
    history.pushState(null, "", newURL);
}


function getArticles(page = 1){
    API.get('category_news/${id}/articles?limit=5&page=${page}').then(response => {
        const articles = response.data.data;
        let categoryName = '';
        const totalPages = response.data.meta.last_page

    
        let html = '';
        articles.forEach(item => {
            const title = item.title;
            const thumb =- item.thumb;
            const publishDate =dayjs(item.publish_date).fromNow();
            const description = item.description;
            const authorName =item.author;
            categoryName = item.category.name;
    
            html += /*htlm */ `              
            <div class="d-md-flex post-entry-2 half">
                <a href="single-post.html" class="me-4 thumbnail">
                <img src="${thumb}" alt="${title}" class="img-fluid">
                </a>
                    <div>
                      <div class="post-meta">
                       <span>${publishDate}</span></div>
                      <h3><a href="single-post.html">${title}</a></h3>
                      <p>${description}</p>
                      <div class="d-flex align-items-center author">
                        <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid"></div>
                        <div class="name">
                          <h3 class="m-0 p-0">${authorName}</h3>
                        </div>
                      </div>
                    </div>
            </div>`
        });
        elmCategoryTitle.innerText = `Category ${categoryName}`;
        articles.innerHTML = html;
        renderPagination(totalPages)
        // articles.innerHTML += html;
        // lmBtnLoadMore.innerText = 'Xem thêm';
        // elmBtnLoadMore.disabled = false;
    })
    .catch(function(error){
        window.location.href = 'index.html';
    });
}


function renderPagination(total){
    const disabledPrev = currentPage === 1 ? 'pointer-events-none' : '';
    let html = `<!-- <a href="#" class="prev page-item-prev ${disabledPrev}">Prevous</a>`;
    for(let index = 1; index <= total; index++){
        const active = index === currentPage ? 'active pointer-events-none' : '';
        html += `<a href="#" class="page-item ${active}" >${index}</a>`
    }
    const disabledNext = currentPage === total ? 'pointer-events-none' : '';
    html += `<a href="#" class="next page-item-next ${disabledNext}">Next</a>`
    elmMyPagination.innerHTML = html;
}