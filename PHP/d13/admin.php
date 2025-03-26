<?php
require_once 'define.php';
require_once 'functions.php';
session_start();

if (isset($_SESSION['userLogin']) == false) {
    header('Location: login.php');
    exit();
} else {
    // neu role la member -> member.php
    $userInfo = $_SESSION['userLogin'];
    if ($userInfo['user_info']['role'] == 'member') {
        header('Location: member.php');
        exit();
    }
}

$title = "";

$title = "<h3> {$_SESSION['userLogin'] ['user_info']['name']}</h3>";
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Quản Trị</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            background-color: #f4f7f6;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .admin-dashboard {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
        }
        .sidebar {
            width: 250px;
            background-color: #ffffff;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            padding: 20px;
        }
        .sidebar-logo {
            text-align: center;
            margin-bottom: 30px;
        }
        .sidebar-logo img {
            max-width: 120px;
        }
        .sidebar-menu {
            list-style: none;
            padding: 0;
        }
        .sidebar-menu li {
            margin-bottom: 10px;
        }
        .sidebar-menu a {
            color: #333;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 10px 15px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        .sidebar-menu a:hover, .sidebar-menu a.active {
            background-color: #f0f4f8;
            color: #667eea;
        }
        .sidebar-menu a i {
            margin-right: 10px;
            width: 20px;
            text-align: center;
        }
        .main-content {
            flex-grow: 1;
            background-color: #f9fafb;
            padding: 30px;
            overflow-y: auto;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .dashboard-cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
        .card-custom {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            transition: transform 0.3s ease;
        }
        .card-custom:hover {
            transform: translateY(-10px);
        }
        .card-icon {
            background-color: #f0f4f8;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
        }
        .card-icon i {
            font-size: 24px;
            color: #667eea;
        }
    </style>
</head>
<body>
    <div class="admin-dashboard">

        <div class="sidebar">
            <ul class="sidebar-menu">
                <li><a href="#" class="active"><i class="fas fa-home"></i> Trang Chủ</a></li>
                <li><a href="#"><i class="fas fa-users"></i> Quản Lý Người Dùng</a></li>
                <li><a href="#"><i class="fas fa-chart-bar"></i> Thống Kê</a></li>
                <li><a href="#"><i class="fas fa-cog"></i> Cài Đặt</a></li>
                <li><a href="logout.php" class="text-danger"><i class="fas fa-sign-out-alt"></i> Đăng Xuất</a></li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <div class="header">
                <h2 class="m-0">Bảng Điều Khiển</h2>
                <div>
                    <span class="me-2">Xin chào, <?php echo $title; ?></span>
                    <a href="logout.php" class="btn btn-outline-danger btn-sm">
                        <i class="fas fa-sign-out-alt"></i> Đăng Xuất
                    </a>
                </div>
            </div>

            <!-- Dashboard Cards -->
            <div class="dashboard-cards">
                <div class="card-custom">
                    <div class="card-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <h5 class="m-0">Người Dùng</h5>
                        <p class="text-muted m-0">1,245</p>
                    </div>
                </div>
                <div class="card-custom">
                    <div class="card-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <h5 class="m-0">Truy Cập</h5>
                        <p class="text-muted m-0">5,678</p>
                    </div>
                </div>
                <div class="card-custom">
                    <div class="card-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div>
                        <h5 class="m-0">Đơn Hàng</h5>
                        <p class="text-muted m-0">456</p>
                    </div>
                </div>
                <div class="card-custom">
                    <div class="card-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div>
                        <h5 class="m-0">Doanh Thu</h5>
                        <p class="text-muted m-0">$12,345</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>