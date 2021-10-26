const { determineDir, determineLoc } = require('./marsrover_determine.js');

const commandProcess = (plateau_size, filledLoc, moveCmd) => {
    filledLoc.forEach((rover, index) => {
        let cmd = moveCmd[index].split('')
        let noObstacle = true
        for(let i=0;i<=cmd.length && noObstacle;i++) {
            if (cmd[i] == 'L' || cmd[i] == 'R') {
                rover.dir = determineDir(rover.dir, cmd[i])
            }
            if (cmd[i] == 'M') {
                noObstacle = determineLoc(plateau_size, cmd[i], rover,filledLoc)
            }
            //if(! noObstacle){console.log('obstacle',rover)}
        }
    })

    output = []
    filledLoc.forEach((loc) => {
        output.push(Object.values(loc).toString().replace(/,/g, ' '))
    })
    return output
}
module.exports = commandProcess

