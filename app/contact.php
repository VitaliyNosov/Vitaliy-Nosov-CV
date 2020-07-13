<?php
if (isset ($_POST['contactFF'])) {
  $to = "vitaliynosov2014@gmail.com";
  $from = "vitaliynosov2014@gmail.com";
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];

  $message = '

<html>
<body>
	<center>	
		<table border=1 cellpadding=6 cellspacing=0 width=90% style="padding: 10px; border: #DADCE0 1px solid; border-radius: 5px; color: #007ACC">
			<tr><td colspan=2 align=center style="padding: 20px; border: #DADCE0 1px solid; border-radius: 5px; color:#FFFFFF; background:#007ACC" ><B>Обратная связь по моему резюме</B></td></tr>
			<tr>
				<td style="padding: 10px; border: #DADCE0 1px solid; border-radius: 5px; color: #007ACC"><b>Имя</b></td>
				<td style="padding: 10px; border: #DADCE0 1px solid; border-radius: 5px; color: #007ACC">'.$_POST['nameFF'].'</td>
			</tr>
			<tr>
				<td style="padding: 10px; border: #DADCE0 1px solid; border-radius: 5px; color: #007ACC"><b>Email</b></td>
				<td style="padding: 10px; border: #DADCE0 1px solid; border-radius: 5px; color: #007ACC">'.$_POST['contactFF'].'</td>
			</tr>
			<tr>
				<td style="padding: 10px; border: #DADCE0 1px solid; border-radius: 5px; color: #007ACC"><b>Сообщение</b></td>
				<td style="padding: 10px; border: #DADCE0 1px solid; border-radius: 5px; color: #007ACC">'.$_POST['projectFF'].'</td>
			</tr>
		</table>
	</center>	
</body>
</html>'

; 
 

  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/html; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
     if(is_uploaded_file($_FILES['fileFF']['tmp_name'])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'])));
         $filename = $_FILES['fileFF']['name'];
         $filetype = $_FILES['fileFF']['type'];
         $filesize = $_FILES['fileFF']['size'];
         $message.="
 
--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"
 
$attachment";
     }
   $message.="
--$boundary--";
 
  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    echo $_POST['nameFF'].', Ваше сообщение отправлено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
  }
}
// ?>
