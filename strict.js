'use strict';

let tableContainer=document.getElementById('tableContainer');
let myForm=document.getElementById('myform');
let tableEl = document.createElement('table');


let cars=[];

function car(cName , cModel , cYear){

this.cName=cName;
this.cModel=cModel;
this.cYear=cYear;

cars.push(this);

this.image="img/"+cModel+".png";

saveToLocal();
};
let trEl=document.createElement('tr');


let thE4=document.createElement('th');
thE4.textContent='X';
trEl.appendChild(thE4);

let thE1=document.createElement('th');
thE1.textContent='LOGO';
trEl.appendChild(thE1);


let thE68=document.createElement('th');
thE68.textContent='Car Name';
trEl.appendChild(thE68);

let thE2=document.createElement('th');
thE2.textContent='Car model';
trEl.appendChild(thE2);


let thE3=document.createElement('th');
thE3.textContent='Car year';
trEl.appendChild(thE3);

tableEl.appendChild(trEl);
tableContainer.appendChild.tableEl;

let count =0;


car.prototype.render=function(){

let trEl=document.createElement('tr');
let tdE5 =document.createElement('td');
let aEl =document.createElement('a');
aEl.innerHTML=`<ion-icon id=${count} width="10px" height="10px" name="close-circle-outline"></ion-icon>`;
aEl.addEventListener('click', cleaRow);
tdE5.appendChild(aEl);
trEl.appendChild(tdE5);


count++;
let displayImage=document.createElement('img');
displayImage.setAttribute('src', this.image);
displayImage.setAttribute('width', '60px');
displayImage.setAttribute('height','30px');

let tdE2 =document.createElement('td');
tdE2.appendChild(displayImage);
trEl.appendChild(tdE2);

let tdE66=document.createElement('td');
tdE66.textContent=this.cName;
trEl.appendChild(tdE66);

let tdE1=document.createElement('td');
tdE1.textContent=this.cModel;
trEl.appendChild(tdE1);

let tdE3=document.createElement('td');
tdE3.textContent=this.cYear;
trEl.appendChild(tdE3);



tableEl.appendChild(trEl);
tableContainer.appendChild(tableEl);

};

myForm.addEventListener('submit',sss);
function sss(event){
    event.preventDefault();

    let cName = event.target.carName.value;
    let cModel=event.target.carModel.value;
    let cYear = event.target.carYear.value;
   let newCar= new car(cName,cModel,cYear);
    newCar.render();
};




function saveToLocal(){

let carMe=JSON.stringify(cars);
localStorage.setItem('carInLocal',carMe);
}

function readFromLocal (){

let carString =localStorage.getItem('carInLocal');
let normalObj =JSON.parse(carString);

if(normalObj!==null){
for(let i=0 ; i<normalObj.length ; i++){

    new car(normalObj[i].cName , normalObj[i].cModel , normalObj[i].cYear ).render();
}
}

};
let btnClear=document.getElementById('secForm');
btnClear.addEventListener('submit',btnRemove);
function btnRemove(event){
// event.preventDefault();
localStorage.clear();
};



function cleaRow(event){
// event.preventDefault();
let newOne=localStorage.getItem('carInLocal');
newOne=JSON.parse(newOne);
newOne.splice(Number(event.target.id) , 1);
newOne=JSON.stringify(newOne);
localStorage.setItem('carInLocal',newOne);
location.reload();
}



readFromLocal();