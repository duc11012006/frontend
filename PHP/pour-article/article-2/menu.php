<?php
    $items = [
        [
            'img' => 'https://dummyimage.com/900x400/dee2e6/6c757d.jpg',
            'title' => 'Business Name or Tagline',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
            'link' => 'cardone.php'
        ],
        [
            'title' => 'Card One',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
            'link' => 'cardone.php'
        ],
        [
            'title' => 'Card Two',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
            'link' => 'cardone.php'
        ],
        [
            'title' => 'Card Three',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam,  ea minima accusamus.',
            'link' => 'cardone.php'
        ],
        [
            'title' => 'Card Four',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, .',
            'link' => 'cardone.php'
        ],
        
    ];

    $topArtice = sprintf('<div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="%s" alt="..." /></div>
            <div class="col-lg-5">
                <h1 class="font-weight-light">%s</h1>
                <p>%s</p>
                <a class="btn btn-primary" href="%s">Call to Action!</a>
            </div>
        </div>',($items[0]['img']), ($items[0]['title']), ($items[0]['content']), ($items[0]['link']));

     $listArticles = '';
            for($i= 1; $i < count($items); $i++){
                    $listArticles .= sprintf('<div class="col-md-4 mb-5">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">%s</h2>
                            <p class="card-text">%s</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="%s">More Info</a></div>
                    </div>
                </div>', ($items[$i]['title']), ($items[$i]['content']), ($items[$i]['link']));
            }

?>





