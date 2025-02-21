<?php
    $fileName = 'files/abc.txt';

    $record  = file($fileName);
    
    $data  = file_get_contents($fileName);

    $space  = substr_count($data, '');

    preg_match_all('#\S#imsU', $data, $matches);
    preg_match_all('#\S\s\S#imsU', $data, $spaces);

    $chaNoSpace  = count($matches[0]);
    

    echo '<ul>';
    echo '<li> Tong so dong  <b>' . count($record) . '</b></li>';
    echo '<li> Tong so tu  <b>' . str_word_count($data) . '</b></li>';
    echo '<li> Tong so khoang trang  <b>' . count($spaces[0]) . '</b></li>';
    echo '<li> Tong so ky tu (no space)  <b>' . $chaNoSpace . '</b></li>';

echo '</ul>';
?>