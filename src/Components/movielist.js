import React, { Component } from 'react'
import'./myStyles.css'
import spider from './spiderLogo.png'
import MovieRow from './MovieRow'


class movielist extends Component {
    
    constructor(props) {
        super(props)

        var listEle = []
        this.state = {
            movieRows: listEle,
            movies: [
                {
                id: 0,
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTp0qlAoWcOOswIkL_qpjYzJqCCDmWXiBzCXiqbE43Obo8c0Z-s&psig=AOvVaw3e-344E5Dj9d9ySD_xqbh0&ust=1595076194944000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj91r-n1OoCFQAAAAAdAAAAABAD",
                title: "Avengers Assemble",
                description: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
                more: "https://www.imdb.com/title/tt0848228/?ref_=fn_al_tt_1",
                trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8"
                }, 
                {
                id: 1,
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTp0qlAoWcOOswIkL_qpjYzJqCCDmWXiBzCXiqbE43Obo8c0Z-s&psig=AOvVaw3e-344E5Dj9d9ySD_xqbh0&ust=1595076194944000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj91r-n1OoCFQAAAAAdAAAAABAD",
                title: "Wonder Woman",
                description: "Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind.",
                more: "https://www.imdb.com/title/tt0451279/",
                trailer: "https://www.youtube.com/watch?v=1Q8fG0TtVAY"
                }, 
                {
                id: 2,
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTp0qlAoWcOOswIkL_qpjYzJqCCDmWXiBzCXiqbE43Obo8c0Z-s&psig=AOvVaw3e-344E5Dj9d9ySD_xqbh0&ust=1595076194944000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj91r-n1OoCFQAAAAAdAAAAABAD",
                title: "Spider Man",
                description: "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
                more: "https://www.imdb.com/title/tt2250912/?ref_=nv_sr_srsg_0",
                trailer: "https://www.youtube.com/watch?v=n9DwoQ7HWvI"
                }
            ],
            search: ''
        }

        // this.state.movies.forEach((movie) => {
        //     //Create the movie list here and push it to listEle
        //     const movieList = <MovieRow movie={movie} />
        //     listEle.push(movieList)
        // });
    }

    renderSearchTit= (event) => {
        // console.log(event.target.value)
        this.setState ({
            search: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className="topBar" >
                    <img src= {spider} alt="logoAlt"></img>
                    <input type="text" placeholder="Enter a Movie Name" name= {this.state.search} onChange={this.renderSearchTit} className="searchBar" ></input>
                    <button type="submit" className="searchBtn" >Search</button>
                </div>
                <ul >
                    {this.state.movieRows}
                </ul>
            </div>
        )
    }
}

export default movielist
