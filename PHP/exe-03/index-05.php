<?php
    function checkEmal($value){
        $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#' ;
    
        $flag = false;
        if (preg_match($pattern,$value) == true){
            $flag = "hop le";
        }
        return $flag;
   }

   function checkUsername($value){
    $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#' ;

    $flag = false;
    if (preg_match($pattern,$value) == true){
        $flag = "hop le";
    }
    return $flag;
}

function checkPassword($value){
    $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#' ;

    $flag = false;
    if (preg_match($pattern,$value) == true){
        $flag = "hop le";
    }
    return $flag;
}

function checkWebsite($value){
    $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#' ;

    $flag = false;
    if (preg_match($pattern,$value) == true){
        $flag = "hop le";
    }
    return $flag;
}

function checkInput($value,$type = 'email'){
    switch ($type){
        case 'email' :
            $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#';
            break;
        case 'username' :
            $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#';
            break;
        case 'password' :
            $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#';
            break;
        case 'website' :
            $pattern = '#^[a-z][a-z0-9_]{4,31}@[a-z0-9]{2,}#';
            break;
    }
}

   $result = checkInput('voquangduc2006@gmail.com');
   echo $result;

   function createInput($class = 'input', $name = 'Username', $input, $error){
    $xhtml = '';
    $xhtml = '<div class = "'.$class.'">
                <div class = "inputtext">'.$name.'</div>
                <div class = "inputcontent">
                    '.$input.$error.'
                </div>
              </div>'
        return $xhtml;
   }

?>