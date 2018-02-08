import React from 'react';
import { Grid } from 'semantic-ui-react';
import Picture from './picture.js';
import Notification from './notifications.js';

export default class About extends React.Component{
    render(){
        return(
            <Grid.Column mobile={16} computer={4}>
                <Picture />
                <Notification />
            </Grid.Column>
        );
    }
}