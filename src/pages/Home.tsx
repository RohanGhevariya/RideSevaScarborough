import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Home.css";

import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Use history.push() to redirect to another page
    console.log("Clicked button");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ back: "white" }}>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <div className="center-content">
            <IonGrid>
              <IonRow>
                {/* Left column */}
                <IonCol size="6" className="column">
                  <IonButton
                    className="custom-button"
                    expand="block"
                    onClick={handleButtonClick}
                    routerLink={"/ride"}
                  >
                    Ride
                  </IonButton>

                  <IonButton className="custom-button" expand="block">
                    Button 2
                  </IonButton>
                  <IonButton className="custom-button" expand="block">
                    Button 3
                  </IonButton>
                  <IonButton className="custom-button" expand="block">
                    Button 4
                  </IonButton>
                </IonCol>

                {/* Right column */}
                <IonCol size="6" className="column">
                  <IonButton className="custom-button" expand="block">
                    Button 5
                  </IonButton>
                  <IonButton className="custom-button" expand="block">
                    Button 6
                  </IonButton>
                  <IonButton className="custom-button" expand="block">
                    Button 7
                  </IonButton>
                  <IonButton className="custom-button" expand="block">
                    Button 8
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            {/* <IonAlert
              trigger="present-alert"
              header="Alert"
              subHeader="Important message"
              message="This is an alert!"
              buttons={["OK"]}
            ></IonAlert> */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
