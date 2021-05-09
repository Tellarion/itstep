class Circle {

    constructor(val1) {
        this.pi = val1
        this.radius = {r:0, d:0}
    }

    set r(value) {
        this.radius.r = value
    }

    get r() {
        return this.radius.r
    }

    get d() {
        this.radius.d = this.radius.r / this.pi
        return this.radius.d
    }

    find_s() {
        return this.pi * (this.radius.r * this.radius.r)
    }

    find_p() {
        return (2 * this.pi) * this.radius.r
    }
    
}