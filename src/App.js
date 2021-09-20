import { Fragment, useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import { Menu } from 'semantic-ui-react';
import Accueil from './Composants/Accueil';
import Page404 from './Composants/Page404';
import Cours from './Composants/Cours';
import Recherche from './Composants/Recherche';


function App() {
    return (
        <Fragment>

            <BrowserRouter>
               
            <Menu>
            <Menu.Item as={NavLink} activeStyle={{color:"red", fontWeight: "bold"}} to="/" exact={true}>Accueil</Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ color:"red",fontWeight: "bold"}} to="/recherche">Recherche</Menu.Item>
          </Menu>

                <Switch>

                    <Route path="/" component={Accueil} exact />
                    <Route path="/recherche" component={Recherche} />
                    <Route path="/cours" component={Cours} />
                    <Route path="*" component={Page404} />

                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}
export default App;