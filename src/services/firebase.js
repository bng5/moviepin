import Firebase from 'firebase';
import FirebaseUI from 'firebaseui';

const MPFirebase = {
  firebaseConfig: () => {
    const config = {
      apiKey: "AIzaSyCq9Nl7z5DB5oh9F_F18rOi2pT27OLfwZQ",
      authDomain: "moviepin-33835.firebaseapp.com",
      databaseURL: "https://moviepin-33835.firebaseio.com",
      storageBucket: "moviepin-33835.appspot.com",
      messagingSenderId: "958350717889"
    };

    Firebase.initializeApp(config)
  },

  configureFirebaseUI: (element, successCallback) => {
    const uiConfig = {
      signInOptions: [
        Firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: (currentUser, credential, redirectUrl) => {
          successCallback();
          return true;
        }
      }
    };
    
    const firebaseUI = new FirebaseUI.auth.AuthUI(Firebase.auth());

    firebaseUI.start('#moviepin-firebaseui', uiConfig);
  },

  willJoin: () => {
    localStorage.setItem('firebaseLogin', true);
  },

  didJoin: () => {
    localStorage.setItem('firebaseLogin', false);
  },

  isJoining: () => {
    return localStorage.getItem('firebaseLogin') == 'true';
  }
};

export default MPFirebase;
