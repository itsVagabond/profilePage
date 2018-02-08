import React from 'react'
import { Card, Segment } from 'semantic-ui-react'

const items = [
    {
        href:'#',
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%'
    },
    {
        href:'#',
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%'
    },
    {
        href:'#',
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%'
    }
]

export default class News extends React.Component{
    render(){
        return(
            <Segment raised color="yellow">
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            News Around the World
                        </Card.Header>
                    </Card.Content>
            
                    <Card.Content>
                        <Card.Group items={items} stackable={true} />
                    </Card.Content>
                </Card>
            </Segment>
        );
    }
}