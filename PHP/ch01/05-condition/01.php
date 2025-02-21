<?php
    $number = 20;
    if($number % 2 == 0){
        $result = "so chan";
    }

    $result = ($number % 2 == 0) ? "so chan" : "";
    echo $result;