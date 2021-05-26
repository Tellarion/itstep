<?php
    $output = "";
    /* ex_1 */
    $a1 = 13;
    $a2 = 4;
    $output .= ($a1 % $a2 == 0) ? "<p>{$a1} is mult. {$a2}</p>" : "<p>{$a1} is not mult. {$a2} = ".($a1 % $a2)." remainder</p>";
    /* ex_2 */
    $b1 = 4;
    $b2 = 8;
    $b3 = sqrt(max($b1, $b2));
    $output .= "<p>Square scale: {$b3} [b1 = {$b1}; b2 = {$b2}]</p>";
    /* ex_3 */
    $get_month = date('m');
    $get_days = cal_days_in_month(CAL_GREGORIAN, $get_month, date('y'));
    $output .= "<p>Month: {$get_month}</p><p>Days in month: {$get_days}</p>";
    /* ex_4 */
    $get_year = date('Y');
    $output .= ($get_year % 4) ? "<p>Year = ${get_year}</p><p>{$get_year} isn't leap-year</p>" : "<p>Year = ${get_year}</p><p>{$get_year} leap-year</p>";
    /* ex_5 */
    $c1 = 6;
    $c2 = 0;
    if($c1 % 3 == 0 && $c2 % 3 == 0 && $c2 != 0) {
        $sum = $c1 + $c2;
        $output .= "<p>[c1 = {$c1} % 3 = 0] + [c2 = {$c2} % 3 = 0] === {$sum}</p>";
    } else if($c2 != 0) {
        $sum = $c1 / $c2;
        $output .= "<p>[c1 = {$c1} % 3 = 0] / [c2 = {$c2} % 3 = 0] === {$sum}</p>";
    } else {
        $output .= "<p>[c1 = {$c1} % 3 = 0] ? [c2 = {$c2} % 3 = 0] === unknown operation</p>";
    }
    /* ex_6 */
    session_start();
    $session_id = $_SESSION['session_id'];
    if($session_id != 1) { $_SESSION['session_id'] = 0; $session_id = 0; }
    if($_POST['register']) {
        if(isset($_POST['login']) && isset($_POST['password'])) {
            $_SESSION['session_id'] = 1;
            $_SESSION['login'] = $_POST['login'];
            header("Refresh: 0");
        }
    }
    /* ex_7 */
    $param = array(
        'x' =>  150,
        'y' =>  75,
        'color' =>  'Green', // estab. #, hex etc..
    );
    $output_2 = "<p>X = 50, Y - 50, Color = Green</p>";
    $output_2 .= <<<tellariongit
    <div style="position: relative; width: {$param['x']}px; height: {$param['y']}px; background-color: {$param['color']};"></div>
tellariongit;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php 2</title>
</head>
<body>
    <?php echo $output; ?>
    <?php if($session_id == 0) { ?>
    <form method="post">
        <h3>Please register</h3>
        <p>Session ID: <?php echo $session_id; ?></p>
        <p><input type="text" name="login" placeholder="Login" /></p>
        <p><input type="password" name="password" placeholder="Password" /></p>
        <p><input type="submit" name="register" /></p>
    </form>
    <?php } else { ?>
    <h3>You are already registred.</h3>
    <p>Session ID: <?php echo $session_id; ?></p>
    <?php } ?>
    <?php echo $output_2; ?>
</body>
</html>