<?php 
	require_once 'functions.php';
	
$errorName = '';
$errorPhone = '';
$errorEmail = '';
$errorImage = '';
$errorContent = '';

$name = "";
$phone = "";
$email = "";
$content = "";
$flag = false;

if(isset($_POST["btn-submit"])){
	$name = $_POST['name'] ?? '';
	$phone = $_POST['phone'] ?? '';
	$email = $_POST['email'] ?? '';
	$image = $_FILES['file-upload'] ?? null;
	$content = $_POST['content'] ?? '';
	
	if(checkEmpty($name)) {
		$errorName = '<p class="error">Dữ liệu không được rỗng</p>';
	} elseif(checkLength($name, 5, 100)) {
		$errorName .= '<p class="error">Tiêu đề dài từ 5 đến 100 ký tự</p>';
	}

	if(checkEmpty($email)) {
		$errorEmail = '<p class="error">Dữ liệu không được rỗng</p>';
	} elseif(checkLength($email, 5, 50)) {
		$errorEmail .= '<p class="error">Nhập đúng tên Email</p>';
	}

	if(checkEmpty($content)) {
		$errorContent = '<p class="error">Dữ liệu không được rỗng</p>';
	} elseif(checkLength($content, 10, 5000)) {
		$errorContent .= '<p class="error">Nội dung dài từ 10 đến 5000 ký tự</p>';
	}

	if(empty($image) || $image['name'] == null){
		$errorImage = '<p class="error">Vui lòng chọn tập tin</p>';
	}
	
	if(empty($errorName) && empty($errorPhone) && empty($errorEmail) && empty($errorImage) && empty($errorContent)){
		$uniqueID = randomString(6);
		$filename = $uniqueID . '.' . pathinfo($image['name'], PATHINFO_EXTENSION);
		move_uploaded_file($image['tmp_name'], './files/' . $filename);

		$filePath = './files/' . $uniqueID . '.txt';
		$data = $name . '||' . $phone . '||' . $email . '||' . $filename . '||' . $content;
		
		if(file_put_contents($filePath, $data)){
			$name = '';
			$phone = '';
			$email = '';
			$content = '';
			$flag = true;
		}
	}
} 

$inputName = createInput('Họ & Tên', 'name', $errorName);
$inputPhone = createInput('Số Điện Thoại', 'phone', $errorPhone);
$inputEmail = createInput('Email', 'email', $errorEmail);
$inputContent = createText('Content', 'content', $errorContent);
$inputImage = createFile('Image', $errorImage);
?>
<div id="addEmployeeModal" class="modal fade in" >
	<div class="modal-dialog">
		<div class="modal-content">
			<form action="#" method="post" name="add-form" enctype="multipart/form-data">
				<div class="modal-header">								
					<h4 class="modal-title">Add Employee</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<?php echo $inputName . $inputPhone . $inputEmail . $inputContent . $inputImage; ?>			
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
					<input type="submit" name="btn-submit" class="btn btn-info" value="Save">
				</div>

				<?php
				if($flag) echo '<div class="row"><p>Dữ liệu đã được ghi thành công!</p></div>'; 
				?>
			</form>
		</div>
	</div>
</div>
