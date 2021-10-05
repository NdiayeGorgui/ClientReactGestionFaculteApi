import { Fragment, useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header, Menu } from 'semantic-ui-react';
import Accueil from './Composants/Accueil';
import Page404 from './Composants/Page404';
import Cours from './Composants/Cours';
import Recherche from './Composants/Recherche';
import Enseignant from './Composants/Enseignants';
import CreateEnseignant from './Composants/CreateEnseignant';
import UpdateEnseignant from './Composants/UpdateEnseignant';
import DetailsEnseignant from './Composants/DetailsEnseignant';
import HeaderComponent from './Composants/HeaderComponent';
import Footer from './Composants/Footer';


function App() {
    return (
        <div>
            
        <Fragment>

            <BrowserRouter>
               
            <Menu>
            <Menu.Item as={NavLink} activeStyle={{color:"red", fontWeight: "bold"}} to="/" exact={true}>Accueil</Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/recherche">Cours</Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/enseignants">Enseignants</Menu.Item>
          </Menu>
          <HeaderComponent/>
          <br/>
                <Switch>

                    <Route path="/" component={Accueil} exact />
                    <Route path="/recherche" component={Recherche} />
                    <Route path="/cours" component={Cours} />
                    <Route path="/enseignants" component={Enseignant} />
                    <Route path="/add-enseignant/:id" component={CreateEnseignant} />
                    <Route path="/details-enseignant/:id" component={DetailsEnseignant} />
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