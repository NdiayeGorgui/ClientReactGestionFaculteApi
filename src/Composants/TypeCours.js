import React, { Component } from 'react'
import { Button,Container } from 'semantic-ui-react';
import swal from 'sweetalert';
import TypeCourService from '../Services/TypeCourService';


class TypeCours extends Component {

    constructor(props){
        super(props)
        this.state={
            typeCours:[]
        }
        this.addTypeCours=this.addTypeCours.bind(this);
        this.editTypeCours=this.editTypeCours.bind(this);
        this.deleteTypeCours=this.deleteTypeCours.bind(this);
        this.confirmDelete=this.confirmDelete.bind(this);
    }

    detailsTypeCours(id){
        this.props.history.push(`/details-typecours/${(id)}`);
    }
    
     editTypeCours(id){
        this.props.history.push(`/add-typecours/${(id)}`);
    }
    
    deleteTypeCours(id){
        TypeCourService.deleteTypeCoursById(id).then(resp=>{
            this.setState({typeCours:this.state.typeCours.filter(typeCours => typeCours.id !== id)});
        });
    }

    componentDidMount(){
        TypeCourService.getTypeCours().then((resp)=>{
            this.setState({typeCours:resp.data})
        });
    }

    addTypeCours(){
        this.props.history.push('/add-typecours/_add');
    }

    confirmDelete(typeCoursid){
        swal({
            title: "Voulez vous supprimer cet enregistrement ?",
            text: "Cet enregistrement sera éffaçé dans la base !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                {this.deleteTypeCours(typeCoursid)}
              swal("Enregistrement supprimé !", {
                icon: "success",
              }); 
            } else {
              swal(" Suppression annulée!");
            }
          });
      }

    render () {
        return (
            <div>
            <Container>
            
            <h3 className="text-left">Liste des Types de Cours </h3> 
              <div >
                <Button primary onClick={this.addCours}> Ajouter</Button>
                </div>
              <table className="ui striped table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Prix</th>
        
        <th></th>
        <th >Actions</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
        {
            this.state.typeCours.map(
                typeCour=>
  <tr key={typeCour.id}>
  <td>{typeCour.type}</td>
  <td>{typeCour.prix}</td>
  
  <td><Button color='teal' onClick={()=>this.editTypeCours(typeCour.id)}>Modifier</Button></td>
  <td><Button color='red' onClick={()=>this.confirmDelete(typeCour.id)}>Supprimer</Button></td>
  <td><Button color='blue' onClick={()=>this.detailsTypeCours(typeCour.id)}>Détails</Button></td>
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

export default TypeCours;