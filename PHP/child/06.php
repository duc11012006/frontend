<?php
    $menu[] = array();
    $menu[] = array('id' => 1, 'name' =>'Home', 'parents' => 0);
    $menu[] = array('id' => 2, 'name' =>'About', 'parents' => 0);
    $menu[] = array('id' => 3, 'name' =>'News', 'parents' => 0);
    $menu[] = array('id' => 4, 'name' =>'Products', 'parents' => 0);
    $menu[] = array('id' => 5, 'name' =>'Contact', 'parents' => 0);
    $menu[] = array('id' => 6, 'name' =>'Tin trong nuoc', 'parents' => 3);
    $menu[] = array('id' => 7, 'name' =>'Tin nuoc ngoai', 'parents' => 3);
    $menu[] = array('id' => 8, 'name' =>'Cong nghe thong tin', 'parents' => 6);
    $menu[] = array('id' => 9, 'name' =>'Lap trinh', 'parents' => 6);
    $menu[] = array('id' => 10, 'name' =>'IT', 'parents' => 7);
    $menu[] = array('id' => 11, 'name' =>'Programming', 'parents' => 7);
    $menu[] = array('id' => 12, 'name' =>'Software', 'parents' => 4);
    $menu[] = array('id' => 13, 'name' =>'Mobile', 'parents' => 4);
    $menu[] = array('id' => 14, 'name' =>'Anti Virus', 'parents' => 12);
    $menu[] = array('id' => 15, 'name' =>'Mokia', 'parents' => 13);
    $menu[] = array('id' => 16, 'name' =>'Sam Sung', 'parents' => 13);
    $menu[] = array('id' => 17, 'name' =>'S1', 'parents' => 16);
    $menu[] = array('id' => 18, 'name' =>'S1.1', 'parents' => 17);


    $menu1[] = array('id' => 1, 'name' =>'Home', 'parents' => 0, 'level' => 1);
    $menu1[] = array('id' => 2, 'name' =>'About', 'parents' => 0, 'level' => 1);
    $menu1[] = array('id' => 3, 'name' =>'News', 'parents' => 0, 'level' => 1);
    $menu1[] = array('id' => 6, 'name' =>'Tin trong nuoc', 'parents' => 3, 'level' => 2);
    $menu1[] = array('id' => 8, 'name' =>'Cong nghe thong tin', 'parents' => 6, 'level' => 3);
    $menu1[] = array('id' => 9, 'name' =>'Lap trinh', 'parents' => 6, 'level' => 3);
    $menu1[] = array('id' => 7, 'name' =>'Tin nuoc ngoai', 'parents' => 3, 'level' => 2);
    $menu1[] = array('id' => 10, 'name' =>'IT', 'parents' => 7, 'level' => 3);
    $menu1[] = array('id' => 11, 'name' =>'Programming', 'parents' => 7, 'level' => 3);
    $menu1[] = array('id' => 4, 'name' =>'Products', 'parents' => 0, 'level' => 1);
    $menu1[] = array('id' => 12, 'name' =>'Software', 'parents' => 4, 'level' => 2);
    $menu1[] = array('id' => 14, 'name' =>'Anti Virus', 'parents' => 12, 'level' => 3);
    $menu1[] = array('id' => 13, 'name' =>'Mobile', 'parents' => 4, 'level' => 2);
    $menu1[] = array('id' => 15, 'name' =>'Mokia', 'parents' => 13,'level' => 3);
    $menu1[] = array('id' => 16, 'name' =>'Sam Sung', 'parents' => 13, 'level' => 3);
    $menu1[] = array('id' => 17, 'name' =>'S1', 'parents' => 16, 'level' => 4);
    $menu1[] = array('id' => 18, 'name' =>'S1.1', 'parents' => 17, 'level' => 5);
    $menu1[] = array('id' => 5, 'name' =>'Contact', 'parents' => 0, 'level' => 1) ;


    foreach ($menu as $key => $value) {
        if($value['parents'] == 0){
            $value['level'] = 1;
            $newArray[] = $value;

            $parents = $value['id'];
            foreach($menu as $key_1 => $value_1){
                if($value_1['parents'] == $parents){
                    $value_1['level'] = $value['level'] + 1;
                    $newArray[] = $value_1
                }
            }
        }
    }

    echo '<pre>';
    print_r($newArray);
    echo '</pre>';

    foreach($newArray as $key =>$value){
        if($value['level'] == 1){
            echo '<div style="border: 1px solid #ccc;">+' . $value['name'] .'</div>';
        }else{
            $padding = 'padding-left: 20px;';
            echo '<div style="border: 1px solid #ccc;'.$padding.'">-' . $value['name'] .'</div>';
        }
    }

?>

Home
About
News
    Tin trong nuoc
        Cong nghe thong tin
        Lap trinh
    Tin ngoai nuoc
        IT
        Programming
Products
    Software
        Anti Virus
    Mobile
        Sam Sung
            S1
                S1.1
        Nokia
Contact