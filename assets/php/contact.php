<?php 
$to = "admin123@1koel.ru";
$tema = $_POST['subject']; 
$message = "Ваше имя: ".$_POST['name']."<br>";
$message .= "E-mail: ".$_POST['email']."<br>"; 
$message .= "Сообщение: ".$_POST['message']."<br>"; 
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 

if (mail($to, $tema, $message, $headers))
	{
	echo 'Сообщение отправлено';
	}else{
	echo 'Ошибка. Сообщение не отправлено';
	}
?>