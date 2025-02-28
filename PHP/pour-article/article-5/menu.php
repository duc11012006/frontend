<?php
    $items = [
        [
            'title' => 'A Bootstrap 5 template for modern businesses',
            'content' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!',
            'link_get' => 'Get Started.php',
            'link_learn' => 'Learn More.php',
            'img' => 'https://dummyimage.com/600x400/343a40/6c757d'
        ],
        [
            'icon' => 'bi-collection',
            'title' => 'Featured title',
            'content' => 'Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.',
        ],
        [
            'icon' => 'bi-building',
            'title' => 'Featured title',
            'content' => 'Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.',
        ],
        [
            'icon' => 'bi-toggles2',
            'title' => 'Featured title',
            'content' => 'Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.',
        ],
        [
            'icon' => 'bi-toggles2',
            'title' => 'Featured title',
            'content' => 'Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.',
        ],
        [
            'icon' => 'bi-toggles2',
            'title' => 'Featured title',
            'content' => 'Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.',
        ],
        [
            'icon' => 'bi-toggles2',
            'title' => 'Featured title',
            'content' => 'Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.',
        ],
        
    ];

    $topArtice = sprintf('<div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">%s</h1>
                                <p class="lead fw-normal text-white-50 mb-4">%s</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="%s">Get Started</a>
                                    <a class="btn btn-outline-light btn-lg px-4" href="%s">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="%s" alt="..." /></div>
                    </div>
                </div>',($items[0]['title']), ($items[0]['content']), ($items[0]['link_get']), ($items[0]['link_learn']), ($items[0]['img']));

$listArticles = '';
    for($i= 1; $i < count($items); $i++){
            $listArticles .= sprintf('
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi %s"></i></div>
                                    <h2 class="h5">%s</h2>
                                    <p class="mb-0">%s</p>
                                </div>',($items[$i]['icon']), ($items[$i]['title']), ($items[$i]['content']));
    }


?>             