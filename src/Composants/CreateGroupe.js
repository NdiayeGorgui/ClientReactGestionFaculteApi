import React, { Component } from 'react'
import { Button, Container, Form } from 'semantic-ui-react';
import GroupeService from '../Services/GroupeService';

class CreateGroupe extends Component {

    constructor(props){
        super(props)
        this.state={
          id:this.props.match.params.id,
          numeroGroupe:'',
          formationid:1
          
        }
         this.changeNumeroGroupe=this.changeNumeroGroupe.bind(this);
         this.changeFormation=this.changeFormation.bind(this);
         this.saveOrUpdateGroupe=this.saveOrUpdateGroupe.bind(this);
       
        }

        componentDidMount(){
            if(this.state.id==='_add'){
                return
            }else{
                GroupeService.getGroupeById(this.state.id).then((response)=>{
                    let groupes=response.data;
                    this.setState({numeroGroupe: groupes.numeroGroupe,
                   
                    formationid:groupes.formation.id,
                   
                    });
                });
            }
        }

        saveOrUpdateGroupe=(e)=>{
            e.preventDefault();
            let groupes={numeroGroupe:this.state.numeroGroupe,formationid:this.state.formationid};
           // console.log('groupes=>'+JSON.stringify(groupes));
  
            if(this.state.id==='_add'){
             GroupeService.createGroupe(groupes).then(response=>{
                this.props.history.push('/groupes');
              });
            }else{
             
                GroupeService.updateGroupe(groupes,this.state.id).then(response=>{
                  this.props.history.push('/groupes');
                });
               
              
            }
           
          }

          cancel(){
            this.props.history.push('/groupes');
          }

          changeNumeroGroupe=(event)=>{
            this.setState({numeroGroupe:event.target.value});
          }

        

          changeFormation=(event)=>{
            this.setState({formationid:event.target.value});
          }

         

          getTitle(){
            if(this.state.id==='_add'){
              return  <h4>Ajouter Groupe</h4> 
            }else{
              return  <h4>Modifier Groupe</h4> 
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
      <Form.Input label='Numéro Groupe' placeholder='Numéro Groupe' value={this.state.numeroGroupe} onChange={this.changeNumeroGroupe}/>
     
    </Form.Group>
    <Form.Group widths={2}>
   
      <Form.Input label='Nom Formation' placeholder='Nom Formation' value={this.state.formationid} onChange={this.changeFormation}/>
      
    </Form.Group>
   
    <Button positive type='submit' onClick={this.saveOrUpdateGroupe}>Valider</Button>
    <Button negative type='submit'onClick={this.cancel.bind(this)}>Annuler</Button>

  </Form>

  
            </Container>
        )
    }
}

export default CreateGroupe;