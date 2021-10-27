const commandParse = (command) => {

    let plateau_size = {}
    let filledLoc = []
    let moveCmd = []


    command.forEach((cmdLine, index) => {
        if (index == 0) {
            //set the boundary
            let [xMax, yMax] = command[0].split(' ')
            plateau_size.xMin = 0
            plateau_size.yMin = 0
            plateau_size.xMax = parseInt(xMax)
            plateau_size.yMax = parseInt(yMax)
        }
        else {
            if (command[index].charAt(0) == 'R' || command[index].charAt(0) == 'L' || command[index].charAt(0) == 'M') {
                moveCmd.push(command[index])
            }
            else {
                let loc = {}
                let [locX, locY, dir] = command[index].split(' ')
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
