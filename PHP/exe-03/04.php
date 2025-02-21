<?php
    $content = file_get_contents('http://vnexpress.net/tin-tuc/xa-hoi');

    $pattern = '#<div class = "folder-news">(.*)</div>\s*</div>#imsU';
    preg_match_all($pattern, $subject, $matches);

    foreach($matches [0] as $key => $value){
        $pattern = '##imsU';
        preg_
    }
?>