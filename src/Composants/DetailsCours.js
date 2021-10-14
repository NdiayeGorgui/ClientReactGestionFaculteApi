import React, { Component } from 'react'
import { Button, Card, Container } from 'semantic-ui-react'
import CourService from '../Services/CourService'

class DetailsCours extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            cours: [],
            enseignant:[]
            
        }
    }
    componentDidMount() {
        CourService.getCoursById(this.state.id).then(resp => {
            this.setState({ cours: resp.data })
        })
    }
    retour() {
        this.props.history.push('/cours');
    }

    
    render() {
        return (
            <Container>
                <br />
                
                <Card>
                    <Card.Content>
                        <Card.Header>Cours:{this.state.cours.libelle} </Card.Header>
                        <Card.Description>
                            <span >Nombre d'heures:{this.state.cours.nbeHeure} </span>
                        </Card.Description>
                       
                    </Card.Content>
                </Card>
                <Button primary type='submit' onClick={this.retour.bind(this)}>Retour</Button>
            </Container>
        )
    }
}

export default DetailsCours;