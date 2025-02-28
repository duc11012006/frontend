<?php
    $items = [
        [
            'img' => 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg',
            'date' =>'January 1, 2023',
            'title' => 'Featured Post Title',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
            'link' => 'cardone.php'
        ],
        [
            'img' => 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
            'date' => 'January 1, 2023',
            'title' => 'Post Title',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
            'link' => 'cardone.php'
        ],
        [
            'img' => 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
            'date' => 'January 1, 2023',
            'title' => 'Post Title',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
            'link' => 'cardone.php'
        ],
        [
            'img' => 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
            'date' => 'January 1, 2023',
            'title' => 'Post Title',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.',
            'link' => 'cardone.php'
        ],
        [
            'img' => 'https://dummyimage.com/700x350/dee2e6/6c757d.jpg',
            'date' => 'January 1, 2023',
            'title' => 'Post Title',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.',
            'link' => 'cardone.php'
        ],
        
    ];

    $topArtice = sprintf('<div class="card mb-4">
                        <a href="#!"><img class="card-img-top" src="%s" alt="..." /></a>
                        <div class="card-body">
                            <div class="small text-muted">%s</div>
                            <h2 class="card-title">%s</h2>
                            <p class="card-text">%s</p>
                            <a class="btn btn-primary" href="%s">Read more →</a>
                        </div>
                    </div>',($items[0]['img']), ($items[0]['date']), ($items[0]['title']), ($items[0]['content']), ($items[0]['link']));

$listArticles = '';
    for($i= 1; $i < count($items); $i++){
            $listArticles .= sprintf('
                        <div class="col-lg-6">
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="%s" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">%s</div>
                                    <h2 class="card-title h4">%s</h2>
                                    <p class="card-text">%s</p>
                                    <a class="btn btn-primary" href="%s">Read more →</a>
                                </div>
                            </div>
                        </div>',($items[$i]['img']), ($items[$i]['date']), ($items[$i]['title']), ($items[$i]['content']), ($items[$i]['link']));
    }


?>




<!-- 
<div class="col-lg-6">
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2023</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div> -->





                    