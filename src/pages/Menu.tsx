import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonButtons,
  IonImg,
  IonButton,
} from "@ionic/react";
import React from "react";
import "./Menu.css";
import MenuItem from "../components/MenuItem";

const labels = [
  "Η επιχείρηση",
  "Κατηγορίες",
  "Καρτέλα Κίνησης",
  "Αίτηση Ανάληψης",
  "Ενημέρωση Κατάθεσης",
];
const powerImage = "/assets/images/Power-2-512.png";
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Μενού</IonTitle>
          <IonButtons slot="end" id="powerImage">
            <IonButton>
              <IonImg src={powerImage} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {labels.map((label) => (
            <MenuItem label={label} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
