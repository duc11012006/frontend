<?php

$n1 ="";
$n2 ="";
$caculate = "";

    if(isset($_POST["number1"]) && isset($_POST["number2"]) && isset($_POST["caculate"]== true)){
        $n1       = $_POST["number1"];
        $n2       = $_POST["number2"];
        $caculate =  $_POST["caculate"];
        $flag     = true;


        if(is_numeric($n1) && is_numeric($n2)){
            switch ($caculate) {
                case '+':
                    $result = $n1 + $n2;
                    break;
                case '-':
                    $result = $n1 - $n2;
                    break;
                
                case '*':
                case 'x'
                    $result = $n1 * $n2;
                    break;
    
                case '/':
                case ':': 
                    $result = $n1 / $n2;
                    break;
    
                case '%':
                    $result = $n1 % $n2;
                    break;
                default:
                    $result = $n1 + $n2;
                    $caculate = "+";
                    break;
            }
        }else {
            $result = "khong thuc hien duoc";
            $flag   = false;
        }


    }
?>