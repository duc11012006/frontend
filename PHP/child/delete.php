<?php
    $id = $_GET['id'];
    $content = file_get_contents("./files/$id.txt");
    $content = explode('||', $content);
    $title   = $content[0];
    $description = $content[1];

    if(isset($_POST['id'])){
        $id = $_POST['id'];
        @unlink("./files/$id.txt");
    }

    $checkbox = $_POST['checkbox'];
    if(!empty($checkbox)){
        foreach($checkbox as $key => $value){
            @unlink("./files/$value.txt");
        }
    }
?>