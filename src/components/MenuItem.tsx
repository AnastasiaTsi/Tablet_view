import { IonLabel, IonItem, IonImg } from "@ionic/react";
import React from "react";

interface MenuItemProps {
  label: String;
}

const handleClick = (e: any) => {
  console.log(e);
};

const ItemImage = "/assets/images/5.png";
const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <IonItem id="flexColumn" onClick={(e) => handleClick(e.target)}>
      <IonImg src={ItemImage} id="smallImg" />
      <IonLabel>{props.label}</IonLabel>
    </IonItem>
  );
};

export default MenuItem;
