//import commandExec from './marsrover_start.js';

const commandExec = require('./marsrover_start.js') 

test ('check basic command',() => {
    const command = ['5 5 ','1 2 N','LMLMLMLMM']        //arrange the data
    expect(commandExec(command)).toEqual('1 3 N')       //act & assert
    })
