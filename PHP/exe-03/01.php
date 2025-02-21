<style type="text/css">
    *{
        margin: 0px;
        padding: 0px;
    }

    a {
        font-weight:bold;
        color: red;
    }

<?php
    $content = file('khoa-hoc.txt') or die('Cannot read file');
    $content = implode('',$content);
    echo $content;

    $pattern = '#Zend Framework#i';
    $replacement = '<a href="http://www.Zend.vn">Zend Framework</a>';

    $result = preg_replace($pattern, $replacement, $content);
    echo $result