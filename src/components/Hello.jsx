import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class Hello extends Component {
    render(){
        const name = this.props.match.params.name;
        return(
            <Card
                header={`Hello ${name}`}
                description={`This route uses your name in the URL params. You are ${name}`}
            />
        )
    }
}

export default Hello