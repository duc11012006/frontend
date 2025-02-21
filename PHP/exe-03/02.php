<?php
    $content = file('scrip.txt') or die('Cannot read file');
    $content = implode('',$content);
    
    $pattern = array('#<scrip([^>]*)#i','#</scrip([^>]*)#i');
    $replacement = array('<pre>$lt;script');

    $result = preg_replace($pattern, $replacement, $content);
    echo $result
?>