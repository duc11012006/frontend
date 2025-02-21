<?php
    require_once 'functions.php';

    $data = scandir('./files');

    $i = 0;
    foreach ($data as $key => $value) {
        if($value == '.' || $value == '..' || preg_match('#txt$#imsU',$value) == false) continue;
        $class = ($i % 2 == 0) ? 'odd' : 'even';    
        $content = file_get_contents("./file/ $value" );
        $content = explode('||', $content);
        $title = $content[0];
        $description = $content[1];
        $id = substr($value,0,5);
        $size = convertSize(filesize("./file/ $value"))

        <div class="row-odd">
            <p class="no">
             <input typr>
    }
?>