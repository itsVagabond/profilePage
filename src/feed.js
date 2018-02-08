import React from 'react';
import { Feed, Icon, Segment } from 'semantic-ui-react';

export default class NewsFeed extends React.Component {
    render(){
        return(
            <Segment raised color="red">
                <Feed>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='elliot.jpg' />
                        </Feed.Label>
            
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Elliot Fu</Feed.User> added you as a friend
            
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
            
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
            
                    <Feed.Event>
                        <Feed.Label>
                            <img src='elliot.jpg' />
                        </Feed.Label>
            
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Elliot Fu</Feed.User> added you as a friend
            
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
            
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
            
                    <Feed.Event>
                        <Feed.Label>
                            <img src='elliot.jpg' />
                        </Feed.Label>
            
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Elliot Fu</Feed.User> added you as a friend
            
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
            
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
            
                    <Feed.Event>
                        <Feed.Label>
                            <img src='elliot.jpg' />
                        </Feed.Label>
            
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Elliot Fu</Feed.User> added you as a friend
            
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
            
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
            
                    <Feed.Event>
                        <Feed.Label>
                            <img src='elliot.jpg' />
                        </Feed.Label>
            
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Elliot Fu</Feed.User> added you as a friend
            
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
            
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Segment>
        );
    }
}