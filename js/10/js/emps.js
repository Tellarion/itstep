class Employee {
    constructor(workers) {
        this.workers = workers
    }

    generateTpl() {
        let table_emp = `<table border="true"><th>#</th><th>И. Ф. О</th><th>Отдел</th><th>Зарплата</th><th>День рождения</th>`
        for(let i = 0; i < Object.keys(this.workers[0]).length; i++) {
            table_emp += `<tr><td>${i+1}</td><td>${this.workers[i].name}</td><td>${this.workers[i].office}</td><td>${this.workers[i].salary} RUB</td><td>${this.workers[i].dbh}</td></tr>`
        }
        table_emp += `</table>`
        return table_emp
    }
}

class EmpTable extends Employee {
    constructor(workers, styles) {
        if(workers != null) { super(workers) }
        if(styles) { super(); this.styles = styles }
    }

    getStyles() {
        let keys = Object.keys(this.styles)
        let values = Object.values(this.styles)
        let gen_styles = `\n\ttable {\n`
        for(let i = 0; i < Object.entries(this.styles).length; i++) {
            gen_styles += `\t\t${keys[i]}:${values[i]};\n`
        }
        gen_styles += `\t}\n`
        return gen_styles
    }

    getHtml() {
        return this.generateTpl()
    }
}

class StyledEmpTable extends EmpTable {
    constructor(styles) {
        super(null, styles)
    }
}