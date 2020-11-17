import { IonItem, IonList, IonGrid, IonRow } from "@ionic/react";
// import React, { useEffect, useState } from "react";
// import "../pages/Home.css";
// import axios from "axios";

// const ListItems: React.FC = () => {
//   const [object, setObject] = useState([
//     {
//       id: 0,
//       description: "",
//       name: "",
//     },
//   ]); //object from api

//   /**
//    * React Hook - The code inside its going to be run onMount
//    */
//   useEffect(() => {
//     /**
//      * axios - get request to the api
//      */
//     axios
//       .get(`https://northwind.now.sh/api/categories`)
//       .then((response) => {
//         setObject(response.data);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log("Problem With Response ", error.response.status);
//         } else if (error.request) {
//           console.log("Problem With Request ");
//         } else {
//           console.log("we have an error " + error);
//         }
//       });
//   }, []);

//   // console.log("object");
//   // object.map((item) => console.log(item.name));

//   return (
//     <IonList lines="full">
//       {object.map((item) => (
//         <IonItem key={item.name}>
//           <IonGrid>
//             <IonRow>
//               <h1>{item.name}</h1>
//             </IonRow>
//             <IonRow>
//               <h5>{item.description}</h5>
//             </IonRow>
//           </IonGrid>
//         </IonItem>
//       ))}
//     </IonList>
//   );
// };

// export default ListItems;
