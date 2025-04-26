import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";

// export const uploadFile = async (file, path) => {
//   try {
//     const fileRef = ref(storage, `products/${file.name}`);
//     return await uploadBytesResumable(fileRef, file)
//       .then(async (res) => {
//         const url = await getDownloadURL(res.ref);
//         return url;
//       })
//       .catch((err) => {
//         throw Error(`${err}`);
//       });
//   } catch (error) {
//     throw Error(`${error}`);
//   }
// };

export const uploadFile = async (file) => {
  const cloudName = "du2tdxvlz"; // Replace with your Cloudinary cloud name
  const uploadPreset = "unsigned_preset"; // Replace with your preset

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Upload failed");
    
    const data = await res.json();
    return data.secure_url; // This is the Cloudinary image URL
  } catch (error) {
    throw Error(`Cloudinary upload error: ${error.message}`);
  }
};
