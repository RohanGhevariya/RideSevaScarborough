import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
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
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="containerYuvako">
          <IonItem>
            <IonLabel className="lableDate"> Sabha Date:</IonLabel>
            <IonLabel> </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel className="lableDate"> House</IonLabel>
            <IonItem>
              <IonSelect aria-label="Favorite Fruit" value="hariprerit">
                <IonSelectOption value="hariprerit">Hariprerit</IonSelectOption>
                <IonSelectOption value="dasatva">Dasatva</IonSelectOption>
                <IonSelectOption value="all">All</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonItem>
          <div className="center-content">
            {/* <IonButton routerLink="/sarthi">Go to Sarthi</IonButton> */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Yuvako;
