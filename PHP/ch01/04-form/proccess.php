<?php
    $userName = $_POST["login"];
    $passWord = $_POST["password"];

    $result = ($userName == "admin" && $passWord == "123456") ? "Dang nhap thanh cong" : "Dang nhap that bai";

    echo $result