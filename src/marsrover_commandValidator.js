
//  ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM',]

// second element - coordinate with direction(N,S,E or W)   is followed by
// third element - direction (L,R) or movement(M) command  
// odd indexed element conatains coordiantes followed by even indexed element contains command

const commandValidator = command => {

    console.log('command validate')
    validCommand = true
    // first element - upper limit coordinate i=0
    //let upLimit = command[i]
    if (!(command[0].length == 3 &&
        command[0].charAt(1) == ' ' &&
        !isNaN(command[0].charAt(0)) &&
        !isNaN(command[0].charAt(2)))) {
        validCommand = false
    }
    for (let i = 1; i < command.length && validCommand; i++) {
        // console.log(i % 2)
        let coord = command[i]
        console.log(coord)
        if (i % 2 != 0) {
            console.log('first element validate')
            if (!(coord.length == 5 &&
                !isNaN(coord.charAt(0)) &&
                coord.charAt(1) == ' ' &&
                !isNaN(coord.charAt(2)) &&
                (coord.charAt(4) == 'N' ||
                    coord.charAt(4) == 'S' ||
                    coord.charAt(4) == 'E' ||
                    coord.charAt(4) == 'W')
            )) {
                validCommand = false
            }
        }
        else {
            console.log('second element validate')

            for (icmd = 0; icmd < coord.length && validCommand; icmd++) {
                if (!(coord.charAt(icmd) == 'L' ||
                    coord.charAt(icmd) == 'R' ||
                    coord.charAt(icmd) == 'M')
                ) {
                    validCommand = false
                    console.log(coord.charAt(icmd))
                }
            }
        }
    }
    return validCommand
}
module.exports = commandValidator