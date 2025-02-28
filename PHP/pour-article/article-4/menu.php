<?php
    $items = [
        [
            'title' => 'A warm welcome!',
            'content' => 'Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?',
            'link' => 'action.php'
        ],
        [
            'icon' => 'bi-collection',
            'title' => 'Fresh new layout',
            'content' => 'With Bootstrap 5, we ve created a fresh new layout for this template!',
        ],
        [
            'icon' => 'bi-cloud-download',
            'title' => 'Free to download',
            'content' => 'As always, Start Bootstrap has a powerful collectin of free templates.',
        ],
        [
            'icon' => 'bi-card-heading',
            'title' => 'Jumbotron hero header',
            'content' => 'The heroic part of this template is the jumbotron hero header!',
        ],
        [
            'icon' => 'bi-bootstrap',
            'title' => 'Feature boxes',
            'content' => 'We ve created some custom feature boxes using Bootstrap icons!',
        ],
        [
            'icon' => 'bi-code',
            'title' => 'Simple clean code',
            'content' => 'We keep our dependencies up to date and squash bugs as they come!',
        ],
        [
            'icon' => 'bi-patch-check',
            'title' => 'A name you trust',
            'content' => 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!',
        ],
        [
            'icon' => 'bi-patch-check',
            'title' => 'A name you trust',
            'content' => 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!',
        ],
        [
            'icon' => 'bi-patch-check',
            'title' => 'A name you trust',
            'content' => 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!',
        ],
        
    ];

    $topArtice = sprintf('<div class="container px-lg-5">
                            <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                                <div class="m-4 m-lg-5">
                                    <h1 class="display-5 fw-bold">%s</h1>
                                    <p class="fs-4">%s</p>
                                    <a class="btn btn-primary btn-lg" href="%s">Call to action</a>
                                </div>
                            </div>
                         </div>',($items[0]['title']), ($items[0]['content']), ($items[0]['link']));

$listArticles = '';
    for($i= 1; $i < count($items); $i++){
            $listArticles .= sprintf('
                        <div class="col-lg-6 col-xxl-4 mb-5">
                            <div class="card bg-light border-0 h-100">
                                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi %s"></i></div>
                                    <h2 class="fs-4 fw-bold">%s</h2>
                                    <p class="mb-0">%s</p>
                                </div>
                            </div>
                    </div>',($items[$i]['icon']), ($items[$i]['title']), ($items[$i]['content']));
    }


?>                  


            <!-- <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <h1 class="display-5 fw-bold">A warm welcome!</h1>
                        <p class="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
                    </div>
                </div>
            </div>




                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
                                <h2 class="fs-4 fw-bold">Free to download</h2>
                                <p class="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-card-heading"></i></div>
                                <h2 class="fs-4 fw-bold">Jumbotron hero header</h2>
                                <p class="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-bootstrap"></i></div>
                                <h2 class="fs-4 fw-bold">Feature boxes</h2>
                                <p class="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-code"></i></div>
                                <h2 class="fs-4 fw-bold">Simple clean code</h2>
                                <p class="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-patch-check"></i></div>
                                <h2 class="fs-4 fw-bold">A name you trust</h2>
                                <p class="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div> -->