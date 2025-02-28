<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bảng Khóa học</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container table-container">
        <table id="course-table" class="table table-bordered">
            <thead>
                <tr class="bg-primary text-light">
                    <th scope="col" class="center-align">Khóa học</th>
                    <th scope="col" class="center-align">Lớp học</th>
                    <th scope="col" class="center-align">Lịch học</th>
                    <th scope="col" class="center-align date-column">Khai giảng</th>
                </tr>
            </thead>
            <tbody>
            <?php 
                include_once "html/menu.php";
            ?> 
            </tbody>
        </table>
    </div>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>
