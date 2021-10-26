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
const determineLoc = (plateau_size, cmdi, rover) => {
    if (rover.dir == 'N' && ((rover.y + 1) <= plateau_size.yMax)) { rover.y += 1 }
    if (rover.dir == 'S' && ((rover.y - 1) >= plateau_size.yMin)) { rover.y -= 1 }
    if (rover.dir == 'E' && ((rover.x + 1) <= plateau_size.xMax)) { rover.x += 1 }
    if (rover.dir == 'W' && ((rover.x - 1) >= plateau_size.xMin)) { rover.x -= 1 }
    return (rover)
}

module.exports = {
    determineDir,
    determineLoc
};