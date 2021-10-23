import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// import { getDatabase } from "firebase/database";

// Set the configuration for your app
const firebaseConfig = {
  // apiKey: "AIzaSyAHlQK32Pp8yODbhThzvC6vaE36exsGUDs",
  apiKey: process.env.DEV_APP_KEY,
  authDomain: process.env.DEV_AUTH_DOMAIN,
  databaseURL: process.env.DEV_DATABASE_URL,
  projectId: process.env.DEV_PROJECT_ID,
  storageBucket: process.env.DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.DEV_MESSAGING_SENDER_ID,
  appId: process.env.DEV_APP_ID,
};

const firebaseInit = initializeApp(firebaseConfig);

// 'file' comes from the Blob or File API
const uploadToFirebase = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export default uploadToFirebase;
// export default { firebaseInit, uploadToFirebase };

// ----------------------------------------------------------------

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// // Set the configuration for your app
// // TODO: Replace with your project's config object
// const firebaseConfig = {
//   apiKey: "apiKey",
//   authDomain: "projectId.firebaseapp.com",
//   databaseURL: "https://databaseName.firebaseio.com",
//   storageBucket: "bucket.appspot.com",
// };

// const app = initializeApp(firebaseConfig);

// // Get a reference to the database service
// const database = getDatabase(app);

// // service firebase.storage {
// //   match /b/{bucket}/o {
// //     match /{allPaths=**} {
// //       allow read, write: if request.auth != null;
// //     }
// //   }
// // }

// // rules_version = '2';
// // service cloud.firestore {
// //   match /databases/{database}/documents {
// //     match /{document=**} {
// //       allow read, write: if false;
// //     }
// //   }
// // }
