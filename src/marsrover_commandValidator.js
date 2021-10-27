// This functions checks the input command format
//input :  array of commands
//output : returns indicator true or false 
// first element - upper limit coordinates 
// second element - coordinate with direction(N,S,E or W)   is followed by
// third element - direction (L,R) or movement(M) command  
// odd indexed element contains coordiantes followed by even indexed element contains command

const commandValidator = command => {
    validCommand = true
    // check first element has upper limit coordinate only
    if (!(command[0].length == 3 &&
        command[0].charAt(1) == ' ' &&
        !isNaN(command[0].charAt(0)) &&
        !isNaN(command[0].charAt(2)))) {
        validCommand = false
    }
    for (let i = 1; i < command.length && validCommand; i++) {
        let coord = command[i]
        if (i % 2 != 0) {  //check odd indexed element contains only coordiantes & direction(N,S,W or E)
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
        else {      //check the even indexed element for command string (L or M or R )
            for (icmd = 0; icmd < coord.length && validCommand; icmd++) {
                if (!(coord.charAt(icmd) == 'L' ||
                    coord.charAt(icmd) == 'R' ||
                    coord.charAt(icmd) == 'M')
                ) {
                    validCommand = false

                }
            }
        }
    }
    return validCommand
}
module.exports = commandValidator