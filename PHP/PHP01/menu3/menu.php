<?php
$items = [
    "google" => [
        "name" => "Google",
        "link" => "https://www.google.com",
        "children" => [
            [
                "name" => "Google Maps",
                "link" => "https://maps.google.com",
            ],
            [
                "name" => "Google Drive",
                "link" => "https://drive.google.com",
            ]
            ],
        "open" => false,
    ],
    "facebook" => [
        "name" => "Facebook",
        "link" => "https://www.facebook.com",
        "children" => [],
        "open" => false,
    ],
    "twitter" => [
        "name" => "Twitter",
        "link" => "https://www.twitter.com",
        "children" => [
            [
                "name" => "Twitter Help Center",
                "link" => "https://help.twitter.com"
            ]
            ],
        "open" => true,
    ],
    "zendvn" => [
        "name" => "ZendVN",
        "link" => "https://zendvn.com",
        "children" => [],
        "open" => false,
    ]
];




$result = "";
foreach($items as $key => $menuLevelOne){
    $xhtmlChild= '';
    if(count($menuLevelOne['children']) > 0 ) {
        foreach($menuLevelOne['children'] as $menuLevelTwo){
                $xhtmlChild .= sprintf('<li>%s</li>
                                    ',$menuLevelTwo['name']);
        }

        $result .= sprintf('
                <li data-toggle="collapse" data-target="#service" class="collapsed">
                  <a href="%s"><i class="fa fa-globe fa-lg"></i> %s <span class="arrow"></span></a>
                </li>  
                <ul class="sub-menu collapse" id="service">
                  <li>%s</li>
                </ul>
        ', $menuLevelOne['link'], $menuLevelOne['name'], $xhtmlChild);      
            

    }else{
        $result .=sprintf('<li><a href="%s">%s</a></li>', $menuLevelOne['link'], $menuLevelOne['name']);
    }
}

echo $result;
?>