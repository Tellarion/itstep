import React from 'react'
import axios from 'axios'
import Parser from 'html-react-parser';

// https://kinopoiskapiunofficial.tech

const K_API = 'da56f482-3689-43eb-b6d8-b7f9f43430a2'

class Finder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {textSearch: "", find: false, movies: ""}
        this.handleSearch_text = this.handleSearch_text.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch_text(event) {
        this.setState({textSearch: event.target.value})
    }

    handleSearch(e) {
        e.preventDefault()
        axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${this.state.textSearch}&offset=1`, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': K_API
            }})
        .then((response) => {
            this.setState({find: true, movies: response})
            console.log(this.state)
        }, (error) => {
            console.log(error)
        });
    }

    render() {

        const isFind = this.state.find

        let movies_blocks = ``

        if(isFind == true) {
            let movies_data = this.state.movies.data
            console.log(movies_data)
            movies_blocks = `<h3>Найдено результатов: ${movies_data.searchFilmsCountResult}</h3><div class="movies">`
            for(let i = 0; i < movies_data.films.length; i++) {
                movies_blocks += `
                    <div class="movie">
                        <div class="name">${movies_data.films[i].nameRu}</div>
                        <div class="poster"><img src="${movies_data.films[i].posterUrl}" height="500px" width="350px" alt="" /></div>
                        <div class="about">${movies_data.films[i].description}</div>
                    </div>
                `
            }
            movies_blocks += `</div>`
        }

        return (
            <div className="row">
                <div className="mb-3">
                    <label>Введите название фильма или же сериала</label>
                    <input className="form-control" placeholder="..." value={this.state.textSearch} onChange={this.handleSearch_text}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={this.handleSearch}>Найти</button>
                </div>
                {!isFind ? ("") : (Parser(movies_blocks))}
            </div>
        )
    }
}

export default Finder