import { Fragment, useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import { Dropdown, Header, Menu ,Button} from 'semantic-ui-react';
import Accueil from './Composants/Accueil';
import Page404 from './Composants/Page404';
import Cours from './Composants/Cours';
import Recherche from './Composants/Recherche';
import Enseignant from './Composants/Enseignants';
import ListEnseignant from './Composants/ListEnseignant';
import CreateEnseignant from './Composants/CreateEnseignant';
import UpdateEnseignant from './Composants/UpdateEnseignant';
import DetailsEnseignant from './Composants/DetailsEnseignant';
import DetailsCours from './Composants/DetailsCours';
import HeaderComponent from './Composants/HeaderComponent';
import Footer from './Composants/Footer';
import CreateCours from './Composants/CreateCours';
import TypeCours from './Composants/TypeCours';
import RechercheEnseignant from './Composants/RechercheEnseignant';
import Formations from './Composants/Formations';
import CreateFormation from './Composants/CreateFormation';
import Groupes from './Composants/Groupes';
import CreateGroupe from './Composants/CreateGroupe';


function App() {
    return (
        <div>
            
        <Fragment>

            <BrowserRouter>
               
            <Menu>
            <Menu.Item as={NavLink} activeStyle={{color:"red", fontWeight: "bold"}} to="/" exact={true}>Accueil</Menu.Item>
            
           
            <Menu.Item >
            <Menu.Item activeStyle={{ color:"red",fontWeight: "bold"}} > 
            <Dropdown item text='Enseignant'>
            <Dropdown.Menu>
            <Dropdown.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/enseignants">Liste des Enseignants</Dropdown.Item>
            <Dropdown.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/rechercheEnseignant">Rechercher un Enseignant</Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>
            </Menu.Item>
           

          <Menu.Item activeStyle={{ color:"red",fontWeight: "bold"}} > 
            <Dropdown item text='Cours'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/cours">Liste des Cours</Dropdown.Item>
              <Dropdown.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/recherche">Rechercher un Cours</Dropdown.Item>
              <Dropdown.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/typecours">Type de Cours</Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>

          <Menu.Item activeStyle={{ color:"red",fontWeight: "bold"}} > 
            <Dropdown item text='Formation'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/formations">Liste des Formation</Dropdown.Item>
              <Dropdown.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/groupes">Liste des Groupes de Formation</Dropdown.Item>
              <Dropdown.Item>Rechercher une Formation</Dropdown.Item>
              <Dropdown.Item>Rechercher un groupe</Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>
            

          <Menu.Item position='right'>
            <Button primary>Login</Button>
          </Menu.Item>
            
          </Menu>
          
          <HeaderComponent/>
          <br/>
                <Switch>

                    <Route path="/" component={Accueil} exact />
                    <Route path="/recherche" component={Recherche} />
                    <Route path="/rechercheEnseignant" component={RechercheEnseignant} />
                    <Route path="/cours" component={Cours} />
                    <Route path="/add-cours/:id" component={CreateCours} />
                    <Route path="/details-cours/:id" component={DetailsCours} />

                    <Route path="/typecours" component={TypeCours} />

                    <Route path="/enseignants" component={Enseignant} />
                    <Route path="/add-enseignant/:id" component={CreateEnseignant} />
                    <Route path="/details-enseignant/:id" component={DetailsEnseignant} />

                    <Route path="/formations" component={Formations} />
                    <Route path="/add-formation/:id" component={CreateFormation} />

                    <Route path="/groupes" component={Groupes} />
                    <Route path="/add-groupe/:id" component={CreateGroupe} />
                    {/*<Route path="/update-enseignant/:id" component={UpdateEnseignant} />*/}
                    <Route path="*" component={Page404} />

                </Switch>
            </BrowserRouter>
           
        </Fragment>
        <Footer/>
        </div>
    );
}
export default App;