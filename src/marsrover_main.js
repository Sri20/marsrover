const commandValidator = require('./marsrover_commandValidator.js')
const commandParse = require('./marsrover_commandParse.js')
const commandProcess = require('./marsrover_commandProcess.js')

const marsroverMain = command => {
    if(commandValidator(command)){
    let [plateau_size, filledLoc, moveCmd] = commandParse(command)
    //  plateau_size - boundary values of plateau
    //  filledLoc    - occupied locations of rover (x,y,direction)
    //  moveCmd      - L,R,M command sequence for the rover
    return commandProcess(plateau_size, filledLoc, moveCmd)
    }
    else{
        return 'check input command'
    }
}
module.exports = marsroverMain