import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const description = [
  'Anakin is a Jedi string with the force.',
  'Qui Gon Jin brought him before the council believing him to be the chosen one.',
].join(' ')

const CardExtraContent = () => (
  <Card>
    <Card.Content header='About Anakin' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />
      4 Friends
    </Card.Content>
  </Card>
)

export default CardExtraContent
