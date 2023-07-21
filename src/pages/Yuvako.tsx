import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Yuvako: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Yuvako</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="container">
          <div className="center-content">
            <IonButton routerLink="/sarthi">Go to Sarthi</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Yuvako;
