import React, { Component } from 'react'
import'./myStyles.css'
import spider from './spiderLogo.png'
import MovieRow from './MovieRow'
import $ from 'jquery'

class MovieSearch extends Component {
    
    constructor(props) {
        super(props)

        // var listEle = []
        this.state = {
            movieRows: [],
            search: ''
        }

        // this.state.movies.forEach((movie) => {
        //     //Create the movie list here and push it to listEle
        //     const movieList = <MovieRow movie={movie} />
        //     listEle.push(movieList)
        // });

        this.performSearch("")
    }

    performSearch(searchTerm) {
        // console.log("this is the search function")
        const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=2b976ff092f81ce385c51654be5eb35d&query=" + searchTerm
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                // console.log(searchResults)
                const results = searchResults.results

                var listEle = []

                results.forEach((movies) => {
                    movies.poster_src = "https://image.tmdb.org/t/p/w185/" + movies.poster_path 
                    const movie = <MovieRow key={movies.id} movie={movies} />
                    listEle.push(movie)
                })
                this.setState ({movieRows: listEle})
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data!")
            }
        })
    }

    renderSearchTit= (event) => {
        // console.log(event.target.value)
        this.setState ({
            search: event.target.value,
        })
        let searchWord = event.target.value
        this.performSearch(searchWord)
    }

    renderSearchRes = (event) => {
        if (this.state.search === "") {
            return <p className="sorryMessage">Search for a Movie</p>
        }
        else {
            return (
                <ul >
                    {this.state.movieRows}
                </ul>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="topBar" >
                    <img src= {spider} alt="logoAlt"></img>
                    <input type="text" placeholder="Enter a Movie Name" name= {this.state.search} onChange={this.renderSearchTit} className="searchBar" ></input>
                    <button type="submit" className="searchBtn" >Search</button>
                </div>
                {this.renderSearchRes()}
            </div>
        )
    }
}

export default MovieSearch
