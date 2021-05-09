class HtmlElement {
    
    constructor(nametag, closetag, content, attr, css) {
        this.nametag = nametag
        this.closetag = closetag
        this.content = content
        this.attr = attr
        this.css = css
        this.remember = `` // very important rope

        let get_html = this.generateHtml(this.nametag, this.closetag, this.content, this.attr, this.css, true)
        document.write(get_html)
    }

    generateHtml(nametag, closetag, content, attr, css, remember) {
        let generate_attr = ``
        if(attr) {
            if(attr.length >= 1) {
                for(let i = 0; i < Object.keys(attr[0]).length; i++) {
                    let get_attr_1 = Object.keys(attr[0])[i]
                    let get_attr_2 = Object.values(attr[0])[i]
                    if(remember == true) { this.remember = get_attr_2 }
                    let delim = ``
                    if(i == 0) { delim = "" } else { delim = " " }
                    generate_attr += `${delim}${get_attr_1}="${get_attr_2}"`
                }
            }
        }
        let generate_css = ``
        if(css) {
            if(css.length >= 1) {
                generate_css = ` style="`
                for(let i = 0; i < Object.keys(css[0]).length; i++) {
                    let first_style = Object.keys(css[0])[i]
                    let second_style = Object.values(css[0])[i]
                    let delim = ``
                    if(i == 0) { delim = "" } else { delim = " " }
                    generate_css += `${delim}${first_style}: ${second_style};`
                }
                generate_css += `"`
            }
        }
        return (closetag == false) ? `<${nametag} ${generate_attr}${generate_css}>${content}</${nametag}>` : `<${nametag} ${generate_attr}${generate_css} />`
    }

    setAttr(tag, index, attr) {
        let get_element = document.getElementsByTagName(tag)[index]
        get_element.setAttribute(Object.keys(attr)[0], Object.values(attr)[0])
    }

    setCss(tag, index, css) {
        let get_element = document.getElementsByTagName(tag)[index]
        get_element.setAttribute('style', css)
    }

    /* here clone code f1_f2, only changes insertAdjacentHTML f_ */

    afterBegindElement(rope, ropenum, nametag, closetag, content, attr, css) {
        rope = (rope) ? rope : this.remember
        ropenum = (ropenum) ? ropenum : 0
        this.nametag = nametag
        this.closetag = closetag
        this.content = content
        this.attr = attr
        this.css = css
        let get_html = this.generateHtml(this.nametag, this.closetag, this.content, this.attr, this.css, false)
        if(rope.indexOf('T') == -1) {
            let get_element = document.getElementById(rope)
            get_element.insertAdjacentHTML('afterbegin', get_html)
        } else {
            let get_tag = rope.substring(rope.indexOf('T')+1)
            let get_element = document.getElementsByTagName(get_tag)[ropenum]
            get_element.insertAdjacentHTML('afterbegin', get_html)
        }
    }

    beforeEndElement(rope, ropenum, nametag, closetag, content, attr, css) {
        rope = (rope) ? rope : this.remember
        ropenum = (ropenum) ? ropenum : 0
        this.nametag = nametag
        this.closetag = closetag
        this.content = content
        this.attr = attr
        this.css = css
        let get_html = this.generateHtml(this.nametag, this.closetag, this.content, this.attr, this.css, false)
        if(rope.indexOf('T') == -1) {
            let get_element = document.getElementById(rope)
            get_element.insertAdjacentHTML('beforeend', get_html)
        } else {
            let get_tag = rope.substring(rope.indexOf('T')+1)
            let get_element = document.getElementsByTagName(get_tag)[ropenum]
            get_element.insertAdjacentHTML('beforeend', get_html)
        }
    }

    getHtml() {
        return document.getElementById(this.remember)
    }


}