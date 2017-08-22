import numberal from 'numeral';

const courseValue = numberal(1000).format('$0,0.00');
console.log(`I would earn ${courseValue} after I'll learn this course!`);
