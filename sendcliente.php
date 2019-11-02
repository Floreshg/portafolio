<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require_once 'api/phpmailer.php';

if($_POST){
  if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['cel']) || empty($_POST['mensaje'])){
    echo 'falta llenar todos los campos';
}else{
		$nombre		= utf8_decode($_POST['name']);
		$email 		= utf8_decode($_POST['email']);
    $cel 	    = utf8_decode($_POST['cel']);
    $mensaje  = utf8_decode($_POST['mensaje']);
    
		$asunto	  = "Hola $nombre respondere tu mensaje en la brevedad posible";
 
$mail1 = new PHPMailer(true);
try {

  require_once 'api/credencial.php';
  $mail1->SMTPDebug = 0;                                    // Enable verbose debug output
  $mail1->isSMTP();                                            // Set mailer to use SMTP
  $mail1->CharSet     = 'UTF-8';
  $mail1->Host        = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
  $mail1->SMTPAuth    = true;                                   // Enable SMTP authentication
  $mail1->Username    = USER;                     // SMTP username
  $mail1->Password    = PASS;                               // SMTP password
  $mail1->SMTPSecure  = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
  $mail1->Port        = 587;                                    // TCP port to connect to
  $mail1->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
//Recipients
$mail1->setFrom(USER, `HOLA $nombre`);
$mail1->addAddress($email);               // Name is optional

// Content
$mail1->isHTML(true);                                  // Set email format to HTML
$mail1->Subject = utf8_decode($asunto);
//str_replace('%name%', $name, file_get_contents('mailContent.html'))
//$mail1->Body = file_get_contents('mail/mailing.php');

/* ob_start();
include("mail/mailing.php");
$mailing = ob_get_contents();
ob_end(); */
$mail1->msgHTML(file_get_contents('mail/mailing.php'));
//$mail1->msgHTML(ob_get_contents('mail/mailing.php'));
$mail1->send();
echo'el mensaje fue enviado al usuario';
} catch (Exception $e) {
  echo'el mensaje no fue enviado al usuario';
}
}
}
