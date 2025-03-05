<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Table</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<form action="multy-delete.php" method="post" name="main-form" id="main-form">
<?php
	require_once 'functions.php';
	
	$data	= scandir('./files');
	
	$i = 0;
	foreach ($data as $key => $value){
		if($value == '.' || $value == '..' || preg_match('#.txt$#imsU',$value) == false) continue;
		$class		= ($i % 2 == 0) ? 'odd' : 'even';
		$content	= file_get_contents("./files/$value");
		$content	= explode('||', $content);
		$tile				= $content[0];
		$author		        = $content[1];
		$description		= $content[2];
		$image		        = $content[3];
		$id			= substr($value, 0, 5);
		$size		= convertSize(filesize("./files/$value"));
  }
?>
    <div class="table-container">
        <div class="table-header">
            <h2>User Management</h2>
            <div class="table-actions">
                <a href="add.php">Add File</a>
                <a href="delete.php">Delete File</a>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="default">
                    <td>Default</td>
                    <td>Defaultson</td>
                    <td>def@somemail.com</td>
                    <td class="actions">
                        <span class="edit-icon">✏️</span>
                        <span class="delete-icon">🗑️</span>
                    </td>
                </tr>
                <tr class="success">
                    <td>Success</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <td class="actions">
                        <span class="edit-icon">✏️</span>
                        <span class="delete-icon">🗑️</span>
                    </td>
                </tr>
                <tr class="danger">
                    <td>Danger</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                    <td class="actions">
                        <span class="edit-icon">✏️</span>
                        <span class="delete-icon">🗑️</span>
                    </td>
                </tr>
                <tr class="info">
                    <td>Info</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                    <td class="actions">
                        <span class="edit-icon">✏️</span>
                        <span class="delete-icon">🗑️</span>
                    </td>
                </tr>
                <tr class="warning">
                    <td>Warning</td>
                    <td>Refs</td>
                    <td>bo@example.com</td>
                    <td class="actions">
                        <span class="edit-icon">✏️</span>
                        <span class="delete-icon">🗑️</span>
                    </td>
                </tr>
                <tr class="active">
                    <td>Active</td>
                    <td>Activeson</td>
                    <td>ac1@example.com</td>
                    <td class="actions">
                        <span class="edit-icon">✏️</span>
                        <span class="delete-icon">🗑️</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>