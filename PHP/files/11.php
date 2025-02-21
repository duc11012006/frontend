<?php
    $data = scandir('.');

    $result = array();
    foreach ($data as $key => $value){
        if(is_dir($value)) {
            if(preg_match('#es$#imsU', $value)) {
                $result [] = $value;
            }
        }
    }
?>