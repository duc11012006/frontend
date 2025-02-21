<?php
    $x = 3;
    $y = 4;
    $z = 5;
    $result = "";

    if($x == $y && $x == $z && $y == $x && $y == $z && $z == $x && $z == $y){
        $result = "Tam giác đều";
    }else if($x == $y|| $x == $z){
        $result = "Tam giác cân";
    }else if($x*$x + $y*$y == $z*$z || $y*$y + $x*$x == $z*$z  || $z*$z + $y*$y == $x*$x){
        $result = "Tam giác vuông";
    }else{
        $result = "Tam giác thường";
    }

    echo $result
?>


<?php
    $x = 3;
    $y = 4;
    $z = 5;

    if($x == $y && $x == $z && $y == $x && $y == $z && $z == $x && $z == $y){
        $result = "Tam giác đều";
    }else if($x == $y || $x == $z){
        $result = "Tam giác cân";
    }else if($x*$x + $y*$y == $z*$z || $y*$y + $x*$x == $z*$z || $z*$z + $y*$y == $x*$X){
        $result= "Tam giác vuông";
    }else{
        $result = "Tam giác thường";
    }
?>