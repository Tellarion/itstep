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
    let center_t = get_height / 2.2;
    if(get_width >= 2000) {
        center_t = get_height / 2;
    }
    let center_l = get_width / 2;
    let get_sock = $('.pong').width() / 2
    center_l = center_l - get_sock
    $('.pong').css('top', `${center_t}px`)
    $('.pong').css('left', `${center_l}px`)
}
set_position()

$('.football').bind('click', function (e) {

    //var offset = $('.football').offset();

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