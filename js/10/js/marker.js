class Marker {
    constructor(color, ink) {
        this.color = color
        if(ink >= 0 && ink <= 100) { this.ink = ink } else { document.write('wrong percent arg') }
    }

    write(str) {
        let write_t = ``
        let array = str.split('')
        array.forEach((s) => {
            if(this.ink >= 0.5) {
                if(s != " ") {
                    this.ink -= 0.5
                }
                write_t += s
                //console.log(`end: ${this.ink} ${s}`)
                //console.log(`${write_t}`)
            }
        })
        document.write(`<p style="color: ${this.color};">${write_t}</p>`)
    }
}

class Ink extends Marker {

    constructor(color, ink) {
        super(color, ink)
        this.ink = ink
    }
    
    please(ink) {
        ink = parseInt(ink)
        let all_ink = ink + this.ink
        if(all_ink <= 100) { this.ink = all_ink } else { document.write(`many ink, sry [actual: ${this.ink}%]`) }
    }

}