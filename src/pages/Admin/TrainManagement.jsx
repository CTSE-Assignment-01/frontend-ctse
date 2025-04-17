import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message, Select, Row } from "antd";
import {
  getTrains,
  createTrain,
  updateTrain,
  deleteTrain,
} from "../../controllers/TrainService";
import AddTrainModal from "./AddTrainModal";

const { Option } = Select;

const TrainManagement = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [addMoadlOpened, setAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await getTrains();
        setTrains(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trains:", error);
        setLoading(false);
      }
    };

    fetchTrains();
  }, []);

  const handleAddTrain = () => {
    setVisible(true);
  };

  const handleEditTrain = (train) => {
    setSelectedTrain(train);
    setVisible(true);
    form.setFieldsValue({
      name: train.name,
      departureTime: train.departureTime,
      arrivalTime: train.arrivalTime,
      fromLocation: train.fromLocation,
      toLocation: train.toLocation,
      date: train.date,
      class: train.class,
      availableSeats: train.availableSeats,
      totalSeats: train.totalSeats,
    });
  };

  const handleDeleteTrain = async (trainId) => {
    try {
      await deleteTrain(trainId);
      message.success("Train deleted successfully");
      setTrains(trains.filter((train) => train._id !== trainId));
    } catch (error) {
      console.error("Error deleting train:", error);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedTrain(null);
    form.resetFields();
  };

  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (selectedTrain) {
        await updateTrain(selectedTrain._id, values);
        message.success("Train updated successfully");
      } else {
        await createTrain(values);
        message.success("Train created successfully");
      }
      handleCancel();
      const response = await getTrains();
      setTrains(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Departure Time",
      dataIndex: "departureTime",
      key: "departureTime",
    },
    { title: "Arrival Time", dataIndex: "arrivalTime", key: "arrivalTime" },
    { title: "From", dataIndex: "fromLocation", key: "fromLocation" },
    { title: "To", dataIndex: "toLocation", key: "toLocation" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Class", dataIndex: "class", key: "class" },
    {
      title: "Available Seats",
      dataIndex: "availableSeats",
      key: "availableSeats",
    },
    { title: "Total Seats", dataIndex: "totalSeats", key: "totalSeats" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex" }}>
          <Button
            style={{ marginRight: "8px" }}
            type="dashed"
            onClick={() => handleEditTrain(record)}
          >
            Edit
          </Button>{" "}
          <Button danger onClick={() => handleDeleteTrain(record._id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row justify={"space-between"}>
        <h1 style={{ fontSize: 18 }}>Train Management</h1>
        <Button danger onClick={handleAddTrain}>
          <p style={{ color: "black" }}> Add Train</p>
        </Button>
      </Row>

      <Table
        dataSource={trains}
        columns={columns}
        loading={loading}
        rowKey="_id"
      />
      <Modal
        width={600}
        title={selectedTrain ? "Edit Train" : "Add Train"}
        visible={visible}
        onOk={handleFormSubmit}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter train name" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Enter a name to train"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Departure Time"
            name="departureTime"
            rules={[{ required: true, message: "Please enter departure time" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Depature Time"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Arrival Time"
            name="arrivalTime"
            rules={[{ required: true, message: "Please enter arrival time" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Arrival Time"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="From Location"
            name="fromLocation"
            rules={[{ required: true, message: "Please enter from location" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Enter Location"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="To Location"
            name="toLocation"
            rules={[{ required: true, message: "Please enter to location" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="To Location"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please enter date" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Date"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Class"
            name="class"
            rules={[{ required: true, message: "Please enter class" }]}
          >
            <Select>
              <Option value="First Class">First Class</Option>
              <Option value="Second Class">Second Class</Option>
              <Option value="Third Class">Third Class</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Available Seats"
            name="availableSeats"
            rules={[
              { required: true, message: "Please enter available seats" },
            ]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Enter your NIC or passport number"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Total Seats"
            name="totalSeats"
            rules={[{ required: true, message: "Please enter total seats" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Available Seats"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
        </Form>
      </Modal>
      <AddTrainModal
        visible={addMoadlOpened}
        onCancel={() => {
          setAddModalOpen(false);
        }}
      />
    </div>
  );
};

export default TrainManagement;
