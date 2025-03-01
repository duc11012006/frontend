<?php
    $items = [
        [
            'number' => '1',
            'Surname' =>'Mark',
            'name' => 'Otto',
            'email' => 'markotto@email.com',
        ],
        [
            'number' => '2',
            'Surname' =>'Jacob',
            'name' => 'Thornton',
            'email' => 'jacobthornton@email.com',
        ],
        [
            'number' => '3',
            'Surname' =>'Larry',
            'name' => 'the Bird',
            'email' => 'larrybird@email.com',
        ],
        [
            'number' => '4',
            'Surname' =>'John',
            'name' => 'Doe',
            'email' => 'johndoe@email.com',
        ],
        [
            'number' => '5',
            'Surname' =>'Gary',
            'name' => 'Bird',
            'email' => 'garybird@email.com',
        ],
    ];

    
    $result = '';
    
    foreach($items as $item) {
        $result .= sprintf('<tr>
                        <th scope="row">%s</th>
                        <td>%s</td>
                        <td>%s</td>
                        <td>%s</td>
                      </tr>', $item['number'], $item['Surname'], $item['name'], $item['email']);
    }
    echo $result;
?>