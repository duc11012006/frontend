<?php
require_once 'define.php';
require_once 'functions.php';
require_once 'content.php';

$inputName = createText('Username', 'username');
$inputpass = createText('Password', 'password');

session_start();


if (isset($_SESSION['userLogin'])) {
	$userInfo = $_SESSION['userLogin'];
	if ($userInfo['user_info']['role'] == 'admin') {
		header('Location: admin.php');
		exit();
	} else if ($userInfo['user_info']['role'] == 'member') {
		header('Location: member.php');
		exit();
	}
}

?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng Nhập</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 30px;
            width: 100%;
            max-width: 400px;
        }
        .login-title {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
        }
        .login-form {
            display: flex;
            flex-direction: column;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #666;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }
        .submit-btn {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .submit-btn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-title">ĐĂNG NHẬP</div>
        <form action="process.php" method="post" class="login-form" name="add-form">
            <div class="form-group">
                <label for="username">Tên đăng nhập</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Mật khẩu</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <input type="submit" value="Đăng nhập" name="submit" class="submit-btn">
            </div>
        </form>
    </div>
</body>
</html>
