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
          successCallback(currentUser);
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
  },

  saveUser: (user) => {
    Firebase.database()
            .ref(`users/${user.uid}`)
            .update({
              id: user.uid,
              name: user.displayName,
              email: user.email
            }, (error) => {
              if (error) {
                console.log(error);
              }
            });
  },

  saveMovie: (movie) => {
    const user = Firebase.auth().currentUser;
    const movieProperties = {
      id: movie.id,
      title: movie.title,
      year: movie.year,
      poster: movie.poster,
      overview: movie.overview,
      users: {}
    };
    let dataToSave = {};

    movieProperties.users[user.uid] = true

    dataToSave[`users/${user.uid}/movies/${movie.id}`] = true;
    dataToSave[`movies/${movie.id}`] = movieProperties;

    Firebase.database().ref().update(dataToSave, (error) => {
      if (error) {
        console.log(error) 
      }
    });
  },

  deleteMovie: (movie) => {
    const user = Firebase.auth().currentUser;
    
    Firebase.database()
            .ref(`users/${user.uid}/movies/${movie.id}`)
            .remove();
  },

  onPinnedMovie: (callback) => {
    const user = Firebase.auth().currentUser;

    Firebase.database()
            .ref(`users/${user.uid}/movies`)
            .on('child_added', (movie) => {
              callback(movie);
            });
  },

  onUnpinnedMovie: (callback) => {
    const user = Firebase.auth().currentUser;

    Firebase.database()
            .ref(`users/${user.uid}/movies`)
            .on('child_removed', (movie) => {
              callback(movie);
            });
  }
};

export default MPFirebase;
