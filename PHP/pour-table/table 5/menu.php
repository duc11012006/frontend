<?php
    $items = [
        [
            'number' => '1',  
            'name' =>'Laptop Technology AS2020',
            'price' => '$200.00',
            'quantity' => '2',
            'Total' => '$400.00',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.',
            'expanded' => true 
        ],
        [
            'number' => '2',  
            'name' =>'Laptop Technology AS2020',
            'price' => '$200.00',
            'quantity' => '2',
            'Total' => '$400.00',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.',
            'expanded' => false
        ],
        [
            'number' => '3',  
            'name' =>'Laptop Technology AS2020',
            'price' => '$200.00',
            'quantity' => '2',
            'Total' => '$400.00',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.',
            'expanded' => false
        ],
        [
            'number' => '4',  
            'name' =>'Laptop Technology AS2020',
            'price' => '$200.00',
            'quantity' => '2',
            'Total' => '$400.00',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.',
            'expanded' => false
        ],
        [
            'number' => '5',  
            'name' =>'Laptop Technology AS2020',
            'price' => '$200.00',
            'quantity' => '2',
            'Total' => '$400.00',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.',
            'expanded' => false
        ],
        [
            'number' => '6',  
            'name' =>'Laptop Technology AS2020',
            'price' => '$200.00',
            'quantity' => '2',
            'Total' => '$400.00',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.',
            'expanded' => false
        ],
    ];

    $result = '';
    
    foreach($items as $item) {
        $collapseId = 'collapse' . $item['number'];
        $expandedState = $item['expanded'] ? 'true' : 'false';
        $collapsedClass = $item['expanded'] ? '' : 'class="collapsed"';
        $showClass = $item['expanded'] ? 'show' : '';
        
        $result .= sprintf('<tr data-toggle="collapse" data-target="#%s" aria-expanded="%s" aria-controls="%s" %s>
                          <th scope="row">%s</th>
                          <td>%s</td>
                          <td>%s</td>
                          <td>%s</td>
                          <td>%s</td>
                          <td>
                            <i class="fa" aria-hidden="%s"></i>
                          </td>
                        </tr>
                        <tr>
                            <td colspan="6" id="%s" class="collapse %s acc" data-parent="#accordion">
                                <p>%s</p>
                            </td>
                        </tr>', $collapseId, $expandedState, $collapseId, $collapsedClass,$item['number'], $item['name'], $item['price'], $item['quantity'], $item['Total'], $expandedState === 'true' ? 'true' : 'false',$collapseId,$showClass,$item['content']);
    }

?>