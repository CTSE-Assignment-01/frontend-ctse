import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { uploadFile } from "../controllers/uploadFileService";

const ImageUpload = ({ onUpload }) => {
  const [fileList, setFileList] = useState([]);

  const handleChange = async ({ fileList }) => {
    try {
      setFileList(fileList);
      if (fileList) {
        const file = fileList[0].originFileObj;
        const filePath = `destinations/${file.name}`;
        const fileUrl = await uploadFile(file, filePath);
        onUpload(fileUrl);
        console.log("file uploaded successfully");
      }
    } catch (error) {
      message.error("Error updloading file");
    }
  };

  return (
    <Upload fileList={fileList} onChange={handleChange} listType="picture">
      <Button icon={<UploadOutlined />}>Click to upload</Button>
    </Upload>
  );
};

export default ImageUpload;
