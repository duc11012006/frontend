<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Process</title>
</head>

<body>
    <div id="wrapper">
        <div class="title">PROCESS</div>
        <div id="form">
            <?php
            require_once 'functions.php';
            require_once 'define.php';
            session_start();

            if (isset($_POST['username']) == false) {
                header('Location: login.php');
                exit();
            }
            
            if (checkEmpty($_POST['username']) == false && checkEmpty($_POST['password']) == false) {
                $username = $_POST['username'];
                $password = md5($_POST['password']);

                $data = file_get_contents(DIR_DATA . 'myfile.json');
                $data = json_decode($data, true);
                $userInfo = [];

                foreach ($data as $user) {
                    if ($username == $user['user_info']['username'] && $password == $user['user_info']['pass']) {
                        $userInfo = $user;
                        break;
                    }
                }

                if (empty($userInfo)) {
                    header('Location: login.php');
                    exit();
                } else {
                    // luu du lieu user vao session

                    $test = [];

                    $_SESSION['userLogin'] = $userInfo;
                    $_SESSION['timeLogin'] = time();
                    // luu timestamp vao session
                    // 27/03/2025 8:39 -> timestamp -> so nguyen
                    // 28/03/2025 8:40 -> timestamp -> so nguyen

                    // timestamp current - timestamp da luu khi dang nhap > 5 * 60
                   

                    if ($userInfo['user_info']['role'] == 'admin') {
                        header('Location: admin.php');
                        exit();
                    } else if ($userInfo['user_info']['role'] == 'member') {
                        header('Location: member.php');
                        exit();
                    }
                    echo '<pre style="color:red">';
                    print_r($_SESSION);
                    echo '</pre>';
                    // neu la admin -> admin.php
                    // neu la member -> member.php
                    // header('Location: member.php');
                    // exit();
                    // dang nhap thanh cong -> chuyen huong vao trang member.php
                    // neu dang nhap that bai -> chuyen ve lai login.php
                }
            }
            ?>


        </div>
    </div>
</body>

</html>