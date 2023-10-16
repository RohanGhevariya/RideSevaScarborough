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
  const [selectedSarthi, setSelectedSarthi] = useState<string>("all");
  const [attendingSarthi, setAttendingSarthi] = useState<string>(""); // Specify the type as string
  // State variable to keep track of the selected house
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("all");
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [participants, setParticipants] = useState(fakeData);
  const [selectedYuvakos, setSelectedYuvakos] = useState<string[]>([]);
  const [sarthiCarSpace, setSarthiCarSpace] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleHouseChange = (event: CustomEvent<any>) => {
    setSelectedHouse(event.detail.value); // Update the state with the selected value
  };
  const handleSarthiChange = (event: CustomEvent<any>) => {
    const selectedSarthiName = event.detail.value;
    setSelectedSarthi(selectedSarthiName);

    // Find the Sarthi's car space based on the selected Sarthi's name
    const selectedSarthi = attendingSarthis.find(
      (sarthis) => sarthis.name === selectedSarthiName
    );

    // Set the Sarthi's car space or 0 if the Sarthi is not found
    setSarthiCarSpace(selectedSarthi ? selectedSarthi.carSpace : 0);
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
    // Calculate the total number of Yuvakos selected
    const totalSelectedYuvakos = selectedYuvakos.length;

    // Find the selected Sarthi
    const attendingSarthi = attendingSarthis.find(
      (sarthi) => sarthi.name === selectedSarthi
    );

    if (!attendingSarthi) {
      return; // Sarthi not found, handle this case accordingly
    }

    if (totalSelectedYuvakos >= attendingSarthi.carSpace) {
      // Show an alert if the total selected Yuvakos exceed the car space
      setIsOpen(true);
    } else {
      // If not exceeding the car space, toggle the selection
      if (selectedYuvakos.includes(yuvakName)) {
        setSelectedYuvakos((prevYuvakos) =>
          prevYuvakos.filter((name) => name !== yuvakName)
        );
      } else {
        setSelectedYuvakos((prevYuvakos) => [...prevYuvakos, yuvakName]);
      }
    }
  };
  const handleAssignButtonClick = () => {
    // Here, you can use the selectedParticipants state to display the names in the Sarthi box label
    console.log("Selected Yuvako:", selectedYuvakos);
  };

  const attendingSarthis = fakeData.filter(
    (sarthis) => sarthis.attending === "yes" && sarthis.car === "yes"
  );
  const attendingYuvakos = fakeData.filter(
    (yuvakos) => yuvakos.attending === "yes"
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
            participant.houseName.toLowerCase() === selectedHouse.toLowerCase()
        );
  const uniqueHouseNames = Array.from(
    new Set(fakeData.map((participant) => participant.houseName))
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
              {uniqueHouseNames.map((houseName) => (
                <IonSelectOption key={houseName} value={houseName}>
                  {houseName}
                </IonSelectOption>
              ))}
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
                {filteredHouse.map(
                  (yuvak) =>
                    // Additional filter for Yuvakos who are attending
                    yuvak.attending === "yes" && (
                      <IonCard style={{ margin: "0px" }} key={yuvak.guid}>
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
                    )
                )}
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
        <IonAlert
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)} // Close the alert when done
          header="Alert"
          subHeader="Exceeded Car Space"
          message="You have selected more Yuvakos than the available car space."
          buttons={[
            {
              text: "OK",
              handler: () => {
                setIsOpen(false); // Close the alert when OK is pressed
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default AssignRide;
