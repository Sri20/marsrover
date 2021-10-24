//function determineDir(fdir,fcmdi) {
const determineDir = (fdir,fcmdi) => {
 //   console.log('inside')
    if (fdir=='N' && fcmdi == 'L'){ return 'W'}
    if (fdir=='N' && fcmdi == 'R'){ return 'E'}
    if (fdir=='S' && fcmdi == 'L'){ return 'E'}
    if (fdir=='S' && fcmdi == 'R'){ return 'W'}
    if (fdir=='W' && fcmdi == 'L'){ return 'N'}
    if (fdir=='W' && fcmdi == 'R'){ return 'S'}
    if (fdir=='E' && fcmdi == 'L'){ return 'S'}
    if (fdir=='E' && fcmdi == 'R'){ return 'N'}
}
const determineLoc = (fmaxX,fmaxY,flocX,flocY,fdir) => {
    if (fdir=='N' && 0 <= (flocY+1) <= fmaxY){flocY += 1}
    if (fdir=='S' && 0 <= (flocY-1) <= fmaxY){flocY -= 1}
    if (fdir=='E' && 0 <= (flocX+1) <= fmaxY){flocX += 1}
    if (fdir=='W' && 0 <= (flocX+1) <= fmaxY){flocX -= 1}
    //console.log(fmaxX,fmaxY,flocX,flocY,fdir)
    return(flocX+' '+flocY)
}
//export default commandExec;
module.exports = {
    determineDir,
    determineLoc
};