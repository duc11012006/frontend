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
                $xhtmlChild .= sprintf(' <li class="divider"></li>
                                        <li><a href="%s">%s</a></li>
                                    ', $menuLevelTwo['link'], $menuLevelTwo['name']);
        }

        $result .= sprintf('
        <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="%s" class="dropdown-toggle" data-toggle="dropdown">%s <span class="caret"></span><span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a>
          <ul class="dropdown-menu forAnimate" role="menu">
                %s
          </ul>
        </li> 
        ', $menuLevelOne['link'], $menuLevelOne['name'], $xhtmlChild);      
            

    }else{
        $result .=sprintf('<li class=""><a href="%s">%s</a></li>', $menuLevelOne['link'], $menuLevelOne['name']);
    }
}

echo $result;
?>





