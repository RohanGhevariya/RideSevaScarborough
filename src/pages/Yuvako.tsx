import {
  IonAlert,
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
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFabList,
  IonGrid,
  IonHeader,
  IonIcon,
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
import { checkmark } from "ionicons/icons";
import { useEffect } from "react";

const alertHandle = () => {
  console.log("alert");
};

const Yuvako: React.FC = () => {
  const [attendingValue, setAttendingValue] = useState("yes");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHouse, setSelectedHouse] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleAttendingChange = (participantId: number, value: string) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) =>
        participant.id === participantId
          ? { ...participant, attending: value }
          : participant
      )
    );
  };

  const handleSearchChange = (event: CustomEvent<any>) => {
    const query = event.detail.value || "";
    setSearchQuery(query.toLowerCase());
  };

  const handleDateChange = (event: CustomEvent<any>) => {
    const selectedDateValue = event.detail.value;
    // Convert the selected date to the desired format "DD-MM-YYYY"
    const formattedDate = new Date(selectedDateValue).toLocaleDateString(
      "en-GB"
    );
    setSelectedDate(formattedDate);
  };

  const handleHouseChange = (event: CustomEvent<any>) => {
    setSelectedHouse(event.detail.value);
  };

  const handleAlertDismiss = () => {
    setIsOpen(false);
    window.location.reload(); // Reload the page
  };

  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: "Rohan Ghevariya",
      house: "Hariprerit",
      attending: "yes",
      reason: "",
    },
    {
      id: 2,
      name: "John Doe",
      house: "Dasatva",
      attending: "no",
      reason: "Not feeling well",
    },

    // Add more participants as needed
  ]);
  const filteredParticipants =
    selectedHouse === "all"
      ? participants
      : participants.filter(
          (participant) =>
            participant.house.toLowerCase() === selectedHouse.toLowerCase()
        );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Yuvako</IonTitle>
          <IonButtons slot="end">
            <IonButton
              color="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScyc7BJaFzAmAvbz0qQVZ8wZXntBpkgp2Ye6O_KgS6GLioAYg/viewform?usp=sf_link"
              target="_blank"
            >
              Add Yuvak
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="containerYuvako">
          <IonItem>
            <IonLabel>Sabha Date:</IonLabel>
            {selectedDate ? (
              <IonLabel>{selectedDate}</IonLabel>
            ) : (
              <IonDatetime
                // Set the desired format
                value={selectedDate}
                onIonChange={handleDateChange}
                cancelText="Cancel" // Set the text for the cancel button
                doneText="Done" // Set the text for the done button
                placeholder="Select Date" // Set a placeholder for the input field
              ></IonDatetime>
            )}
          </IonItem>
          <IonItem>
            <IonLabel> House</IonLabel>
            <IonItem style={{ marginLeft: 10 }}>
              <IonSelect
                aria-label="house"
                value={selectedHouse}
                onIonChange={handleHouseChange}
              >
                <IonSelectOption value="all">All</IonSelectOption>
                <IonSelectOption value="hariprerit">hariprerit</IonSelectOption>
                <IonSelectOption value="dasatva">dasatva</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonItem>
          <IonItem>
            <IonSearchbar
              animated={true}
              placeholder="Search by name"
              style={{ padding: 2 }}
              value={searchQuery}
              onIonChange={handleSearchChange}
            ></IonSearchbar>
          </IonItem>
          <IonCard color="dark" style={{ width: "95%", height: "100%" }}>
            <IonCardHeader>
              {/* <IonCardTitle>Card Title</IonCardTitle> */}
              <IonCardSubtitle>Yuvako Details</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent style={{ width: "105%", marginLeft: "-35px" }}>
              {filteredParticipants.length === 0 ? (
                <div className="no-records-found">No records found.</div>
              ) : (
                <IonGrid className=".card-grid">
                  {filteredParticipants
                    .filter((participant) =>
                      participant.name.toLowerCase().includes(searchQuery)
                    )
                    .map((participant) => (
                      <IonRow key={participant.id}>
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
                                      <IonLabel> {participant.name}</IonLabel>
                                    </IonRow>
                                  </IonRow>
                                  <IonRow style={{ marginTop: "10px" }}>
                                    <IonLabel>House: </IonLabel>
                                    <IonRow>
                                      <IonLabel> {participant.house} </IonLabel>
                                    </IonRow>
                                  </IonRow>
                                  <IonRow>
                                    <IonLabel style={{ marginTop: "10px" }}>
                                      Attending:
                                    </IonLabel>
                                    <IonRow>
                                      <IonItem style={{ marginRight: "5px" }}>
                                        <IonSelect
                                          placeholder="Attending?"
                                          aria-label="Attending"
                                          value={participant.attending}
                                          onIonChange={(e) =>
                                            handleAttendingChange(
                                              participant.id,
                                              e.detail.value
                                            )
                                          }
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
                                  {participant.attending === "no" && (
                                    <>
                                      {/* <IonLabel style={{ marginTop: "10px" }}>
                                      Reason:
                                    </IonLabel> */}
                                      <IonRow>
                                        <IonItem>
                                          <IonInput placeholder="Enter reason"></IonInput>
                                        </IonItem>
                                      </IonRow>
                                    </>
                                  )}
                                </IonCol>
                              </IonRow>
                            </IonItem>
                          </IonCard>
                        </IonCol>
                      </IonRow>
                    ))}
                </IonGrid>
              )}
              <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton onClick={() => setIsOpen(true)}>
                  <IonIcon icon={checkmark}></IonIcon>
                </IonFabButton>
                <IonAlert
                  isOpen={isOpen}
                  header="Alert"
                  subHeader="Important message"
                  message="Response is submitted!"
                  buttons={[{ text: "OK", handler: handleAlertDismiss }]}
                  onDidDismiss={() => setIsOpen(false)}
                ></IonAlert>
              </IonFab>
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
