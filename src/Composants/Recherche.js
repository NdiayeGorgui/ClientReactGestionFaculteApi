import React, { useState } from 'react';
import { Container, Input, Label, Button, Card, Image } from 'semantic-ui-react';

const RechercheCours = (props) => {
    const [libelle, setLibelle] = useState("");
    const [cours, setCours] = useState([]);
    const [erreur, setErreur] = useState("");

    const appelApi = () => {
       // fetch(`http://localhost:8090/api/Cours/${libelle}?fields=libelle;nbeHeure`)
        fetch(`http://localhost:8090/api/Cours/Libelle/${libelle}`)
            .then((response) => response.json())
            .then((donnee) => setCours(donnee))
            .catch((err) => setErreur(err));
    }
    const renderCours = () => {
        return cours.map((unCours) => {
          return (
            <Card key={unCours.id}>
             
              <Card.Content>
                <Card.Header onClick={() => {
                  props.history.push({
                    pathname: `/cours/${unCours.id}`,
                    state: {
                      cours: unCours
                    }
                  })
                }}><a>Cours: {unCours.libelle}</a>
                </Card.Header>
                <b> Volume Horaire:</b> {unCours.nbeHeure} H<br/>
                <b> Type de cours: </b>{unCours.typecour.type}<br/>
                <b> Enseignant:</b> {unCours.enseignant.firstName} &nbsp; 
                {unCours.enseignant.lastName}
              </Card.Content>
            </Card>
          )
        })
      }

    return (
        <Container>
           
            <Label pointing="right">Libellé du Cours</Label>
            <Input type="text" value={libelle} onChange={(e) => setLibelle(e.target.value)} />
            <Button onClick={appelApi}>Rechercher</Button>
            <hr/>
            <h4>Résultats de la recherche</h4>
            {cours.length > 0 ? `Il y a ${cours.length} résultat(s)` : undefined}
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%"}}>
        {cours.length > 0 ? renderCours() : undefined}
      </div>
        </Container>
    )
}
export default RechercheCours;