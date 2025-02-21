<?php
    $number = 20;
    if($number % 2 == 0){
        $result = "so chan";
    }else{
        $result = "so le";
    }

    $result = ($number % 2 == 0) ? "so chan" : "so le";
    echo $result;