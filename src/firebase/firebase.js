import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCrfzvAeJ-Tn0_NhCp2P6EXlJxx5c5No-A",
    authDomain: "empty-classrooms.firebaseapp.com",
    databaseURL: "https://empty-classrooms.firebaseio.com",
    projectId: "empty-classrooms",
    storageBucket: "empty-classrooms.appspot.com",
    messagingSenderId: "156752719472",
};

firebase.initializeApp(config);

const database = firebase.database();

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

database.ref('classrooms').on('value', (snapshot) => {
    const classrooms = [];
    snapshot.forEach((childSnapshot) => {
        classrooms.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
        });
    });
    //console.log(classrooms);
});
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