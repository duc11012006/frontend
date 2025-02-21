    <?php

        $scoreOne   = 6;
        $scoreTwo   = 9;
        $scoreThree = 5;
        $max = (max($scoreOne ,$scoreTwo, $scoreThree));
        $avg = (($scoreOne + $scoreTwo + $scoreThree)/3);

        echo("Avg :" .$avg) ;
        echo("Max :" .$max);

    ?>