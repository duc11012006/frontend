<?php
    $products = [
        [
            'name' => 'Fancy Product',
            'price' => '$40.00 - $80.00',
            'original_price' => '',
            'has_sale' => false,
            'rating' => false,
            'action' => 'View options'
        ],
        [
            'name' => 'Special Item',
            'price' => '$18.00',
            'original_price' => '$20.00',
            'has_sale' => true,
            'rating' => true,
            'action' => 'Add to cart'
        ],
        [
            'name' => 'Sale Item',
            'price' => '$25.00',
            'original_price' => '$50.00',
            'has_sale' => true,
            'rating' => false,
            'action' => 'Add to cart'
        ],
        [
            'name' => 'Popular Item',
            'price' => '$40.00',
            'original_price' => '',
            'has_sale' => false,
            'rating' => true,
            'action' => 'Add to cart'
        ],
        [
            'name' => 'Sale Item',
            'price' => '$25.00',
            'original_price' => '$50.00',
            'has_sale' => true,
            'rating' => false,
            'action' => 'Add to cart'
        ],
        [
            'name' => 'Fancy Product',
            'price' => '$120.00 - $280.00',
            'original_price' => '',
            'has_sale' => false,
            'rating' => false,
            'action' => 'View options'
        ],
        [
            'name' => 'Special Item',
            'price' => '$18.00',
            'original_price' => '$20.00',
            'has_sale' => true,
            'rating' => true,
            'action' => 'Add to cart'
        ],
        [
            'name' => 'Popular Item',
            'price' => '$40.00',
            'original_price' => '',
            'has_sale' => false,
            'rating' => true,
            'action' => 'Add to cart'
        ],
        [
            'name' => 'Special Item',
            'price' => '$18.00',
            'original_price' => '$20.00',
            'has_sale' => true,
            'rating' => true,
            'action' => 'Add to cart'
        ],
        [
            'name' => 'Special Item',
            'price' => '$18.00',
            'original_price' => '$20.00',
            'has_sale' => true,
            'rating' => true,
            'action' => 'Add to cart'
        ],
    ];

    $productGrid = '';
    foreach($products as $product) {
        $saleTag = $product['has_sale'] ? '<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>' : '';
        $originalPrice = $product['original_price'] ? '<span class="text-muted text-decoration-line-through">'.$product['original_price'].'</span> ' : '';
        $stars = '';
        if($product['rating']) {
            $stars = '<div class="d-flex justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                    </div>';
        }
        
        $actionButton = ($product['action'] == 'View options') ? 
            '<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>' : 
            '<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>';
        
        $productGrid .= sprintf('
            <div class="col mb-5">
                <div class="card h-100">
                    <!-- Sale badge-->
                    %s
                    <!-- Product image-->
                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">%s</h5>
                            <!-- Product reviews-->
                            %s
                            <!-- Product price-->
                            %s%s
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        %s
                    </div>
                </div>
            </div>', 
            $saleTag, 
            $product['name'], 
            $stars, 
            $originalPrice, 
            $product['price'], 
            $actionButton
        );
    }
?>