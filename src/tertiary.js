import React from 'react';
import { Grid } from 'semantic-ui-react';
import News from './news.js';
import Advert from './advertisement.js';

export default class ExternalLinks extends React.Component{
    render(){
        return(
            <Grid.Column mobile={16} computer={4}>
                <News />
                <Advert />
            </Grid.Column>
        );
    }
}