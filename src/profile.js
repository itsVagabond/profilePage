import React from 'react';
import { Grid } from 'semantic-ui-react';
import MenuTabular from './menu.js';
import About from './about.js';
import Home from './home.js';
import ExternalLinks from './tertiary.js';
import NewsFeed from './feed.js';
import Status from './textArea.js';
import Messages from './messages.js';
import Friends from './friends.js';


export default class Profile extends React.Component {
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
            if(this.props.tab === "home")
                return <div><Status /><NewsFeed /></div>;
    }
    
	render () {
		return (
            <div>
                <MenuTabular />
            
                <Grid verticalAlign='top' centered>
                    <Grid.Row>
                        <Grid.Column mobile={16} computer={1}>
                        </Grid.Column>
            
                        <About />
            
                        <Grid.Column mobile={16} computer={6}>
                            {this.clickedTab()}
                        </Grid.Column><Home />
            
                        <ExternalLinks />
            
                        <Grid.Column mobile={16} computer={1}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
	}
}