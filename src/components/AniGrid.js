import React from 'react'
import AniChartRequest from '../requests/AniChartRequest'
import seasonalAnimeQuery from '../queries/PostSpringSeason'
import {Row, Col} from 'react-bootstrap'
class AniGrid extends React.Component {
    state = {
        currentSeasonAnimeList: []
    }
    
    getAnimeList = async () => {
        const response = await AniChartRequest.post('/', {
                query : seasonalAnimeQuery,
                variables: {
                    season: "WINTER",
                    page: 1,
                    perPage: 100,
                    seasonYear: 2021,
                    format: "TV"
                }
            }
        )
        this.setState({currentSeasonAnimeList: response.data.data.Page.media}) 
        //console.log("API resonse:", response)

    }
    componentDidMount() {
        this.getAnimeList()
    }
    render() {
        return (
            <div>
                {
                    this.state.currentSeasonAnimeList.map((anime) => {
                        return (
                            <h6>{anime.title.english}</h6>
                        )
                    })
                }
            </div>
        )
    }
}

export default AniGrid