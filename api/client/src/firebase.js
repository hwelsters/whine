import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MEESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
console.log("HERE");

const upload = async (item) => {
  if (!item.file) return "";
  const fileName = Date.now().toString() + item.file.name;
  const storageRef = ref(storage, "images/" + fileName);

  const uploadTask = uploadBytesResumable(storageRef, item.file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {}
  );
  await uploadTask;

  let downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
  return downloadUrl;
};

export default upload;
