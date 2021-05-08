let cars = []
let cars_count = 0

module.exports = {
    data: () => {
        return cars;
    },
    views: () => {
        return (cars.length >= 1) ? cars : '[cars] length = 0'
    },
    show: () => {
        let inf = `=== [ Автомобили ] ===\n`
        cars.forEach(car => {
            inf += `Издатель: ${car.maker}; Модель и год: [${car.model}-${car.year}г]; Средняя скорость: [${car.speed}] км/ч; \n`
        })
        return inf
    },
    add: (maker, model, year, speed) => {
        cars[cars_count] = {}
        cars[cars_count].maker = maker
        cars[cars_count].model = model
        cars[cars_count].year = year
        cars[cars_count].speed = speed
        cars_count++
        return true
    },
    calcDist: (car, dist) => {
        let calc_math = []
        calc_math[0] = parseInt(dist / car.speed)
        calc_math[1] = parseInt(calc_math / 4)
        calc_math[2] = calc_math[0] + calc_math[1]
        return `Водитель проедет на ${car.model} расстояние в ${dist} км за ${calc_math[2]} ч. с отдыхом ${calc_math[1]} раза`
    }
}