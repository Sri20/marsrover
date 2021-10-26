const { determineDir, determineLoc } = require('./marsrover_determine.js');

const commandProcess = (plateau_size, filledLoc, moveCmd) => {
    filledLoc.forEach((rover, index) => {
        let cmd = moveCmd[index].split('')
        cmd.forEach((cmdi) => {
            if (cmdi == 'L' || cmdi == 'R') {
                rover.dir = determineDir(rover.dir, cmdi)
            }
            if (cmdi == 'M') {
                determineLoc(plateau_size, cmdi, rover)
            }
        })
    })
    result = []
    filledLoc.forEach((loc) => {
        result.push(Object.values(loc).toString().replace(/,/g, ' '))
    })
    return result
}
module.exports = commandProcess

