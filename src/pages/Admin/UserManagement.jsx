import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Space,
  Modal,
  Form,
  Input,
  Popconfirm,
  message,
} from "antd";
import { fetchUsers, updateUser, deleteUser } from "controllers/UserController";
import { Button } from "antd";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleEdit = (record) => {
    setSelectedUser(record);
    setVisible(true);
    form.setFieldsValue({
      name: record.name,
      email: record.email,
      role: record.role,
      phoneNumber: record.phoneNumber,
      nic: record.nic,
    });
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedUser(null);
    form.resetFields();
  };

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      await updateUser(selectedUser._id, values);
      message.success("User updated successfully");
      setVisible(false);
      form.resetFields();
      // Refresh users after update
      const response = await fetchUsers();
      setUsers(response.data);
      setSelectedUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
      message.error("Error updating user");
    }
  };

  const handleDelete = async (record) => {
    try {
      await deleteUser(record._id);
      message.success("User deleted successfully");
      // Refresh users after delete
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "NIC",
      dataIndex: "nic",
      key: "nic",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "blue" : "green"}>{role}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record)}
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
      <h1>Manage Users</h1>
      <Table
        dataSource={users}
        columns={columns}
        loading={loading}
        rowKey={(record) => record.id}
      />

      <Modal
        title="Edit User"
        visible={visible}
        onCancel={handleCancel}
        onOk={handleUpdate}
      >
        <Form form={form} layout="vertical" name="editUserForm">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter user's name" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Enter your NIC or passport number"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            name="nic"
            label="Nic"
            rules={[{ required: true, message: "Please enter user's nic" }]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Enter your NIC or passport number"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter user's phone number" },
            ]}
          >
            <input
              type="text"
              id="nic"
              placeholder="Enter your phone number"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter user's email" }]}
          >
            <input
              disabled
              type="text"
              id="nic"
              placeholder="Enter your NIC or passport number"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select user's role" }]}
          >
            <input
              disabled
              type="text"
              id="nic"
              placeholder="Enter your NIC or passport number"
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
