class mdrobs {
    constructor(drobs) {
        this.drob_1 = drobs[0]
        this.drob_2 = drobs[1]
        this.drob_3 = {'chisl': 0, 'znam': 0}
    }

    gcd(n, m) {
        return m == 0 ? n : this.gcd(m, n % m)
    }
      
    nok(n, m) {
        return n * m / this.gcd(n, m)
    }

    calcPlus() {
        if(this.drob_1.znam == this.drob_2.znam) {
            this.drob_3.chisl = this.drob_1.chisl + this.drob_2.chisl
            this.drob_3.znam = this.drob_1.znam
        } else if(this.drob_1.znam != this.drob_2.znam) {
            // приводим дроби к общему знаменателю/кратному (НОК)
            this.drob_3.znam = this.nok(this.drob_1.znam, this.drob_2.znam)
            this.drob_1.chisl = (this.drob_3.znam / this.drob_1.znam) * this.drob_1.chisl
            this.drob_2.chisl = (this.drob_3.znam / this.drob_2.znam) * this.drob_2.chisl
            this.drob_3.chisl = this.drob_1.chisl + this.drob_2.chisl
        }
        return this.drob_3
    }

    calcMinus() {
        if(this.drob_1.znam == this.drob_2.znam) {
            this.drob_3.chisl = this.drob_1.chisl - this.drob_2.chisl
            this.drob_3.znam = this.drob_1.znam
        } else if(this.drob_1.znam != this.drob_2.znam) {
            // приводим дроби к общему знаменателю/кратному (НОК)
            this.drob_3.znam = this.nok(this.drob_1.znam, this.drob_2.znam)
            this.drob_1.chisl = (this.drob_3.znam / this.drob_1.znam) * this.drob_1.chisl
            this.drob_2.chisl = (this.drob_3.znam / this.drob_2.znam) * this.drob_2.chisl
            this.drob_3.chisl = this.drob_1.chisl - this.drob_2.chisl
        }
        return this.drob_3
    }

    calcMinus() {
        if(this.drob_1.znam == this.drob_2.znam) {
            this.drob_3.chisl = this.drob_1.chisl - this.drob_2.chisl
            this.drob_3.znam = this.drob_1.znam
        } else if(this.drob_1.znam != this.drob_2.znam) {
            // приводим дроби к общему знаменателю/кратному (НОК)
            this.drob_3.znam = this.nok(this.drob_1.znam, this.drob_2.znam)
            this.drob_1.chisl = (this.drob_3.znam / this.drob_1.znam) * this.drob_1.chisl
            this.drob_2.chisl = (this.drob_3.znam / this.drob_2.znam) * this.drob_2.chisl
            this.drob_3.chisl = this.drob_1.chisl - this.drob_2.chisl
        }
        return this.drob_3
    }
    calcProd() {
        this.drob_3.chisl = this.drob_1.chisl * this.drob_2.chisl
        this.drob_3.znam = this.drob_1.znam * this.drob_2.znam
        return this.drob_3
    }
    calcDivision() {
        this.drob_3.chisl = this.drob_1.chisl * this.drob_2.znam
        this.drob_3.znam = this.drob_1.znam * this.drob_2.chisl
        return this.drob_3
    }
}

module.exports = mdrobs;