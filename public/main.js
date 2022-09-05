const container = document.createElement('div');
document.body.appendChild(container);

const fName = document.createElement('input');
container.appendChild(fName);
fName.type = 'text';
fName.id = 'fNameID';
fName.placeholder = 'Enter First name'
fName.maxLength = 15

const lName = document.createElement('input');
container.appendChild(lName);
lName.type = 'text';
lName.id = 'lNameID';
lName.placeholder = 'Enter Last name'
lName.maxLength = 20

const height = document.createElement('input');
container.appendChild(height);
height.type = 'number'
height.id = 'heightID';
height.placeholder = 'Enter height'
height.maxLength = 3

const weight = document.createElement('input');
container.appendChild(weight);
weight.type = 'number'
weight.id = 'weightID';
weight.placeholder = 'Enter weight'
weight.maxLength = 3

console.log('main.js check');