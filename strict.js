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


let thE1=document.createElement('th');
thE1.textContent='LOGO';
trEl.appendChild(thE1);

let thE2=document.createElement('th');
thE2.textContent='Car Name';
trEl.appendChild(thE2);


let thE3=document.createElement('th');
thE3.textContent='Car year';
trEl.appendChild(thE3);

tableEl.appendChild(trEl);
tableContainer.appendChild.tableEl;

car.prototype.render=function(){

let trEl=document.createElement('tr');

let displayImage=document.createElement('img');
displayImage.setAttribute('src', this.image);
displayImage.setAttribute('width', '80px');
displayImage.setAttribute('height','40px');

let tdE2 =document.createElement('td');
tdE2.appendChild(displayImage);
trEl.appendChild(tdE2);


let tdE1=document.createElement('td');
tdE1.textContent=this.cName;
trEl.appendChild(tdE1);

let tdE3=document.createElement('td');
tdE3.textContent=this.cModel;
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

readFromLocal();