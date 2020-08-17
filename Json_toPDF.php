<?php
#on_start();
#$json = file_get_contents($url);
#$json_decode = json_decode($json);
#foreach($json_decode as $result){
    #$html '#';
#}
 #   $mpdf -> WriteHTML($html);
  #  $mpdf -> Output('untitled-psicometrico.pdf', 'F');
   # $mpdf -> Ouput();
   
    //var_dump($_GET['datos']);
    ob_start();

    
    require('fpdf/fpdf.php'); 
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial','B',10);
    
    $datos = $_GET['datos'];
    var_dump($_GET['datos']);
    var_dump($_GET['puntaje']);
    var_dump($_GET['resp']);
    var_dump($_GET['tabu']);


    $pdf->Cell(40,10,'Datos');
    $pdf->Cell(40,10,'Respuestas');
    $pdf->Ln(10);
    foreach($datos)
    /*
    $array1= $array[0][0];
    $array2= $array[0][1];
    
    foreach($array1 as $key=>$row){
        $pdf->Cell(40,10,$row);    
        $pdf->Cell(40,10,$array2[$key]);
        $pdf->Ln(10);
    }
    
    $pdf->Output();
    ob_end_flush();
*/
?>