// ex 1

$('#send_message').on('click', () => {
    let name = $('#name').val()
    let message = $('#message').val()
    let date = new Date().toLocaleString('ru')
    let generate_tpl = `
    <div class="message">
        <div class="heading">
            <div class="name">${name}</div>
            <div class="date">${date}</div>
        </div>
        <div class="about">${message}</div>
    </div>
`
    $('.messages').append(generate_tpl)
})

// ex 2
let questions = [
    {"question":"How many letters are there in the world `Hello`?", "asks": ['5', '2', '3', '4'], "right": 0},
    {"question":"How many letters are there in the world `World`?", "asks": ['1', '2', '3', '5'], "right": 3},
    {"question":"How many letters are there in the world `Hi`?", "asks": ['2', '6', '3', '4'], "right": 0},
    {"question":"How many letters are there in the world `Test`?", "asks": ['4', '2', '3', '1'], "right": 0}
]

let scores = 0
let actual_question = 0
let all_questions = questions.length

function view_question() {
    let generate_form = `${actual_question+1}) ${questions[actual_question].question}`
    for(let i = 0; i < questions[actual_question].asks.length; i++) {
        generate_form += `<p><input type="radio" id="question_${actual_question}" name="question" value="${questions[actual_question].asks[i]}" /> ${questions[actual_question].asks[i]}</p>`
    }
    if(actual_question == all_questions-1) {
        generate_form += `<p><button id="next_q">Finish</button></p>`
    } else {
        generate_form += `<p><button id="next_q">Next</button></p>`
    }
    $('#questions').html(generate_form)

    $('#next_q').on('click', () => {
        let get_value = $(`#question_${actual_question}`).val()
        if(get_value == questions[actual_question].asks[questions[actual_question].right]) {
            scores++
        }
        actual_question++
        if(actual_question == all_questions) {
            $('#questions').html(`Result: ${scores} correct answers to ${all_questions} questions.`)
        } else {
            view_question()
        }
    })
}

view_question()

// ex 3

let styles = {}
styles.bold = false
styles.underline = false
styles.italics = false
styles.left = false
styles.right = false
styles.justify = false

$('#editor').on('click', () => {
    let value = $('#editor_text').val()
    let style = ``
    style += ($('#is_bold').is(":checked") == true) ? `font-weight: 700;` : ``
    style += ($('#is_underline').is(":checked") == true) ? `text-decoration: underline;` : ``
    style += ($('#is_italics').is(":checked") == true) ? `font-style: italic;` : ``
    let get_align = $('input[name="align"]:checked').val()
    style += (get_align) ? `text-align: ${get_align};` : ``
    //style += ()
    $('.show').html(`<div style="${style}">${value}</div>`)
})

// ex 4

$('.preview_select').on('click', function () {
    let name = $(this).data('name')
    // why in tech ex only one value (well ok)
    //let coast = $(this).data('coast')
    $('#preview_quantity').val(1)
    $('#preview_name').val(name)
    $('#preview_delivery').val('st. Dalnyaa')
    $('#preview_author').val('Aleksandr Danilov')
    $('#preview_comment').val('...')
    $('#preview_date').val('2021-05-23')
    //$('#preview_coast').val(coast)
})

$('#buy').on('click', function() {
    let name = $('#preview_name').val()
    let name_order = $('#preview_author').val()
    let date = $('#preview_date').val()
    let delivery_to = $('#preview_delivery').val()
    $('.wrapper_in').html(`<p style="text-align: center;">${name_order}, thanks for order!</p><p style="text-align: center;">Book "${name}" will be delivered on ${date} to ${delivery_to}.</p>`)
})

// ex 5

let groups = ['Group 1', 'Group 2', 'Group 3']
let students = ['Danilov A.V', 'Vetrova S.V', 'Ustuhin O.V', 'Petrov D.N', 'Dementyev A.D']
var storage = []

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let all_data_storage = []

function load_groups_configure(groups, students) {
    // generate lessons emptys
    for(let i = 0; i < groups.length; i++) {
        storage[i] = {}
        storage[i].name = groups[i]
        let lessons = []
        let empty_itter = 0
        let lessons_need = rand(1, 99)
        while(true) { if(empty_itter != lessons_need) { 

            lessons[empty_itter] = {}
            
            lessons[empty_itter].theme = 'JS. Document Object Model #' + empty_itter

            let right_students = []

            students.forEach((student, index) => {
                right_students[index] = {}
                right_students[index].name = student
                right_students[index].active = false
            })
            lessons[empty_itter].members = right_students

            empty_itter++

            continue

        } else { break; } }
        storage[i].lessons = lessons
    }
}

function load_interface_default() {
    let generate_html = `Group: <select id="sel_group"><option value="default">Select Group</option>`
    storage.forEach((group, index) => {
        generate_html += `<option value="${index}">${group.name}</option>`
    })
    generate_html += `</select>`
    $('.lesson').html(generate_html)
    $("#sel_group").change(function() {
        generate_html = ""
        let value = $(this).val()
        if(value != "default") {
            generate_html += `Lesson: <select id="sel_lesson"><option value="default">Select Lesson_</option>`
            storage[value].lessons.forEach((lesson, index) => {
                generate_html += `<option value="${index}">${index}</option>`
            })
            generate_html += `</select><div class="info"></div>`
            $('.lesson').append(generate_html)
            $("#sel_lesson").change(function() {
                generate_html = ""
                let value_2 = $(this).val()
                if(value_2 != "default") {
                    let act_array = []
                    let act_lesson = storage[value].lessons[value_2]
                    console.log(act_lesson)
                    generate_html += `<hr><label>Topic:</label><input type="text" id="lesson_name" data-group="${value}" data-lesson="${value_2}" value="${act_lesson.theme}" /><table border="1" style="text-align: center;"><th>Name</th><th>Is present</th>`
                    act_lesson.members.forEach((student, index) => {
                        let gen_checkbox = (student.active == false) ? `<input type="checkbox" value="${index}" data-group="${value}" data-lesson="${value_2}" />` : `<input type="checkbox" value="${index}" data-group="${value}" data-lesson="${value_2}" checked/>`
                        generate_html += `<tr><td>${student.name}</td><td>${gen_checkbox}</td></tr>`
                        act_array[index] = student
                    })
                    generate_html += `</table><p style="text-align: center;">Storage auto-saved to array on Change event</p>`
                    $('.lesson .info').html(generate_html)
                    $('.lesson .info input[type="text"]').change(function() {
                        let get_actual_group = $(this).data('group')
                        let get_actual_lesson = $(this).data('lesson')
                        storage[get_actual_group].lessons[get_actual_lesson].theme = $(this).val()
                    })
                    $('.lesson .info input[type="checkbox"]').change(function() {
                        let get_actual_group = $(this).data('group')
                        let get_actual_lesson = $(this).data('lesson')
                        let get_actual_person = $(this).val()
                        if($(this).is(':checked')) { storage[get_actual_group].lessons[get_actual_lesson].members[get_actual_person].active = true } else { storage[get_actual_group].lessons[get_actual_lesson].members[get_actual_person].active = false }
                        console.log(storage)
                    })
                }
            })
        }
        $("#sel_group").attr('disabled', true)
    })
}

load_groups_configure(groups, students)

load_interface_default()

// ex 6

let directions = [{"direction":"Krasnodar - Moscow", "price": 2500, "seat": 28},{"direction":"Moscow - Krasnodar", "price": 3000, "seat": 24}]
let my_tickets = []
let counter_sum = 0
let counter_define = 0
let counter_seat = 0

let order = `Direction: <select id="direction">`
directions.forEach((ticket, index) => {
    order += `<option value="${index}" data-price="${ticket.price}" data-seat="${ticket.seat}">${ticket.direction}</option>`
})
order += `</select> Date: <input type="date" id="direction_date" value="2021-05-23" /> <button id="search">Search</button><div class="ticket_info"></div>`

$('.order').html(order)

$('#search').on('click', function() {
    counter_sum = 0
    counter_define = 0
    counter_seat = 0
    let selected = $("#direction option:selected")
    let seat = selected.data('seat')
    let tinfo = selected.text()
    let gdate = $('#direction_date').val()
    counter_define = selected.data('price')
    let generate_seat = `<div class="seat">`
    let positions = -1
    for(let i = 0; i < seat; i++) {
        if(positions == -1) {
            generate_seat += `<div class="block">`
            positions++
        }
        if(positions >= 0 && positions <= 3) {
            generate_seat += `<div class="item"><input type="checkbox" class="seatme"/> ${i+1}</div>`
            positions++
        } else {
            generate_seat += `</div>`
            positions = -1
        }
    }
    generate_seat += `</div><p>Total Price: <span id='all_coast'>${counter_sum}</span> RUB.</p><button id="book">Book</button>`
    $('.ticket_info').html(generate_seat)
    $('.ticket_info input[type="checkbox"]').change(function() {
        if($(this).is(':checked')) { counter_sum = counter_sum + counter_define; counter_seat++; } else { counter_sum = counter_sum - counter_define; counter_seat--; }
        $('#all_coast').text(counter_sum)
    })
    $('#book').on('click', function() {
        $('.ticket_info').html("<p>Good Luck! Ticket is book!</p>")
        $('#tickets_storage').append(`<tr><td>${tinfo}</td><td>${gdate}</td><td>${counter_sum} RUB</td><td>${counter_seat}</td></tr>`)
    })
})