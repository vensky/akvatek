<?php
header("Content-type: text/plain; charset=utf-8");


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);


if(isset($data["key"])) if($data["key"]=="5jht4yw4gdw4t9ew34287gtvYY") {
    $phone = $data["tel"];
    $name = $data["name"];
    $guests = $data["guests"];
    $subject = 'Заявка на галафестиваль';
    $people = (isset($guests) && $guests > 1) ? 'два и более' : 'один человек';

    $message = ''
    .'<html>'
    .'<head>'
    .'  <title>'.$subject.'</title>'
    .'</head>'
    .'<body>'
    .'	<div style="background:#ecf0f1">'
    .'	<div style="max-width:600px;margin:0 auto">'
    .'  <div style="background:#A736FF;color: #fff;font-size: 20px;line-height: 24px; text-transform: uppercase; font-family: sans-serif; font-weight: 700;padding: 30px;">'.$subject.'</div>'
    .'	<div style="padding: 50px 0;background:#fff">'
    .'  <table border="0" cellpadding="10" cellspacing="0" style="width:100%;box-sizing:border-box;border-collapse:collapse;table-layout:fixed;">'
    .'  	<tr>'
    .'  		<th align="right" style="text-align:right;vertical-align:middle;color:#1c222f;font-size:16px;line-height:20px;font-family:sans-serif;">Дата заявки</th>'
    .'  		<td style="text-align:left;vertical-align:middle;font-size:14px;color:#928f8f;font-family:sans-serif;line-height:24px;">'.date('d.m.Y H:i:s').'</td>'
    .'  	</tr>';
            $message .= ''
            .'  	<tr>';
            if (!empty($name)){
                $message .= '  		<th align="right" style="text-align:right;vertical-align:middle;color:#1c222f;font-size:16px;line-height:20px;font-family:sans-serif;">Имя</th>'
                .'  		<td style="text-align:left;vertical-align:middle;font-size:14px;color:#928f8f;font-family:sans-serif;line-height:24px;">'.$name.'</td>'
                .'  	</tr>';
            }
            if (!empty($phone)){
                $message .= '  		<th align="right" style="text-align:right;vertical-align:middle;color:#1c222f;font-size:16px;line-height:20px;font-family:sans-serif;">Телефон</th>'
                .'  		<td style="text-align:left;vertical-align:middle;font-size:14px;color:#928f8f;font-family:sans-serif;line-height:24px;">'.$phone.'</td>'
                .'  	</tr>';
            }
            if (!empty($people)){
                $message .= '  		<th align="right" style="text-align:right;vertical-align:middle;color:#1c222f;font-size:16px;line-height:20px;font-family:sans-serif;">Количество гостей</th>'
                .'  		<td style="text-align:left;vertical-align:middle;font-size:14px;color:#928f8f;font-family:sans-serif;line-height:24px;">'.$people.'</td>'
                .'  	</tr>';
            }
    $message .= ''
    .'  </table>'
    .'	</div>'
    .'  <div style="background:#A736FF;padding:20px;font-family:sans-serif;font-size:13px;color:#fff;text-align:center;">Сообщение сгенерировано автоматически, отвечать на него не нужно.</div>'
    .'  </div>'
    .'  </div>'
    .'</body>'
    .'</html>';

    $mail = new PHPMailer;
    $mail->CharSet = "UTF-8";
    $mail->From = "alert@yutskovskaya.ru";
    $mail->FromName = 'alert@yutskovskaya.ru';
    // $mail->addAddress('a.sokolov@htdev.ru');
    $mail->addAddress('a.kydravceva@yuclinic.ru');
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;
    echo json_encode(array('status' => ($mail->send()) ? 'ok' : 'error'));
}
?>
