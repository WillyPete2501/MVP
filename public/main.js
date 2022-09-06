const menu_con = document.createElement('div');
menu_con.className = 'menu_con'
document.body.appendChild(menu_con);

const menu = document.createElement('div');
menu.className = 'menu';
menu_con.appendChild(menu);

const menu2 = document.createElement('div');
menu2.className = 'menu2';
menu_con.appendChild(menu2);

const submission_con = document.createElement('div');
submission_con.className = 'submission_con';
document.body.appendChild(submission_con);

const userInfo = document.createElement('div');
submission_con.appendChild(userInfo)
userInfo.className = 'userInfoCLS';
userInfo.id = 'userInfoID';

const excrDis = document.createElement('div');
submission_con.appendChild(excrDis)
excrDis.className = 'excrDisCLS';
excrDis.id = 'excrDisID';

header_con = document.createElement('div');
document.body.appendChild(header_con);
header_con.className = 'header_con'

const logo = document.createElement('img');
header_con.appendChild(logo);
logo.className = 'logoCLS';
logo.src = './images/logo.jpg';

const img_con = document.createElement('div');
document.body.appendChild(img_con);
img_con.className = 'img_con';

const picGrid = document.createElement('div');
img_con.appendChild(picGrid)
picGrid.className ='picGrid'

const pic1 = document.createElement('img');
picGrid.appendChild(pic1);
pic1.className = 'picGrid-item';
pic1.src = './images/one.jpg';

const pic2 = document.createElement('img');
picGrid.appendChild(pic2);
pic2.className = 'picGrid-item';
pic2.src = './images/two.jpg';

const pic3 = document.createElement('img');
picGrid.appendChild(pic3);
pic3.className = 'picGrid-item';
pic3.src = './images/three.jpg';

const pic4 = document.createElement('img');
picGrid.appendChild(pic4);
pic4.className = 'picGrid-item';
pic4.src = './images/four.jpg';

const pic5 = document.createElement('img');
picGrid.appendChild(pic5);
pic5.className = 'picGrid-item';
pic5.src = './images/five.jpg';
//////////////////////////////////////////////////////////////////

const fName = document.createElement('input');
menu.appendChild(fName);
fName.type = 'text';
fName.id = 'fNameID';
fName.placeholder = 'Enter First name';
fName.maxLength = 15;

const lName = document.createElement('input');
menu.appendChild(lName);
lName.type = 'text';
lName.id = 'lNameID';
lName.placeholder = 'Enter Last name';
lName.maxLength = 20;

const height = document.createElement('input');
menu.appendChild(height);
height.type = 'number';
height.id = 'heightID';
height.placeholder = 'Enter height';

const weight = document.createElement('input');
menu.appendChild(weight);
weight.type = 'number';
weight.id = 'weightID';
weight.placeholder = 'Enter weight';

const age = document.createElement('input');
menu.appendChild(age);
age.type = 'number';
age.id = 'ageID';
age.placeholder = 'Enter age';

const btn1 = document.createElement('input');
menu.appendChild(btn1);
btn1.type = 'button';
btn1.id = 'btn1ID';
btn1.value = 'submit';

function userInfoDisplay() {
    userInfo.innerHTML = fName.value +' '+ lName.value +' '+ height.value +' '+ weight.value +' '+ age.value;
    storeUserInfo()
};
function storeUserInfo() {
    const userArray = [];
    const storedUser = fName.value +' '+ lName.value +' '+ height.value +' '+ weight.value +' '+ age.value;
    console.log(storedUser)
    userArray.push(storedUser)
    return userArray
}

btn1.addEventListener('click', userInfoDisplay);
////////////////////////////////////////////////////////////////////

const exrs = document.createElement('input');
menu2.appendChild(exrs);
exrs.type = 'text';
exrs.id = 'exrsID';
exrs.placeholder = 'Enter exercise';
exrs.maxLength = 20;

const exM1 = document.createElement('input');
menu2.appendChild(exM1);
exM1.type = 'text';
exM1.id = 'exM1ID';
exM1.placeholder = 'Enter exercise metric';
exM1.maxLength = 15;

const exM2 = document.createElement('input');
menu2.appendChild(exM2);
exM2.type = 'text';
exM2.id = 'exM2ID';
exM2.placeholder = 'Enter exercise 2nd metric';
exM2.maxLength = 15;

const exM3 = document.createElement('input');
menu2.appendChild(exM3);
exM3.type = 'text';
exM3.id = 'exM3ID';
exM3.placeholder = 'Enter exercise 3rd metric';
exM3.maxLength = 15;

const exM4 = document.createElement('input');
menu2.appendChild(exM4);
exM4.type = 'text';
exM4.id = 'exM4ID';
exM4.placeholder = 'Enter exercise 4th metric';
exM4.maxLength = 15;

const btn2 = document.createElement('input');
menu2.appendChild(btn2);
btn2.type = 'button';
btn2.id = 'btn2ID';
btn2.value = 'submit';

function exerciseDisplay() {
    excrDis.innerHTML = exrs.value +' '+ exM1.value +' '+ exM2.value +' '+ exM3.value +' '+ exM4.value;

};
btn2.addEventListener('click', exerciseDisplay);
////////////////////Testing///////////////////////////

const btn3 = document.createElement('input');
submission_con.appendChild(btn3);
btn3.type = 'button';
btn3.id = 'btn3ID';
btn3.value = 'Test';

btn3.addEventListener('click', async (e) => {
    const data = await fetch('http://localhost:3003/users');
    const json = await data.json()
    console.log(json[0])
})

///////////////////Testing////////////////////////////


console.log('main.js check');