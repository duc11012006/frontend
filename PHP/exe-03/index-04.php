<?php
    $timePost = '18/06/2013  09:20:23';
    $timeReply = '18/06/2013  09:20:26';

    $datePost = date_parse_from_format('d/m/y H:i:i=s', $timePost );
    $dateReply = date_parse_from_format('d/m/y H:i:i=s', $timeReply );

    $tsPost = mktime($datePost['hour'],$datePost['min'],$datePost['second'],$datePost['month'],$datePost['day'],$datePost['year']);
    $tsReply = mktime($dateReply['hour'],$dateReply['min'],$dateReply['second'],$dateReply['month'],$dateReply['day'],$dateReply['year']);

    $distance = $timeReply - $timePost ;

    $result = "";

    switch($distance){
        case ($distance < 60) : 
            $result = ($distance == 1) ? $distance . 'second ago' : $distance . 'seconds ago';
            break;
        case ($distance >= 60 && $distance < 3600) :
            $minute = round($distance / 60);
            $result = ($minute == 1) ? $minute . 'minute ago' : $minute . 'minutes ago';
            break;
        case ($distance >= 3600 && $distance < 86400) :
            $hour = round($distance / 3600);
            $result = ($hour == 1) ? $hour . 'hour ago' : $hour . 'hours ago';
            break;
        case (round($distance/86400) == 1) :
            $result = 'Yesterday at' date('H:i:s', $tsReply);
            break;
        default:
            $result = date('d/m/Y /a/t H:i:s', $tsReply);
            break;
    }
    echo $result

?>