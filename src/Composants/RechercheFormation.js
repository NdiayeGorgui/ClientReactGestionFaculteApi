import React, { Component, useState } from 'react'
import { Button, Card, Container, Input, Label } from 'semantic-ui-react';

const RechercheFormation = (props) => {

  const [value, setValue] = useState("");
  const [nomFormation, setNomFormation] = useState("");
  const [duree, setDuree] = useState("");
  const [annee, setAnnee] = useState("");
  const [formations, setFormation] = useState([]);
  const [erreur, setErreur] = useState("");

  const appelApi = () => {

    fetch(`http://localhost:8090/api/Formations/Cherche/${value}`)
      .then((response) => response.json())
      .then((donnee) => setFormation(donnee))
      .catch((err) => setErreur(err));
  }

  const renderFormation = () => {
    return formations.map((uneFormation) => {
      return (
        <Card key={uneFormation.id}>

          <Card.Content>
            <Card.Header onClick={() => {
              props.history.push({
                pathname: `/formation/${uneFormation.id}`,
                state: {
                  formations: uneFormation
                }
              })
            }}><a>Nom: {uneFormation.nomFormation}</a> &nbsp;

            </Card.Header>
            <p>Durée: {uneFormation.duree}</p>
            Année: {uneFormation.annee} <br />

          </Card.Content>
        </Card>
      )
    })
  }

  return (
    <Container>

      <Label pointing="right">Nom de la formation</Label>
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={appelApi}>Rechercher</Button>
      <hr />
      <h4>Résultats de la recherche</h4>
      {formations.length > 0 ? `Il y a ${formations.length} résultat(s)` : undefined}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
        {formations.length > 0 ? renderFormation() : undefined}
      </div>
    </Container>
  )

}

export default RechercheFormation;