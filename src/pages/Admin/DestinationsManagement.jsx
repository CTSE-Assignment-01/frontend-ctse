import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
  Space,
  Row,
} from "antd";
import {
  getDestinations,
  createDestination,
  updateDestination,
  deleteDestination,
} from "../../controllers/DestinationService";
import ImageUpload from "components/ImageUpload";

const DestinationsManagement = () => {
  const onUpload = (image) => {
    setDestinationImage(image);
  };

  const [destinationImage, setDestinationImage] = useState();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await getDestinations();
        setDestinations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleAddDestination = () => {
    setVisible(true);
  };

  const handleEditDestination = (destination) => {
    setSelectedDestination(destination);
    setVisible(true);
    form.setFieldsValue({
      name: destination.name,
      departureLocation: destination.departureLocation,
      schedule: destination.schedule,
      description: destination.description,
      imageUrl: destination.imageUrl,
    });
  };

  const handleDeleteDestination = async (destinationId) => {
    try {
      await deleteDestination(destinationId);
      message.success("Destination deleted successfully");
      setDestinations(
        destinations.filter((destination) => destination._id !== destinationId)
      );
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedDestination(null);
    form.resetFields();
  };

  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (selectedDestination) {
        await updateDestination(selectedDestination._id, values);
        message.success("Destination updated successfully");
      } else {
        await createDestination({ ...values, imageUrl: destinationImage });
        message.success("Destination created successfully");
      }
      handleCancel();
      const response = await getDestinations();
      setDestinations(response.data);
      setSelectedDestination();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Departure Location",
      dataIndex: "departureLocation",
      key: "departureLocation",
    },
    { title: "Schedule", dataIndex: "schedule", key: "schedule" },
    { title: "Description", dataIndex: "description", key: "description" },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="dashed" onClick={() => handleEditDestination(record)}>
            Edit
          </Button>{" "}
          <Popconfirm
            title="Are you sure you want to delete this destination?"
            onConfirm={() => handleDeleteDestination(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row justify={"space-around"} style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 18 }}>Destinations Management</h1>
        <Button type="dashed" onClick={handleAddDestination}>
          Add Destination
        </Button>
      </Row>
      <Table
        dataSource={destinations}
        columns={columns}
        loading={loading}
        rowKey="_id"
      />
      <Modal
        title={selectedDestination ? "Edit Destination" : "Add Destination"}
        visible={visible}
        onOk={handleFormSubmit}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter destination name" },
            ]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Destination Name"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Departure Location"
            name="departureLocation"
            rules={[
              { required: true, message: "Please enter departure location" },
            ]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Departure Location"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Schedule"
            name="schedule"
            rules={[{ required: true, message: "Please enter schedule" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Departure Schedule"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input.TextArea />
          </Form.Item>
          {!selectedDestination && (
            <Form.Item label="Image URL" name="imageUrl">
              <ImageUpload onUpload={onUpload} />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default DestinationsManagement;
