<?php
    $items = [
        [
            'image' => 'images/product-1.png',
            'name' => 'Sneakers Shoes 2020 For Men',
            'description' => 'Fugiat voluptates quasi nemo, ipsa perferendis',
            'price' => '$44.99',
            'quantity' => '2',
            'total' => '$89.98',
        ],
        [
            'image' => 'images/product-2.png',
            'name' => 'Sneakers Shoes 2020 For Men',
            'description' => 'Fugiat voluptates quasi nemo, ipsa perferendis',
            'price' => '$30.99',
            'quantity' => '1',
            'total' => '$30.99',
        ],
        [
            'image' => 'images/product-3.png',
            'name' => 'Sneakers Shoes 2020 For Men',
            'description' => 'Fugiat voluptates quasi nemo, ipsa perferendis',
            'price' => '$35.50',
            'quantity' => '1',
            'total' => '$35.50',
        ],
        [
            'image' => 'images/product-4.png',
            'name' => 'Sneakers Shoes 2020 For Men',
            'description' => 'Fugiat voluptates quasi nemo, ipsa perferendis',
            'price' => '$76.99',
            'quantity' => '1',
            'total' => '$76.99',
        ],
        [
            'image' => 'images/product-1.png',
            'name' => 'Sneakers Shoes 2020 For Men',
            'description' => 'Fugiat voluptates quasi nemo, ipsa perferendis',
            'price' => '$40.00',
            'quantity' => '1',
            'total' => '$40.00',
            'last_row' => true,
        ],
        [
            'image' => 'images/product-1.png',
            'name' => 'Sneakers Shoes 2020 For Men',
            'description' => 'Fugiat voluptates quasi nemo, ipsa perferendis',
            'price' => '$40.00',
            'quantity' => '1',
            'total' => '$40.00',
            'last_row' => true,
        ],
        [
            'image' => 'images/product-1.png',
            'name' => 'Sneakers Shoes 2020 For Men',
            'description' => 'Fugiat voluptates quasi nemo, ipsa perferendis',
            'price' => '$40.00',
            'quantity' => '1',
            'total' => '$40.00',
            'last_row' => true,
        ],
    ];
    
    $result = '';
    
    foreach($items as $index => $item) {

        $borderClass = isset($item['last_row']) ? 'class="border-bottom-0"' : '';
        
        $result .= '<tr class="alert" role="alert">
            <td ' . $borderClass . '>
                <label class="checkbox-wrap checkbox-primary">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </td>
            <td ' . $borderClass . '>
                <div class="img" style="background-image: url(' . $item['image'] . ');"></div>
            </td>
            <td ' . $borderClass . '>
                <div class="email">
                    <span>' . $item['name'] . '</span>
                    <span>' . $item['description'] . '</span>
                </div>
            </td>
            <td ' . $borderClass . '>' . $item['price'] . '</td>
            <td class="quantity ' . (isset($item['last_row']) ? 'border-bottom-0' : '') . '">
                <div class="input-group">
                    <input type="text" name="quantity" class="quantity form-control input-number" value="' . $item['quantity'] . '" min="1" max="100">
                </div>
            </td>
            <td ' . $borderClass . '>' . $item['total'] . '</td>
            <td ' . $borderClass . '>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"><i class="fa fa-close"></i></span>
                </button>
            </td>
        </tr>';
    }
?>