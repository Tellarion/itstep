<?php
     $output = "";
     /* ex_1 */
    $nums = [];
    for($i = 0; $i < 100; $i++) {
        array_push($nums, rand(1, 99));
    }
    $output .= "<p style='width: 500px;'>";
    for($i = 0; $i < count($nums); $i++) {
        $output .= "{$nums[$i]} ";  
    }
    $maximum = max($nums);
    $minimum = min($nums);
    $output .= "</p>";
    $output .= "<p>Maximum: {$maximum}</p>";
    $output .= "<p>Minimum: {$minimum}</p>";
    /* ex_2 */
    $output .= "<br>";
    $images = glob("./img/*.jpg");
    foreach($images as $image)
    {
        $output .= "<img src='{$image}' />";
    }
    /* ex_3 */
    $output .= "<br>";
    $output .= "<table border='1'><tbody>";
    for($i = 2; $i < 11; $i++) {
        $calc = 0;
        $output .= "<tr><td><b>* ${i}</b></td>";
        for($m = 1; $m < 11; $m++) {
            $calc = $i * $m;
            $output .= "<td>{$i}*{$m}={$calc}</td>";
        }
        $output .= "</tr>";
    }
    $output .= "</tbody></table>";
    /* ex_4 */
    $deposit = 300;
    $years = 20;
    $compression = 20;
    $finded = ['Year', 'Summ start', 'Summ End', 'Profit'];
    $output .= "<table><tbody>";
    for($i = 0; $i <= $years; $i++) {
        if($i == 0) {
            $output .= "<tr style='background-color: red;'>";
            for($m = 0; $m < count($finded); $m++) {
                $output .= "<td>{$finded[$m]}</td>";
            }
            $output .= "</tr>";
        } else {
            $output .= "<tr style='background-color: grey; color: white;'>";
            for($m = 0; $m < count($finded); $m++) {
                $calc = 0;
                switch($m) {
                    case 0: $calc = $i; break;
                    case 1: $calc = $deposit; break;
                    case 2: $calc = $deposit + ($deposit * $compression / 100); break;
                    case 3: $calc = $deposit * $compression / 100; $deposit = $deposit + $calc; break;
                }
                $calc = round($calc, 2);
                $output .= "<td>{$calc}</td>";
            }
            $output .= "</tr>";
        }
    }

    $output .= "</tbody></table>";
    /* ex_5 */
    $output .= "<br>";
    $number = 347689;
    $revers = intval(strrev(strval($number)));
    $output .= "<h1 style='color:red;'>{$number}</h1>";
    $output .= "<h1 style='color:green;'>{$revers}</h1>";
    /* ex_6 */
    $output .= "<br>";
    $lnumber = 5493256;
    $lnumbers = "";
    $explode = str_split($lnumber);
    $implode = implode(", ", $explode);
    $output .= "<h1>Number is: {$lnumber}</h1>";
    $output .= "<h2>Digits in the number: {$implode}</h2>";
    $inter = [];
    $inter['count'] = strlen(strval($lnumber));
    $inter['max'] = max($explode);
    $inter['min'] = min($explode);
    // function all_sum($explode) { $sum = 0; foreach($explode as $num) { $sum = $sum + $num; } return $sum; } finded func array_sum :D
    $inter['summ'] = array_sum($explode);
    $inter['avg'] = round(array_sum($explode) / count(array_filter($explode)), 2);
    $output .= "<p>Count of digits: <b>{$inter['count']}</b>, Max: <b>{$inter['max']}</b>, Min: <b>{$inter['min']}</b>, Summ: <b>{$inter['summ']}</b>, AVG: <b>{$inter['avg']}</b></p>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php 4</title>
</head>
<body>
    <style>
        img {
            width: 248px;
            height: 154px;
        }
    </style>
    <?php echo $output; ?>
</body>
</html>