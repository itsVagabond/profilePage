import React from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

export default class Status extends React.Component{
    render(){
        return(
            <Form>
                <TextArea autoHeight placeholder='Try adding multiple lines' />
                <Button content='Click Here' />
            </Form>
        );
    }
}