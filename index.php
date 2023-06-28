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
			Tap to start the game
		</div>
		<div class="scoreHolder">
			<div id="score_title"></div>
			<span class="score"></span>
		</div>
		<div class="highscores">
			<table>
				<thead>
					<tr>
						<th colspan="2">Invoice</th>
					</tr>
				</thead>
				<tbody id="table_body">
					
				</tbody>
				<tfoot id="table_foot">
				<tr>
				  <td>
					<button class="play_again" id="showQRcode">
						Show QR
					</button>
				  </td>
				  <td>
					<button class="play_again" id="payInvoice">
						Pay invoice
					</button>
				  </td>
				</tr>
			  </tfoot>
			</table>
			<center>
				<button class="play_again" id="playAgain">>
					Play again
				</button>
			</center>
		</div>
		<script src="js/script.js"></script>
	</div>
</body>
</html>
