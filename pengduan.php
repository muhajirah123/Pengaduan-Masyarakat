<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "email@anda.com";
    $subject = "Pengaduan Baru dari " . $_POST['nama'];
    $message = "
    <html>
    <head>
        <title>Pengaduan Baru</title>
    </head>
    <body>
        <h2>Detail Pengaduan</h2>
        <p><strong>Nama:</strong> ".$_POST['nama']."</p>
        <p><strong>Email:</strong> ".$_POST['email']."</p>
        <p><strong>Telepon:</strong> ".$_POST['telepon']."</p>
        <p><strong>Pengaduan:</strong><br>".nl2br($_POST['pengaduan'])."</p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: ".$_POST['email']."\r\n";
    
    if(mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Pengaduan berhasil dikirim!');</script>";
    } else {
        echo "<script>alert('Gagal mengirim pengaduan.');</script>";
    }
}
?>