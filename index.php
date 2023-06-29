<!DOCTYPE html>
<html>
<head>
    <title>Flappy Cubird</title>
	<link rel="icon" href="https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-1-1.png">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

</head>
<body style="display: flex; align-items: center; height: 100vh; background-color: #0c273a;">
	<div class="container text-center">
		<div class="row">
			<div class="col"></div>
			<div class="col-4">
			
				<form action="index2.php" method="POST">
					<h3 style="color:white;">Enter your data<br>to start the game</h3>
					<br>
					<div class="mb-3">
						<input class="form-control" type="text" name="player" placeholder="Type your name" aria-label="default input" required>
					</div>
					<div class="mb-3">
						<input class="form-control" type="text" name="port" placeholder="Type your port" aria-label="default input" required>
					</div>
					<button type="submit" class="btn btn-success" style="width: 100%;">Play Game</button>
				</form>

			</div>
			<div class="col"></div>
		</div>
	</div>	
</body>
</html>