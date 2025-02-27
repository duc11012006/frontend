$(document).ready(function() {
    $('#list-view').click(function() {
        $('#articles').removeClass('article-grid').addClass('article-list');
        $('.article-item').addClass('col-12').removeClass('col-md-4');
    });

    $('#grid-view').click(function() {
        $('#articles').removeClass('article-list').addClass('article-grid');
        $('.article-item').removeClass('col-12').addClass('col-md-4');
    });
});