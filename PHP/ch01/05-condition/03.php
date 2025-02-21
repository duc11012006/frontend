<?php
    $number = 10;
    $n      = $number % 2;

    // if($number >= 0 && $n == 0) {
    //     $result = "nguyen duong"
    // }else if($number >= 0 && $n == 1){
    //     $result = "nguyen duong le"
    // }else if($number <  0 && $n == 1){
    //     $result = "nguyen am chan"
    // }else {
    //     $result = "nguyen am le"
    // }
    $resultFirst = ($n>= 0) ? "nguyen duong" : "nguyen am";
    $resultLast  = ($n == 0) ? "nguyen so chan" : "so le";
    $result = $resultFirst . " " +$resultLast;
    echo $result