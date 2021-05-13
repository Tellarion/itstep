/* ex_1 */

$('#ex_1').keyup(() => {

    var valid = /^[a-zA-Z\s]*$/.test($('#ex_1').val()),
    val = $('#ex_1').val();

    if(!valid){
        $('#ex_1').val(val.substring(0, val.length - 1))
    }

})

/* ex_2 */

$('#open_modal').on('click', () => {
    console.log('test')
    show_modal()
})

var status_modal = false

function show_modal() {
    if(status_modal == false) {
        console.log('test2')
        $('.modal').css('display', 'flex')
        $('.form .text').html('<h3>Hello from Modal Window!</h3>')
        $('.form .actions').html('<button id="close_modal">Close</button>')
        status_modal = true
        $('#close_modal').on('click', () => {
            if(status_modal == true) {
                $('.modal').css('display', 'none')
                status_modal = false
            }
        })
    }
}

/* ex_3 */

// https://www.vectorstock.com/royalty-free-vector/football-field-top-view-vector-7671049 (gaystvo platnoe)

// get center

let get_width = $('#ex_3').width()
let get_height = $('#ex_3').height()
function set_position() {
    let center_t = get_height / 2.2
    if(get_width >= 2000) {
        center_t = get_height / 2
    }
    let center_l = get_width / 2
    let get_sock = $('.pong').width() / 2
    center_l = center_l - get_sock
    $('.pong').css('top', `${center_t}px`)
    $('.pong').css('left', `${center_l}px`)
}
set_position()

$('.football').bind('click', function (e) {

    //var offset = $('.football').offset()

    // why 100? (half by 200px) (200px = image ball)

    let x = e.clientX - 100;
    let y = e.clientY - 100;

    // if outside return to center

    let right_calc_engl = get_width - 200 // 200px

    if(x >= -50 && y >= -50 && x <= right_calc_engl) {
    
        $('.pong').animate({
            top: `${y}px`,
            left: `${x}px`
        }, 2000, () => {
            console.log('done')
        })

    } else {
        set_position()
    }
})

/* ex_4 */

let sem_status = 0

function next_sem() {
    if(sem_status != 2) {
        sem_status++
    } else {
        sem_status = 0
    }

    let actual_color = ``

    switch(sem_status) {
        case 1: actual_color = '#ff9600'; break;
        case 2: actual_color = '#ff6767'; break;
        default: actual_color = '#37b937'; break;
    }

    $(`.semf .circle:eq(${sem_status})`).css('background', actual_color)
    $(`.semf .circle:eq(${sem_status-1})`).css('background', '#8a8a8a')
    $(`.semf .circle:eq(${sem_status+1})`).css('background', '#8a8a8a')
}

$('#next_sem').on('click', () => {
    next_sem()  
})

next_sem()

/* ex_5 */

$('.ex5 ul li').on('click', function() {
    let get_index = $(this).index(), get_all_li = $('.ex5 ul li').length
    for(let i = 0; i < get_all_li; i++) { $(`.ex5 ul li:eq(${i})`).css('background', 'inherit') }
    $(`.ex5 ul li:eq(${get_index})`).css('background', '#ffa984')
})

/* ex_6 */

// it not ideal variant, but ok

let barch = ['block_1', 'block_2']

for(let i = 0; i < barch.length; i++) {
    $(`.ex6 .${barch[i]} button`).hover(function() {
        let get_block_top = $(`.ex6 .${barch[i]}`).offset().top
        let get_button = $(`.ex6 .${barch[i]} button`).offset().top
        console.log(get_block_top)
        console.log(get_button)
        // 40 height
        let get_margin_top = 0
        get_margin_top = (get_block_top+50 >= get_button) ? 26 : -32
        $(`.ex6 .${barch[i]} button`).before(`<div class="tooltip" style="margin-left: 0px; margin-top: ${get_margin_top}px;">Tool tip ${i+1}</div>`)
    }, function() {
        $('.tooltip').remove()
    })
}

/* ex_7 */

$('.ex7 ul ul li').on('click', function() {
    $(this).find('ul').slideToggle();
})

$('.ex7 ul ul li').hover(function() {
    $(this).css('font-weight', '600')
    $(this).find('ul').css('font-weight', '400')
}, function() {
    $(this).css('font-weight', '400')
    $(this).find('ul').css('font-weight', '400')
})

/* ex_8 */

// https://stackoverflow.com/questions/8960193/how-to-make-html-element-resizable-using-pure-javascript

var p = document.getElementById('ex8')

p.addEventListener('click', function init() {
    p.removeEventListener('click', init, false);
    p.className = p.className + 'resizable';
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    p.appendChild(resizer);
    resizer.addEventListener('mousedown', initDrag, false);
}, false);

var startX, startY, startWidth, startHeight;

function initDrag(e) {
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
   p.style.width = (startWidth + e.clientX - startX) + 'px';
   p.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}