import React from 'react';
import { Grid } from 'semantic-ui-react';
import NewsFeed from './feed.js';
import Status from './textArea.js';
import Messages from './messages.js';
import Friends from './friends.js';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        
        this.clickedTab = this.clickedTab.bind(this);
    }
    
    clickedTab(){
            if(this.props.tab === "messages")
                return <Messages />;
            else
            if(this.props.tab === "friends")
                return <Friends />;
            else
                return <div><Status /><NewsFeed /></div>;
    }
                
    render(){
        return(
            <Grid.Column mobile={16} computer={6}>
                {this.clickedTab()}
            </Grid.Column>
        );
    }
}