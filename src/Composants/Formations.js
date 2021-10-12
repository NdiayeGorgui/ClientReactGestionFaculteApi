import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react';
import swal from 'sweetalert';
import FormationService from '../Services/FormationService';

class Formations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      formations: []
    }
    this.addFormation = this.addFormation.bind(this);
    this.editFormation = this.editFormation.bind(this);
    this.deleteFormation = this.deleteFormation.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  detailsFormation(id) {
    this.props.history.push(`/details-formations/${(id)}`);
  }

  editFormation(id) {
    this.props.history.push(`/add-formation/${(id)}`);
  }

  deleteFormation(id) {
    FormationService.deleteFormationById(id).then(resp => {
      this.setState({ formations: this.state.formations.filter(formation => formation.id !== id) });
    });
  }

  componentDidMount() {
    FormationService.getFormations().then((resp) => {
      this.setState({ formations: resp.data })
    });
  }

  addFormation() {
    this.props.history.push('/add-formation/_add');
  }

  confirmDelete(formationid) {
    swal({
      title: "Voulez vous supprimer cet enregistrement ?",
      text: "Cet enregistrement sera éffaçé dans la base !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          { this.deleteFormation(formationid) }
          swal("Enregistrement supprimé !", {
            icon: "success",
          });
        } else {
          swal(" Suppression annulée!");
        }
      });
  }

  render() {
    return (
      <div>
        <Container>

          <h3 className="text-left">Liste des Formations </h3>
          <div >
            <Button primary onClick={this.addFormation}> Ajouter</Button>
          </div>
          <table className="ui striped table">
            <thead>
              <tr>
                <th>Nom Formation</th>
                <th>Durée(en heure)</th>
                <th>Année</th>

                <th></th>
                <th >Actions</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.formations.map(
                  formation =>
                    <tr key={formation.id}>
                      <td>{formation.nomFormation}</td>
                      <td>{formation.duree}</td>
                      <td>{formation.annee}</td>

                      <td><Button color='teal' onClick={() => this.editFormation(formation.id)}>Modifier</Button></td>
                      <td><Button color='red' onClick={() => this.confirmDelete(formation.id)}>Supprimer</Button></td>
                      <td><Button color='blue' onClick={() => this.detailsFormation(formation.id)}>Détails</Button></td>
                    </tr>
                )


              }



            </tbody>
          </table>
        </Container>
      </div>
    )
  }
}

export default Formations;