
 
let hour = 0
let min = 0
let sec = 0
const zone=document.querySelector("#zone")
fetch(`https://worldtimeapi.org/api/timezone/Asia/Kolkata`)
.then(response => response.json())
.then(data => {
    let time = data.datetime
    hour = time.substring(11,13)
    min = time.substring(14,16)
    sec = time.substring(17,19)
    zone.textContent="Asia/Kolakata"

})

document.querySelectorAll("button").forEach(button =>{
    button.onclick = () =>{
        fetch(`https://worldtimeapi.org/api/timezone/${button.value}`)
        .then(response => response.json())
        .then(data => {
            let time = data.datetime
            hour = time.substring(11,13)
            min = time.substring(14,16)
            sec = time.substring(17,19)
            zone.textContent=button.value
        
        })
    }
})


const h =document.getElementById("h")
const m =document.getElementById("m")
const s =document.getElementById("s")

function ticking(){
    sec ++
    if (sec === 60){
        sec = 0
        min ++
    }
    if (min === 60){
        min =0
        hour ++
    }
    if (hour === 24){
        hour = 0
    }
    //coustomising display of time in hh:mm:ss format
    
    s.innerHTML=sec
    m.innerHTML=min
    h.innerHTML=hour

        
}

setInterval(ticking,1000)