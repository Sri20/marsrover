const { determineDir, determineLoc } = require('./marsrover_determine.js');
//This function proccesses the command 
//input:plateau size,occupied coordinates array,command array
//output:array of rover coordinates with the direction
//functions called:
// determineDir - finds the orientation of the rover
// determineLoc - moves the rover according to the command,returns if obstacle found or not

const commandProcess = (plateau_size, filledLoc, moveCmd) => {
    filledLoc.forEach((rover, index) => {  // each location corresponds to each rover 
        let cmd = moveCmd[index].split('')
        let noObstacle = true
        for(let i=0;i<=cmd.length && noObstacle;i++) { // goes through each command for no obstacle
            if (cmd[i] == 'L' || cmd[i] == 'R') {
                rover.dir = determineDir(rover.dir, cmd[i])
            }
            if (cmd[i] == 'M') {
                noObstacle = determineLoc(plateau_size, cmd[i], rover,filledLoc) // no obstacle indicator
            }
        }
    })
    let output = []
    filledLoc.forEach((loc) => {  // converting into array of string coordiantes as expected
        output.push(Object.values(loc).toString().replace(/,/g, ' '))
    })
    return output
}
module.exports = commandProcess

