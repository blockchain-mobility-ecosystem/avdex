import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class AppMenu extends Component {
    // TODO: read activeItem from URL or smth
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const { name, _pk, offers } = this.props

        if (!name) {
            return null
        }

        return (
            <Menu pointing secondary>
                <Menu.Item>
                    Welcome back,&nbsp;<strong>{name}</strong>
                </Menu.Item>

                <Menu.Item as={Link} to={`/profiles/${_pk}`} name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                    Home
                </Menu.Item>

                <Menu.Item as={Link} to="/offers/add" name='offers/add' active={activeItem === 'offers/add'} onClick={this.handleItemClick}>
                    Create offer
                </Menu.Item>

                {offers.length ?
                <Menu.Item as={Link} to="/offers" name='offers' active={activeItem === 'offers'} onClick={this.handleItemClick}>
                    My Offers ({offers.length})
                </Menu.Item>
                : null}

                <Menu.Item as={Link} to="/search" name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                    Search Offers
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to="/logout" name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu>
        )
    }
}
