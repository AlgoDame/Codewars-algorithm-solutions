function songDecoder(song){
  // ...
  let originalSong = song.replace(/(WUB)+/g, " ").trim();
  return originalSong;
  
}
