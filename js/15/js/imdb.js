/* imdb api */

const MY_FREE_API_KEY = `9e048b2f`

$(document).ready(function() {

    var page_init = 1
    var page_count = 0
    var finded_text = ""

    function send_to_api_movies(text, page) {

        return new Promise(resolve => {
            $.ajax({
                method: "GET",
                url: `http://omdbapi.com/?apikey=${MY_FREE_API_KEY}&s=${text}&page=${page}`
            })
            .done(function(data) {
                console.log(data) // debug
                if(data.Response == "True") {
                    resolve({"status": true, "data": data})
                } else {
                    resolve({"status": false, "data": "Movies not found!"})
                }
            })
        })

    }

    function send_to_api_detail(id) {
        console.log('lets go')
        return new Promise(resolve => {
            $.ajax({
                method: "GET",
                url: `http://omdbapi.com/?apikey=${MY_FREE_API_KEY}&i=${id}`
            })
            .done(function(data) {
                console.log(data) // debug
                if(data.Response == "True") {
                    resolve({"status": true, "data": data})
                } else {
                    resolve({"status": false, "data": "Movies cant get data!"})
                }
            })
        })
    }

    function show_movies(items) {
        $('.item button').off()
        $('.live').css('flex-direction', 'row')
        let tpl = `<h3>Films:</h3>`
        items.forEach((item, index) => {
            item.Poster = (item.Poster != "N/A") ? item.Poster : "img/404.jpg"
            tpl += `
                <div class="item">
                    <div class="poster"><img src="${item.Poster}" width="100px" height="150px" alt="Poster" /></div>
                    <div class="about">
                        <div class="cat">${item.Type}</div>
                        <div class="title">${item.Title}</div>
                        <div class="year">${item.Year}</div>
                        <button data-imdbID="${item.imdbID}">Details</button>
                    </div>
                </div>
            `
        })
        $('.movies').html(tpl)
        $('.live .item button').on('click', function() {
            let get_id = $(this).attr('data-imdbID')
            console.log(get_id)
            send_to_api_detail(get_id).then(data => {
                if(data.status == true) {
                    let tpl_2 = `<h3>Film info:</h3><div class="detail">`
                    let act_data = data.data
                    act_data.Poster = (act_data.Poster != "N/A") ? act_data.Poster : "img/404.jpg"
                    tpl_2 += `<div class="poster"><img src="${act_data.Poster}" alt="Poster" height="500px" width="100%" /></div>
                    <div class="info">
                        <div class="split">
                            <label>Title:</label>
                            <div class="text">${act_data.Title}</div>
                        </div>
                        <div class="split">
                            <label>Released:</label>
                            <div class="text">${act_data.Released}</div>
                        </div>
                        <div class="split">
                            <label>Genre:</label>
                            <div class="text">${act_data.Genre}</div>
                        </div>
                        <div class="split">
                            <label>Director:</label>
                            <div class="text">${act_data.Director}</div>
                        </div>
                        <div class="split">
                            <label>Writer:</label>
                            <div class="text">${act_data.Writer}</div>
                        </div>
                        <div class="split">
                            <label>Actors:</label>
                            <div class="text">${act_data.Actors}</div>
                        </div>
                        <div class="split">
                            <label>Awards:</label>
                            <div class="text">${act_data.Awards}</div>
                        </div>
                    </div>`
                    tpl_2 += `</div>`;
                    $('.live').css('flex-direction', 'column')
                    $('.live').html(tpl_2)
                } else if(data.status == false) {
                    let tpl = `<h3>Films:</h3><div class="wrong"><p>${data.data}</p></div>`
                    $('.live').css('flex-direction', 'column')
                    $('.live').html(tpl)
                }
            })
        })
    }

    function show_paginator(total_results) {
        // $('.paginator button').off() need if merge all code in one func
        let tpl = ``
        if(total_results >= 10) {
            tpl += `<div class="paginator">`
            for(let i = 1; i < total_results; i++) {
                if(i % 10 == 0) {
                    page_count++
                    tpl += `<button>${page_count}</button>`
                }
            }
            tpl += `</div>`
        }
        $('.live').append(tpl)
        $('.paginator button').on('click', function() {
            let selected = $(this).text()
            send_to_api_movies(finded_text, selected).then(data => {
                show_movies(data.data.Search)
            })
        })
    }

    $('#search').on('click', function(event) {
        event.preventDefault()
        $('.live').html(`<div class="movies"></div>`)
        finded_text = $('#title').val()
        send_to_api_movies(finded_text, page_init).then(data => {
            if(data.status == true) {
                let total_results = data.data.totalResults
                show_movies(data.data.Search)
                show_paginator(total_results)
            } else if(data.status == false) {
                let tpl = `<h3>Films:</h3><div class="wrong"><p>${data.data}</p></div>`
                $('.live').css('flex-direction', 'column')
                $('.live').html(tpl)
            }
        })
    })
})