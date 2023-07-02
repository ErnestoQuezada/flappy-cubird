<!DOCTYPE html>
<html>
<head>
    <title>Flappy Cubird</title>
	<link rel="icon" href="images/bitcoin-logo.png">
    <link rel="stylesheet" href="css/styles.css?version=0.1">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body>
	<div class="container-fluid h-100 text-center form">
		<div class="row h-100 align-items-center">
			<div class="col"></div>
			<div class="col-4 align-self-center">
				<form action="index2.php" method="POST">
					<h3>Enter your data<br>to start the game</h3>
					<br>
					<div class="mb-3">
						<input class="form-control" type="text" name="player" placeholder="Type your name" aria-label="default input" required>
					</div>
					<div class="mb-3">
						<input class="form-control" type="text" name="port" placeholder="Type your port" aria-label="default input" required>
					</div>
					<button type="submit" class="btn btn-success mb-3">Play Game</button>
				</form>
			</div>
			<div class="col"></div>
		</div>
	</div>	
</body>
</html>