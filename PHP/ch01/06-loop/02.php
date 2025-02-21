<?php
    $result ="";
    if(isset($_GET["type"])){
        $type = $_GET["type"];
        switch ($type) {
            case 1:
                $i = 1;
                $n = 6;
                while($i <= $n){
                    $result .= str_repeat("*",$i)."<br />";
                    $i++
                }
                break;
            
            case 2:
                $i = 6;
                $n = 6;
                while($i >= 1){
                    $result .= str_repeat("*",$i). "<br />";
                }
                break;

            case 3:
                $i = 1;
                $n = 6;
                while($i <= n){
                    $space = str_repeat(" ",$n - $i) ;
                    $character = str_repeat("&nbsp;&nbsp",2*$i -1) ;
                    $result .= $space . $character . "<br />"
                    $i++;
                }
                break;
        }
    }
?>