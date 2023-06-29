<?php
    require_once("classes/lnd.class.php");
    $lnd = new lnd();
    $lnd->setHost('127.0.0.1:8085');
    $lnd->loadMacaroon('C:\Users\Admin\.polar\networks\2\volumes\lnd\alice\data\chain\bitcoin\regtest\admin.macaroon');
    /*
    * Pay a Lightning Invoice
    */
    $invoice = $_POST['invoice'];
    $paymentOptions = array("payment_request" => $invoice);
    try {
        $response = $lnd->request('channels/transactions',$paymentOptions);
        if($response->payment_preimage){
            header("Location: ./success.php", TRUE);
        }else{
            header("Location: ./reject.php", TRUE);
        }

    } catch (Exception $e){
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
?>