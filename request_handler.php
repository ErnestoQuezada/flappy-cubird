<?php
	//require('GameController.php');
	//$controller = new GameController();

	$data = [];
	
	
	$data['message'] = true;
	
	/**
	if (isset($_POST['score']))
	{
		$controller->updateScore($_POST['chat_id'], $_POST['score']);
	}
	else if (isset($_POST['getScores']))
	{
		$response = $controller->getTopScores();
		$data['scores'] = $response;
		$data['success'] = !empty($response);
	}
	else if (isset($_POST['phone'])) 
	{
		$response = $controller->insertNewPlayerDetails($_POST['fullname'], $_POST['phone'], $_POST['chat_id']);
		$data['success'] = !empty($response);
	}
	else
	{
		$data['message'] = 'invalid data';
	}
	**/
	echo json_encode($data);
?>









