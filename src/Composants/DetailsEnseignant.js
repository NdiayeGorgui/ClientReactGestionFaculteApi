import React, { Component } from 'react'
import { Button, ButtonContent, Card, Container, Form } from 'semantic-ui-react';
import EnseignantService from '../Services/EnseignantService';

class DetailsEnseignant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      enseignant: {}
    }
  }
  componentDidMount() {
    EnseignantService.getEnseignantById(this.state.id).then(resp => {
      this.setState({ enseignant: resp.data })
    })
  }

  retour() {
    this.props.history.push('/enseignants');
  }

  render() {
    return (
      <Container>
        <br />
        <Card>

          <Card.Content>
            <Card.Header>Nom:{this.state.enseignant.firstName} {this.state.enseignant.lastName}</Card.Header>
            <Card.Description>
              <span >Nombre total d'heures:</span>
            </Card.Description>

            <Card.Description>
              <span >Nombre de groupe:</span>
            </Card.Description>

            <Card.Description>
              <span >Liste des groupe:</span>
            </Card.Description>

            <Card.Description>
              <span >Liste des cours enseignés:</span>
            </Card.Description>

          </Card.Content>

          <Card.Content extra>
            <span >Stattut:{this.state.enseignant.statut}</span>
          </Card.Content>
        </Card>
        <Button primary type='submit' onClick={this.retour.bind(this)}>Retour</Button>
      </Container>
    )
  }
}

export default DetailsEnseignant;