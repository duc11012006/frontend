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

    function recursive($source,$parents,$level){
        if(count($source) > 0){
            foreach ($source as $key => $value){
                if($value['parents'] == 0){
                    $value['level'] = $level;
                    $newArray[] = $source;
                    unset($source[$key]);
                    $newParents = $value['id'];
                    recursive($source,$newParents, $level + 1, $newArray )
                }
            }
            
        }
    }

    recursive($menu, 13, 1, $newArray)

    foreach($newArray as $key =>$value){
        if($value['level'] == 1){
            echo '<div style="border: 1px solid #ccc;">+' . $value['name'] .'</div>';
        }else{
            $padding = ($value['level'] - 1)*20;
            $padding = 'padding-left: '.$padding.'px;';
            echo '<div style="border: 1px solid #ccc;'.$padding.'">-' . $value['name'] .'</div>';
        }
    }

?>