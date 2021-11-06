// determineDir -This function finds orientation according to the current orientation and the step command
// input : dirtection,individual step command
// output: changed direction

const determineDir = (fdir, fcmdi) => {

    if (fdir == 'N' && fcmdi == 'L') { return 'W' }
    if (fdir == 'N' && fcmdi == 'R') { return 'E' }
    if (fdir == 'S' && fcmdi == 'L') { return 'E' }
    if (fdir == 'S' && fcmdi == 'R') { return 'W' }
    if (fdir == 'W' && fcmdi == 'L') { return 'S' }
    if (fdir == 'W' && fcmdi == 'R') { return 'N' }
    if (fdir == 'E' && fcmdi == 'L') { return 'N' }
    if (fdir == 'E' && fcmdi == 'R') { return 'S' }
}
//determineLoc-This function updates the corresponding coordinate for the move command
//            - checks the new coordinate will not cross the plateau 
//            -  detect obstacle before updation 
//             - if obstacle is detected then no updation,sets obtacle indicator
//input : plateau size, current command, current rover, occupied coordinates array
//output: updates the rover coordiantes if no obtacle
//         returns obstacle indicator if there is any

const determineLoc = (plateau_size, cmdi, rover, filledLoc) => {
    let roverTemp = { ...rover }
    let noObstacle = false
    if (rover.dir == 'N' && ((rover.y + 1) <= plateau_size.yMax)) {
        roverTemp.y += 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.y += 1
            noObstacle = true
        }
    }
    if (rover.dir == 'S' && ((rover.y - 1) >= plateau_size.yMin)) {
        roverTemp.y -= 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.y -= 1
            noObstacle = true
        }
    }
    if (rover.dir == 'E' && ((rover.x + 1) <= plateau_size.xMax)) {
        roverTemp.x += 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.x += 1
            noObstacle = true
        }
    }
    if (rover.dir == 'W' && ((rover.x - 1) >= plateau_size.xMin)) {
        roverTemp.x -= 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.x -= 1
            noObstacle = true
        }
    }
    return noObstacle
}

//detectObstcle -This functions checks the rover (with updated coordinate) present in occupied rover location array
//input : rover location array,current rover with the new coordinate
//output: undefined if no obstacle or otherwise 
const detectObstcle = (filledLoc, roverTemp) => {
    return (filledLoc.find((roverIdx, Idx) => roverIdx.x == roverTemp.x && roverIdx.y == roverTemp.y))
}

module.exports = {
    determineDir, determineLoc
}
