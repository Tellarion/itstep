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
    console.log(idx)
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

$(`.info .info_block`).find('p').slideToggle();

$('.info .info_block h3').on('click', function() {
    let index = $('.info .info_block h3').index(this)
    console.log(index)
    $(`.info .info_block:eq(${index})`).find('p').slideToggle();
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

$('#load_news').on('click', function() {
    load()
})


/* ex_5 */

function generateTable(firstday, days) {
    let table = ``
    let days_name = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SUT', 'SUN']
    let counter_days = 1
    for(let i = 0; i < days_name.length; i++) {
        table += `<th>${days_name[i]}</th>`
    }
    for(let i = 0; i < 5; i++) {
        table += `<tr>`
        for(let m = 0; m < days_name.length; m++) {
            if(i == 0 && m < firstday) {
                table += `<td></td>`
            } else {
                if(counter_days >= days) {
                    table += `<td></td>`
                } else {
                    table += `<td>${counter_days}</td>`
                }
                if(counter_days < days) { counter_days++ }
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
    let first_day = new Date(get_year, get_month, 1).getDay()
    console.log(first_day)
    let table_tpl = generateTable(first_day, get_days)
    $('.calendar_table').html(`<table border='1' style="text-align: center;">${table_tpl}</table>`)
})