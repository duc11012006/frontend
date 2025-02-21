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
            $month = 2;
            $year  = 2012;

            $timeStame = mktime(0,0,0, $month, 1, $year);
            echo $totalDays = date('t', $timeStame)
        ?>