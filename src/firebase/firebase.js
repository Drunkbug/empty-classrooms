import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBSASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('classrooms').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed: when child changes
// database.ref('classrooms').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('classrooms').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('classrooms')
//     .once('value')
//     .then((snapshot) => {
//         const classrooms = [];

//         snapshot.forEach((childSnapshot) => {
//             classrooms.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val(),
//             });
//         });
//         console.log(classrooms);
//     });

// database.ref('classrooms').on('value', (snapshot) => {
//     const classrooms = [];
//     snapshot.forEach((childSnapshot) => {
//         classrooms.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//         });
//     });
//     //console.log(classrooms);
// });
// database.ref('schedule').push({
//     startDate: undefined,
//     endDate: undefined,
//     day: undefined,
//     startTime: undefined,
//     endTime: undefined,
// });

// database.ref('classrooms').push({
//     building: 1232,
//     name: '301',
// });
// const firebaseNotes = {
//     classrooms: {
//         id: {
//             test: '1',
//         },
//         id2: {
//             test: '1',
//         },
//     },
// };

// database.ref().set({
//     name: 'Leyi',
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('failed: ', e);
// }); 