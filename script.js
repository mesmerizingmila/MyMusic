"use strict";
const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("musric_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  {
    path: "song1.mp3",
    displayName: "Let Me Love You",
    cover: "mila.jpg",
    artist: "DJ Snake",
  },
  {
    path: "song2.mp3",
    displayName: "Dancing Queen",
    cover: "mila2.jpg",
    artist: "Abba",
  },
  {
    path: "song3.mp3",
    displayName: "Dream On",
    cover: "mila3.jpg",
    artist: "Aerosmith",
  },
  {
    path: "song4.mp3",
    displayName: "Faded",
    cover: "mila4.jpg",
    artist: "Alan Walker",
  },
  {
    path: "song5.mp3",
    displayName: "The boy is mine",
    cover: "mila5.jpg",
    artist: "Ariana Grande",
  },
  {
    path: "song6.mp3",
    displayName: "Beautiful Things",
    cover: "mila6.jpg",
    artist: "Benson Boone",
  },
  {
    path: "]song7.mp3",
    displayName: "Blue",
    cover: "mila7.jpg",
    artist: "Billie Eilish",
  },
  {
    path: "song8.mp3",
    displayName: "How Deep Is Your Love",
    cover: "mila8.jpg",
    artist: "Calvin Harris",
  },
  {
    path: "song9.mp3",
    displayName: "Attention",
    cover: "mila9.jpg",
    artist: "Charlie Puth",
  },
  {
    path: "song10.mp3",
    displayName: "Daylight",
    cover: "mila10.jpg",
    artist: "David Kushner",
  }, {
    path: "song11.mp3",
    displayName: "Perfect",
    cover: "mila11.jpg",
    artist: "Ed Sheeran",
  },
  {
    path: "song12.mp3",
    displayName: "Shape of You",
    cover: "mila12.jpg",
    artist: "Ed Sheeran",
  },
  {
    path: "song13.mp3",
    displayName: "Thinking Out Loud",
    cover: "mila13.jpg",
    artist: "Ed Sheeran",
  },
  {
    path: "song14.mp3",
    displayName: "Friendly Fire",
    cover: "mila14.jpg",
    artist: "Linkin Park",
  },
  {
    path: "song15.mp3",
    displayName: "Baby ft. Ludacris",
    cover: "mila15.jpg",
    artist: "Justin Bieber",
  },
  {
    path: "song16.mp3",
    displayName: "Sorry",
    cover: "mila16.jpg",
    artist: "Justin Bieber",
  },
  {
    path: "song17.mp3",
    displayName: "Dark Horse",
    cover: "mila17.jpg",
    artist: "Katy Perry",
  },
  {
    path: "song18.mp3",
    displayName: "Roar",
    cover: "mila18.jpg",
    artist: "Katy Perry",
  },
  {
    path: "song19.mp3",
    displayName: "Margaret",
    cover: "mila19.jpg",
    artist: "Lana Del Rey",
  },
  {
    path: "song20.mp3",
    displayName: "15 MINUTES",
    cover: "mila20.jpg",
    artist: "Madison Beer",
  },
  {
    path: "song21.mp3",
    displayName: "Sugar",
    cover: "mila21.jpg",
    artist: "Maroon 5",
  },
  {
    path: "song22.mp3",
    displayName: "Counting Stars",
    cover: "mila22.jpg",
    artist: "Ryan Tedder",
  },
  {
    path: "song23.mp3",
    displayName: "Espresso",
    cover: "mila23.jpg",
    artist: "Sabrina Carpenter",
  },
  {
    path: "song24.mp3",
    displayName: "Please Please Please",
    cover: "mila24.jpg",
    artist: "Sabrina Carpenter",
  },
  {
    path: "song25.mp3",
    displayName: "Fortnight",
    cover: "mila25.jpg",
    artist: "Taylor Swift",
  },
  {
    path: "song26.mp3",
    displayName: "The Weeknd",
    cover: "mila26.jpg",
    artist: "JENNIE & Lily Rose",
  },
  {
    path: "song27.mp3",
    displayName: "FE!N",
    cover: "mila27.jpg",
    artist: "Travis Scott",
  },
  {
    path: "song28.mp3",
    displayName: "Water",
    cover: "mila28.jpg",
    artist: "Tyla",
  },
  
  
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
  musicArtistEl.textContent = songs.artist;
  imgCoverEl.src = songs.cover;
  imgEl.src = songs.cover;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);