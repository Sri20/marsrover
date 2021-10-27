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
//            -  detect obstacle before before updation 
//             - if obstacle is detected then no updation,sets obtacle indicator
//input : plateau size, current command, current rover, occupied coordinates array
//output: updates the rover coordiantes if no obtacle
//         returns obstacle indicator if there is any
//functions called: detectObstcle
const determineLoc = (plateau_size, cmdi, rover, filledLoc) => {
    let roverTemp = { ...rover }
    let noObstacle = true
    if (rover.dir == 'N' && ((rover.y + 1) <= plateau_size.yMax)) { // checks the upper y axis 
        roverTemp.y += 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.y += 1                                            // N => y+1
        }
        else {
            noObstacle = false
        }
    }
    if (rover.dir == 'S' && ((rover.y - 1) >= plateau_size.yMin)) { //checks the lower y axis
        roverTemp.y -= 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.y -= 1                                             // S => y-1
        }
        else {
            noObstacle = false
        }
    }
    if (rover.dir == 'E' && ((rover.x + 1) <= plateau_size.xMax)) { // checks the upper x
        roverTemp.x += 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.x += 1                                            // E => x+1
        }
        else {
            noObstacle = false
        }
    }
    if (rover.dir == 'W' && ((rover.x - 1) >= plateau_size.xMin)) { //checks the lower x
        roverTemp.x -= 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.x -= 1                                           // W => x-1
        }
        else {
            noObstacle = false
        }
    }
    return noObstacle
}

//detectObstcle -This functions checks the rover (with updated coordinate) present in occupied rover location array
//input : rover location array,current rover with the new coordinate
//output: undefined if no obstacle or otherwise 
const detectObstcle = (filledLoc, roverTemp) => {
    // return undefined when no obstacle 
    return (filledLoc.find((roverIdx, Idx) => roverIdx.x == roverTemp.x && roverIdx.y == roverTemp.y))
}

module.exports = {
    determineDir,
    determineLoc
};