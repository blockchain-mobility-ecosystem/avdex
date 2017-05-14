import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'

const OfferItem = ({ name, size, purpose, description, lighting }) => (
    <Item>
        <Item.Image>
            <Icon name="database" size="huge"/>
        </Item.Image>

        <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>
                <span className="size">{size}</span>
            </Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>
                <Button primary floated='right'>
                    Buy dataset
                    <Icon name='right chevron' />
                </Button>
            </Item.Extra>
        </Item.Content>
    </Item>
)


const Offers = ({list, data}) => (
    <Item.Group divided>
        {list.map(txId => <OfferItem key={txId} {...data[txId]} />)}
    </Item.Group>
)

export default Offers
