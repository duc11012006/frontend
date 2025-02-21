<?php
    $path = '/files/abc.txt';
   
   // hien thi ten tap tin (co luon phan m rong)
    echo basename($path) . '<br/>';

    // hien thi ten tap tin (khong co phan mo rong)
    echo basename($path, '.txt.') . '<br/>';
?>