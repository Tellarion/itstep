class Check {
    
    constructor(arr) {
        this.items = arr
        this.compareItems()
        console.log(this.items)
    }

    compareItems() {
        this.items.map(data => { data.all_price = data.price_one * data.has; data.price_sr = data.price_one / data.has })
    }

    getInfoAllItemsPrice() {
        let all_price = 0
        this.items.map(data => {
            all_price += data.all_price
        })
        return all_price
    }

    getInfo() {
        let output = `<h3>Ex #2</h3><table border=1 style="text-align: center;"><th>#</th><th>Название</th><th>Куплено</th><th>Цена за штуку</th><th>Средняя стоимость</th>`
        this.items.forEach(function(item, index) {
            output += `<tr><td>${index+1}</td><td>${item.name}</td><td>${item.has} шт.</td><td>${item.price_one} RUB</td><td>${item.price_sr} RUB</td></tr>`
        })
        let all_price = this.getInfoAllItemsPrice()
        let get_item_high = this.items.reduce((max, min) => max.all_price > min.all_price ? max : min)
        output += `</table>`
        output += `<h5>Самая дорогая покупка = ${get_item_high.name} [${get_item_high.all_price} RUB]</h5><h4>Общая сумма покупок: ${all_price} RUB</h4>`
        return output
    }
    
}

var my_items = [{name: "Ручка", has: 10, price_one: 30}, {name: "Пылесос", has: 1, price_one: 2000}, {name: "Монитор", has: 1, price_one: 22000}, {name: "Чайник", has: 5, price_one: 3000}, {name: "Сигареты", has: 500, price_one: 200}]

var check = new Check(my_items)

var get_check_info = check.getInfo()

let get_element_2 = document.getElementById('ex_2')
get_element_2.innerHTML = get_check_info