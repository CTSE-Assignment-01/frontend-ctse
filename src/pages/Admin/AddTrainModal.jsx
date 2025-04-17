import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  message,
} from "antd";
import { createTrain } from "../../controllers/TrainService";

const AddTrainModal = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      await createTrain(values);
      message.success("Train added successfully");
      onCancel();
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Add Train"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleFormSubmit}
        >
          Add Train
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter train name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Departure Time"
          name="departureTime"
          rules={[{ required: true, message: "Please select departure time" }]}
        >
          <TimePicker format="HH:mm" />
        </Form.Item>
        <Form.Item
          label="Arrival Time"
          name="arrivalTime"
          rules={[{ required: true, message: "Please select arrival time" }]}
        >
          <TimePicker format="HH:mm" />
        </Form.Item>
        <Form.Item
          label="From Location"
          name="fromLocation"
          rules={[{ required: true, message: "Please enter from location" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="To Location"
          name="toLocation"
          rules={[{ required: true, message: "Please enter to location" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select date" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Class"
          name="class"
          rules={[{ required: true, message: "Please enter class" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Available Seats"
          name="availableSeats"
          rules={[{ required: true, message: "Please enter available seats" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Total Seats"
          name="totalSeats"
          rules={[{ required: true, message: "Please enter total seats" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="NIC/Passport Number"
          name="nicPassportNumber"
          rules={[
            { required: true, message: "Please enter NIC or passport number" },
          ]}
        >
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTrainModal;
