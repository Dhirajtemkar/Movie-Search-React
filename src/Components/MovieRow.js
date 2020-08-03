import React, { Component } from 'react'

class MovieRow extends Component {

    moreInfo() {
        console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    trailerInfo() {
        const url1 = "https://www.youtube.com/results?search_query=trailer " + this.props.movie.title
        window.location.href = url1
    }

    render(props) {
        return (
            <table key={this.props.movie.id}>
                <tr>
                    <td><img src={this.props.movie.poster_src} alt={this.props.movie.title} ></img></td>
                    <td>
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                        <div>
                            <a ><button className="moreBtn" onClick={this.moreInfo.bind(this)}>More</button></a>
                            <a ><button className="trailerBtn" onClick={this.trailerInfo.bind(this)}>Watch Trailer</button></a>
                        </div>
                    </td>
                </tr>
            </table> 
        )
    }
}

export default MovieRow
