document.addEventListener("DOMContentLoaded", function () {
	var audio = new Audio();
	var currentSongIndex = 0;
	var songs = [
		{
			title: "On my Way",
			image: "images/1.jpg",
			artist: "Alan Walker",
			file: "Songs/playlist/On_My_Way.mp3",
		},
		{
			title: "Faded",
			image: "images/img.2.jpg",
			artist: "Alan Walker",
			file: "Songs/playlist/Faded.mp3",
		},
		{
			title: "I Don't Care",
			image: "images/img.3.jpg",
			artist: "Ed sheeren",
			file: "Songs/playlist/I_dont_care.mp3",
		},
		{
			title: "Perfect",
			image: "images/img.4.jpg",
			artist: "Ed sheeren",
			file: "Songs/playlist/Perfect.mp3",
		},
		{
			title: "Mortals",
			image: "images/img.5.jpg",
			artist: "Mortals",
			file: "Songs/playlist/Mortals.mp3",
		},
		{
			title: "Cartoon-On & On",
			image: "images/img.6.jpg",
			artist: "Daniel Levi",
			file: "Songs/playlist/On_and_on.mp3",
		},

		{
			title: "Agar Tum Sath Ho",
			image: "images/Tamasha.jpg",
			artist: "Tamashaa",
			file: "songs/popular_song/AGAR_TUM_SAATH_HO.mp3",
		},
		{
			title: "Suna Hai",
			image: "images/Sanak.jpg",
			artist: "Jubin Nautiyal",
			file: "songs/popular_song/Suna_hai.mp3",
		},
		{
			title: "Dilbar",
			image: "images/Dilbar.jpg",
			artist: "Satyameva Jayate",
			file: "songs/popular_song/Dilbar.mp3",
		},
		{
			title: "Duniya",
			image: "images/luka chuppi.jpg",
			artist: "Akhil",
			file: "songs/popular_song/Duniya.mp3",
		},
		{
			title: "Lag Di Lahore Di",
			image: "images/lagdi lahore di.jpg",
			artist: "Guru Randhawa",
			file: "songs/popular_song/Lagdi_lahore_di.mp3",
		},
		{
			title: "Putt Jatt Da",
			image: "images/putt jatt da.jpg",
			artist: "Diljit Dosanjh",
			file: "songs/popular_song/Putt_jatt_da.mp3",
		},
		{
			title: "Baarish",
			image: "images/Baarish.jpeg",
			artist: "Half Girlfriend",
			file: "songs/popular_song/Baarish.mp3",
		},
		{
			title: "Vaaste",
			image: "images/Vaaste.jpg",
			artist: "Dhvani Bhanushali",
			file: "songs/popular_song/Vaaste.mp3",
		},
		{
			title: "On My Way",
			image: "images/1.jpg",
			artist: "Alan Walker",
			file: "songs/popular_song/On_My_Way.mp3",
		},
	];

	var poster = document.getElementById("poster_master_play");
	var title = document.getElementById("title");
	var masterPlay = document.getElementById("masterPlay");
	var masterPlay_back = document.getElementById("back");
	var masterPlay_next = document.getElementById("next");
	var seekBar = document.getElementById("seek");
	var seekBar2 = document.getElementById("bar2");
	var seekDot = document.getElementById("seek_dot");
	var volBar = document.getElementById("vol");
	var vol_Bar2 = document.getElementById("vol_bar2");
	var rightScroll = document.getElementById("right_scroll");
	var leftScroll = document.getElementById("left_scroll");
	var rightScroll2 = document.getElementById("right_scrolls2");
	var leftScroll2 = document.getElementById("left_scrolls2");
	var playButton = document.getElementById("play");
	const playlistPlayIcons = document.querySelectorAll('.bi.playlistPlay.bi-play-circle-fill');
	
	leftScroll.addEventListener("click",(e)=>{
		console.log(e.type);
		document.getElementById("pop_song").scrollLeft -= 200;
	});
	rightScroll.addEventListener("click",(e)=>{
		console.log(e.type);
		document.getElementById("pop_song").scrollLeft += 200;
	});
	leftScroll2.addEventListener("click",(e)=>{
		console.log(e.type);
		document.getElementById("items").scrollLeft -= 200;
	});
	rightScroll2.addEventListener("click",(e)=>{
		console.log(e.type);
		document.getElementById("items").scrollLeft += 200;
	});

	function loadSong(index) {
		var song = songs[index];
		audio.src = song.file;
		poster.src = song.image;
		"images/" + song.title.toLowerCase().replace(/\s+/g, "_") + ".jpg";
		title.innerHTML =
		song.title + "<br><div class='subtitle'>" + song.artist + "</div>";
	}
	

	function playPause() {
			if (audio.paused) {
				audio.play();
				masterPlay.classList.remove("bi-play-fill");
			masterPlay.classList.add("bi-pause-fill");
		} else {
			audio.pause();
			masterPlay.classList.remove("bi-pause-fill");
			masterPlay.classList.add("bi-play-fill");
		}
	}

	
	function updateSeekBar() {
		seekBar.value = (audio.currentTime / audio.duration) * 100;
		seekBar2.style.width = seekBar.value + "%";
		seekDot.style.left = seekBar.value + "%";
		
		var currentMinutes = Math.floor(audio.currentTime / 60);
		var currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
		var durationMinutes = Math.floor(audio.duration / 60);
		var durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
		var currentTime =
			currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
		var durationTime =
			durationMinutes +
			":" +
			(durationSeconds < 10 ? "0" : "") +
			durationSeconds;
		document.getElementById("currentStart").textContent = currentTime;
		document.getElementById("currentEnd").textContent = durationTime;
	}

	console.log(vol.value / 100);

	function setVolume() {
		audio.volume = volBar.value / 100;
		console.log("Volume changed to:", volBar.value / 100);
		vol_Bar2.style.width = volBar.value + "%";
	}

	function nextSong() {
		currentSongIndex = (currentSongIndex + 1) % songs.length;
		loadSong(currentSongIndex);
		playPause();
	}

	function prevSong() {
		currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
		loadSong(currentSongIndex);
		playPause();
	}

	masterPlay.addEventListener("click", playPause);
	masterPlay_back.addEventListener("click", prevSong);
	masterPlay_next.addEventListener("click", nextSong);

	playButton.onclick = () => {
		currentSongIndex = 1 % songs.length;
		loadSong(currentSongIndex);
		playPause();
	}

	seekBar.addEventListener("change", function () {
		audio.currentTime = (seekBar.value / 100) * audio.duration;
	});
	volBar.addEventListener("input", setVolume);
	audio.addEventListener("timeupdate", updateSeekBar);
	audio.addEventListener("ended", nextSong);
	
	seek.addEventListener("input", () => {
		const currentTime = (seek.value * audio.duration) / 100;
		audio.currentTime = currentTime;
	});
	
	vol.addEventListener("input", () => {
		const volume = vol.value / 100;
		audio.volume = volume;
	});
	
	seekBar.addEventListener("input", function () {
		audio.currentTime = (seekBar.value / 100) * audio.duration;
	});
	
	volBar.addEventListener("input", function () {
		audio.volume = volBar.value / 100;
		vol_Bar2.style.width = volBar.value + "%";
	});

	playlistPlayIcons.forEach((icon) => {
		icon.addEventListener("click", (e)=>{
			const play_id = e.target.id;
			currentSongIndex = play_id-1 % songs.length;
			loadSong(currentSongIndex);
			playPause();
		});
	});
	
	loadSong(currentSongIndex);
	
});

