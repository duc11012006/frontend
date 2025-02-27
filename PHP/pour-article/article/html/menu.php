<?php
include_once "data.php";
$result = '';

foreach($items as $item) {
    $result .= sprintf('
               <div class="col-12 article-item">
                <img src="%s" alt="Article Image">
                <div>
                    <h4>%s</h4>
                    <p>%s</p>
                    <div class="article-footer">
                        <p><i class="fa fa-user" aria-hidden="true"></i>%s</p>
                        <p><i class="fa fa-clock-o" aria-hidden="true"></i>%s</p>
                    </div>    
                </div>
            </div>', $item['image'], $item['title'], $item['content'], $item['auher'],$item['date']);
}

    echo $result;
?>
