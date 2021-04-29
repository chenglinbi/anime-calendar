import React from 'react'

import AniCard from './AniCard'
import {Row, Col} from 'react-bootstrap'

class AniGrid extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    {
                        this.props.animeList.map((anime) => {
                            return (
                                <Col lg={4} md={6}>
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