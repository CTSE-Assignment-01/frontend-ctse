import React from "react";
import { Card, Typography } from "antd";
import { useSnapshot } from "valtio";
import state from "store";
import moment from "moment";
const { Title, Text } = Typography;

const TrainCard = () => {
  const snap = useSnapshot(state);
  const train = snap.selectedTrain;

  if (!train) {
    return <div>No train has been selected</div>;
  }
  return (
    <Card title={train.name} style={{ width: "100%" }}>
      <Title level={4}>Departure Time: {train.departureTime}</Title>
      <Title level={4}>Arrival Time: {train.arrivalTime}</Title>
      <Text>From: {train.fromLocation}</Text>
      <Text>To: {train.toLocation}</Text>
      <Text>Date: {moment(train.date).format("YYYY-MM-DD")}</Text>
      <Text>Class: {train.class}</Text>
      <Text>Available Seats: {train.availableSeats}</Text>
      <Text>Total Seats: {train.totalSeats}</Text>
    </Card>
  );
};

export default TrainCard;
