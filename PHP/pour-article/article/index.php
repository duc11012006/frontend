<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article Layout</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container mt-5">
        <div class="d-flex justify-content-end mb-3">
            <button id="list-view" class="btn btn-outline-primary mr-2"><i class="fa fa-list"></i> List</button>
            <button id="grid-view" class="btn btn-outline-primary"><i class="fa fa-th"></i> Grid</button>
        </div>
        <div id="articles" class="row article-list">
        <?php 
          include_once "html/menu.php";
        ?>
        </div>
    </div>

    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
