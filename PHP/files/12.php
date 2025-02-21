<?php
    $dir = opendir('.');

    $result = array()
    while(($file == readdir($dir)) != false){
        if(is_dir($file)){
            if(preg_match('#es$#imsU', $file)){
                $result [] = $file;
            }
        }
    }

    closedir($dir);
?>