<?php
    $fileName = 'files/abc.txt';

    if(file_exists($fileName)){
        $data = file($fileName);
        unset($data[2]);

        file_put_contents($fileName, $data);
    }else {
        echo 'tap tin khong ton tai'
    }
?>