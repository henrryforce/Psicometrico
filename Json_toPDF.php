<?php
on_start();
$json = file_get_contents($url);
$json_decode = json_decode($json);

foreach($json_decode as $result){
    $html '#';
}
    $mpdf -> WriteHTML($html);
    $mpdf -> Output('untitled-psicometrico.pdf', 'F');
    $mpdf -> Ouput();
?>