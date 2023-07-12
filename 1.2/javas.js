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

const songList = [
  { title: "Hikaru Nara", artists: [{ name: "Orange 7" }], duration: 200 },
  { title: "Flow", artists: [{ name: "Sign" }], duration: 200 },
  { title: "Rokudenasi", artists: [{ name: "Roku" }], duration: 200 },
];

let prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(songList);
    // reject("Track musik tidak ditemukan!");
  }, 3000);
  setTimeout(() => reject(new Error("Whoops!")), 3000);
});

// printSongListPromise(prom);

async function printSongListAwait(song_list) {
  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(song_list);
      // reject("Track musik tidak ditemukan!");
    }, 3000);
    setTimeout(() => reject(new Error("Whoops!")), 3000);
  });

  // console.log(prom);
  await printSongListPromise(prom);
}

printSongListAwait(songList);
// maaf ya kk sebelumya ni ak nanya soal materi yang kemarin
// mo nanya soal nyusun flex css :v

// itu sebelum kita aplikasikan ke html css, tu didesain di figma(atau semacamnya) dlu bru implementasi atau langsung cari template di google trus tinggal kita modiv isiannya?
// soalnya klo bikin dari 0 entah kenapa selalu acak-acakan :3
