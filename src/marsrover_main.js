const commandValidator = require('./marsrover_commandValidator.js')
const commandParse = require('./marsrover_commandParse.js')
const commandProcess = require('./marsrover_commandProcess.js')

//  main function is invoked from test file  with the dummy data
//  input: array of commands 
//  output: array of output coordinates,invalid message for wrong input format
//  functions called:
//  commandValidator - checks the input command is in correct format
//  commandParse     - stores the required info from command in varaibles as follows
//  commandProcess   - processes the command and returns output coordinates

const marsroverMain = command => {
    if(commandValidator(command)){
    let [plateau_size, filledLoc, moveCmd] = commandParse(command)
    return commandProcess(plateau_size, filledLoc, moveCmd)
    }
    else{
        return 'Invalid command'
    }
}
module.exports = marsroverMain