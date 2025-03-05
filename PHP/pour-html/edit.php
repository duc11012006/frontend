<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="css/style.css">
<title>PHP FILE - EDIT</title>
<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#cancel-button').click(function(){
			window.location = 'index.php';
		});
	});
</script>
</head>
<body>
<?php
	require_once 'functions.php';
	
	$id = $_GET['id'];
	$filename = "./files/$id.txt";
	if (file_exists($filename)) {
		$content = file_get_contents($filename);
		$content = explode('||', $content);
		$title = $content[0];
		$author = $content[1];
		$description = $content[2];
		$image = isset($content[3]) ? $content[3] : '';
	} else {
		echo "<p class='error'>File không tồn tại!</p>";
		exit;
	}

	$errorTitle = '';
	$errorAuthor = '';
	$errorDescription = '';
	$errorImage = '';
	$flag = false;

	if(isset($_POST['title']) && isset($_POST['author']) && isset($_POST['description']) && isset($_FILES['file-upload'])){
		$title = $_POST['title'];
		$author = $_POST['author'];
		$description = $_POST['description'];
		$imageFile = $_FILES['file-upload'];
		
		if(checkEmpty($title)) $errorTitle = '<p class="error">Dữ liệu không được rỗng</p>';
		if(checkLength($title, 5, 100)) $errorTitle .= '<p class="error">Tiêu đề dài từ 5 đến 100 ký tự</p>';
		
		if(checkEmpty($author)) $errorAuthor = '<p class="error">Dữ liệu không được rỗng</p>';
		if(checkLength($author, 5, 50)) $errorAuthor .= '<p class="error">Tên tác giả dài từ 5 đến 50 ký tự</p>';
		
		if(checkEmpty($description)) $errorDescription = '<p class="error">Dữ liệu không được rỗng</p>';
		if(checkLength($description, 10, 5000)) $errorDescription .= '<p class="error">Nội dung dài từ 10 đến 5000 ký tự</p>';
		
		if($imageFile['name'] != null){
			// Xóa hình ảnh cũ nếu tồn tại
			if (!empty($image) && file_exists("./files/$image")) {
				unlink("./files/$image");
			}
			
			// Lưu hình ảnh mới
			$filename = randomString(6) . '.' . pathinfo($imageFile['name'], PATHINFO_EXTENSION);
			move_uploaded_file($imageFile['tmp_name'], './files/' . $filename);
			$image = $filename;
		}
		
		if($errorTitle == '' && $errorAuthor == '' && $errorDescription == ''){
			$data = $title . '||' . $author . '||' . $description . '||' . $image;
			file_put_contents("./files/$id.txt", $data);
			$flag = true;
		}
	}

	$inputTitle = createInput('Title', 'title', $title, $errorTitle);
	$inputAuthor = createInput('Author', 'author', $author, $errorAuthor);
	$inputDescription = createText('Description','description', $errorDescription, $description);
	$inputImage = createFile('Image', $errorImage);
?>
	<div id="wrapper">
    	<div class="title">PHP FILE - EDIT</div>
        <div id="form">   
			<form action="#" method="post" name="edit-form" enctype="multipart/form-data">
				<?php echo $inputTitle ?>
				<?php echo $inputAuthor ?>
				<?php echo $inputDescription ?>
				<?php echo $inputImage ?>
				
				<?php if (!empty($image)) echo "<div class='row'><img src='./files/$image' width='150'></div>"; ?>
				
				<div class="row">
					<input type="submit" value="Save" name="submit">
					<input type="button" value="Cancel" name="cancel" id="cancel-button">
				</div>
				
				<?php
					if($flag==true) echo '<div class="row"><p>Dữ liệu đã được ghi thành công!</p></div>'; 
				?>
			</form>    
        </div>
    </div>
</body>
</html>
