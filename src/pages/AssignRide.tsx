import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import fakeData from "../assets/fakeData.json";

const AssignRide: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<string>("all");
  const [selectedSarthi, setSelectedSarthi] = useState<string>("all"); // State variable to keep track of the selected house
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("all");
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [participants, setParticipants] = useState(fakeData);
  const [selectedYuvakos, setSelectedYuvakos] = useState<string[]>([]);

  const handleHouseChange = (event: CustomEvent<any>) => {
    setSelectedHouse(event.detail.value); // Update the state with the selected value
  };
  const handleSarthiChange = (event: CustomEvent<any>) => {
    setSelectedSarthi(event.detail.value); // Update the state with the selected value
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

  const handleYuvakSelection = (yuvakName: string) => {
    // If the participant is already selected, remove them from the list
    if (selectedYuvakos.includes(yuvakName)) {
      setSelectedYuvakos((prevYuvakos) =>
        prevYuvakos.filter((name) => name !== yuvakName)
      );
    } else {
      // If the participant is not selected, add them to the list
      setSelectedYuvakos((prevYuvakos) => [...prevYuvakos, yuvakName]);
    }
  };
  const handleAssignButtonClick = () => {
    // Here, you can use the selectedParticipants state to display the names in the Sarthi box label
    console.log("Selected Yuvako:", selectedYuvakos);
  };

  const attendingSarthis = fakeData.filter(
    (sarthis) => sarthis.attending === "yes"
  );

  const filteredParticipants =
    selectedTimeSlot === "all"
      ? attendingSarthis
      : attendingSarthis.filter((sarthi) => sarthi.time === selectedTimeSlot);

  const filteredHouse =
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
          <IonTitle>Assign Ride</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" style={{ background: "#F5EFE7" }}>
        <IonItem>
          <IonLabel>Select Yuvako</IonLabel>
          <IonItem style={{ marginLeft: 10 }}>
            <IonSelect
              aria-label="house"
              value={selectedHouse}
              onIonChange={handleHouseChange}
            >
              <IonSelectOption value="all">All</IonSelectOption>
              <IonSelectOption value="hariprerit">Hariprerit</IonSelectOption>
              <IonSelectOption value="dasatva">Dasatva</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonItem>
        <IonItem>
          <IonLabel>Select Sarthi</IonLabel>
          <IonItem style={{ marginLeft: 10 }}>
            <IonSelect
              aria-label="Sarthi"
              value={selectedSarthi}
              onIonChange={handleSarthiChange}
            >
              {/* Display IonSelectOptions for each sarthi */}
              {attendingSarthis.map((sarthis) => (
                <IonSelectOption key={sarthis.guid} value={sarthis.name}>
                  {sarthis.name}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonItem>
        <IonItem>
          <IonLabel>Select Time Slot</IonLabel>
          <IonItem style={{ marginLeft: 10 }}>
            <IonSelect
              aria-label="TimeSlot"
              value={selectedTimeSlot}
              onIonChange={handleTimeSlotChange}
            >
              {/* Display IonSelectOptions for each time slot */}
              <IonSelectOption value="all">All</IonSelectOption>
              {timeSlots.map((timeSlot) => (
                <IonSelectOption key={timeSlot} value={timeSlot}>
                  {timeSlot}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonItem>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sarthi</IonCardTitle>
            <IonCardSubtitle>Sarthi Name : {selectedSarthi}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonInfiniteScroll>
              <IonList>
                {/* Display the selected Yuvakos' names inside the Sarthi box */}
                {selectedYuvakos.map((yuvakName) => (
                  <IonItem key={yuvakName}>
                    <IonLabel>{yuvakName}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonInfiniteScroll>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Yuvako</IonCardTitle>
            <IonCardSubtitle>{selectedHouse}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            {filteredParticipants.length === 0 ? (
              <IonLabel style={{ marginLeft: "30px" }}>
                No records found.
              </IonLabel>
            ) : (
              <IonList>
                {filteredHouse.map((yuvak) => (
                  <IonCard style={{ margin: "0px" }}>
                    <IonCardContent>
                      <IonList>
                        <IonItem>
                          <IonLabel>
                            <IonCheckbox
                              checked={selectedYuvakos.includes(yuvak.name)}
                              onIonChange={() =>
                                handleYuvakSelection(yuvak.name)
                              }
                            >
                              {yuvak.name}
                            </IonCheckbox>
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCard>
                ))}
              </IonList>
            )}
            <IonButton
              style={{ marginLeft: "180px" }}
              slot="fixed"
              size="default"
              onClick={handleAssignButtonClick}
            >
              Assign
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AssignRide;
