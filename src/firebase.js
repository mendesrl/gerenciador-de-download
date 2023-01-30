// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZ7RR1cpYFKlWEK9w6wvrljTvABVh9WWA',
  authDomain: 'gerenciador-de-download.firebaseapp.com',
  projectId: 'gerenciador-de-download',
  storageBucket: 'gerenciador-de-download.appspot.com',
  messagingSenderId: '70819085414',
  appId: '1:70819085414:web:aad883eaca180dc16601a7',
  measurementId: 'G-5KL5X2VX9N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getStorage } from 'firebase/storage';
const storage = getStorage(app);

export { storage };
