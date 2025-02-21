<?php
    $start = 1;
    $end   = 30;
    $result = "";

    $startNew = 13 - ($start % 13) + $start;

    for($i = $startNew; $i < $end; $i++){
        $result .= $i . "";
    }

    if($result == "")  $result = "";
    else{
        $result = $result.slice(0,-1); 
    }

    echo $result;

?>


<?php
    $start = 1;
    $end   = 30;
    $result = "";

    $startNew = 13 - ($start%13) + $start;

    for($i = $startNew; $i < $end; $i++){
        $result .= $i. "";
    }

    if($result == "") $result = "";
    else{
        $result = $result.slice(0,-1);
    }

    echo $result
?>