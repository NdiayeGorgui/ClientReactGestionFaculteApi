import { Container, Segment, Label, Button } from "semantic-ui-react";
import React, { Component } from 'react';
import CourService from "../Services/CourService";
import swal from "sweetalert";

class Cours extends Component {

  constructor(props) {

    super(props)
    this.state = {
      cours: []
    }
    this.addCours = this.addCours.bind(this);
    this.editCours = this.editCours.bind(this);
    this.deleteCours = this.deleteCours.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  detailsCours(id) {
    this.props.history.push(`/details-cours/${(id)}`);
  }

  editCours(id) {
    this.props.history.push(`/add-cours/${(id)}`);
  }

  deleteCours(id) {
    CourService.deleteCoursById(id).then(resp => {
      this.setState({ cours: this.state.cours.filter(cours => cours.id !== id) });
    });
  }

  componentDidMount() {
    CourService.getCours().then((resp) => {
      this.setState({ cours: resp.data })
    });
  }
  addCours() {
    this.props.history.push('/add-cours/_add');
  }

  confirmDelete(coursid) {
    swal({
      title:"Voulez vous supprimer cet enregistrement ?",
      text: "Cet enregistrement sera éffaçé dans la base !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          { this.deleteCours(coursid) }
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

          <h3 className="text-left">Liste des Cours </h3>
          <div >
            <Button primary onClick={this.addCours}> Ajouter</Button>
          </div>
          <table className="ui striped table">
            <thead>
              <tr>
                <th>Libelle</th>
                <th>Nombre d'heure</th>

                <th></th>
                <th >Actions</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.cours.map(
                  cour =>
                    <tr key={cour.id}>
                      <td>{cour.libelle}</td>
                      <td>{cour.nbeHeure}</td>

                      <td><Button color='teal' onClick={() => this.editCours(cour.id)}>Modifier</Button></td>
                      <td><Button color='red' onClick={() => this.confirmDelete(cour.id)}>Supprimer</Button></td>
                      <td><Button color='blue' onClick={() => this.detailsCours(cour.id)}>Détails</Button></td>
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
export default Cours;