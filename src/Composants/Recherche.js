import React, { useState } from 'react';
import { Container, Input, Label, Button, Card, Image } from 'semantic-ui-react';

const Recherche = (props) => {
    const [libelle, setLibelle] = useState("");
    const [cours, setCours] = useState([]);
    const [erreur, setErreur] = useState("");

    const appelApi = () => {
       // fetch(`http://localhost:8090/api/Cours/${libelle}?fields=libelle;nbeHeure`)
        fetch(`http://localhost:8090/api/Cours/${libelle}`)
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
                Volume Horaire: {unCours.nbeHeure} H<br/>
                Type de cours: {unCours.typecour.type}<br/>
                Enseignant: {unCours.enseignant.firstName} &nbsp; 
                {unCours.enseignant.lastName}
              </Card.Content>
            </Card>
          )
        })
      }

    return (
        <Container>
            <h1>Rechercher</h1>
            <Label pointing="right">Cours</Label>
            <Input type="text" value={libelle} onChange={(e) => setLibelle(e.target.value)} />
            <Button onClick={appelApi}>Rechercher les cours</Button>
            <h2>Résultats de la recherche</h2>
            {cours.length > 0 ? `Il y a ${cours.length} résultat(s)` : undefined}
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%"}}>
        {cours.length > 0 ? renderCours() : undefined}
      </div>
        </Container>
    )
}
export default Recherche;