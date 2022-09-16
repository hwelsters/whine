import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaWvxOw5HZh4Yu5oZZKLAIfWwQQQsWK3A",
  authDomain: "whine-1d4b2.firebaseapp.com",
  projectId: "whine-1d4b2",
  storageBucket: "whine-1d4b2.appspot.com",
  messagingSenderId: "169904922825",
  appId: "1:169904922825:web:1ee91252c3a4cadc51ad18",
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
