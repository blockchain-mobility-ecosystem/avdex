import React, { Component } from 'react'
import InfoBox from './InfoBox'
import { Card } from 'semantic-ui-react'

import Offers from './Offers'

export default class Dashboard extends Component {
    render () {
        const { name, website, offers, data, publicKey } = this.props

        return (
            <div>
                <h1>{name}</h1>
                <h3>{publicKey}</h3>
                <a href={website} target="_blank">{website}</a>
                <hr/>
                {offers.length ?
                <Offers list={offers} data={data} />
                : null}
            </div>
        )
    }
}
