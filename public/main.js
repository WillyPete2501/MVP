///////////Log_con/////////////////////////////////
const log_con = document.createElement('div');
log_con.className = 'log_conCLS';
document.body.appendChild(log_con);

const log = document.createElement('div');
log.className = 'logCLS';
log_con.appendChild(log);

const height = document.createElement('input');
log.appendChild(height);
height.type = 'number';
height.id = 'heightID';
height.placeholder = 'Enter height';

const weight = document.createElement('input');
log.appendChild(weight);
weight.type = 'number';
weight.id = 'weightID';
weight.placeholder = 'Enter weight';

const age = document.createElement('input');
log.appendChild(age);
age.type = 'number';
age.id = 'ageID';
age.placeholder = 'Enter age';

const exrs = document.createElement('input');
log.appendChild(exrs);
exrs.type = 'text';
exrs.id = 'exrsID';
exrs.placeholder = 'Enter exercise';
exrs.maxLength = 20;

const exM1 = document.createElement('input');
log.appendChild(exM1);
exM1.type = 'text';
exM1.id = 'exM1ID';
exM1.placeholder = 'Enter exercise metric';
exM1.maxLength = 15;

const exM2 = document.createElement('input');
log.appendChild(exM2);
exM2.type = 'text';
exM2.id = 'exM2ID';
exM2.placeholder = 'Enter exercise 2nd metric';
exM2.maxLength = 15;

const exM3 = document.createElement('input');
log.appendChild(exM3);
exM3.type = 'text';
exM3.id = 'exM3ID';
exM3.placeholder = 'Enter exercise 3rd metric';
exM3.maxLength = 15;

const exM4 = document.createElement('input');
log.appendChild(exM4);
exM4.type = 'text';
exM4.id = 'exM4ID';
exM4.placeholder = 'Enter exercise 4th metric';
exM4.maxLength = 15;

const exID = document.createElement('input');
log.appendChild(exID);
exID.type = 'text';
exID.id = 'exID';
exID.placeholder = 'Use to Get 1/Delete/Update';
exM4.maxLength = 15;

////////////////Menu_con//////////////////////////////////

const menu_con = document.createElement('div');
menu_con.className = 'menu_con'
document.body.appendChild(menu_con);

const menu = document.createElement('div');
menu.className = 'menu';
menu_con.appendChild(menu);

const btn1 = document.createElement('input');
menu.appendChild(btn1);
btn1.type = 'button';
btn1.id = 'btn1ID';
btn1.className = 'btn'
btn1.value = 'Post Exercise';

const btn2 = document.createElement('input');
menu.appendChild(btn2);
btn2.type = 'button';
btn2.id = 'btn2ID';
btn2.className = 'btn';
btn2.value = 'Get all Exercises';

const btn3 = document.createElement('input');
menu.appendChild(btn3)
btn3.type = 'button';
btn3.id = 'btn3ID';
btn3.className = 'btn';
btn3.value = 'Get 1 Exercise';

const btn4 = document.createElement('input');
menu.appendChild(btn4);
btn4.type = 'button';
btn4.id = 'btn4ID';
btn4.className = 'btn';
btn4.value = 'Delete an Exercise';

const btn5 = document.createElement('input');
menu.appendChild(btn5);
btn5.type = 'button';
btn5.id = 'btn5ID';
btn5.className = 'btn';
btn5.value = 'Update an Exercise';

/////////////Submission_con/////////////////////////////////

const submission_con = document.createElement('div');
submission_con.className = 'submission_con';
document.body.appendChild(submission_con);

const userInfo = document.createElement('div');
submission_con.appendChild(userInfo)
userInfo.className = 'userInfoCLS';
userInfo.id = 'userInfoID';

////////////Header_con/////////////////////////////////

// header_con = document.createElement('div');
// document.body.appendChild(header_con);
// header_con.className = 'header_con'

// const logo = document.createElement('img');
// header_con.appendChild(logo);
// logo.className = 'logoCLS';
// logo.src = './images/logo.jpg';

// /////////////img_con///////////////////////////////////

// const img_con = document.createElement('div');
// document.body.appendChild(img_con);
// img_con.className = 'img_con';

// const picGrid = document.createElement('div');
// img_con.appendChild(picGrid)
// picGrid.className ='picGrid'

// const pic1 = document.createElement('img');
// picGrid.appendChild(pic1);
// pic1.className = 'picGrid-item';
// pic1.src = './images/one.jpg';

// const pic2 = document.createElement('img');
// picGrid.appendChild(pic2);
// pic2.className = 'picGrid-item';
// pic2.src = './images/two.jpg';

// const pic3 = document.createElement('img');
// picGrid.appendChild(pic3);
// pic3.className = 'picGrid-item';
// pic3.src = './images/three.jpg';

// const pic4 = document.createElement('img');
// picGrid.appendChild(pic4);
// pic4.className = 'picGrid-item';
// pic4.src = './images/four.jpg';

// const pic5 = document.createElement('img');
// picGrid.appendChild(pic5);
// pic5.className = 'picGrid-item';
// pic5.src = './images/five.jpg';

//CRUD functions//

//Get All/////////////////////////////////////////////////////////
btn2.addEventListener('click', getAll);

async function getAll() {
    const response = await fetch('http://localhost:3003/users');
    const commits = await response.json()
    console.log(commits)
    userInfo.innerHTML = JSON.stringify(commits)
};

//Get One/////////////////////////////////////////////////////////////
btn3.addEventListener('click', getOne);

async function getOne() {
    const response = await fetch(`http://localhost:3003/users/${exID.value}`);
    const commits = await response.json();
    console.log(commits[0]);
    userInfo.innerHTML = 'Got Exercise: ' + JSON.stringify(commits);
};

//Delete One////////////////////////////////////////////////////////
btn4.addEventListener('click', deleteOne);

async function deleteOne() {
    fetch(`http://localhost:3003/users/${exID.value}`, { 
        method: "DELETE",
        headers: {
                "Content-type": "application/json;charset=UTF-8"
            }
        })
};

//Patch One//////////////////////////////////////////////////////////////
btn5.addEventListener('click', patchEx);

async function patchEx () {
    fetch(`http://localhost:3003/users/${exID.value}`, { 
    method: "PATCH",
    headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
    body: JSON.stringify({
        "height_inches": `${height.value}`,
        "weight_lbs": `${weight.value}`,
        "age": `${age.value}`,
        "exercise": `${exrs.value}`,
        "metric1":  `${exM1.value}`,
        "metric2": `${exM2.value}`,
        "metric3": `${exM3.value}`,
        "metric4": `${exM4.value}`
    }),
}).then(response => response.json()).then(json => console.log(json));
};

//Post One////////////////////////////////////////////////////////////////
btn1.addEventListener('click', userInfoDisplay);

function userInfoDisplay() {
    userInfo.innerHTML = height.value +' '+ weight.value +' '+ age.value +' '+ exrs.value +' '+ exM1.value +' '+ exM2.value +' '+ exM3.value +' '+ exM4.value;
    postExrs()
};

function postExrs() {
    fetch('http://localhost:3003/users', { 
    method: "POST",
    headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
    body: JSON.stringify({
        "height_inches": `${height.value}`,
        "weight_lbs": `${weight.value}`,
        "age": `${age.value}`,
        "exercise": `${exrs.value}`,
        "metric1":  `${exM1.value}`,
        "metric2": `${exM2.value}`,
        "metric3": `${exM3.value}`,
        "metric4": `${exM4.value}`
    }),
}).then(response => response.json()).then(json => console.log(json));
};
////////////////////Testing///////////////////////////







///////////////////Testing////////////////////////////


console.log('main.js check');