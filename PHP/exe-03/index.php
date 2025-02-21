<!DocType html PUBLIC "W3C//DTD HTML 4.01 Transitional//EN" "Http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content = "text/html ; charset=uft-8">
    <title>Làm việc với thời gian</title>

</head>
<body>
    <div class="content">
        <h1>Làm việc với thời gian</h1>
        <?php
            function testLeapYear($year){
                $flag = false;
                if(($year % 400 == 0) || ($year % 400 == 0 && $year % 100 != 0) ) $flag = true;
                return $flag;
            }

            $year = 2013;
            if(testLeapYear($year)){
                echo "Năm nhuận";
            }else{
                echo "Không là năm nhuận";
            }
        ?>