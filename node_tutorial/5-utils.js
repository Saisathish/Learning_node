const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

const sayHi2 = (name) => {
    console.log(`Hello there ${name}`);
}

module.exports = sayHi
// module.exports = sayHi2
// only that last exported one is exported
// module.exports = {sayHi,sayHi2}   // or export them as objects
// console.log(module);