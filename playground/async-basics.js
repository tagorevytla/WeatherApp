console.log('Starting APp');

setTimeout (() => {
console.log('Inside the callback');
} , 2000);

setTimeout (() => {
console.log('Inside the callback 2nd time');
} , 0);

console.log('Finishing up');
