//libraries
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

//API
import AniChartRequest from './requests/AniChartRequest'
import seasonalAnimeQuery from './queries/PostSpringSeason'

//components
import AniGrid from './components/AniGrid'
import NavBar from './components/NavBar'
class App extends React.Component {

    state = {
        currentSeasonAnimeList: []
    }
    
    setCurrentAnimeSeasonState = async (season) => {
        const response = await AniChartRequest.post('/', {
                query : seasonalAnimeQuery,
                variables: {
                    season: season,
                    page: 1,
                    perPage: 100,
                    seasonYear: 2021,
                    format: "TV"
                }
            }
        )
        this.setState({currentSeasonAnimeList: response.data.data.Page.media}) 
        console.log("API resonse:", response)

    }
    componentDidMount() {
        this.setCurrentAnimeSeasonState("WINTER")
    }

    render(){
        return (
            <Container>
                <NavBar setCurrentAnimeSeasonState={this.setCurrentAnimeSeasonState}/>
                <Row>
                    <Col lg={12}>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AniGrid animeList={this.state.currentSeasonAnimeList} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App