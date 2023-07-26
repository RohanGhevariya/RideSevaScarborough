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
} from "@ionic/react";

const Sarthi: React.FC = () => {
  const [sarthis, setSarthis] = useState([
    {
      id: 1,
      name: "Rohan Ghevariya",
      house: "Hariprerit",
      attending: "yes",
      reason: "",
      space: 4,
      time: "05:30PM",
    },
    {
      id: 2,
      name: "John Doe",
      house: "Dasatva",
      attending: "no",
      reason: "Not feeling well",
      space: 4,
      time: "05:30PM",
    },

    // Add more participants as needed
  ]);
  const [selectedTime, setSelectedTime] = useState<string | undefined>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: CustomEvent<any>) => {
    const query = event.detail.value || "";
    setSearchQuery(query.toLowerCase());
  };
  const filteredSarthis = sarthis.filter((sarthi) =>
    sarthi.name.toLowerCase().includes(searchQuery)
  );

  const handleAttendingChange = (sarthiId: number, value: string) => {
    setSarthis((prevSarthis) =>
      prevSarthis.map((sarthi) =>
        sarthi.id === sarthiId ? { ...sarthi, attending: value } : sarthi
      )
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
        <IonCard color="dark" style={{ width: "95%", height: "100%" }}>
          <IonCardHeader>
            <IonCardSubtitle>Sarthi Details</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent style={{ width: "105%", marginLeft: "-35px" }}>
            <IonGrid className=".card-grid">
              {sarthis
                .filter((sarthi) =>
                  sarthi.name.toLowerCase().includes(searchQuery)
                )
                .map((sarthi) => (
                  <IonRow key={sarthi.id}>
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
                                <IonLabel>Name: {sarthi.name}</IonLabel>
                              </IonRow>
                              <IonRow style={{ marginTop: "10px" }}>
                                <IonLabel>House: {sarthi.house}</IonLabel>
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
                                          sarthi.id,
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
                                <IonLabel>Space: {sarthi.space}</IonLabel>
                              </IonRow>
                              <IonRow>
                                <IonLabel>Time: </IonLabel>
                                <IonRow style={{ marginLeft: "10px" }}></IonRow>
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
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Sarthi;
