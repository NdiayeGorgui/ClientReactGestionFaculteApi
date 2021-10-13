import React, { useState } from 'react';
import { Container, Input, Label, Button, Card, Image } from 'semantic-ui-react';

const RechercheEnseignant = (props) => {
  const [value, setValue] = useState("");
  const [lastName, setLastName] = useState("");
  const [statut, setStatut] = useState("");
  const [enseignants, setEnseignant] = useState([]);
  const [erreur, setErreur] = useState("");

  const appelApi = () => {

    fetch(`http://localhost:8090/api/Enseignants/Cherche/${value}`)
      .then((response) => response.json())
      .then((donnee) => setEnseignant(donnee))
      .catch((err) => setErreur(err));
  }
  const renderEnseignant = () => {
    return enseignants.map((unEnseignant) => {
      return (
        <Card key={unEnseignant.id}>

          <Card.Content>
            <Card.Header onClick={() => {
              props.history.push({
                pathname: `/enseignant/${unEnseignant.id}`,
                state: {
                  enseignants: unEnseignant
                }
              })
            }}><a>Prénom: {unEnseignant.firstName}</a> &nbsp;
              <p>Nom: {unEnseignant.lastName}</p>
            </Card.Header>
           <b> Adresse:</b> {unEnseignant.adress} <br />
           <b> Mail:</b> {unEnseignant.mail}<br />
           <b>Téléphone:</b> {unEnseignant.telephone}<br />
           <b> Statut:</b> {unEnseignant.statut}
          </Card.Content>
        </Card>
      )
    })
  }

  return (
    <Container>

      <Label pointing="right">Nom, Prénom ou Statut de l'Enseignant</Label>
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={appelApi}>Rechercher</Button>
      <hr />
      <h4>Résultats de la recherche</h4>
    {/*  {enseignants.length > 0 ? `Il y a ${enseignants.length} résultat(s)` : undefined}*/}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
        {enseignants.length > 0 ? renderEnseignant() : undefined}
      </div>
    </Container>
  )
}
export default RechercheEnseignant;