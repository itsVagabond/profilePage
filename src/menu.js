import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Profile from './profile.js';

export default class MenuTabular extends React.Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { activeItem } = this.state

        return (
            <BrowserRouter>
                <div>
                    <Menu>
                        <Link to="/">
                            <Menu.Item name='home' active={true} onClick={this.handleItemClick} />
                        </Link>
    
                        <Link to="/messages">
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                        </Link>
    
                        <Link to="/friends">
                            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                        </Link>

                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
        
                            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu>
    
                    <Route exact path="/" render={()=>(<Profile tab="home" />)}/>
                    <Route path="/messages" render={()=>(<Profile tab="messages" />)}/>
                    <Route path="/friends" render={()=>(<Profile tab="friends" />)}/>
                </div>
            </BrowserRouter>
        )
    }
}