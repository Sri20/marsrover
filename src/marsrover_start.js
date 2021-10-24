//import {determineDir,determineLoc} from './determine.mjs';
//determineDir
const {determineDir,determineLoc} = require('./determine.js');
//const {determineLoc} = require('./determine.js');

const commandExec = command => {


    const [maxX,maxY] = command[0].split(' ')
   // console.log(maxX)
    //console.log(maxY)

    let [locX,locY,dir] = command[1].split(' ')
   // console.log(locX,locY,dir)
    
    let cmd = command[2].split('')
    console.log(cmd) 
    let DD =''
    let DE =''

    cmd.forEach((cmdi) => {
        if (cmdi == 'L' || cmdi == 'R') { 
            dir=determineDir(dir,cmdi)
        }
        if (cmdi == 'M'){
            DD= (determineLoc(maxX,maxY,parseInt(locX),parseInt(locY),dir))
        }
    })
    console.log(DD)
    return (DD+' '+dir)
}

module.exports = commandExec