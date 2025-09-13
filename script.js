let x=0;
let counter=100
let color=["red","green","blue","yellow","black","orange"]
function counter_show(){
    // let a=+document.getElementById("counter").textContent;
    let b=document.getElementById("textarea").value.length;
    console.log(b);
    document.getElementById("counter").textContent=counter-b;
   if(document.getElementById("counter").textContent<=0){
       document.getElementById("textarea").style.color="red";
       console.log("eror")
   }
   else{
       document.getElementById("textarea").style.color="white";
   }
}
document.getElementById("textarea").addEventListener("input", counter_show);
function validator(){
    if(document.getElementById("textarea").value[0]==="#" && document.getElementById("textarea").value[1]!=" "){
        let vorodi=document.getElementById("textarea").value;
let output=`<li class="myli"> <div class="borderfasele">  <div class="icons" style="background-color:${color[x]}"> <h1>${vorodi[1]}</h1> </div> <div class="neveshte"> <h1 class="onvan">${vorodi.split(" ")[0].slice(1)}</h1>  <p>${vorodi.slice(vorodi.split(" ")[0].length)}</p></div></div></li>
            <hr>`
        let output2=` <li>  <button class="beauty_button">${vorodi.split(" ")[0]}</button></li>`;
document.getElementById("ul_button_generated").innerHTML+=output2;
        document.getElementById("ul_generated").innerHTML+=output;
console.log(output);
        if(x===color.length){
            x=0;
        }
        else{
            x++;
        }
    }
    else{
        alert("Please enter a valid comment!");
    }

}
function generator(){

    for(let i=0;i<people.length;i++){
        let output=`<li class="myli"> <div class="borderfasele">  <div class="icons" style="background-color:${color[x]}"> <h1>${people[i].onvan[1]}</h1> </div> <div class="neveshte"> <h1 class="onvan">${people[i].onvan.slice(1)}</h1>  <p>${people[i].matn}</p></div></div></li>
            <hr>`
        document.getElementById("ul_generated").innerHTML=document.getElementById("ul_generated").innerHTML+output;
       if(x===color.length){
           x=0;
       }
       else{
           x++;
       }
    }

}
function button_generator(){
    for(let i=0;i<people.length;i++){
        let output=` <li>  <button class="beauty_button">${people[i].onvan}</button></li>`;
        document.getElementById("ul_button_generated").innerHTML=document.getElementById("ul_button_generated").innerHTML+output;
    }
}
generator();
button_generator();
console.log(people.length);
function filtering(){
    document.getElementById("ul_generated").innerHTML="";
    for(let i=0;i<people.length;i++){

    }
}
