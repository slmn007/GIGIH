function fecthSongResponse(sClass, url) {
  let song = document.querySelector(sClass);

  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let datas = Object.entries(data);
      let test = "";

      datas.forEach((item) => {
        //   console.log(song);
        test += `
        <div class="song">
        <p class="artis">${item[1].artist}</p>
        <p class="judul">${item[1].title}</p>
        <p class="durasi">${item[1].duration}</p>
        </div>
        `;
      });
      // console.log(test);
      song.innerHTML = test;
      console.log(song.innerHTML);
    })
    .catch((err) => console.error(err));
}

fecthSongResponse(".song-list", "http://localhost:3003/getSongs");
fecthSongResponse(".playlist-song", "http://localhost:3003/getMySongs");
