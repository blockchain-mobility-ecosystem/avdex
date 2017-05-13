import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const InfoBox = ({icon, title, value}) => (
    <Card>
	<Icon name='home' size='massive' />
	<Card.Content>
	    <Card.Header>
                {title}
	    </Card.Header>
	    <Card.Meta>
		<span className='date'>
		    Joined in 2015
		</span>
	    </Card.Meta>
	    <Card.Description>
		Matthew is a musician living in Nashville.
	    </Card.Description>
	</Card.Content>
	<Card.Content extra>
	    <a>
		<Icon name='user' />
		22 Friends
	    </a>
	</Card.Content>
    </Card>
)

export default InfoBox
