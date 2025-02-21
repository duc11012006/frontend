<?php
    if(isset($_POST['title']) && isset($_POST['description'])){
        echo $title = $_POST['title'];   
        echo $description = $_POST['description'];
    }
?>