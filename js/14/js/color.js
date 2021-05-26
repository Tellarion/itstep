/* Color Generator */
/* доделаю позже, устал */
/* regx */
/* cookie */

let colors = []

function printPreview() {
    $('.blocks').html("")
    let gblock = ``
    colors.forEach(color => {
        let style_bg = ``
        let style_type = ``
        style_type = (color.type == 0) ? `RGB` : (color.type == 1) ? `RGBA` : `HEX`
        style_bg = (color.type == 0) ? `rgb(${color.code})` : (color.type == 1) ? `rgba(${color.code})` : `#${color.code}`
        gblock += `
        <div class="block" style="background-color: ${style_bg};">
            <div class="bg">
                <div class="color">${color.color}</div>
                <div class="type">${style_type}</div>
                <div class="value">${color.code}</div>
            </div>
        </div>
        `
    })
    $('.blocks').append(gblock)
}

$('#save').on('click', function(e) {
    event.preventDefault()
    let json = {
        "color": $('#color').val(),
        "type": $('#type').val(),
        "code": $('#code').val()
    }
    colors.push(json)
    printPreview()
})