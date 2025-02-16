console.log("Welcome to MUSIC PLAYER");


// initialize the variables
let songIndex = 0;
let audioElement = new Audio('accer/New folder/8.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gift = document.getElementById('gift');
songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName:"jumka",filePath: "accer/New folder/9.mp3.mp3",coverPath:"accer/3.bjp.PNG"},
    {songName:"Babadiyyan",filePath: "accer/New folder/8.mp3.mp3", coverPath:"accer/1.bjp.PNG"},
    {songName:"8 percha song ",filePath:"accer/New folder/ 10.mp3.mp3", coverPath:"accer/2.bjp.PNG"},
    {songName:"What jumka song",filePath: "accer/New folder/7.mp3.mp3", coverPath:"accer/3.bjp.PNG"},
    {songName:"AA dil ha mushkil song",filePath:"accer/New folder/1( 1).mp3.mp3", coverPath:"accer/a dil mushkil.PNG"},
    {songName:"Bari 2 bilal saeed  song",filePath:"accer/New folder/ 12.mp3.mp3", coverPath:"accer/barri 2.PNG"},
    {songName:"Daddy yankee song",filePath: "accer/New folder/6.mp3.mp3", coverPath:"accer/daddy yankee.PNG"},
    {songName:"Dilbar Dilbar song",filePath: "accer/New folder/5.mp3.mp3", coverPath:"accer/dil bar.PNG"},
    {songName:"Disco dance songg",filePath:" accer/New folder/19.mp3.mp3", coverPath:"accer/disco dance.PNG"},
    {songName:"Humma Humma  song",filePath:" accer/New folder/18.mp3.mp3", coverPath:"accer/huma huma.PNG"},
    {songName:"Eshaq mubarak song",filePath: "accer/New folder/4.mp3.mp3", coverPath:"accer/ishq mubarak.PNG"},
    {songName:"Jaha tum ho  song",filePath: "accer/New folder/3.mp3.mp3", coverPath:"accer/jaha tum ho.PNG"},
    {songName:"Kana yari song",filePath: "accer/New folder/2.mp3.mp3", coverPath:"accer/kana yari.PNG"},
    {songName:"TU milya song",filePath:"accer/New folder/ 16.mp3.mp3", coverPath:"accer/mery mahi jina sona.PNG"},
    {songName:"Nadiyo par  song",filePath:"accer/New folder/ 21.mp3.mp3", coverPath:"accer/nadiyo par.PNG"},
    {songName:"Phyle bi main song",filePath:" accer/New folder/20.mp3.mp3", coverPath:"accer/phyle bi main.PNG"},
    {songName:"TU a ke dekh la song",filePath:"accer/New folder/ 17.mp3.mp3", coverPath:"accer/tu a ke dekh la.PNG"},
    {songName:"TU hi haqeeqat  song",filePath:"accer/New folder/ 15.mp3.mp3", coverPath:"accer/tu hi haqeeqat.PNG"},
    {songName:"TUM hi ana song",filePath:"accer/New folder/ 13.mp3.mp3", coverPath:"accer/tum hi ana.PNG"},
    {songName:"TUM hi ho by arij singh song",filePath:" accer/New folder/14.mp3.mp3", coverPath:"accer/tum hi ho arjit singh.PNG"},
    {songName:"Zara Zara Behkata song ",filePath:"accer/New folder/ 11.mp3.mp3", coverPath:"accer/zara zara.PNG"},


]

// songItems.forEach((element,i) => {
//     element.getElementsByTagName("img") [0].scr = songs[i].coverPath;
//     element.getElementsByClassName("songName") [0].innerText = songs[i].songName;
    
// });


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('play-circle-sharp');
        masterPlay.classList.add('pause-circle-sharp');
        gift.style.opacity = 1;

    }

    else
    {
        audioElement.pause();
        masterPlay.classList.remove('play-circle-sharp');
        masterPlay.classList.add('pause-circle-sharp');
        gift.style.opacity = 0;
    }
    
})


audioElement.addEventListener('timeupdate',()=>{
    
    //update. seekbar 
    
    progress = parseInt ((audioElement.currentTime/audioElement.duration)*100);
     
     myprogressbar.value = progress ;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('players')).forEach((element)=>{
    element.classList.remove('pause-sharp');
    element.classList.add('play-sharp');
    })
}
Array.from(document.getElementsByClassName('players')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt (e.target.id);
     e.target.classList.remove('play-sharp');
     e.target.classList.add('pause-sharp');
    audioElement.scr= "accer/New folder/ ${songIndex+1}.mp3.mp3";
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('play-sharp');
     masterPlay.classList.add('pause-sharp');
    })
})




 


