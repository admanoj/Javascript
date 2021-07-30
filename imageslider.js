let img_array=['a.jpg','b.png','c.webp','d.jpg']
let array_length=img_array.length
let i=0
let set=setInterval(slider,5000)
//slider function name call
//5000 5 seconds time


function slider(){
    i++

    document.getElementById('image').src='./images/'+ img_array[i]
}
function next(){
    i++
    i=i%array_length
    document.getElementById('image').src='./images'+img_array[i]
}

function prev(){
    i--
    if(i<0){
        i=array_length=1
    }
    document.getElementById('image').src='./images/'+img_array[i]
}

const stops=()=>{
    clearInterval(set)
}
const starts=()=>{
    set=setInterval(slider,5000)
}