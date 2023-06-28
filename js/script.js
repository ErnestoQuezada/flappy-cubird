let score = 0;
let gravity = 0.5;
let move_speed = 3;
let game_state = 'Start';
let handler = 'http://localhost/flappy-cubird/request_handler.php';

let bird = document.querySelector('.bird');
let bird_props = bird.getBoundingClientRect();
let message = document.querySelector('.message');
let title = document.querySelector('.game_title');
let scoreString = document.querySelector('.score');
let score_title = document.querySelector('#score_title');
let background = document.querySelector('.background').getBoundingClientRect();

var invoice = '';

// manuel3g
//var nombre = document.getElementById("nombre_usuario").innerText;
//var puerto = document.getElementById("puerto").innerText;
// manuel3g

document.addEventListener('click', (e) => 
{
	if (game_state == 'get_invoice')
	{
		let playAgain = document.querySelector('#playAgain');
		if (isEventInElement(e, playAgain))
		{
			$('.highscores').hide();
			initGame(e);
		}
		
		let getQRcode = document.querySelector('#showQRcode')
		if (isEventInElement(e, getQRcode))
		{
			showQRcode(e);
		}
	}
	else if (game_state != 'Play')
	{
		initGame(e);
	}
});

function initGame(e)
{
	document.querySelectorAll('.pipe_sprite').forEach((e) =>
	{
		e.remove();
	});
	score = 0;
	title.remove();
	$('.tap_image').animate({
		opacity: 0.25,
		top: "100vh"
	}, 1000);
	bird.style.top = '40vh';
	game_state = 'Play';
	message.innerHTML = '';

	//manuel3g
	//score_title.innerHTML = 'SCORE | '+ nombre + ' / ' + puerto;
	score_title.innerHTML = 'SCORE';
	//manuel3g
	
	scoreString.innerHTML = score;
	play();
}

function move()
{
	if (game_state != 'Play') return;

	let pipe_sprite = document.querySelectorAll('.pipe_sprite');
	pipe_sprite.forEach((element) =>
	{
		let pipe_sprite_props = element.getBoundingClientRect();
		bird_props = bird.getBoundingClientRect();

		if (pipe_sprite_props.right <= 0) 
		{
			element.remove();
		}
		else 
		{
			// Collision detection with pipes
			if (bird_props.left < pipe_sprite_props.left +
				pipe_sprite_props.width &&
				bird_props.left +
				bird_props.width > pipe_sprite_props.left &&
				bird_props.top < pipe_sprite_props.top +
				pipe_sprite_props.height &&
				bird_props.top +
				bird_props.height > pipe_sprite_props.top) 
			{
				gameOver();
				return;
			} 
			else 
			{
				if (pipe_sprite_props.right < bird_props.left &&
					pipe_sprite_props.right + 
					move_speed >= bird_props.left &&
				element.increase_score == '1')
				{
					score ++;
					scoreString.innerHTML = score;
				}
				element.style.left = pipe_sprite_props.left - move_speed + 'px';
			}
		}
	});

	requestAnimationFrame(move);
}

function gameOver()
{
	game_state = 'get_invoice';
	
	$.post(handler,
	{
		getInvoice: true,
		score: score,
		port: '8082',
		player: 'bob'
	},
	function(data, status)
	{
		invoice = data;
		document.querySelector('#table_body').innerHTML = '<tr><td><textarea rows="12" cols="21">'+ invoice +'</textarea></td></tr>';
		$('.highscores').show();
	});
}

function showQRcode(e)
{	
	$.post(handler,
	{
		showQRcode: true,
		score: score,
		port: '8082',
		player: 'bob'
	},
	function(data, status)
	{
		document.querySelector('#table_body').innerHTML = '<tr><td>'+ data +'</td></tr>';
	});
}

let bird_dy = 0;
function apply_gravity()
{
	if (game_state != 'Play') return;

	bird_dy = bird_dy + gravity;
	document.addEventListener('click', (e) => 
	{
		bird_dy = -7.2;
	});
	
	// Collision detection with top and bottom
	bird_props = bird.getBoundingClientRect();
	if (bird_props.top <= 0 || bird_props.bottom >= background.bottom) 
	{
		gameOver();
		return;
	}
	bird.style.top = bird_props.top + bird_dy + 'px';
	requestAnimationFrame(apply_gravity);
}

let pipe_gap = 35;
let pipe_seperation = 100;
function create_pipe()
{
	if (game_state != 'Play') return;
	
	if (pipe_seperation > 115)
	{
		pipe_seperation = 0

		let pipe_posi = Math.floor(Math.random() * 43) + 8;
		let pipe_sprite_inv = document.createElement('div');
		pipe_sprite_inv.className = 'pipe_sprite';
		pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
		pipe_sprite_inv.style.left = '99vw';
		pipe_sprite_inv.style.transform = "scaleY(-1)";

		document.body.appendChild(pipe_sprite_inv);
		let pipe_sprite = document.createElement('div');
		pipe_sprite.className = 'pipe_sprite';
		pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
		pipe_sprite.style.left = '99vw';
		pipe_sprite.increase_score = '1';

		document.body.appendChild(pipe_sprite);
	}
	pipe_seperation++;
	requestAnimationFrame(create_pipe);
}

function play() 
{
	requestAnimationFrame(move);
	requestAnimationFrame(create_pipe);
	requestAnimationFrame(apply_gravity);
}

function payInvoice()
{
	$.post(handler,
	{
		payInvoice: true,
		invoice: invoice
	},
	function(data, status)
	{
		document.querySelector('#table_body').innerHTML = '<tr><td><textarea rows="12" cols="21">'+ data +'</textarea></td></tr>';
	});
}

function isEventInElement(event, element)
{
    var rect = element.getBoundingClientRect();
    var x = event.clientX;
    if (x < rect.left || x >= rect.right) return false;
    var y = event.clientY;
    if (y < rect.top || y >= rect.bottom) return false;
    return true;
}
