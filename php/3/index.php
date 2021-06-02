<?php
    $output = "";
    /* ex_1 */
    $avg = 0;
    $extend = 50;
    $array = [];
    for($i = 0; $i < $extend; $i++) {
        if($i % 2 != 0) {
            array_push($array, $i);
        }
    }
    $avg = $array[count($array) / 2];
    foreach($array as $item) {
        $output .= "<span style='font-size: 29; color: red;'>{$item}</span> ";
    }
    $output .= "<br>AVG: {$avg}<br>";
    $array = array_reverse($array);
    foreach($array as $item) {
        $output .= "<span style='font-size: 29; color: red;'>{$item}</span> ";
    }
    $output .= "<br>"; // fix for new ex
    /* ex_2 */
    $find = 9999;
    $chet = 0;
    $nechet = 0;
    $palindrom = 0;
    $ordered = 0;
    for($i = 1000; $i <= $find; $i++) {
        if($i % 2 == 0) { $chet++; } else { $nechet++; }
        $palc = strrev(strval($i));
        if(strval($palc) == strval($i)) {
            $palindrom++;
        }

    }

    /* bicycle sry */
    for($i = $find; $i >= 1000; $i--) {
        $get_ii = strval($i);
        if(intval($get_ii[0]) == intval($get_ii[1])+1) {
            if(intval($get_ii[1]) == intval($get_ii[2])+1) {
                if(intval($get_ii[2]) == intval($get_ii[3]+1)) {
                    $ordered++;
                }
            }
        }
    }

    $output .= "<p>Check number: {$find}</p><p>Mirrored number: {$palindrom}</p><p>Pir number: {$chet}</p><p>Not pair number: {$nechet}</p><p>Ordered number: {$ordered}</p>";
    /* ex_3 */
    $circle = 0;
    while(true) {
        if($circle == 10) { break; }
        $output .= "<div class='circle'></div>";
        $circle++;
    }
    $output .= "<br><br>"; // fix for new ex
    /* ex_4 */
    $number = 110110;
    $conv = decbin($number);
    $output .= "<p>Number: {$number}</p><p>Converted: {$conv}</p>";
    /* ex_5 */
    // thx -> https://stackoverflow.com/questions/14994941/numbers-to-roman-numbers-with-php
    $rim = 54;
    $deploy = $rim;
    $map = array('M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 'X' => 10, 'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1);
    $ret = '';
    while ($rim > 0) {
        foreach ($map as $roman => $int) {
            if($rim >= $int) {
                $rim -= $int;
                $ret .= $roman;
                break;
            }
        }
    }

    $output .= "<p>Number: {$deploy}</p><p>Romain: ${ret}</p"; // fix for new ex
    $output .= "<br>"; // fix for new ex
    // ex_6 */
    date_default_timezone_set('Europe/Moscow');
    $month = date('M');
    $output .= "<h3>{$month}</h3>";
    $output .= "<table border='1'><thead>";
    $week = array('Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su');
    foreach($week as $w) {
        $output .= "<th>{$w}</th>";
    }
    $output .= "</thead>";
    $week_start = date('D', mktime(0, 0, 0, date('m'), 1, date('Y')));
    $week_start = date('d', strtotime("{$week_start}"));
    $week_start = ($week_start == 8) ? 1 : $week_start;
    $get_days_by_m = cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
    $stren = 1;
    for($i = 1; $i < $get_days_by_m+$week_start+($stren*1.7); $i++) {
        if($i % 8 != 0) {
            if($i % 8 == 1) {
                $output .= "</tr>";
            }
            if($i <= $week_start) {
                $output .= "<td></td>";
            } else {
                $an++;
                if($an <= $get_days_by_m) {
                    $check_s = date('D', mktime(0, 0, 0, date('m'), $an, date('Y')));
                    if($check_s == "Sat" || $check_s == "Sun") {
                        $output .= "<td class='weekend'>{$an}</td>";
                    } else {
                        $output .= "<td class='normal'>{$an}</td>";
                    }
                } else {
                    $output .= "<td></td>";
                }
            }
        } else {
            $stren++;
            $output .= "<tr>";
        }
    }
    $output .= "</table>";
    /* ex_7 */
    $counter = 1;
    $output .= "<div style='margin-top: 20px;'><div class='last'>";
    for($i = 1; $i < 11; $i++) {
        if($i % 6 == 0 || $i == 1) {
            $output .= "<div>";
        }
        $output .= "<img src='img/img{$i}.jpg' />";
        if($i % 6 == 0 && $counter == 5 || $i == 5) {
            $output .= "</div>";
        }
        $counter++;
    }
    $output .= "</div></div>";
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=ё, initial-scale=1.0">
    <title>php 3</title>
</head>
<body>
    <style>
        .circle {
            float: left;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: blue;
        }
        .normal:hover {
            background-color: black;
            color: white;
        }
        .weekend:hover {
            background-color: red;
            color: white;
        }
        .normal {
            color: black;
        }
        .weekend {
            color: red;
        }
        .last {
            max-width: 1000px;
        }
        .last img {
            float: left;
            width: 200px;
            height: 150px;
        }
        .last div {
            content: "";
            display: table;
            clear: both;
        }
    </style>
    <?php echo $output; ?>
</body>
</html>