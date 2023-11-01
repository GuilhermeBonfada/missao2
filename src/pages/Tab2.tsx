import React, { useState } from 'react';
import { IonItem, IonInput, IonButton, IonHeader, IonContent, IonCard, IonLabel, IonPage, IonToolbar, IonTitle, IonAlert } from '@ionic/react';
import './Tab2.css';
const Tab2: React.FC = () => {
  const [pokemon, setPokemon] = useState({ name: '', height: '', weight: '', types: '', moves: ''  });
  const [searchTerm, setSearchTerm] = useState('');
  const [errorAlert, setErrorAlert] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setErrorAlert(true);
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        setErrorAlert(true);
      });
  };

  return (
    <IonPage className='fundo'><br /><br /><br />
      <IonHeader className='c'>
      </IonHeader>
      <IonContent >
        <IonTitle className='t'>Pesquise o pokemon desejado abaixo</IonTitle><br />
        <IonItem>
          <IonInput
          className='p'
            type="text"
            placeholder="Pesquisar Pokémon"
            value={searchTerm}
            onIonChange={(e) => setSearchTerm(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonButton onClick={handleSearch}>Pesquisar</IonButton>
          <IonCard className='resp'><br/>
          <IonItem>
            <IonLabel>Nome: {pokemon.name}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Altura: {pokemon.height}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Peso: {pokemon.weight}</IonLabel>
          </IonItem>
        </IonCard>

        <IonAlert
          isOpen={errorAlert}
          onDidDismiss={() => setErrorAlert(false)}
          header={'Erro'}
          message={'Houve um problema ao buscar o Pokémon. Certifique-se de que o nome está correto.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
