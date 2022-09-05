const container = document.createElement('div');
document.body.appendChild(container);

const container2 = document.createElement('div')
document.body.appendChild(container2);

const fName = document.createElement('input');
container.appendChild(fName);
fName.type = 'text';
fName.id = 'fNameID';
fName.placeholder = 'Enter First name';
fName.maxLength = 15;

const lName = document.createElement('input');
container.appendChild(lName);
lName.type = 'text';
lName.id = 'lNameID';
lName.placeholder = 'Enter Last name';
lName.maxLength = 20;

const height = document.createElement('input');
container.appendChild(height);
height.type = 'number';
height.id = 'heightID';
height.placeholder = 'Enter height';

const weight = document.createElement('input');
container.appendChild(weight);
weight.type = 'number';
weight.id = 'weightID';
weight.placeholder = 'Enter weight';

const age = document.createElement('input');
container.appendChild(age);
age.type = 'number';
age.id = 'ageID';
age.placeholder = 'Enter age';

const btn1 = document.createElement('input');
container.appendChild(btn1);
btn1.type = 'button';
btn1.id = 'btn1ID';
btn1.value = 'submit';

const userInfo = document.createElement('p');
userInfo.className = 'userInfoCLS';
userInfo.id = 'userInfoID';
////////////////////////////////////////////////////////////////////
const exrs = document.createElement('input');
container2.appendChild(exrs);
exrs.type = 'text';
exrs.id = 'exrsID';
exrs.placeholder = 'Enter exercise';
exrs.maxLength = 20;

const exM1 = document.createElement('input');
container2.appendChild(exM1);
exM1.type = 'text';
exM1.id = 'exM1ID';
exM1.placeholder = 'Enter exercise metric';
exM1.maxLength = 15;

const exM2 = document.createElement('input');
container2.appendChild(exM2);
exM2.type = 'text';
exM2.id = 'exM2ID';
exM2.placeholder = 'Enter exercise 2nd metric';
exM2.maxLength = 15;

const exM3 = document.createElement('input');
container2.appendChild(exM3);
exM3.type = 'text';
exM3.id = 'exM3ID';
exM3.placeholder = 'Enter exercise 3rd metric';
exM3.maxLength = 15;

const exM4 = document.createElement('input');
container2.appendChild(exM4);
exM4.type = 'text';
exM4.id = 'exM4ID';
exM4.placeholder = 'Enter exercise 4th metric';
exM4.maxLength = 15;

const btn2 = document.createElement('input');
container.appendChild(btn2);
btn2.type = 'button';
btn2.id = 'btn2ID';
btn2.value = 'submit';

const excrDis = document.createElement('p2');
excrDis.className = 'excrDisCLS';
excrDis.id = 'excrDisID';

function userInfoDisplay() {
    userInfo.innerHTML = fName.value +' '+ lName.value +' '+ height.value +' '+ weight.value +' '+ age.value;
};
btn1.addEventListener('click', userInfoDisplay);

function exerciseDisplay() {
    excrDis.innerHTML = exrs.value +' '+ exM1.value +' '+ exM2.value +' '+ exM3.value +' '+ exM4.value;

};
btn2.addEventListener('click', exerciseDisplay);

console.log('main.js check');