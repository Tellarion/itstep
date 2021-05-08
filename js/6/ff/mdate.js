class mDate {
    constructor(hour, mins, seconds) {
        if(hour >= 0 && hour <= 23 && mins >= 0 && mins <= 60 && seconds >= 0 && seconds <= 60) {
            this.hour = hour
            this.mins = mins
            this.seconds = seconds
        } else {
            this.hour = 0
            this.mins = 0
            this.seconds = 0
            console.log('incorrent datetime h (0-23), m (0-60), s (0-60)')
        }
    }
    
    printTime() {
        return `${this.hour}:${this.mins}:${this.seconds}`
    }

    getTimeSeconds() {
        let get_hours = 60 * 60 * (this.hour)
        let get_mins = 60 * this.mins
        let get_seconds = this.seconds
        return get_hours + get_mins + get_seconds
    }

    setTimeSeconds(sec) {
        this.hour = Math.floor((sec / 3600) % 24)
        this.mins = Math.floor((sec / 60) % 60)
        this.seconds = sec % 60
        return true
    }

    mSeconds(sec) {
        let get_actual_time = this.getTimeSeconds()
        get_actual_time += sec
        this.setTimeSeconds(get_actual_time)
        return true
    }

    mMinutes(mins) {
        let get_actual_time = this.getTimeSeconds()
        get_actual_time += Math.floor((mins * 60))
        this.setTimeSeconds(get_actual_time)
        return true
    }

    mHours(hour) {
        let get_actual_time = this.getTimeSeconds()
        get_actual_time += Math.floor((hour * 3600))
        this.setTimeSeconds(get_actual_time)
        return true
    }
}

module.exports = mDate;