import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonAlert,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
          <div className="center-content">
            <IonButton className="button" id="present-alert">
              Click Me
            </IonButton>
            <IonAlert
              trigger="present-alert"
              header="Alert"
              subHeader="Important message"
              message="This is an alert!"
              buttons={["OK"]}
            ></IonAlert>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
