<?php
    $output = "";
    /* ex 1 & ex 2 */
    $name = 'Aleksandr';
    $age = 23;
    $output .= "<p>Hello! My name is '{$name}'</p>";
    $output .= "<p>I'm {$age}</p>";
    /* ex 3 */
    $a = 2;
    $b = 3;
    $rez = $a + $b;
    $output .= "<p>'${a}' + '{$b}' = '${rez}'</p>";
    /* ex 4 */
    $a = 11;
    $b = 12;
    $a+=+$b-$b=$a;
    $output .= '<p>$a = '.$a.'; $b = '.$b.';</p>';
    /* ex 5 */
    if($_POST['itstep']) {
        $ans = "";
        //die(print_r($_POST)); debug
        if(@@!$_POST['question_1']) { die('cant empty question_1'); } else {
            if(intval($_POST['question_1']) == 3) {
                $ans .= "Question 1 = true<br>";
            } else {
                $ans .= "Question 1 = false<br>";
            }
        }
        if(@@!$_POST['question_2']) { die('cant empty question_2'); } else {
            if(count($_POST['question_2']) != 2) {
                if($_POST['question_2'][0] == 1 || $_POST['question_2'][0] == 3 && $_POST['question_2'][1] == 1 || $_POST['question_2'][2] == 3) {
                    $ans .= "Question 2 = true<br>";
                } else {
                    $ans .= "Question 2 = false<br>";
                }
            } else {
                $ans .= "Question 2 = false<br>";
            }
        }
        if(@@!$_POST['question_3']) { die('cant empty question_3'); } else {
            $ans .= "Question 3 = im not sure... Yes or No.. [p.s - result 3 question, added primary]<br>";
        }
        die($ans);
    }
    /* ex 6 */
    $output2 = "";
    $createElement = array(
        'tag'   =>  'div',
        'styles' => array(
            'background-color'  =>  'blue',
            'color' =>  'red',
            'width' =>  '100px',
            'height'    =>  '100px'
        )  
    );
    $styles = "";
    foreach($createElement['styles'] as $style => $value)
    {
        $styles .= "{$style}: $value;";
    }
    $tag = "<{$createElement['tag']} style='{$styles}'>Hello";
    $tag .= "</{$createElement['tag']}>";
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>ex 1, 2, 3, 4</h2>
    <?php echo $output; ?>
    <h2>ex 5</h2>
    <form method="post">
        <label>[1] How right write my name 'Aleksandr'?</label>
        <p><input type="radio" name="question_1" value="1" />Alex</p>
        <p><input type="radio" name="question_1" value="2" />Sasha</p>
        <p><input type="radio" name="question_1" value="3" />Aleksandr</p>
        <p><input type="radio" name="question_1" value="4" />Alexandr</p>
        <label>[2] 2+2 = ?</label>
        <p><input type="checkbox" name="question_2[1]" value="1" />4</p>
        <p><input type="checkbox" name="question_2[2]" value="2" />6</p>
        <p><input type="checkbox" name="question_2[3]" value="3" />4</p>
        <p><input type="checkbox" name="question_2[4]" value="4" />0</p>
        <label>[3] Lemon trues?</label>
        <p><input type="radio" name="question_3" value="1" />Yes</p>
        <p><input type="radio" name="question_3" value="2" />No</p>
        <input type="submit" name="itstep" />
    </form>
    <h2>ex 6</h2>
    <?php echo $styles; ?>
    <?php echo $tag; ?>
</body>
</html>