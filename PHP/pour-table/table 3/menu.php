<?php
    $items = [
        [
            'domain' => '.com',  
            'time' =>'1 Year',
            'registration' => '$70.00',
            'renewal' => '$5.00',
            'transfer' => '$5.00',
            'link' => 'com.php',
            'register' => 'Sign Up',
        ],
        [
            'domain' => '.net',  
            'time' =>'1 Year',
            'registration' => '$75.00',
            'renewal' => '$5.00',
            'transfer' => '$5.00',
            'link' => 'net.php',
            'register' => 'Sign Up',
        ],
        [
            'domain' => '.org',  
            'time' =>'1 Year',
            'registration' => '$65.00',
            'renewal' => '$5.00',
            'transfer' => '$5.00',
            'link' => 'org.php',
            'register' => 'Sign Up',
        ],
        [
            'domain' => '.biz',  
            'time' =>'1 Year',
            'registration' => '$60.00',
            'renewal' => '$5.00',
            'transfer' => '$5.00',
            'link' => 'biz.php',
            'register' => 'Sign Up',
        ],
        [
            'domain' => '.info',  
            'time' =>'1 Year',
            'registration' => '$50.00',
            'renewal' => '$5.00',
            'transfer' => '$5.00',
            'link' => 'info.php',
            'register' => 'Sign Up',
        ],
        [
            'domain' => '.me',  
            'time' =>'1 Year',
            'registration' => '$45.00',
            'renewal' => '$5.00',
            'transfer' => '$5.00',
            'link' => 'me.php',
            'register' => 'Sign Up',
        ],
    ];
    
    $result = '';
    
    foreach($items as $item) {
        $result .= sprintf('<tr>
                    <th scope="row" class="scope">%s</th>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                    <td><a href="%s" class="btn btn-primary">%s</a></td>
                </tr>', $item['domain'], $item['time'], $item['registration'], $item['renewal'], $item['transfer'], $item['link'], $item['register']);
    }
?>