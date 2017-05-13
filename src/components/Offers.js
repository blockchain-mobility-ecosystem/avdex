import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'


const Offers = () => (
    <Item.Group>
	<Item>
	    <Item.Image>
		<Icon name='home' size='massive' />
	    </Item.Image>

	    <Item.Content>
		<Item.Header>Arrowhead Valley Camp</Item.Header>
		<Item.Meta>
		    <span className='price'>$1200</span>
		    <span className='stay'>1 Month</span>
		</Item.Meta>
		<Item.Description>lol</Item.Description>
	    </Item.Content>
	</Item>

    </Item.Group>
)

export default Offers
