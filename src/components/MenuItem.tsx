import { IonLabel, IonItem, IonImg } from "@ionic/react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Catgories from "../pages/Categories";

interface MenuItemProps {
  label: String;
}
const ItemImage = "/assets/images/5.png";

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const handleClick = (e: any) => {
    if (props.label === "Κατηγορίες") {
      console.log("its time to go !");
      window.location.replace("/Categories");
    }
  };

  return (
    <IonItem id="flexColumn">
      <IonImg src={ItemImage} id="smallImg" />
      <IonLabel className="label" onClick={(e) => handleClick(e.target)}>
        {props.label}
      </IonLabel>
    </IonItem>
  );
};

export default MenuItem;
//projectfuture@regeneration.gr
