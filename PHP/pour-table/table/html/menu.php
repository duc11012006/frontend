<?php
    include_once "data.php";
$result = "";
foreach($courseData as $key => $item){

    if(count($item['classes']) > 0 ) {
        $result .= sprintf('<tr>
                    <td rowspan="%s"><a href="#">%s</a></td>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                </tr>', count($item['classes'] ), $item['name'], ($item['classes'][0]['type']), ($item['classes'][0]['schedule']), ($item['classes'][0]['date_start']));
    
        for($i= 1; $i < count($item['classes']); $i++){
                $result .= sprintf('<tr>
                    <td>%s</td>
                    <td>%s</td>
                    <td>%s</td>
                </tr>', ($item['classes'][$i]['type']), ($item['classes'][$i]['schedule']), ($item['classes'][$i]['date_start']));
        }


    }else{
        $result .=sprintf('<tr>
                    <td class=""><a href="#">%s</a></td>
                    <td class="center-align align-middle" colspan="3">Hết chỗ</td>
                </tr>', $item['name']);
    }
}

echo $result;

?>




<!-- 

                
                <tr>
                    <td>1 kèm 1 - Học trực tiếp cùng giảng viên</td>
                    <td>Học trong 6 buổi, tuần học 2 buổi, mỗi buổi 120 phút - Group hỗ trợ online riêng cùng 2 giảng viên</td>
                    <td>08-06-2024</td>
                </tr>
                <tr>
                    <td class=""><a href="#">Lập trình di động với Flutter</a></td>
                    <td>Học trong 12 buổi, tuần học 2 buổi, mỗi buổi 120 phút - Group hỗ trợ online riêng cùng 2 giảng viên</td>
                    <td>Thứ Ba, Thứ Năm</td>
                    <td>08-06-2024</td>
                </tr>
                <tr>
                    <td class=""><a href="#">Lập trình web Python với Django Framework</a></td>
                    <td>1 kèm 1 - Học trực tiếp cùng giảng viên</td>
                    <td>Học trong 10 buổi, tuần học 2 buổi, mỗi buổi 120 phút - Group hỗ trợ online riêng cùng 2 giảng viên</td>
                    <td>01-06-2024</td>
                </tr>
                <tr>
                    <td class=""><a href="#">Lập trình web Python với Django Framework</a></td>
                    <td class="center-align align-middle" colspan="3">Hết chỗ</td>
                </tr> -->
