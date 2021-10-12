import React, { Component } from 'react'
import { Button, Container, Form, Segment } from 'semantic-ui-react';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
        
          userName: '',
          password: '',
          
    
        }
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
      
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }

    userNameChange = (event) => {
        this.setState({ userName: event.target.value });
      }

      passwordChange = (event) => {
        this.setState({ password: event.target.value });
      }

      handleSubmit=(e) => {
        e.preventDefault();

        const data={
            userName:this.userName,
            password:this.password

        };
        console.log('works');
      };

    render () {
        return (
            <Container>
              
              <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder='User Name' name='userName' onChange={this.userNameChange} />
          </Form.Group>
          <Form.Group>
          <Form.Input placeholder='Password' name='password' type='password' onChange={this.passwordChange} />
          </Form.Group>
          <Form.Group>
          <Form.Button primary content='Se Connecter' />
        </Form.Group>
      </Form>
 
            </Container>
        )
    }
}

export default Login;