import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonImg,
  IonButton,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonList,
  IonCol,
  IonItem,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const powerImage = "/assets/images/Power-2-512.png";
const backImage = "/assets/images/back.png";
const sideImage = "/assets/images/3.png";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [object, setObject] = useState([
    {
      id: 0,
      description: "",
      name: "",
    },
  ]); //object from api
  const [filteredSearch, setFilteredSearch] = useState([
    {
      id: 0,
      description: "",
      name: "",
    },
  ]); //filtered objects

  useEffect(() => {
    let tempSearchResult = object.filter((ele) =>
      ele.name.toLowerCase().includes(searchQuery)
    );
    setFilteredSearch([...tempSearchResult]);
  }, [searchQuery]);

  /**
   * React Hook - The code inside its going to be run onMount
   */
  useEffect(() => {
    /**
     * axios - get request to the api
     */
    axios
      .get(`https://northwind.now.sh/api/categories`)
      .then((response) => {
        setObject(response.data);
        setFilteredSearch(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Problem With Response ", error.response.status);
        } else if (error.request) {
          console.log("Problem With Request ");
        } else {
          console.log("we have an error " + error);
        }
      });
  }, []);

  console.log(searchQuery);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonImg src={backImage} />
            </IonButton>
          </IonButtons>

          <IonTitle> Επιλέξτε Πελάτες</IonTitle>

          <IonButtons slot="end" id="powerImage">
            <IonButton>
              <IonImg src={powerImage} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="3"></IonCol>
            <IonCol size="6">
              <IonSearchbar
                onIonChange={(e) => setSearchQuery(e.detail.value!)}
              />
            </IonCol>
            <IonCol size="3" className="ion-align-self-end">
              <IonImg id="sideImg" src={sideImage} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="1"></IonCol>
            <IonCol size="10">
              <IonList>
                {filteredSearch.map((item) => (
                  <IonItem key={item.name}>
                    <IonGrid>
                      <IonRow>
                        <h1>{item.name}</h1>
                      </IonRow>
                      <IonRow>
                        <h5>{item.description}</h5>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                ))}
              </IonList>
            </IonCol>
            <IonCol size="1"></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
