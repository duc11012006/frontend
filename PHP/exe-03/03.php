<?php
    $content = file_get_contents('htpp://www.vietcombank.com.vn/');

    $pattern = ;
    preg_match($pattern, $subject, $matches);

    $result = '<table border = "1px">' .$matches[0] . '</table>';
    echo $result;

    foreach($matches[1] as key => $value){
        $result[$value][] = $matches[2][$key];
        $result[$value][] = $matches[3][$key];
        $result[$value][] = $matches[4][$key];
    }

?>