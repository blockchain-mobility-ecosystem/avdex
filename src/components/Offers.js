import React from 'react'
import { Button, Icon, Item, Label, Rating } from 'semantic-ui-react'
import marked from 'marked'
import { API_ENDPOINT } from '../bdb'


const OfferItem = ({ _tx, name, size, price, purpose, description, lighting }) => (
    <Item>
        <Item.Image>
            <Icon name="database" size="huge"/>
        </Item.Image>

        <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>
                <Label>${price}</Label>
                <span className="size">{size} GB</span>
                <span className="tx"><a href={`${API_ENDPOINT}transactions/${_tx}`} target="_blank">transaction</a></span>
                <Rating icon='star' defaultRating={4} maxRating={5} disabled />

            </Item.Meta>
            <Item.Description dangerouslySetInnerHTML={{__html: marked(description, {sanitaze: true})}}></Item.Description>
            <Item.Extra>
                <Button primary floated='right'>
                    View
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
