<?php
    $day = "";
    $mon = "";

    $imgge = "";
    $name  = "";
    $time  = "";

    if(isset($_POST["day"]) && isset($_POST["month"])){
        $day = $_POST["day"];
        $mon = $_POST["month"];

        if(is_numeric($day) && is_numeric($mon)){

            switch($mon){
                case 1:
                    if($day <= 19){
                        $imgge = "capricorn";
                        $name  = "Ma ket";
                        $time  = "23/12 - 19/01";
                    }

                    if($day >= 20){
                        $imgge = "capricorn";
                        $name  = "Ma ket";
                        $time  = "23/12 - 19/01";
                    }
                break;
            }

        }
    }
?>