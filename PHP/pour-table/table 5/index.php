<!doctype html>
<html lang="en">
  <head>
  	<title>Table 08</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<link rel="stylesheet" href="css/style.css">

	</head>
	<body>
		<?php 
            include_once "menu.php";
        ?>
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-4">
					<h2 class="heading-section">Table #08</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<h3 class="h5 mb-4 text-center">Collapsible Table</h3>
					<div class="table-wrap">
						<table class="table myaccordion table-hover" id="accordion">
						  <thead>
						    <tr>
						      <th>#</th>
						      <th>Product Name</th>
						      <th>Price</th>
						      <th>Quantity</th>
						      <th>Total</th>
						      <th>&nbsp;</th>
						    </tr>
						  </thead>
						  <tbody>
							<?php
								echo $result;
							?>
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>

	<script src="js/jquery.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>

	</body>
</html>

