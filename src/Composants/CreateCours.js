import React, { Component } from 'react';
import { Button, Container, Form, Select } from 'semantic-ui-react';
import CourService from '../Services/CourService';

class CreateCours extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      libelle: '',
      nbeHeure: 0,
      enseignantid:1,
      typecourid:1
     


    }
    this.changeLibelle = this.changeLibelle.bind(this);
    this.changeNbeHeure = this.changeNbeHeure.bind(this);
    this.changeEnseignant = this.changeEnseignant.bind(this);
    this.changeTypeCours = this.changeTypeCours.bind(this);
    this.saveOrUpdateCours = this.saveOrUpdateCours.bind(this);

  }


  componentDidMount() {
   // console.log(this.props.match);
    if (this.state.id === '_add') {
      return
    } else {
      CourService.getCoursById(this.state.id).then((response) => {
        let cours = response.data;
        this.setState({
          libelle: cours.libelle,
          nbeHeure: cours.nbeHeure,
          enseignantid: cours.enseignant.id,
          typecourid: cours.typecour.id,
         
        });
       
      });
    }
   
  }

  saveOrUpdateCours = (e) => {
    e.preventDefault();
   
    let cours = { libelle: this.state.libelle, nbeHeure: this.state.nbeHeure,enseignant:{id:this.state.enseignantid},typecour:{id:this.state.typecourid} };
     console.log('cours=>'+JSON.stringify(cours));

    if (this.state.id === '_add') {
      CourService.createCours(cours).then(response => {
        this.props.history.push('/cours');
      });
    } else {

      CourService.updateCours(cours, this.state.id).then(response => {
        this.props.history.push('/cours');
      });


    }

  }

  cancel() {
    this.props.history.push('/cours');
  }

  changeLibelle = (event) => {
    this.setState({ libelle: event.target.value });
  }

  changeNbeHeure = (event) => {
    this.setState({ nbeHeure: event.target.value });
  }

  changeEnseignant = (event) => {
    this.setState({ enseignantid: event.target.value });
  }

  changeTypeCours = (event) => {
    this.setState({ typecourid: event.target.value });
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h4>Ajouter Cours</h4>
    } else {
      return <h4>Modifier Cours</h4>
    }
  }

  render() {
    return (
      <Container>
        {
          this.getTitle()
        }
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label='Libellé' placeholder='libellé du cours' value={this.state.libelle} onChange={this.changeLibelle} />
            <Form.Input label='Nombre heure' placeholder='Nombre heure' type="number" id="inter" value={this.state.nbeHeure} onChange={this.changeNbeHeure} />
          </Form.Group>
          <Form.Group widths={2}>

            <Form.Input label='Enseignant' placeholder='Enseignant' type='number' value={this.state.enseignantid} onChange={this.changeEnseignant} />
            <Form.Input label='Type cours' placeholder='Type cours' type='number' value={this.state.typecourid} onChange={this.changeTypeCours} />
          </Form.Group>

          <Button positive type='submit' onClick={this.saveOrUpdateCours}>Valider</Button>
          <Button negative type='submit' onClick={this.cancel.bind(this)}>Annuler</Button>

        </Form>


      </Container>
    )
  }
}

export default CreateCours;