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
const determineLoc = (plateau_size, cmdi, rover, filledLoc) => {
    let roverTemp = { ...rover }
    let noObstacle = true
    if (rover.dir == 'N' && ((rover.y + 1) <= plateau_size.yMax)) {
        roverTemp.y += 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.y += 1
        }
        else {
            noObstacle = false
        }
    }
    if (rover.dir == 'S' && ((rover.y - 1) >= plateau_size.yMin)) {
        roverTemp.y -= 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.y -= 1
        }
        else {
            noObstacle = false
        }
    }
    if (rover.dir == 'E' && ((rover.x + 1) <= plateau_size.xMax)) {
        roverTemp.x += 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.x += 1
        }
        else {
            noObstacle = false
        }
    }
    if (rover.dir == 'W' && ((rover.x - 1) >= plateau_size.xMin)) {
        roverTemp.x -= 1
        if (detectObstcle(filledLoc, roverTemp) == undefined) {
            rover.x -= 1
        }
        else {
            noObstacle = false
        }
    }
    return noObstacle
}

const detectObstcle = (filledLoc, roverTemp) => {
    // return undefined when no obstacle 
    return (filledLoc.find((roverIdx, Idx) => roverIdx.x == roverTemp.x && roverIdx.y == roverTemp.y))
}

module.exports = {
    determineDir,
    determineLoc
};