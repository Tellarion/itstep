class Academy {
    
    constructor(arr) {
        this.items = arr
    }

    sortGroup_max() {
        this.items.sort(function(a, b) { return a.places - b.places })
        console.log('sort')
    }

    sortGroup_min() {
        this.items.sort(function(a,b) { return a.places + b.places })
    }

    sortGroup_names() {
        this.items.sort()
        this.items.reverse()
    }

    getInfoAll(sort) {
        if(sort == "max") {
            this.sortGroup_max()
        } else if(sort == "min") {
            this.sortGroup_min()
        } else if(sort == "names") {
            this.sortGroup_names()
        }
        console.log(this.items)
        let output = `<h3>Ex #4</h3><table border=1 style="text-align: center;"><th>#</th><th>Название</th><th>Посадочных мест</th><th>Факультет</th>`
        this.items.forEach(function(item, index) {
            output += `<tr><td>${index+1}</td><td>${item.name}</td><td>${item.places}/20</td><td>${item.cult}</td></tr>`
        })
        output += `</table>`
        return output
    }
    
}

var academy_items = [{name: "Грифиндор", places: 15, cult: "Мужчины"}, {name: "Слизерин", places: 12, cult: "Мужчины"}, {name: "Пуфендуй", places: 10, cult: "Женщины"}, {name: "Когтевран", places: 19, cult: "Женщины"}]

var academy = new Academy(academy_items)


// args = [0 = min/max (сортировка группы по убыванию, возрастанию)]

var get_academy_info = academy.getInfoAll("max")

let get_element_4 = document.getElementById('ex_4')
get_element_4.innerHTML = get_academy_info