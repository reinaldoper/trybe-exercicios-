const func = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';
const doingThings = (wakeUp) => wakeUp();
console.log(doingThings(cafe));
console.log(doingThings(func));
console.log(doingThings(dormir));