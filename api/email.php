<?PHP
class Email
{
    public function Email($email)
    {
        $this->emailHTML = '<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Subscription Request</title>
            <style>
                * {
                    color: black;
                    padding: 0px;
                    margin: 0px;
                }
            </style>
        </head>
        <body>
           ' . $email . '
        </body>
        </html>
        ';
    }
}
