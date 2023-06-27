<?php
	require_once("classes/lnd.class.php");

	$data = [];
	
	if (isset($_POST['getInvoice']))
	{
		$score = $_POST['score'];

		$lnd = new lnd();
		$lnd->setHost('127.0.0.1:8082');
		$lnd->loadMacaroon('/home/acreonte/.polar/networks/1/volumes/lnd/bob/data/chain/bitcoin/regtest/admin.macaroon');

		$invoiceOptions = array("memo"	=> "Flappy Cubird Winner",
					"value"	=> $score);

		try
		{
			$request = $lnd->request('invoices',$invoiceOptions);

			$paymentReq = $request->payment_request;

			echo $paymentReq;

		}
		catch (Exception $e)
		{
			echo 'Caught exception: ',  $e->getMessage(), "\n";
		}
	}
	else
	{
		$data['message'] = 'invalid data';
	}

	//echo json_encode($data);
?>









