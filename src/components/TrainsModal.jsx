import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "antd";
import { getTrains } from "controllers/TrainService";
import { useSnapshot } from "valtio";
import state from "store";
import { useNavigate } from "react-router-dom";

const TrainsModal = () => {
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains();
  }, []);
  const handleCancel = () => {
    state.trainsModalVisible = false;
  };

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

  const columns = [
    {
      title: "Train Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Depature Time",
      dataIndex: "departureTime",
      key: "departureTime",
    },
    {
      title: "From",
      dataIndex: "fromLocation",
      key: "fromLocation",
    },
    {
      title: "actions",
      key: "actions",
      render: (record) => (
        <Button
          type="dashed"
          onClick={() => {
            state.selectedTrain = record;
            navigate("/book");
            handleCancel();
          }}
        >
          Book
        </Button>
      ),
    },
  ];

  return (
    <>
      <Modal
        width={800}
        title="Trains List"
        visible={snap.trainsModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Table dataSource={trains} columns={columns} />
      </Modal>
    </>
  );
};

export default TrainsModal;
