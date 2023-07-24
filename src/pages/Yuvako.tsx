import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./Yuvako.css";

const Yuvako: React.FC = () => {
  const [attendingValue, setAttendingValue] = useState("yes");

  const handleAttendingChange = (event: any) => {
    setAttendingValue(event.target.value);
  };
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
            <IonLabel>Sabha Date:</IonLabel>
            <IonLabel>23rd July, 2023</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> House</IonLabel>
            <IonItem style={{ marginLeft: 10 }}>
              <IonSelect aria-label="house" value="hariprerit">
                <IonSelectOption value="hariprerit">Hariprerit</IonSelectOption>
                <IonSelectOption value="dasatva">Dasatva</IonSelectOption>
                <IonSelectOption value="all">All</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonItem>
          <IonItem>
            <IonSearchbar
              animated={true}
              placeholder="Search"
              style={{ padding: 2 }}
            ></IonSearchbar>
          </IonItem>
          <IonCard color="light" style={{ width: "95%" }}>
            <IonCardHeader>
              {/* <IonCardTitle>Card Title</IonCardTitle> */}
              <IonCardSubtitle>Yuvako Details</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent style={{ width: "105%", marginLeft: "-35px" }}>
              <IonGrid className=".card-grid">
                <IonRow>
                  <IonCol>
                    <IonCard style={{ width: "100%" }}>
                      <IonItem>
                        <IonThumbnail slot="start">
                          <img
                            alt="Silhouette of mountains"
                            src="src/images/view.png"
                          />
                        </IonThumbnail>
                        <IonRow>
                          <IonCol>
                            <IonRow style={{ marginTop: "10px" }}>
                              <IonLabel>Name:</IonLabel>
                              <IonRow>
                                <IonLabel> Rohan Ghevariya</IonLabel>
                              </IonRow>
                            </IonRow>
                            <IonRow style={{ marginTop: "10px" }}>
                              <IonLabel>House: </IonLabel>
                              <IonRow>
                                <IonLabel> Hariprerit </IonLabel>
                              </IonRow>
                            </IonRow>
                            <IonRow>
                              <IonLabel style={{ marginTop: "10px" }}>
                                Attending:
                              </IonLabel>
                              <IonRow>
                                <IonItem style={{ marginRight: "5px" }}>
                                  <IonSelect
                                    aria-label="Attending"
                                    value={attendingValue}
                                    onIonChange={handleAttendingChange}
                                  >
                                    <IonSelectOption value="yes">
                                      Yes
                                    </IonSelectOption>
                                    <IonSelectOption value="no">
                                      No
                                    </IonSelectOption>
                                  </IonSelect>
                                </IonItem>
                              </IonRow>
                            </IonRow>
                            {attendingValue === "no" && (
                              <>
                                <IonRow>
                                  <IonLabel style={{ marginTop: "10px" }}>
                                    Reason:
                                  </IonLabel>
                                  <IonRow>
                                    <IonItem>
                                      <IonInput placeholder="Enter reason"></IonInput>
                                    </IonItem>
                                  </IonRow>
                                </IonRow>
                              </>
                            )}
                          </IonCol>
                        </IonRow>
                      </IonItem>

                      <IonButton fill="clear">Assign</IonButton>
                      <IonButton fill="clear"></IonButton>
                    </IonCard>
                    <IonCard style={{ width: "100%" }}>
                      <IonItem>
                        <IonThumbnail slot="start">
                          <img
                            alt="Silhouette of mountains"
                            src="src/images/view.png"
                          />
                        </IonThumbnail>
                        <IonRow>
                          <IonCol>
                            <IonRow style={{ marginTop: "10px" }}>
                              <IonLabel>Name:</IonLabel>
                              <IonRow>
                                <IonLabel> Rohan Ghevariya</IonLabel>
                              </IonRow>
                            </IonRow>
                            <IonRow style={{ marginTop: "10px" }}>
                              <IonLabel>House: </IonLabel>
                              <IonRow>
                                <IonLabel> Hariprerit </IonLabel>
                              </IonRow>
                            </IonRow>
                            <IonRow>
                              <IonLabel style={{ marginTop: "10px" }}>
                                Attending:
                              </IonLabel>
                              <IonRow>
                                <IonItem style={{ marginRight: "5px" }}>
                                  <IonSelect
                                    aria-label="Attending"
                                    value={attendingValue}
                                    onIonChange={handleAttendingChange}
                                  >
                                    <IonSelectOption value="yes">
                                      Yes
                                    </IonSelectOption>
                                    <IonSelectOption value="no">
                                      No
                                    </IonSelectOption>
                                  </IonSelect>
                                </IonItem>
                              </IonRow>
                            </IonRow>
                            {attendingValue === "no" && (
                              <>
                                <IonRow>
                                  <IonLabel style={{ marginTop: "10px" }}>
                                    Reason:
                                  </IonLabel>
                                  <IonRow>
                                    <IonItem>
                                      <IonInput placeholder="Enter reason"></IonInput>
                                    </IonItem>
                                  </IonRow>
                                </IonRow>
                              </>
                            )}
                          </IonCol>
                        </IonRow>
                      </IonItem>

                      <IonButton fill="clear">Assign</IonButton>
                      <IonButton fill="clear"></IonButton>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          <div className="center-content">
            {/* <IonButton routerLink="/sarthi">Go to Sarthi</IonButton> */}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Yuvako;
