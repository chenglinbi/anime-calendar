import React from 'react'
import AniChartRequest from '../requests/AniChartRequest'
import seasonalAnimeQuery from '../queries/PostSpringSeason'
import AniCard from './AniCard'
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
                <Row>
                    {
                        this.state.currentSeasonAnimeList.map((anime) => {
                            return (
                                <Col lg={4}>
                                    <AniCard animeDetails={anime}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default AniGrid