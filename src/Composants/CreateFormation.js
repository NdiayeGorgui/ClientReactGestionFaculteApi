import React, { Component } from 'react'
import { Button, Form,Container } from 'semantic-ui-react';
import FormationService from '../Services/FormationService';

class CreateFormation extends Component {

    constructor(props){
        super(props)
        this.state={
          id:this.props.match.params.id,
          nomFormation:'',
          duree:'',
          annee:'',
           
        }
         this.changeNomFormation=this.changeNomFormation.bind(this);
         this.changeDuree=this.changeDuree.bind(this);
         this.changeAnnee=this.changeAnnee.bind(this);
         this.saveOrUpdateFormation=this.saveOrUpdateFormation.bind(this);
       
        }

        componentDidMount(){
            if(this.state.id==='_add'){
                return
            }else{
                FormationService.getFormationsById(this.state.id).then((response)=>{
                  let formations=response.data;
                  this.setState({nomFormation: formations.nomFormation,
                  duree:formations.duree,
                  annee:formations.annee,
                
                 
                  });
              });
              }
        }

        saveOrUpdateFormation=(e)=>{
            e.preventDefault();
            let formations={nomFormation:this.state.nomFormation,duree:this.state.duree,annee:this.state.annee};
           // console.log('formations=>'+JSON.stringify(formations));
  
            if(this.state.id==='_add'){
                FormationService.createFormation(formations).then(response=>{
                this.props.history.push('/formations');
              });
            }else{
             
                FormationService.updateFormation(formations,this.state.id).then(response=>{
                  this.props.history.push('/formations');
                });
               
              
            }
           
          }

          cancel(){
            this.props.history.push('/formations');
          }

          changeNomFormation=(event)=>{
            this.setState({nomFormation:event.target.value});
          }

          changeDuree=(event)=>{
            this.setState({duree:event.target.value});
          }

          changeAnnee=(event)=>{
            this.setState({annee:event.target.value});
          }

         

          getTitle(){
            if(this.state.id==='_add'){
              return  <h4>Ajouter Formation</h4> 
            }else{
              return  <h4>Modifier Formation</h4> 
            }
          }

    render () {
        return (
            <Container>
               {
                 this.getTitle()
               }
  <Form>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Nom de la Formation' placeholder='Nom de la Formation' value={this.state.nomFormation} onChange={this.changeNomFormation}/>
      
    </Form.Group>

    <Form.Group widths={2}>
   
    <Form.Input label='Durée (en heure) de la Formation' placeholder='Durée (en heure) de la Formation'  type="number" id="inter" value={this.state.duree} onChange={this.changeDuree}/>
   
 </Form.Group>
    <Form.Group widths={2}>
   
      <Form.Input label='Année de la Formation' placeholder='Année de la Formation' value={this.state.annee} onChange={this.changeAnnee}/>
      
    </Form.Group>
   
    <Button positive type='submit' onClick={this.saveOrUpdateFormation}>Valider</Button>
    <Button negative type='submit'onClick={this.cancel.bind(this)}>Annuler</Button>

  </Form>

  
            </Container>
        )
    }
}

export default CreateFormation;