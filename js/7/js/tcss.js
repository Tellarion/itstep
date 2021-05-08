class Tcss {
    
    constructor(css, text) {
        this.css = css
        this.text = text
    }

    getRender() {
        let output = `<h3>Ex #3</h3>`
        let generate_css = ``
        let array = []
        array = Object.entries(this.css[this.css.length-1])
        for(let i = 0; i < array.length; i++) {
            for(let m = 0; m < 2; m++) {
                if(m == 0) {
                    generate_css += `${array[i][m]}:`
                } else if (m == 1) {
                    generate_css += `${array[i][m]};`
                }
            }
        }
        output += `<p style="${generate_css}">${this.text}</p>`
        return output
    }
    
}

var my_css = [{"font-size":"14px", "color":"red", "text-transform": "uppercase", "font-size":"24px"}]

var tcss = new Tcss(my_css, "Привет, Академия Шаг, это задание номер три!")

var get_tcss = tcss.getRender()

let get_element_3 = document.getElementById('ex_3')
get_element_3.innerHTML = get_tcss