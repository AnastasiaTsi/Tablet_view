import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import Menu from "./pages/Menu";
import Categories from "./pages/Categories";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Menu} />
        <Route exact path="/categories" component={Categories} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
