const database = "Spotify";
const collection1 = "Songs";
const collection2 = "Artists";
const collection3 = "PopularSongs";

// *The 'current' database to use.
use(database);

// *create 'Songs' Colections
db.createCollection(collection1);

const songs = [
  {
    artist: ["Eve"],
    title: "Kakai Kitan",
    duration: "03:43",
    url: "music/eve-kakaiKitan-343.mp3",
    album: "Kakai Kitan",
  },
  {
    artist: ["SPYAIR"],
    title: "Imagination",
    duration: "03:07",
    url: "music/spyair-imagination-307.mp3",
    album: "Imagination",
  },
  {
    artist: ["3-Nen E-Gumi Utatan"],
    title: "Bye Bye Yesterday",
    duration: "04:10",
    url: "music/3nenEgumiUtatan-ByeByeYesterday-410.mp3",
    album: "Bye Bye Yesterday",
  },
  {
    artist: ["Ikimono Gakari"],
    title: "Blue Bird",
    duration: "03:43",
    url: "music/Ikimonogakari-BlueBird-343.mp3",
    album: "Blue Bird",
  },
  {
    artist: ["Rookiez Is Punk'd"],
    title: "Complication",
    duration: "04:49",
    url: "music/Rookiez-Complication-449.mp3",
    album: "Complication",
  },
  {
    artist: ["BURNOUT SYNDROMES"],
    title: "Hikari Are",
    duration: "04:13",
    url: "music/BURNOUTSYNDROMES-Hikari Are-413.mp3",
    album: "Hikari Are",
  },
  {
    artist: ["Linked Horizon"],
    title: "Guren no Yumiya",
    duration: "03:27",
    url: "music/LinkedHorizon-GurenNoYumiya-327.mp3",
    album: "Guren no Yumiya",
  },
  {
    artist: ["Aimer"],
    title: "Zankyou Sanka",
    duration: "03:25",
    url: "music/Aimer-ZankyouSanka-305.mp3",
    album: "Zankyou Sanka",
  },
  {
    artist: ["LiSA", "EIR AOI"],
    title: "Ignite and Rising Hope (Concert)",
    duration: "05:47",
    url: "music/LiSAxEIRAOI-IgniteandRisingHopeLive-547.mp3",
    album: "",
  },
];
// *addMany to 'Songs' Colections
db.Songs.insertMany(songs);

// *create 'Artists' Colections
db.createCollection(collection2);

const artists = [
  {
    name: "Eve",
    dateOfBirth: "23 Mei 1995",
    genre: ["Vocaloid"],
  },
  {
    name: "SPYAIR",
    dateOfBirth: "",
    genre: ["Rock", "pop rock", "alternative rock"],
  },
  {
    name: "3-Nen E-Gumi Utatan",
    dateOfBirth: "",
    genre: ["pop"],
  },
  {
    name: "Ikimono Gakari",
    dateOfBirth: "1 Februari 1999",
    genre: ["Pop-Rock", "J-Pop"],
  },
  {
    name: "Rookiez Is Punk'd",
    dateOfBirth: "12 March 2006",
    genre: ["Alternative rock", "Punk rock"],
  },
  {
    name: "BURNOUT SYNDROMES",
    dateOfBirth: "4 May 2005",
    genre: ["Alternative rock", "power pop"],
  },
  {
    name: "Linked Horizon",
    dateOfBirth: "22 August 2012",
    genre: ["symphonic rock musical"],
  },
  {
    name: "Aimer",
    dateOfBirth: "July 9, 1990",
    genre: ["J-pop", "jazz", "pop", "rock"],
  },
  {
    name: "LiSA",
    dateOfBirth: "20 April 2011",
    genre: ["J-pop", "anime song", "rock", "pop punk"],
  },
  {
    name: "Eir Aoi",
    dateOfBirth: "30 November 1988",
    genre: ["J-pop", "anime song", "pop rock"],
  },
];
// *addMany to 'Artists' Colections
db.Artists.insertMany(artists);

// *create 'Popular Songs' Colections
db.createCollection(collection3);

const popularSongs = [
  {
    title: "Zankyou Sanka",
    count: 12,
    pOt: "a week",
  },
  {
    title: "Bye Bye Yesterday",
    count: 9,
    pOt: "a week",
  },
  {
    title: "Hikari Are",
    count: 7,
    pOt: "a week",
  },
  {
    title: "Complication",
    count: 6,
    pOt: "a week",
  },
  {
    title: "Kakai Kitan",
    count: 5,
    pOt: "a week",
  },
  {
    title: "Imagination",
    count: 5,
    pOt: "a week",
  },
  {
    title: "Ignite and Rising Hope (Concert)",
    count: 4,
    pOt: "a week",
  },
  {
    title: "Guren no Yumiya",
    count: 2,
    pOt: "a week",
  },
  {
    title: "Blue Bird",
    count: 1,
    pOt: "a week",
  },
];

// *addMany to 'Popular Songs' Colections
db.PopularSongs.insertMany(popularSongs);
