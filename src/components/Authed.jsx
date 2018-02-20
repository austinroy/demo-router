import React from 'react'
import { Card } from 'semantic-ui-react'

const AuthedCard = () => (
  <Card color='blue' 
    header='Congratulations'
    meta='Authed'
    description= "You've successfully accessed this restricted route"
  />
)

export default AuthedCard