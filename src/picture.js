import React from 'react'
import { Segment, Card, Image, Icon } from 'semantic-ui-react'

export default class Picture extends React.Component {
	render () {
		return (
            <Segment raised color='green'>
                  <Card fluid>
                    <Image src='/media/matthew.png' />
            
                    <Card.Content>
                        <Card.Header>
                            Matthew
                        </Card.Header>
            
                        <Card.Meta>
                            <span className='date'>
                                Joined in 2015
                            </span>
                        </Card.Meta>
            
                        <Card.Description>
                            Alpha | Beta | Gamma
                        </Card.Description>
                    </Card.Content>
            
                    <Card.Content extra>
                        <a>
                            <Icon name='user' /> 09 Friends
                        </a>
                    </Card.Content>
                </Card>
            </Segment>
        );
	}
}