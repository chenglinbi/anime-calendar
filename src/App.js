import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import AniGrid from './components/AniGrid'

class App extends React.Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        ani app
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AniGrid />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App