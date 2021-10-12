import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react';
import swal from 'sweetalert';
import GroupeService from '../Services/GroupeService';

class Groupes extends Component {



  constructor(props) {
    super(props)
    this.state = {

      groupes: []
    }
    this.addGroupe = this.addGroupe.bind(this);
    this.editGroupe = this.editGroupe.bind(this);
    this.deleteGroupe = this.deleteGroupe.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  detailsGroupe(id) {
    this.props.history.push(`/details-groupes/${(id)}`);
  }

  editGroupe(id) {
    this.props.history.push(`/add-groupe/${(id)}`);
  }

  deleteGroupe(id) {
    GroupeService.deleteGroupeById(id).then(resp => {
      this.setState({ groupes: this.state.groupes.filter(groupe => groupe.id !== id) });
    });
  }


  componentDidMount() {

    GroupeService.getGroupes().then((resp) => {
      this.setState({ groupes: resp.data })
    });
  }

  addGroupe() {
    this.props.history.push('/add-groupe/_add');
  }

  confirmDelete(groupeid) {
    swal({
      title: "Voulez vous supprimer cet enregistrement ?",
      text: "Cet enregistrement sera éffaçé dans la base !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          { this.deleteGroupe(groupeid) }
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

          <h3 className="text-left">Liste des Groupes </h3>
          <div >
            <Button primary onClick={this.addGroupe}> Ajouter</Button>
          </div>
          <table className="ui striped table">
            <thead>
              <tr>
                <th>Groupe</th>
                <th>Nom de la Formation</th>


                <th></th>
                <th >Actions</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.groupes.map(
                  groupe =>
                    <tr key={groupe.id}>
                      <td>{groupe.numeroGroupe}</td>
                      <td>{groupe.formation.nomFormation}</td>


                      <td><Button color='teal' onClick={() => this.editGroupe(groupe.id)}>Modifier</Button></td>
                      <td><Button color='red' onClick={() => this.confirmDelete(groupe.id)}>Supprimer</Button></td>
                      <td><Button color='blue' onClick={() => this.detailsGroupe(groupe.id)}>Détails</Button></td>
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

export default Groupes;