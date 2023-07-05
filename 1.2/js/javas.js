// ! try/catch Example
// try {
//   let num = 5;
//   num.toUpperCase();
// } catch (error) {
//   console.log("An error eccured: " + error.message);
//   throw new Error("there was an error processing your request.");
// }

// ! Promise Example
// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then(() => console.log("world"));

// console.log("Hello!");

// ! Async/wait Example
// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

// async function asyncAwait() {
//   console.log("Hello!");
//   await wait(3000);
//   console.log("World");
// }

// asyncAwait();

// ! HTTP Client
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// ! Hands On
// function proms() {
//   let t_proms = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done"), 1000);
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
//   console.log(t_proms);
// }

// proms();

function printSongListPromise(songListPromise) {
  songListPromise
    .then((songs) => {
      console.log("Song list:");
      songs.forEach((song) => {
        console.log(`Title: ${song.title}`);
        song.artists.forEach((artist, index) => {
          console.log(`Artist ${index + 1}: ${artist.name}`);
        });
        console.log(`Duration: ${song.duration}`);
        console.log("--------------------");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// let prom = new Promise((resolve, reject) => {

//     let songs = {
//         title: "song title",
//         artists: [{ name: "artist name 1" }],
//         duration: 200,
//       };

//       songs.forEach(songs.key => {
//         console.log('Hello');
//       });

//     // if (songs.lenght !== '') {

//     // } else {

//     // }

//     // resolve(printSongListPromise(songs));
//     // reject();
// })

let songs = {
  title: "song title",
  artists: [{ name: "artist name 1" }],
  duration: 200,
};

for (let index = 0; index < songs.length; index++) {
  let song = songs[index];
}
console.log(song);
