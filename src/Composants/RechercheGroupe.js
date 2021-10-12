import React, { Component, useState } from 'react'
import { Button, Card, Container, Input, Label } from 'semantic-ui-react';

const RechercheGroupe = (props) => {

  const [value, setValue] = useState("");
  const [numeroGroupe, setNumeroGroupe] = useState("");

  const [groupes, setGroupe] = useState([]);
  const [erreur, setErreur] = useState("");


  const appelApi = () => {

    fetch(`http://localhost:8090/api/Groupes/Numero/${value}`)
      .then((response) => response.json())
      .then((donnee) => setGroupe(donnee))
      .catch((err) => setErreur(err));
  }

  const renderGroupe = () => {
    return groupes.map((unGroupe) => {
      return (
        <Card key={unGroupe.id}>

          <Card.Content>
            <Card.Header onClick={() => {
              props.history.push({
                pathname: `/groupe/${unGroupe.id}`,
                state: {
                  groupes: unGroupe
                }
              })
            }}> <p><a>Numéro: {unGroupe.numeroGroupe}</a></p>

            </Card.Header>

            Nom Formation: {unGroupe.formation.nomFormation} <br />

          </Card.Content>
        </Card>
      )
    })
  }

  return (
    <Container>

      <Label pointing="right">Numéro du Groupe</Label>
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={appelApi}>Rechercher</Button>
      <hr />
      <h4>Résultats de la recherche</h4>
      {groupes.length > 0 ? `Il y a ${groupes.length} résultat(s)` : undefined}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
        {groupes.length > 0 ? renderGroupe() : undefined}
      </div>
    </Container>
  )
}


export default RechercheGroupe;