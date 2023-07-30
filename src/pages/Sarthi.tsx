import React, { useEffect, useState } from "react";
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
  IonAlert,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";

import fakeData from "../assets/fakeData.json";
import { checkmark, key } from "ionicons/icons";

const Sarthi: React.FC = () => {
  const [sarthis, setSarthis] = useState(
    fakeData.map((sarthi) => ({ ...sarthi, selectedTime: "" }))
  );
  const [selectedTime, setSelectedTime] = useState<string | undefined>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("all");
  const [responses, setResponses] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleResponseSubmission = () => {
    // Create a new array with the guids of participants who are attending
    const attendingSarthis = sarthis
      .filter((sarthi) => sarthi.attending === "yes")
      .map((sarthis) => sarthis.guid);

    // Add the attending participant guids to the responses state
    setResponses(attendingSarthis);

    setIsOpen(true); // Show the alert
  };

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

  const handleTimeSlotChange = (event: CustomEvent<any>) => {
    setSelectedTimeSlot(event.detail.value);
  };
  useEffect(() => {
    // Extract unique time slots from the data
    const uniqueTimeSlots = Array.from(
      new Set(fakeData.map((sarthi) => sarthi.time))
    );
    setTimeSlots(uniqueTimeSlots);
  }, []);

  const handleSarthiTimeChange = (sarthiId: string, value: string) => {
    setSarthis((prevSarthis) =>
      prevSarthis.map((sarthi) =>
        sarthi.guid === sarthiId ? { ...sarthi, selectedTime: value } : sarthi
      )
    );
  };

  const handleAlertDismiss = () => {
    setIsOpen(false);
    window.location.reload(); // Reload the page
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
            <IonCardContent style={{ width: "120%", marginLeft: "-40px" }}>
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
                                  <IonLabel style={{ marginTop: "15px" }}>
                                    Attending:
                                  </IonLabel>
                                  <IonRow>
                                    <IonItem style={{ marginRight: "5px" }}>
                                      <IonSelect
                                        placeholder="Select Availability"
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
                                    Space:
                                  </IonLabel>
                                  <IonItem style={{ margin: "10px" }}>
                                    <IonInput>{sarthi.date}</IonInput>
                                  </IonItem>
                                </IonRow>
                                <IonRow>
                                  <IonLabel style={{ marginTop: "15px" }}>
                                    Time:{" "}
                                  </IonLabel>
                                  <IonItem style={{ marginLeft: 10 }}>
                                    <IonSelect
                                      placeholder="Select Time"
                                      title="Time"
                                      aria-label="TimeSlot"
                                      value={sarthi.selectedTime}
                                      onIonChange={(e) =>
                                        handleSarthiTimeChange(
                                          sarthi.guid,
                                          e.detail.value
                                        )
                                      }
                                    >
                                      {/* Display IonSelectOptions for each time slot */}

                                      {timeSlots.map((timeSlot) => (
                                        <IonSelectOption
                                          key={timeSlot}
                                          value={timeSlot}
                                        >
                                          {timeSlot}
                                        </IonSelectOption>
                                      ))}
                                    </IonSelect>
                                  </IonItem>

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
    </IonPage>
  );
};

export default Sarthi;
