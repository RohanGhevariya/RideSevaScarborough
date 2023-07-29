import {
  IonActionSheet,
  IonAlert,
  IonAvatar,
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
  IonDatetimeButton,
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
import jsonData from "../assets/fakeData.json";

const alertHandle = () => {
  console.log("alert");
};

const Yuvako: React.FC = () => {
  const [attendingValue, setAttendingValue] = useState("yes");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHouse, setSelectedHouse] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [responses, setResponses] = useState<string[]>([]);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const handleResponseSubmission = () => {
    // Create a new array with the guids of participants who are attending
    const attendingParticipants = participants
      .filter((participant) => participant.attending === "yes")
      .map((participant) => participant.guid);

    // Add the attending participant guids to the responses state
    setResponses(attendingParticipants);

    setIsOpen(true); // Show the alert
  };

  const handleAttendingChange = (participantId: string, value: string) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) =>
        participant.guid === participantId
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
  const openActionSheet = () => {
    setShowActionSheet(true);
  };

  const closeActionSheet = () => {
    setShowActionSheet(false);
  };

  const selectDateFromActionSheet = () => {
    // This function is called when the user selects the "Select Date" option in the action sheet
    openActionSheet();
  };

  const handleHouseChange = (event: CustomEvent<any>) => {
    setSelectedHouse(event.detail.value);
  };

  const handleAlertDismiss = () => {
    setIsOpen(false);
    window.location.reload(); // Reload the page
  };

  const [participants, setParticipants] = useState(jsonData);
  const filteredParticipants =
    selectedHouse === "all"
      ? participants
      : participants.filter(
          (participant) =>
            participant.email.toLowerCase() === selectedHouse.toLowerCase()
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
      <IonContent className="ion-padding" style={{ background: "#F5EFE7" }}>
        <IonItem>
          <IonLabel>Sabha Date:</IonLabel>
          {selectedDate ? (
            <IonLabel>{selectedDate}</IonLabel>
          ) : (
            <IonLabel onClick={selectDateFromActionSheet}>
              {/* Display the selected date or the placeholder text */}
              {selectedDate ? selectedDate : "Select Date"}
            </IonLabel>
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
            style={{ padding: 2, backgroung: "#ffffff" }}
            value={searchQuery}
            onIonChange={handleSearchChange}
          ></IonSearchbar>
        </IonItem>
        <IonCard style={{ width: "95%", height: "100%" }}>
          <IonCardHeader>
            {/* <IonCardTitle>Card Title</IonCardTitle> */}
            <IonCardSubtitle>Yuvako Details</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent
            color="light"
            style={{ width: "105%", marginLeft: "-35px" }}
          >
            {filteredParticipants.length === 0 ? (
              <IonLabel style={{ marginLeft: "30px" }}>
                No records found.
              </IonLabel>
            ) : (
              <IonGrid className=".card-grid">
                {filteredParticipants
                  .filter((participant) =>
                    participant.name.toLowerCase().includes(searchQuery)
                  )
                  .map((participant, index) => (
                    <IonRow key={participant.guid}>
                      <IonCol>
                        <IonCard>
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
                                  <IonLabel>Name:</IonLabel>
                                  <IonRow>
                                    <IonLabel> {participant.name}</IonLabel>
                                  </IonRow>
                                </IonRow>
                                <IonRow style={{ marginTop: "10px" }}>
                                  <IonLabel>House: </IonLabel>
                                  <IonRow>
                                    <IonLabel> {participant.email} </IonLabel>
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
                                        // value={participant.attending}
                                        onIonChange={(e) =>
                                          handleAttendingChange(
                                            participant.guid,
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
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFab
        style={{ marginBottom: "22px", marginRight: "5px" }}
        slot="fixed"
        vertical="bottom"
        horizontal="end"
      >
        <IonFabButton onClick={handleResponseSubmission}>
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
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={closeActionSheet}
        buttons={[
          {
            text: "Select Date",
            handler: openActionSheet, // Open the date picker again
          },
          {
            text: "Cancel",
            role: "cancel",
          },
        ]}
      >
        <IonDatetime
          value={selectedDate}
          onIonChange={handleDateChange}
          cancelText="Cancel"
          doneText="Done"
          placeholder="Select Date"
        ></IonDatetime>
      </IonActionSheet>
    </IonPage>
  );
};

export default Yuvako;
