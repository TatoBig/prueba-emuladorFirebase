import React from 'react'
import 'firebase/firestore'
import Button from '@material-ui/core/Button'
import { db } from "../services/firebase";

export default function Home() { 
  db.doc("hello/world").set({ hello: "world" });
  const handleClick = () => {
    
    console.log('aa') 
    // db.collection('prueba').add({
    //   nombre: "Santiago",
    //   edad: 20
    // })
    // .then(() => {
    //     console.log('Documento agregado');
    // })
    // .catch((error) => {
    //     console.error('Error al escribir el documento', error);
    // });
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
