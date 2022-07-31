console.log("Welcome to Spotify");
let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let songProgress = document.getElementById("songProgress");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Legion", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ceilo", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Legion", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Legion", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Heroes Tonight", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Legion", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Legion", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Best", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Legion", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "New", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
]
// audioElement.play();

// Changing names of songs
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle play/pause
masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }

    else
    {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
})

// seek baar update
audioElement.addEventListener('timeupdate', ()=>
{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    songProgress.value = progress;
})

songProgress.addEventListener('change', ()=>
{
    audioElement.currentTime = songProgress.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>
{
    Array.from(document.getElementsByClassName('songItemList')).forEach((element) =>
{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemList')).forEach((element) =>
{
    element.addEventListener('click', (e)=>
    {
        // console.log(e.target);
    //     if(audioElement.played)
    // {
    //     audioElement.pause();
    //     e.target.classList.remove('fa-circle-pause');
    //     e.target.classList.add('fa-circle-play');
    //     gif.style.opacity = 0;
    // }

        makeAllPlays();
        index = parseInt(e.target.id);
        masterSongName.innerText = songs[index-1].songName;
        console.log(index);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = "songs/" + index + ".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click', ()=>
{
    if(index >= 10)
    index = 1;
    else
    index += 1;
    console.log(index);
    audioElement.src = "songs/" + index + ".mp3";
    masterSongName.innerText = songs[index-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', ()=>
{
    if(index <= 1)
    index = 1;
    else
    index -= 1;
    audioElement.src = "songs/" + index + ".mp3";
    masterSongName.innerText = songs[index-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})