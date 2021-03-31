import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import initFirebase, { dev } from '../services/firebase'
import Button from '@material-ui/core/Button'

initFirebase()

export default function Home() {
  const db = firebase.firestore()
  // db.settings({ host: 'localhost:8080',  ssl: false });
    // if (location.hostname === "localhost") {
        db.useEmulator("localhost", 8080)
    // }
  
  const handleClick = () => {
    db.collection('prueba').add({
      nombre: "Santiago",
      edad: 20
    })
    .then(() => {
        console.log('Documento agregado');
    })
    .catch((error) => {
        console.error('Error al escribir el documento', error);
    });
  }

  return (
    <React.Fragment>
      <h1>Hola mundo</h1>
      <Button variant="text" color="default" onClick={handleClick}>
        Buena tarde
      </Button>
    </React.Fragment>
  )
}
