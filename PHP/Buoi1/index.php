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
        $result = date('h:i A D, /n/g/à/y  d/m/y', time());
        $arrEn = array('Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun');
        $arrVi = array('Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật');

        $result = str_replace($arrEn,$arrVi,$result);
        // $result = str_replace(',',',','ngày',$result);


        echo $result

        ?>