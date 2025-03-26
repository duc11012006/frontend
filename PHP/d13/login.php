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

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Login</title>
</head>

<body>
	<div id="wrapper">
		<div class="title">LOGIN</div>
		<div id="form">
			<form action="process.php" method="post" name="add-form">
				<?php echo $inputName . $inputpass ?>
				<div class="row">
					<input type="submit" value="Đăng nhập" name="submit">
				</div>
			</form>
		</div>

	</div>
</body>

</html>