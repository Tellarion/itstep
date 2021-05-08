const cars = require('./ff/cars')
const mdrobs = require('./ff/math')
const mdate = require('./ff/mdate')

/* first ex */

cars.add('Lada', '10', 2005, 60)
cars.add('Lada', '12', 2003, 65)

console.log(cars.show())

let get_car = cars.data()[0]

const delay_km = 500

console.log(cars.calcDist(get_car, delay_km))

/* second ex */

let drobs = []
drobs[0] = {'chisl': 3, 'znam': 7}
drobs[1] = {'chisl': 2, 'znam': 6}

const mdrobs_init = new mdrobs(drobs)

console.log('\nСложение:\n')
console.log(mdrobs_init.calcPlus())
console.log('\nВычитание:\n')
console.log(mdrobs_init.calcMinus())
console.log('\nПроизведение:\n')
console.log(mdrobs_init.calcProd())
console.log('\nДеление:\n')
console.log(mdrobs_init.calcDivision())

// mdrobs_init.gcd(n, m)

/* коммент: в качестве последней функцией по задаче, используется функция gcd для нахождения НОД */
/* я ее не использовал для конечного результата, только для нахождения кратного числа по всем функциям, где необходимо (последнее условие задачи так же выполнено) */

/* third ex */

let mydate = new mdate(5,59,10)

console.log(mydate.mSeconds(60))
console.log(mydate.mMinutes(5))
console.log(mydate.mHours(3))
console.log(mydate.printTime())

// =)

