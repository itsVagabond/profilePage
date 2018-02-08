import React from 'react';
import { Card, Feed, Segment } from 'semantic-ui-react';

export default class Notification extends React.Component {
	render () {
		return (
            <Segment raised color='blue'>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            Recent Activity
                        </Card.Header>
                    </Card.Content>
            
                    <Card.Content>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label image='' />
            
                                <Feed.Content>
                                    <Feed.Date content='1 day ago' />
            
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
            
                            <Feed.Event>
                                <Feed.Label image='' />
            
                                <Feed.Content>
                                    <Feed.Date content='1 day ago' />
            
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
            
                            <Feed.Event>
                                <Feed.Label image='' />
            
                                <Feed.Content>
                                    <Feed.Date content='1 day ago' />
            
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
            
                            <Feed.Event>
                                <Feed.Label image='' />
            
                                <Feed.Content>
                                    <Feed.Date content='1 day ago' />
            
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
            
                            <Feed.Event>
                                <Feed.Label image='' />
            
                                <Feed.Content>
                                    <Feed.Date content='1 day ago' />
            
                                    <Feed.Summary>
                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Card.Content>
                </Card>
            </Segment>
        );
	}
}