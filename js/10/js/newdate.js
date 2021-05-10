class ExtendedDate extends Date {
    constructor() {
        super()
    }
    
    get_day_and_month() {
        document.write(this.toLocaleString('ru', { month: 'long', day: 'numeric' }))
    }

    check_dates(date) {
        return (date >= this) ? true : false
    }

    check_ves() {
        return (!this.getFullYear() % 4) ? 'високосный' : 'не високосный'
    }

    next_date() {
        let date = this
        date = date.setSeconds(86400)
        date = new Date(date)
        return date
    }
}