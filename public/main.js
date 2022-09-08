//Log_con/////////////////////////////////
const log_con = document.createElement('div');
document.body.appendChild(log_con);
log_con.className = 'log_conCLS';
log_con.textContent = 'Workout Tracker';

const log = document.createElement('div');
log_con.appendChild(log);
log.className = 'logCLS';

const height = document.createElement('input');
log.appendChild(height);
height.type = 'number';
height.id = 'heightID';
height.className = 'logCLS';
height.placeholder = 'Enter height';

const weight = document.createElement('input');
log.appendChild(weight);
weight.type = 'number';
weight.id = 'weightID';
weight.className = 'logCLS';
weight.placeholder = 'Enter weight';

const age = document.createElement('input');
log.appendChild(age);
age.type = 'number';
age.id = 'ageID';
age.className = 'logCLS';
age.placeholder = 'Enter age';

const exrs = document.createElement('input');
log.appendChild(exrs);
exrs.type = 'text';
exrs.id = 'exrsID';
exrs.className = 'logCLS';
exrs.placeholder = 'Enter exercise';
exrs.maxLength = 20;

const exM1 = document.createElement('input');
log.appendChild(exM1);
exM1.type = 'text';
exM1.id = 'exM1ID';
exM1.className = 'logCLS';
exM1.placeholder = 'Enter exercise metric';
exM1.maxLength = 15;

const exM2 = document.createElement('input');
log.appendChild(exM2);
exM2.type = 'text';
exM2.id = 'exM2ID';
exM2.className = 'logCLS';
exM2.placeholder = 'Enter exercise 2nd metric';
exM2.maxLength = 15;

const exM3 = document.createElement('input');
log.appendChild(exM3);
exM3.type = 'text';
exM3.id = 'exM3ID';
exM3.className = 'logCLS';
exM3.placeholder = 'Enter exercise 3rd metric';
exM3.maxLength = 15;

const exM4 = document.createElement('input');
log.appendChild(exM4);
exM4.type = 'text';
exM4.id = 'exM4ID';
exM4.className = 'logCLS';
exM4.placeholder = 'Enter exercise 4th metric';
exM4.maxLength = 15;

const exID = document.createElement('input');
log.appendChild(exID);
exID.type = 'text';
exID.id = 'exID';
exID.className = 'logCLS';
exID.placeholder = 'Use ID to Get/Delete/Update';
exM4.maxLength = 15;

//Menu_con////////////////////////////
const menu_con = document.createElement('div');
document.body.appendChild(menu_con);
menu_con.className = 'menu_con';

const menu = document.createElement('div');
menu_con.appendChild(menu);
menu.className = 'menu';

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
btn2.value = 'Show all Exercises';

const btn3 = document.createElement('input');
menu.appendChild(btn3)
btn3.type = 'button';
btn3.id = 'btn3ID';
btn3.className = 'btn';
btn3.value = 'Get an Exercise';

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

//Submission_con////////////////////////////
const submission_con = document.createElement('div');
document.body.appendChild(submission_con);
submission_con.className = 'submission_con';
submission_con.id = 'submission_conID'

const userInfo = document.createElement('div');
submission_con.appendChild(userInfo)
userInfo.className = 'userInfoCLS';
userInfo.id = 'userInfoID';

//CRUD functions//

//Get All////////////////////////////////////////////////
btn2.addEventListener('click', getAll);

async function getAll() {
    userInfo.textContent = '';
    const response = await fetch('http://localhost:3003/users');
    const commits = await response.json()
    for (let i = 0; i < commits.length; i++) {
        let current = commits[i];
        //console.log(current);
        displayAll(current);
    }
};

async function displayAll(current) {
    const allLogs = document.createElement('div');
    userInfo.appendChild(allLogs);
    allLogs.innerHTML = `ID: ${current.log_id} Exercise ${current.exercise} Metric 1: ${current.metric1} Metric 2: ${current.metric2} Metric 3: ${current.metric3} Metric 4: ${current.metric4} Age: ${current.age} Height: ${current.height_inches} Weight: ${current.weight_lbs}`;
    //console.log('displayAll check');
}

//Get One/////////////////////////////////////////////////
btn3.addEventListener('click', getOne);

async function getOne() {
    const response = await fetch(`http://localhost:3003/users/${exID.value}`);
    const commits = await response.json();
    for (let i = 0; i < commits.length; i++) {
        let current = commits[i];
        userInfo.innerHTML = `ID: ${current.log_id} Exercise ${current.exercise} Metric 1: ${current.metric1} Metric 2: ${current.metric2} Metric 3: ${current.metric3} Metric 4: ${current.metric4} Age: ${current.age} Height: ${current.height_inches} Weight: ${current.weight_lbs}`;
    }
};

//Delete One///////////////////////////////////////////
btn4.addEventListener('click', deleteOne);

async function deleteOne() {
    fetch(`http://localhost:3003/users/${exID.value}`, { 
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    alert(`You Deleted exercise ID: ${exID.value}`);
    userInfo.textContent = '';
    getAll();
    exID.value = '';
};

//Patch One////////////////////////////////////////////
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
    alert(`You Updated exercise ID ${exID.value}`);
    getOne();
    exID.value = '';
};

//Post One///////////////////////////////////////////
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

console.log('main.js check');