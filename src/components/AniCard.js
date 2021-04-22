import React from 'react'
import {Card, Button} from 'react-bootstrap'
const AniCard = ({animeDetails}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={animeDetails.coverImage.large} />
                <Card.Body>
                    <Card.Title>{animeDetails.title.english}</Card.Title>
                    <Card.Text>
                        <p dangerouslySetInnerHTML={{ __html: animeDetails.description }}></p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AniCard