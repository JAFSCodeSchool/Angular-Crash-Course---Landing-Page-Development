<?php

include 'email.php';
$modelData = json_decode(file_get_contents('php://input'));
$errorMSG = "";
if (empty($modelData->email)) {
    $errorMSG .= "Email is required ";
} else {
    $email = $modelData->email;
}

$EmailTo = "contact@jsam.in";
$Subject = "Email Subscription Request";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <' . $email . '>' . "\r\n";
$headers .= 'Reply-To: <' . $email . '>' . "\r\n";


$Body = (new Email($email))->emailHTML;

if ($errorMSG == "") {
    // If there is no error in the above validation errorMSG will be ''
    $success = mail($EmailTo, $Subject, $Body, $headers);
    if ($success) {
        echo '{"message":"SUCCESS"}';
    } else {
        header("HTTP/1.1 403 Forbidden" );
        echo '{"error":"Unknown Error"}';
    }
} else {
    header("HTTP/1.1 403 Forbidden" );
    echo '{"error":"'.$errorMSG.'"}';
    // die('Forbidden');
}
