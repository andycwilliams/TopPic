import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// import { getDatabase } from "firebase/database";

// Set the configuration for your app
const firebaseConfig = {
  apiKey: "AIzaSyAHlQK32Pp8yODbhThzvC6vaE36exsGUDs",
  authDomain: "top-pic-28acd.firebaseapp.com",
  databaseURL: "https://top-pic-28acd-default-rtdb.firebaseio.com",
  projectId: "top-pic-28acd",
  storageBucket: "top-pic-28acd.appspot.com",
  messagingSenderId: "722258064323",
  appId: "1:722258064323:web:ab05a106fde4fca9fcc376",
};

const app = initializeApp(firebaseConfig);

// 'file' comes from the Blob or File API
const uploadToFirebase = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export default uploadToFirebase;
