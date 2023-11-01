import React from 'react';
import { IonAlert, IonButton, IonImg } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle  size="large">home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Bem-vindo ao site da unijui</h1>
        <p> Esse e o meu site</p>
        <IonButton className='button' id="present-alert">clica aqui</IonButton>
      <IonAlert
        header="Que bom que esta funcionando!"
        trigger="present-alert"
        buttons={[
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
            console.log('Alerta confirmado');  
            },
          },
        ]}
        onDidDismiss={({ detail }) => console.log(`Dismissed with role: ${detail.role}`)}
      ></IonAlert>
      <h1>Essa parte não poderia faltar</h1>  
      <IonImg
      className='image'
      src="unijui.png"
      alt="logo unijui"
    ></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
