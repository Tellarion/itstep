class Shop {
    
    constructor(arr) {
        this.items = arr
        this.items.forEach(data => {
            data.isBuy = (data.has >= data.needed) ? true : false
        })
        this.compareItems()
    }

    compareItems() {
        this.items.map(data => { return data.isBuy = (data.has >= data.needed) ? true : false })
        this.items.sort(function(a,b) { return a.isBuy - b.isBuy })
    }

    aCount(name) {
        let find_array = [...this.items]
        let clear_array = []
        clear_array = find_array.filter(item => { return (item.name == name) ? item : null })
        clear_array[0].has++
        this.items.map(data => {
            if(data.name == name) { data = clear_array }
        })
        this.compareItems()
    }

    dCount(name) {
        let find_array = [...this.items]
        let clear_array = []
        clear_array = find_array.filter(item => { return (item.name == name) ? item : null })
        if(clear_array[0].has >= 1) clear_array[0].has--
        this.items.map(data => {
            if(data.name == name) { data = clear_array }
        })
        this.compareItems()
    }

    getInfo() {
        let output = `<h3>Ex #1</h3><table border=1 style="text-align: center;"><th>#</th><th>Название</th><th>Количество</th><th>Покупка завершена?</th>`
        this.items.forEach(function(item, index) {
            output += `<tr><td>${index+1}</td><td>${item.name}</td><td>${item.has}/${item.needed}</td><td>${item.isBuy}</td></tr>`
        })
        output += `</table>`
        return output
    }
    
}

var products = [{name: "Ручка", has: 0, needed: 1}, {name: "Молоко", has: 5, needed: 5}, {name: "Хлеб", has: 2, needed: 2}, {name: "Торт", has: 1, needed: 1}, {name: "Печенье", has: 10, needed: 10}, {name: "Песок", has: 13, needed: 15}]

var shop = new Shop(products)

// add count

shop.aCount('Ручка')

shop.dCount('Песок')

// get info
var get_shop_items = shop.getInfo()

let get_element = document.getElementById('ex_1')
get_element.innerHTML = get_shop_items