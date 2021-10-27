// This function goes through the command and stores necessary data in variables
// input: array of commands
// output:
    //  plateau_size - boundary values of plateau {xmin:,ymin:,xmax:,ymax: }
    //  filledLoc    - occupied locations of rover (x:,y:,direction:)
    //  moveCmd      - L,R,M command sequence for the rover -array of commands(L,R,M)

const commandParse = (command) => {
    let plateau_size = {}
    let filledLoc = []
    let moveCmd = []
    command.forEach((cmdLine, index) => {
        if (index == 0) {      
            //set the boundary size
            let [xMax, yMax] = command[0].split(' ')
            plateau_size.xMin = 0
            plateau_size.yMin = 0
            plateau_size.xMax = parseInt(xMax)
            plateau_size.yMax = parseInt(yMax)
        }
        else { // array of commands 
            if (cmdLine.charAt(0) == 'R' || cmdLine.charAt(0) == 'L' || cmdLine.charAt(0) == 'M') {
                moveCmd.push(cmdLine) 
            }
            else {  // rover location array
                let loc = {}
                let [locX, locY, dir] = cmdLine.split(' ')
                loc.x = parseInt(locX)
                loc.y = parseInt(locY)
                loc.dir = dir
                filledLoc.push(loc)        
            }
        }
    })
    return [plateau_size, filledLoc, moveCmd]
}
module.exports = commandParse
