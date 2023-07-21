import {
  IonBackdrop,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./RideManagement.css";

const RideManagement: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ride Management</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="container">
          <div className="center-content">
            <IonGrid>
              <IonRow>
                {/* Left column */}
                <IonCol size="6" className="column-rideManagement">
                  <IonButton
                    className="custom-button-rideManagement"
                    routerLink="/yuvako"
                  >
                    Yuvako
                  </IonButton>
                  <IonButton
                    className="custom-button-rideManagement"
                    routerLink="/sarthi"
                  >
                    Sarthi
                  </IonButton>
                  <IonButton
                    className="custom-button-rideManagement"
                    routerLink="/assignRide"
                  >
                    Assign Ride
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RideManagement;
