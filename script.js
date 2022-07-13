console.log("WELCOME TO MUPLYSIC");
let songindex=0;
let audioElement=new Audio('song/1.mp3');
let masterplay=document.getElementById('masterplay');
let ProgressBar=document.getElementById('ProgressBar');
let songitems=Array.from(document.getElementsByClassName('SongItem'));
let songs=[
    {songName:"raata lambiyaan",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Baliye re",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"maiyya mainu",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"chaand baliyaan",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"love me like you do",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"srivalli",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"pasoori",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"baarishon mein",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"aashiqui aa gyi",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"labon pe naam",filePath:"song/10.mp3",coverPath:"covers/10.jpg"},
    {songName:"valentines mashup",filePath:"song/11.mp3",coverPath:"covers/11.jpg"},
    {songName:"har har shambhu",filePath:"song/12.mp3",coverPath:"covers/12.jpg"},
]
songitems.forEach((element,i)=>{
    console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
}
else{
   audioElement.pause();
   masterplay.classList.remove('fa-circle-pause');
   masterplay.classList.add('fa-circle-play');
}
}
)
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    ProgressBar.value=progress;
}
)
ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(ProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays=
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

    })
})
