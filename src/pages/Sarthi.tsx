import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonGrid,
  IonRow,
  IonThumbnail,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonDatetime,
  IonBackButton,
  IonButtons,
  IonAvatar,
} from "@ionic/react";

import fakeData from "../assets/fakeData.json";
import { key } from "ionicons/icons";

const Sarthi: React.FC = () => {
  const [sarthis, setSarthis] = useState(fakeData);
  const [selectedTime, setSelectedTime] = useState<string | undefined>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: CustomEvent<any>) => {
    const query = event.detail.value || "";
    setSearchQuery(query.toLowerCase());
  };
  const filteredSarthis = sarthis.filter((sarthi) =>
    sarthi.name.toLowerCase().includes(searchQuery)
  );

  const handleAttendingChange = (sarthiId: string, value: string) => {
    setSarthis((prevSarthis) =>
      prevSarthis.map((sarthi) =>
        sarthi.guid === sarthiId ? { ...sarthi, attending: value } : sarthi
      )
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Sarthi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonSearchbar
            animated={true}
            placeholder="Search by name"
            style={{ padding: 2 }}
            value={searchQuery}
            onIonChange={handleSearchChange}
          />
        </IonItem>
        <IonCard
          color="dark"
          style={{ width: "95%", height: "100%", marginLeft: "7px" }}
        >
          <IonCardHeader>
            <IonCardSubtitle>Sarthi Details</IonCardSubtitle>
          </IonCardHeader>
          <IonContent>
            <IonCardContent style={{ width: "120%", marginLeft: "-50px" }}>
              <IonGrid className=".card-grid">
                {sarthis
                  .filter((sarthi) =>
                    sarthi.name.toLowerCase().includes(searchQuery)
                  )
                  .map((sarthi, index) => (
                    <IonRow key={sarthi.guid}>
                      <IonCol>
                        <IonCard style={{ width: "100%" }}>
                          <IonItem>
                            <IonAvatar slot="start" className="ion-avatar">
                              <img
                                src={
                                  "https://picsum.photos/200?random=" + index
                                }
                                alt="avatar"
                              />
                            </IonAvatar>
                            <IonRow>
                              <IonCol>
                                <IonRow style={{ marginTop: "10px" }}>
                                  <IonLabel>Name: {sarthi.name}</IonLabel>
                                </IonRow>
                                <IonRow style={{ marginTop: "10px" }}>
                                  <IonLabel>House: {sarthi.email}</IonLabel>
                                </IonRow>
                                <IonRow>
                                  <IonLabel style={{ marginTop: "10px" }}>
                                    Attending:
                                  </IonLabel>
                                  <IonRow>
                                    <IonItem style={{ marginRight: "5px" }}>
                                      <IonSelect
                                        aria-label="Attending"
                                        value={sarthi.attending}
                                        onIonChange={(e) =>
                                          handleAttendingChange(
                                            sarthi.guid,
                                            e.detail.value
                                          )
                                        }
                                      >
                                        <IonSelectOption value="yes">
                                          Yes
                                        </IonSelectOption>
                                        <IonSelectOption value="noreturn">
                                          No Return
                                        </IonSelectOption>
                                        <IonSelectOption value="onlyreturn">
                                          Only Return
                                        </IonSelectOption>
                                        <IonSelectOption value="no">
                                          No
                                        </IonSelectOption>
                                      </IonSelect>
                                    </IonItem>
                                  </IonRow>
                                </IonRow>
                                {sarthi.attending === "no" && (
                                  <IonRow>
                                    <IonItem>
                                      <IonInput placeholder="Enter reason"></IonInput>
                                    </IonItem>
                                  </IonRow>
                                )}
                                <IonRow style={{ marginTop: "0px" }}>
                                  <IonLabel style={{ marginTop: "10px" }}>
                                    Space: {sarthi.date}
                                  </IonLabel>
                                </IonRow>
                                <IonRow>
                                  <IonLabel style={{ marginTop: "10px" }}>
                                    Time: {sarthi.time}{" "}
                                  </IonLabel>
                                  <IonRow
                                    style={{ marginLeft: "10px" }}
                                  ></IonRow>
                                </IonRow>
                              </IonCol>
                            </IonRow>
                          </IonItem>
                        </IonCard>
                      </IonCol>
                    </IonRow>
                  ))}
              </IonGrid>
            </IonCardContent>
          </IonContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Sarthi;
