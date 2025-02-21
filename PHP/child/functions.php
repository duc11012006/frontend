<?php

    // kiem tra du lieu khac rong 

    function checkEmpty($value){
        $flag = false;
        if(!isset($value) || trim($value) == "") {
            $flag = true;
        }
        return $flag;
    }


    // kiem tra chieu dai du lieu

    function checkLength($value, $min, $max){
        $flag = false;
        $length = strlen($value);
        if($length < $min || $length > $max) {
            $flag = true;
        }
        return $flag;
    }

    // tao ra ten file

    function randomString ($length = 5){
        $arrCharacter = array_merge(range('A', 'Z'), range('a', 'z'));
        $arrCharacter = implode($arrCharacter, '');
        $arrCharacter = str_shuffle($arrCharacter);

    
    }
?>