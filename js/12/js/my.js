/* ex_1 not my code (need fast), only adaptive for ex */
/* https://codepen.io/knownOut/pen/BeXxGo */

const trackbars = document.querySelectorAll('.trackbar');
for(let i = 0; i < trackbars.length; i++){
    let trackbar = trackbars[i];

    const button = trackbar.querySelector('.track-button');
    if(button && button instanceof HTMLElement){
        let dragging = false;

        const parentWidth = trackbar.offsetWidth;
        const elementWidth = button.offsetWidth;

        let clickOffset = 0;
        button.addEventListener('mousedown', () => {
            clickOffset = (event.pageX - button.offsetLeft - 8) - (elementWidth / 2);
            dragging = true;
        });
        document.body.addEventListener('mouseup', () => {dragging = false;});
        document.body.addEventListener('mousemove', event => {
            if(dragging){
                let currentPosition = (event.pageX - button.offsetLeft - 8) - (elementWidth / 2);
                let elementPosition = parseInt(window.getComputedStyle(button).getPropertyValue('left'));
                
                let nextPosition = elementPosition + currentPosition - clickOffset;
                
                if(nextPosition < 0) nextPosition = 0;
                if(nextPosition >= parentWidth - elementWidth) nextPosition = parentWidth - elementWidth;

                if(elementPosition == nextPosition + 2) return false;
                nextPosition = nextPosition + 'px';

                button.style.left = nextPosition;

                trackbar.setAttribute('complete', Math.floor(elementPosition * 100 / (parentWidth - elementWidth)));
                if(trackSelector = trackbar.querySelector('.track-selector'))
                    trackSelector.style.width = Math.floor(elementPosition * parentWidth / (parentWidth - elementWidth)) + 'px';

            }
        });
        document.body.addEventListener('mouseleave', () => {dragging = false;});
    }
}

/* ex_2 */

let images = ['img/edu1.jpg', 'img/edu2.jpg', 'img/edu3.jpg', 'img/edu4.jpg', 'img/edu5.jpg']
let image_idx = 0

function slide(idx) {
    $('.gallery .show .content').html(`<img src="${images[idx]}" alt="image_${idx}" />`)
    if(idx == 0) { $('.gallery .show .arrow:first-child').css('color', '#aaa') } else { if(idx == images.length-1) { $('.gallery .show .arrow:last-child').css('color', '#aaa')} else { $('.gallery .show .arrow:first-child').css('color', '#000'); $('.gallery .show .arrow:last-child').css('color', '#000') } }
}

$('.arrow:first-child').on('click', function() {
    if(image_idx >= 1 && image_idx < images.length) {
        image_idx--
        slide(image_idx)
    }
})

$('.arrow:last-child').on('click', function() {
    if(image_idx >= 0 && image_idx < images.length-1) {
        image_idx++
        slide(image_idx)
    }
})

slide(image_idx)

/* ex_3 */

// hidden default

$(`.info .info_block`).find('p').slideToggle()

$('.info .info_block h3').on('click', function() {
    let index = $('.info .info_block h3').index(this)
    $(`.info .info_block:eq(${index})`).find('p').slideToggle()
})

/* ex_4 */

let news = [
    {"name": "What is Ipsum Dollor?", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 2", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 3", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 4", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 5", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 6", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 7", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 8", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 9", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 10", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 11", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 12", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 13", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 14", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 15", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 16", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 17", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
    {"name": "What is Ipsum Dollor? 18", "about": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae debitis hic deleniti iste odio, itaque dolore quaerat quibusdam reprehenderit expedita tenetur temporibus consequuntur maiores, eum numquam ducimus velit commodi!"},
]

let news_index = 0
let news_offest = 5

function show_news(index, offset) {
    let news_tpl = ``
    for(let i = index; i < offset; i++) {
        if(i == news.length) { $('#load_news').remove() }
        if(news[i]) {
            news_tpl += `
            <div class="list">
                <div class="name">${news[i].name}</div>
                <div class="about">${news[i].about}</div>
            </div>
            `
        }
    }
    return news_tpl
}

function load() {
    let content = ``;
    content = show_news(news_index, news_offest)
    $('.news').append(content)
    news_index = news_offest
    news_offest = news_offest + 5
}

load() // default

$('#load_news').on('click', function() {
    load()
})


/* ex_5 */

function generateTable(firstday, days) {
    let table = ``
    let days_name = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SUT', 'SUN']
    let counter_days = 1
    let filled = false

    for(let i = 0; i < days_name.length; i++) {
        table += `<th>${days_name[i]}</th>`
    }

    const calendar = (firstday >= 5) ? 6 : 5;

    for(let i = 0; i < calendar; i++) {
        table += `<tr>`
        for(let m = 0; m < days_name.length; m++) {
            if(i == 0 && m < firstday-1) {
                table += `<td></td>`
            } else { filled = true }
            if(filled == true) {
                if(counter_days <= days) {
                    table += `<td>${counter_days}</td>`
                    counter_days++
                } else {
                    table += `<td></td>`
                }
            }
        }
        table += `</tr>`
    }
    return table
}

$('#ex5_gen').on('click', function() {
    let get_month = $('#ex5_month').val()
    let get_year = $('#ex5_year').val()
    let get_days = new Date(get_year, get_month, 0).getDate()
    let first_day = new Date(get_year, get_month, 1-get_days).getDay()
    //console.log(new Date(get_year, get_month, 1-get_days).toDateString())
    let table_tpl = generateTable(first_day, get_days)
    $('.calendar_table').html(`<table border='1' style="text-align: center; margin: 1vw;">${table_tpl}</table>`)
})

/* ex_6 */

let get_all_li = $('.links ul li')

for(let i = 0; i < get_all_li.length; i++) {
    let act_li = get_all_li[i]
    //console.log($(act_li).text())
    if($(act_li).text().indexOf("http") != -1) {
        $(act_li).find('a').css('border-bottom', '1px dotted #534895')
    }
}

/* ex_7 */

let actual_book = null
let indexes = []
let index = 0
let shift_first = -1

function clear_all(indexes) {
    indexes.forEach(element => {
        $(`.books li:eq('${element}')`).css('background', 'inherit')
        $(`.books li:eq('${element}')`).attr('data-active', "0")
    })
    indexes.slice(1, indexes.length)
}

$('.books li').on('click', function(e) {
    if(e.ctrlKey) {
        let status = $(this).attr('data-active')
        index = $(this).index()
        if(parseInt(status) == 0) {
            indexes.push(index)
            $(this).attr('data-active', "1")
            $(this).css('background', "#ffa984")
            shift_first = index
        } else {
            indexes.filter(value => {
                value != index
            })
            $(this).attr('data-active', "0")
            $(this).css('background', "inherit")
            shift_first = -1
        }
    } else if(e.shiftKey) {
        /* dont corrent only one way down, after fix */
        index = $(this).index()
        clear_all(indexes)
        if(shift_first != -1) {
            if(shift_first != index) {
                for(var i = shift_first; i <= index; i++) {
                    indexes.push(i)
                    $(`.books li:eq('${indexes[i]}')`).attr('data-active', "1")
                    $(`.books li:eq('${indexes[i]}')`).css('background', "#ffa984")
                }
                shift_first = -1
            }
        } else {
            shift_first = index
        }
    } else {
        let status = $(this).attr('data-active')
        index = $(this).index()
        if(parseInt(status) == 0) {
            clear_all(indexes)
            indexes.push(index)
            $(this).attr('data-active', "1")
            $(this).css('background', "#ffa984")
            shift_first = index
        } else {
            indexes.filter(value => {
                value != index
            })
            $(this).attr('data-active', "0")
            $(this).css('background', "inherit")
            shift_first = -1
        }
    }
})

/* ex_8 */

let pressed = 0

$(document).bind("keyup keydown", function(e) {
    //console.log(e.which)
    /* keys = [219] and 221 */
    if(e.shiftKey && e.which == 219) {
        if(pressed == 0) {
            pressed++
            let get_html_to_text = $('.key').html()
            $('.key').replaceWith(`<textarea class="key">${get_html_to_text}</textarea>`)
        }
    }
    if(e.shiftKey && e.which == 221) {
        if(pressed == 1) {
            pressed--
            let get_text_to_html = $('.key').val()
            $('.key').replaceWith(`<div class="key">${get_text_to_html}</div>`)
        }
    }
})

/* ex_9 */

var people = [
    {
        "name":"Aleksandr",
        "lastname":"Danilov",
        "age": 23,
        "company":"TellarionDev"
    },
    {
        "name":"Mark",
        "lastname":"Zuckerberg",
        "age": 34,
        "company":"Facebook"
    },
    {
        "name":"Bill",
        "lastname":"Gates",
        "age": 62,
        "company":"Microsoft"
    },
    {
        "name":"Larry",
        "lastname":"Page",
        "age": 45,
        "company":"Google"
    },
    {
        "name":"Timothy",
        "lastname":"Cock",
        "age": 57,
        "company":"Apple"
    },
]

let people_sort = []

for(let i = 0; i < people; i++) {
    people_sort[i] = false
}

function view_table(sort) {
    let generate_table_tr = ``
    people_sort[sort] = (people_sort[sort] == false) ? true : false
    switch(sort) {
        case 0: {
            if(people_sort[sort] == true) {
                people.sort(function(a, b) { return a.name.length - b.name.length } )
            } else if(people_sort[sort] == false) {
                people.sort(function(a, b) { return a.name.length - b.name.length } ).reverse()
            }
        } break;
        case 1: {
            if(people_sort[sort] == true) {
                people.sort(function(a, b) { return a.lastname.length - b.lastname.length } )
            } else if(people_sort[sort] == false) {
                people.sort(function(a, b) { return a.lastname.length - b.lastname.length } ).reverse()
            }
        } break;
        case 2: {
            if(people_sort[sort] == true) {
                people.sort(function(a, b) { return a.age - b.age } )
            } else if(people_sort[sort] == false) {
                people.sort(function(a, b) { return a.age - b.age } ).reverse()
            }
        } break;
        case 3: {
            if(people_sort[sort] == true) {
                people.sort(function(a, b) { return a.company.length - b.company.length } )
            } else if(people_sort[sort] == false) {
                people.sort(function(a, b) { return a.company.length - b.company.length } ).reverse()
            }
        } break;
        default: {

        } break;
    }

    people.forEach((man) => {
        generate_table_tr += `<tr><td>${man.name}</td><td>${man.lastname}</td><td>${man.age}</td><td>${man.company}</td></tr>`
    })

    $('#people').html(generate_table_tr)
}

$('.sry th').on('click', function() {
    let get_index = $(this).index()
    view_table(get_index)
})

view_table()
