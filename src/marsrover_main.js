
const {determineDir,determineLoc} = require('./marsrover_determine.js');
const {commandCheck} =require('./marsrover_commandCheck.js')

const marsroverMain = command => {

    let filled_loc = commandCheck(command)
    

    const [maxX,maxY] = command[0].split(' ')
   // console.log(maxX)
    //console.log(maxY)

    let [locX,locY,dir] = command[1].split(' ')
   // console.log(locX,locY,dir)
    
    let cmd = command[2].split('')
    //console.log(cmd) 

    let DD =''
    let currloc=[]
    cmd.forEach((cmdi) => {

        if (cmdi == 'L' || cmdi == 'R') { 
            dir=determineDir(dir,cmdi)
        }
        if (cmdi == 'M'){
            console.log(locX+locY)
            DD = determineLoc(maxX,maxY,parseInt(locX),parseInt(locY),dir)
            currloc =DD.split(' ')
            locX=currloc[0]
            locY=currloc[1]
            //console.groupCollapsed(DE)
        }
    })

   // console.log(DD)
    return (DD+' '+dir)
}

module.exports = marsroverMain