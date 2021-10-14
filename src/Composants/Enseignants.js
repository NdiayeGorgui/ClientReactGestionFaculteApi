import { Component } from "react";
import { Button, Container } from "semantic-ui-react";
import swal from "sweetalert";
import EnseignantService from "../Services/EnseignantService";


class Enseignant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      enseignants: []
    }
    this.addEnseignant = this.addEnseignant.bind(this);
    this.editEnseignant = this.editEnseignant.bind(this);
    this.deleteEnseignant = this.deleteEnseignant.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  detailsEnseignant(id) {
    this.props.history.push(`/details-enseignant/${(id)}`);
  }

  editEnseignant(id) {
    this.props.history.push(`/add-enseignant/${(id)}`);
  }

  deleteEnseignant(id) {
    EnseignantService.deleteEnseignantById(id).then(resp => {
      this.setState({ enseignants: this.state.enseignants.filter(enseignant => enseignant.id !== id) });
    });
  }

  componentDidMount() {
    EnseignantService.getEnseignants().then((resp) => {
      this.setState({ enseignants: resp.data })
    });
  }
  addEnseignant() {
    this.props.history.push('/add-enseignant/_add');
  }

  confirmDelete(enseignantid) {
    swal({
      title: "Voulez vous supprimer cet enregistrement ?",
      text: "Cet enregistrement sera éffaçé dans la base !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          { this.deleteEnseignant(enseignantid) }
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
          <h3 className="text-left">Liste des Enseignants </h3>
          <div >
            <Button primary onClick={this.addEnseignant}> Ajouter</Button>
          </div>
          <table className="ui striped table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Adresse</th>
                <th>E-mail</th>
                <th>Téléphone</th>
                <th></th>
                <th >Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.enseignants.map(
                  enseignant =>
                    <tr key={enseignant.id}>
                      <td>{enseignant.lastName}</td>
                      <td>{enseignant.firstName}</td>
                      <td>{enseignant.adress}</td>
                      <td>{enseignant.mail}</td>
                      <td>{enseignant.telephone}</td>
                      <td><Button color='teal' onClick={() => this.editEnseignant(enseignant.id)}>Modifier</Button></td>
                      <td><Button color='red' onClick={() => this.confirmDelete(enseignant.id)}>Supprimer</Button></td>
                      <td><Button color='blue' onClick={() => this.detailsEnseignant(enseignant.id)}>Détails</Button></td>
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
export default Enseignant;