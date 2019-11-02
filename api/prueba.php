<?php

require_once 'api/credencial.php';
 $mail->SMTPDebug = 0;                                       // Enable verbose debug output
 $mail->isSMTP();                                            // Set mailer to use SMTP
 $mail->Host       = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
 $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
 $mail->Username   = USER;                     // SMTP username
 $mail->Password   = PASS;                               // SMTP password
 $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
 $mail->Port       = 587;                                    // TCP port to connect to
 $mail->SMTPOptions = array(
   'ssl' => array(
       'verify_peer' => false,
       'verify_peer_name' => false,
       'allow_self_signed' => true
   )
);
$mail->setFrom(USER);
?>