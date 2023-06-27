<!DOCTYPE html>
<html>
<head>
	<title>Flappy Cubird</title>
    <link rel="stylesheet" href="css/styles.css?version=0.1">
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" /> 
	<meta http-equiv="Expires" content="0" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js" integrity="sha256-bu/BP02YMudBc96kI7yklc639Mu4iKGUNNcam8D2nLc=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/additional-methods.min.js" integrity="sha256-Z3MmjesRY6rcd+sYj8tTwb/+EV/4msqGW7EZiQc3TK8=" crossorigin="anonymous"></script>
	<script src="js/form.js?version=0.2"></script>
</head>
<body>
    <div class="background"></div>
	<div class="game_holder">
		<div class="game_title">
			<img class="logo" src="images/game-logo.png" alt="Flappy M">
		</div>
		<img class="bird" src="images/logo.png" alt="bird-img">
		<div class="tap_image">
			<img class="tap" src="images/tap.png" alt="bird-img">
		</div>
		<div class="message">
			Tap para iniciar el juego
		</div>
		<div class="scoreHolder">
			<div id="score_title"></div>
			<span class="score"></span>
		</div>
		<div class="highscores">
			<table>
				<thead>
					<tr>
						<th colspan="2">LLAMAR POLAR API</th>
					</tr>
				</thead>
				<tbody id="table_body">
					
				</tbody>
			</table>
			<center>
				<button class="play_again">
					¡Volver a jugar!
				</button>
			</center>
		</div>
		<script src="js/script.js?chat_id=<?php echo $_GET["chat_id"] ?>"></script>
	</div>
	<div class="form_holder">
		<div id="server_response">Ingresa tus datos<br>para iniciar el juego</div>
		<form action="request_handler.php" method="post">
			<input type="hidden" name="chat_id" id="chat_id" value="<?php echo $_GET["chat_id"] ?>" />
			<input type="text" name="fullname" id="fullname" maxlength="100" placeholder="Nombre completo" required><br>
			<input type="tel" name="phone" id="phone" maxlength="8" placeholder="Teléfono" required><br>
			<button type="submit">
				¡Jugar ahora!
			</button>
		</form>
	</div>
	<?php
		if ($_GET['isAllowed'] != "true")
		{
			echo '
			<style type="text/css">.form_holder{
				display: block;
			}</style>
			';
		}
	?>
</body>
</html>
