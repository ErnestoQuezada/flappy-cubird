let score = 0;
let gravity = 0.5;
let move_speed = 3;
let game_state = 'Start';
let local_request_handler_url = 'http://localhost/flappy-cubird/request_handler.php';
let handler = local_request_handler_url;

let bird = document.querySelector('.bird');
let bird_props = bird.getBoundingClientRect();
let message = document.querySelector('.message');
let title = document.querySelector('.game_title');
let scoreString = document.querySelector('.score');
let score_title = document.querySelector('#score_title');
let background = document.querySelector('.background').getBoundingClientRect();

// --- get Chat_ID from php  ---
function scriptSource() 
{
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1].src;
}

function parseQueryString(queryString) 
{
    var params = {};
    if (queryString)
	{
        var keyValues = queryString.split('&');
        for (var i = 0; i < keyValues.length; i++) 
		{
            var pair = keyValues[i].split('=');
            params[pair[0]] = pair[1];
        }
    }
    return params;
}

var params = parseQueryString(scriptSource().split('?')[1]);

document.addEventListener('click', (e) => 
{
	if (game_state == 'show_leaderboard')
	{
		let playAgain = document.querySelector('.play_again');
		if (isEventInElement(e, playAgain))
		{
			$('.highscores').hide();
			initGame(e);
		}
	}
	else if (game_state != 'Play' && $('.form_holder').is(":hidden"))
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
	score_title.innerHTML = 'SCORE';
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
	game_state = 'show_leaderboard';
	
	
	
	
	document.querySelector('#table_body').innerHTML = '<tr><th>ENVIAR</th><th>' + score + ' SATS</th></tr>';
	$('.highscores').show();
	
	
	
	
	/**
	$.post(handler,
	{
		score: score,
		chat_id: params.chat_id
	},
	function(data, status)
	{
		$.post(handler,
		{
			getScores: true
		},
		function(data, status)
		{
			populateHighscores(data);
			$('.highscores').show();
		});
	});
	**/
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

function populateHighscores(data)
{
	var topScores = JSON.parse(data);
	document.querySelector('#table_body').innerHTML = '<tr><th>JUGADOR</th><th>SCORE</th></tr>';
	var dataLength = (topScores.scores) ? topScores.scores.length : 0;
	for (var i = 0; i < dataLength; i++)
	{
		var name = topScores.scores[i].name.split(' ');
		document.querySelector('#table_body').innerHTML += ('<tr><td>' + 
				name[0] + '</td><td>' +
				topScores.scores[i].score + '</td></tr>');
	}
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