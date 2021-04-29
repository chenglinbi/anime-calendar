import React from 'react'
import {Card, Button} from 'react-bootstrap'
const AniCard = ({animeDetails}) => {
    const limitTextLength = (text, maxLength) => {
        if (text && text !== "") {
            return text.length > maxLength ? text.substring(0, maxLength).concat('...') : text
        }
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={animeDetails.coverImage.large}/>
                <Card.Body>
                    <Card.Title>{limitTextLength(animeDetails.title.english, 20)}</Card.Title>
                    <Card.Text>
                        <p dangerouslySetInnerHTML={{ __html: limitTextLength(animeDetails.description, 200) }}></p>
                    </Card.Text>
                    <Button variant="primary">Add</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AniCard