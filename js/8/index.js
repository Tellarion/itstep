// ex 1

function f_ex_1(str) {

    let str_count_symb = {}

    str_count_symb.nums = 0
    str_count_symb.eng = 0
    str_count_symb.ru = 0
    str_count_symb.other = 0
    str_count_symb.spacing = 0

    let str_pos = 0
    let str_count = str.length-1
    let str_current = 0
    // my base
    const nums_array = [0,1,2,3,4,5,6,7,8,9]
    const alf_eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alf_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь', 'э', 'ю', 'я']
    while(true) {

        str_current = 0

        let get_actual_symb = str[str_pos].toLowerCase()

        if(get_actual_symb != " ") {

            //console.log(get_actual_symb) dbg
            
            nums_array.forEach(val => {
                if(get_actual_symb == val) { str_count_symb.nums++; str_current++ }
            })

            alf_eng.forEach(val2 => {
                if(get_actual_symb == val2) { str_count_symb.eng++; str_current++ }
            })

            alf_ru.forEach(val3 => {
                if(get_actual_symb == val3) { str_count_symb.ru++; str_current++ }
            })

            if(str_current == 0) { str_count_symb.other++ }

        } else {
            str_count_symb.spacing++
        }

        if(str_pos == str_count) { break } else {
            str_pos++
        }
    }

    return str_count_symb
}

console.log(f_ex_1("Hello my name is Aleksandr. Я учусь в Академии Шаг. Дальний проезд 9 к 1"))

// ex 2

function f_ex_2(num) {
    const deff_default = [
        ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', '', 'две', '', 'четыр', 'пят', 'шест', 'сем', 'восем', 'девят'],
        ['', '', 'двадцать', 'тридцать', 'сорок', '', '', '', '', 'девяносто']
    ]
    num = num.toString()
    if(num.length == 2) {
        num = parseInt(num)
        if (num >= 0 && num <= 10) return deff_default[0][num]
        if (num > 10 && num <= 19)
            return (deff_default[0][num] || deff_default[0][num - 10]) + 'надцать'
        if (num >= 20 && num <= 99) {
            const [units=0, tens] = [...('' + num)].reverse().map(Number)
            return [
            tens ? deff_default[1][tens] || (deff_default[0][tens] + 'десят') : '', 
            units ? deff_default[0][units] : ''
            ].join(' ')
        }
    } else {
        return {'wrong': 'не двузначное число'}
    }
    return num.length
}

console.log(f_ex_2(54))

// ex 3

function f_ex_3(str) {
    str = str.split('')
    let new_str = ``
    str.forEach(val => {
        let isU = val.toUpperCase() == val
        if(isU == true) new_str += val.toLowerCase()
        if(isU == false) new_str += val.toUpperCase()
    })
    return new_str
}

console.log(f_ex_3('На лугу гуляли козы, туда сюда и ПОТОМ ОНИ ВОТ ТАК уоТ asdKOsdfipjJI'))

// ex 4

function f_ex_4(array) {
    let new_array = []
    array.forEach(val => {
        if(val.indexOf('-') != -1) {
            const pos_a = val.indexOf('-')
            let first_pos = val.substring(0, pos_a)
            let second_pos = val.substring(pos_a+1)
            second_pos = second_pos[0].toUpperCase() + second_pos.substring(1)
            new_array.push(first_pos.concat(second_pos))
        } else {
            new_array.push('Wrong format')
        }
    })
    return new_array
}

console.log(f_ex_4(['font-size', 'background-color', 'text-align', 'margin-left', 'marginLeft']))

// Ex 5

function f_ex_5(abbr) {
    let array = []
    abbr.forEach(val => {
        val = val.toLowerCase()
        if(val.indexOf('-') == -1) {
            val = val.split(' ')
            let item = ``
            for(let i = 0; i < val.length; i++) {
                item += val[i][0].toUpperCase()
            }
            array.push(item)
        } else {
            let val_1 = val.split('-')
            let val_2 = val.split(' ')
            let item = ``
            for(let i = 0; i < val_1.length; i++) {
                item += val_1[i][0].toUpperCase()
            }
            for(let i = val_1.length-1; i < val_2.length; i++) {
                item += val_2[i][0].toUpperCase()
            }
            array.push(item)
        }
    })
    return array
}

console.log(f_ex_5(['cascading style sheets', 'объектно-ориентированное программирование', 'академия Шаг', 'Министерство внутренних Дел']))

// Ex 6

function f_ex_6() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i]
    }
    return arr.join(' ')
}

console.log(f_ex_6("привет", "как дела?", "слушай, мяу"))

// Ex 7

function f_ex_7(math) {
    /* + = 1; - = 2; / = 3; * = 4 */
    let find_itter = (math.indexOf('+') != -1) ? 1 : (math.indexOf('-') != -1) ? 2 : (math.indexOf('/') != -1) ? 3 : (math.indexOf('*') != -1) ? 4 : 0
    let find_pos = (math.indexOf('+') != -1) ? math.indexOf('+') : (math.indexOf('-') != -1) ? math.indexOf('-') : (math.indexOf('/') != -1) ? math.indexOf('/') : (math.indexOf('*') != -1) ? math.indexOf('*') : 0
    if(find_itter == 0) return false
    if(find_itter >= 1) {
        let get_first = parseFloat(math.substring(0, find_pos))
        let get_second = parseFloat(math.substring(find_pos+1))
        return (find_itter == 1) ? get_first + get_second : (find_itter == 2) ? get_first - get_second : (find_itter == 3) ? get_first / get_second : (find_itter == 4) ? get_first * get_second : false
    }
}

console.log(f_ex_7("2121+63012"))

// Ex 8

function f_ex_8(url) {
    let array = {}
    array.protocol = url.split('://')[0]
    array.domain = url.split('://')[1].split('/')[0]
    array.path = url.split('://')[1].split('/').splice(1)
    array.fullPath = url.split('://')[1].split('/').splice(1).map(function(data, index) {
        if(index == url.split('://')[1].split('/').splice(1).length-1) { return data } else { return data + "/" }
    }).join('')
    return array
}

console.log(f_ex_8("https://itstep.org/ua/about"))

// Ex 9

function f_ex_9(str, delim) {

    let tmp = []
    if(!str) return tmp
    let res = []
    for(let i = 0; i < str.length; i++) {
        if(str[i] != delim) {
            tmp.push(str[i])
        } else {
            res.push(tmp)
            tmp = []
        }
        if(i == str.length-1) {
            res.push(tmp)
            tmp = []
        }
    }
    return res.map(data => { return data.join('') })
}

console.log(f_ex_9("10/08/2020", "/"))

// Ex 10

function f_ex_10(str) {
    for(let i = 1; i < arguments.length+1; i++) {
        str = str.replace(`%${i}`, arguments[i])
    }
    return str
}

console.log(f_ex_10("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020))
