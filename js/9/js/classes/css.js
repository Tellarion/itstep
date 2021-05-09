class CssClass {
    constructor() {
        this.items = []
    }

    render() {
        document.getElementsByTagName('style')[0].innerHTML = ""
        let generate_css = ``
        this.items.forEach((item) => {
            console.log(item)
            generate_css += `
    .${item.item_name} {
        ${item.item_tpl}
    }`  
})
        document.getElementsByTagName('style')[0].insertAdjacentHTML('afterbegin', generate_css)
    }
    
    add(item_name, css) {
        let generate_property = ``
        if(css) {
            if(css.length >= 1) {
                for(let i = 0; i < Object.keys(css).length; i++) {
                    let first_style = Object.keys(css[i])[0]
                    let second_style = Object.values(css[i])[0]
                    let delim = ``
                    if(i == 0) { delim = "" } else { delim = `
        ` }
                    generate_property += `${delim}${first_style}: ${second_style};`
                }
            }
        }
        this.items.push({"item_name":item_name, "item_tpl":generate_property})
        this.render()
    }

    delete(name) {
        this.items = this.items.filter(item => {
            if(item.item_name != name) { return item }
        })
        this.render()
    }

    getCss() {
        return document.getElementsByTagName('style')[0].innerHTML
    }
}