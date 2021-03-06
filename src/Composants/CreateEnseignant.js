import React, { Component } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import EnseignantService from '../Services/EnseignantService';



class CreateEnseignant extends Component {

    constructor(props){
        super(props)
        this.state={
          id:this.props.match.params.id,
          firstName:'',
          lastName:'',
          mail:'',
          telephone:'',
          statut:'',
          adress:''
        }
         this.changeFirstName=this.changeFirstName.bind(this);
         this.changeLastName=this.changeLastName.bind(this);
         this.changeMail=this.changeMail.bind(this);
         this.changeTelephone=this.changeTelephone.bind(this);
         this.changeStatut=this.changeStatut.bind(this);
         this.changeAdress=this.changeAdress.bind(this);
         this.saveOrUpdateEnseignant=this.saveOrUpdateEnseignant.bind(this);
       
        }

        componentDidMount(){
          if(this.state.id==='_add'){
            return
          }else{
            EnseignantService.getEnseignantById(this.state.id).then((response)=>{
              let enseignant=response.data;
              this.setState({firstName: enseignant.firstName,
              lastName:enseignant.lastName,
              adress:enseignant.adress,
              mail:enseignant.mail,
              statut:enseignant.statut,
              telephone:enseignant.telephone
              });
          });
          }
         
      }

        saveOrUpdateEnseignant=(e)=>{
          e.preventDefault();
          let enseignant={firstName:this.state.firstName,lastName:this.state.lastName,adress:this.state.adress,mail:this.state.mail,statut:this.state.statut,telephone:this.state.telephone};
         // console.log('enseignant=>'+JSON.stringify(enseignant));

          if(this.state.id==='_add'){
            EnseignantService.createEnseignant(enseignant).then(response=>{
              this.props.history.push('/enseignants');
            });
          }else{
           
              EnseignantService.updateEnseignant(enseignant,this.state.id).then(response=>{
                this.props.history.push('/enseignants');
              });
             
            
          }
         
        }

        cancel(){
          this.props.history.push('/enseignants');
        }

        changeFirstName=(event)=>{
          this.setState({firstName:event.target.value});
        }

        changeLastName=(event)=>{
          this.setState({lastName:event.target.value});
        }

        changeMail=(event)=>{
          this.setState({mail:event.target.value});
        }

        changeTelephone=(event)=>{
          this.setState({telephone:event.target.value});
        }
        changeAdress=(event)=>{
          this.setState({adress:event.target.value});
        }

        changeStatut=(event)=>{
          this.setState({statut:event.target.value});
        }

getTitle(){
  if(this.state.id==='_add'){
    return  <h4>Ajouter Enseignant</h4> 
  }else{
    return  <h4>Modifier Enseignant</h4> 
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
      <Form.Input label='Pr??nom' placeholder='Pr??nom' value={this.state.firstName} onChange={this.changeFirstName}/>
      <Form.Input label='Nom' placeholder='Nom' value={this.state.lastName} onChange={this.changeLastName}/>
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Adresse' placeholder='Adresse' value={this.state.adress} onChange={this.changeAdress}/>
      <Form.Input label='T??l??hone'type="tel" id="cel" name="cel" required placeholder="514-641-2512" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={this.state.telephone} onChange={this.changeTelephone}/>
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='Email' placeholder='Email' type="email" id="email" value={this.state.mail} onChange={this.changeMail} />
      <Form.Input label='Statut' placeholder='Statut'  value={this.state.statut}  onChange={this.changeStatut} />
    </Form.Group>
    <Button positive type='submit' onClick={this.saveOrUpdateEnseignant}>Valider</Button>
    <Button negative type='submit'onClick={this.cancel.bind(this)}>Annuler</Button>
  </Form>
            </Container>
        )
    }
}

export default CreateEnseignant;