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


car.prototype.render=function(){

let trEl=document.createElement('tr');

let tdE1=document.createElement('td');
tdE1.textContent=this.cName;
trEl.appendChild(tdE1);

let tdE3=document.createElement('td');
tdE3.textContent=this.cModel;
trEl.appendChild(tdE3);

let displayImage=document.createElement('img');
displayImage.setAttribute('src', this.image);
displayImage.setAttribute('width', 100);
displayImage.setAttribute('height',100);

let tdE2 =document.createElement('td');
tdE2.appendChild(displayImage);
trEl.appendChild(tdE2);

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