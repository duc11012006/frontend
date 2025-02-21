<?php
    $n = 0;
    for($i = 0; $i <= 100; $i += 8){
        if($i < 3){
            if($i % 8 == 0 && $i > 0){
                echo $i . "<br/>";
                $i++;
            }
        }else{
            break;
        }
    }
?>