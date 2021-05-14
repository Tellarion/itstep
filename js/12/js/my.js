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