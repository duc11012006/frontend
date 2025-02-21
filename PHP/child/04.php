<?php
    function factorial($number){
        $result = 1;
        if($number > 1){
            $result = $number * factorial($number - 1);
        }   
        return $result;
    }
?>