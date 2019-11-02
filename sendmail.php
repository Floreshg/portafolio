<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'api/phpmailer.php';
if($_POST){

  if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['cel']) || empty($_POST['mensaje'])){
  echo '<script>
  
      swal({
        title: "Ups...",
        text:"Todos los campos son obligatorios!",
        icon: "error",
        buttons: {
          confirm: {
            text:"Cerrar",
            className: "btn btn-outline-danger btn-rounded waves-effect waves-light",
          }
        }
        
    });
    </script>
    
    ';
}else{
  $nombre		= utf8_decode($_POST['name']);
  $email 		= utf8_decode($_POST['email']);
  $cel 	    = utf8_decode($_POST['cel']);
  $mensaje  = utf8_decode($_POST['mensaje']);
  $asunto	  = "$nombre Quiere Contarse contigo";


// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
  
    //Server settings
    require_once 'api/credencial.php';
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->CharSet = 'UTF-8';
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
    //Recipients
    $mail->setFrom(USER, 'MI PORTAFOLIO WEB');
 
    $mail->addAddress(USER);               // Name is optional
  
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = utf8_decode($asunto);
    date_default_timezone_set('America/Lima');
    $datetime   = date("d-m-Y h:i:s");
 // $ipAddress  = $_SERVER("REMOTE_ADDR");
 // $browser    = get_browser(null, true);
    $ipAddress  = $_SERVER["REMOTE_ADDR"];
    $location   = $_SERVER["HTTP_HOST"];
    $navegador  = $_SERVER["HTTP_USER_AGENT"]; 

    $mail->Body .= "<br />
    <strong>Nombre:</strong> $nombre<br />	
    <strong>E-mail:</strong> $email<br />
    <strong>Cel:</strong> $cel<br />
    <strong>Mensaje:</strong> $mensaje<br />
    <strong>IP:</strong>$ipAddress <br />
    <strong>Lugar:</strong>$location <br />
    <strong>Navegador:</strong>$navegador<br />
    <strong>Fecha:</strong> $datetime<br />
    ";	

    $mail->send();
    echo'
    <script>
        swal({
          title: "Hola '.utf8_encode($nombre).'...",
          text:"Gracias por contactarte conmigo",
          icon: "success",
          buttons: {
            confirm: {
              text:"Listo",
              className: "btn btn-outline-success btn-rounded waves-effect waves-light",
            }
          }
          
      });
		</script>';
} catch (Exception $e) {
  echo'
  <script>
        swal("Ops '.utf8_encode($nombre).'...","hubo un error al enviar el mensaje intente nuevamente", "error");
  </script>';
}

}

}
