<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization, auth-token');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS');

define('HONEYPOT', 'comments');
define('MAIL_HOST', 'mail.gilsys.com');
define('MAIL_USERNAME', 'noreply@gilsys.com');
define('MAIL_PASSWORD', 'K37yie6!5123');
define('MAIL_PORT', 587);
define('MAIL_FROM_ADDRESS', 'noreply@gilsys.com');
define('MAIL_FROM_NAME', 'Gilsys');
define('MAIL_TO_ADDRESS', 'info@gilsys.com');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if (!empty($_POST[HONEYPOT])) {
    echo json_encode(['success' => 1]);
    exit();
}

$fields = ['name', 'company', 'companySize', 'phone', 'email', 'subject', 'page_title', 'message'];
$data = [];
foreach ($fields as $field) {
    $data[$field] = !empty($_POST[$field]) ? $_POST[$field] : '';
}

if (sendEmail($data)) {
    echo json_encode(['success' => 1]);
} else {
    echo json_encode(['error' => 1]);
}
exit();

function sendEmail($data) {
    try {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = MAIL_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = MAIL_USERNAME;
        $mail->Password = MAIL_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = MAIL_PORT;

        $mail->setFrom(MAIL_FROM_ADDRESS, MAIL_FROM_NAME);
        $mail->addAddress(MAIL_TO_ADDRESS);

        $mail->isHTML(true);
        $mail->Subject = 'Gilsys - ' . $data['subject'];
        $mail->Body = getHtmlContent($data);
        $mail->CharSet = 'UTF-8';

        if (!$mail->send()) {
            throw new Exception($mail->ErrorInfo);
        }

        return true;
    } catch (Exception $e) {
        //echo $e->getMessage();
        return false;
    }
}

function getHtmlContent($data) {
    return '
        <html>
        <head>
            <title>Formulario de contacto</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #333;
                    font-size: 24px;
                    text-align: center;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 16px;
                    line-height: 1.5;
                    margin: 10px 0;
                }
                .message-content {
                    padding: 10px;
                    background-color: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-style: italic;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                }
                .logo-container {
                    text-align: center;
                    padding-top: 30px;
                    padding-bottom: 10px;
                }
                .logo-container img {
                    max-width: 100%;
                    width: 200px;
                }
            </style>
        </head>
        <body>
            <div class="logo-container"><img src="' . $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/contact/logo.png"></div>
            <div class="container">
                <h2>Formulario de contacto</h2>
                <p><strong>Nombre:</strong> ' . $data['name'] . '</p>
                <p><strong>Empresa:</strong> ' . $data['company'] . '</p>
                <p><strong>Tamaño de empresa:</strong> ' . $data['companySize'] . '</p>
                <p><strong>Teléfono:</strong> ' . $data['phone'] . '</p>
                <p><strong>Email:</strong> ' . $data['email'] . '</p>
                <p><strong>Título de la página:</strong> ' . $data['page_title'] . '</p>
                <p><strong>Asunto:</strong> ' . $data['subject'] . '</p>
                <p><strong>Mensaje:</strong></p>
                <p>' . nl2br($data['message']) . '</p>
            </div>
        </body>
        </html>';
}
