import React from 'react';
import { Advertisement, Segment } from 'semantic-ui-react';

export default class Advert extends React.Component {
    render(){
        return(
            <Segment raised color="orange">
                <Advertisement unit='half page' test='Half Page' />
            </Segment>
        );
    }
}