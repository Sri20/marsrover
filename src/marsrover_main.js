
const commandCheck = require('./marsrover_commandCheck.js')
const commandProcess = require('./marsrover_commandProcess.js')

const marsroverMain = command => {
    let [plateau_size, filledLoc, moveCmd] = commandCheck(command)
    //  plateau_size - boundary values of plateau
    //  filledLoc    - occupied locations of rover (x,y,direction)
    //  moveCmd      - L,R,M command sequence for the rover
    return commandProcess(plateau_size, filledLoc, moveCmd)
}
module.exports = marsroverMain