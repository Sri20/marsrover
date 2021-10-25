
const determineDir = (fdir,fcmdi) => {

    if (fdir=='N' && fcmdi == 'L'){ return 'W'}
    if (fdir=='N' && fcmdi == 'R'){ return 'E'}
    if (fdir=='S' && fcmdi == 'L'){ return 'E'}
    if (fdir=='S' && fcmdi == 'R'){ return 'W'}
    if (fdir=='W' && fcmdi == 'L'){ return 'S'}
    if (fdir=='W' && fcmdi == 'R'){ return 'N'}
    if (fdir=='E' && fcmdi == 'L'){ return 'N'}
    if (fdir=='E' && fcmdi == 'R'){ return 'S'}
}
const determineLoc = (fmaxX,fmaxY,flocX,flocY,fdir) => {
    console.log(fmaxX,fmaxY,flocX,flocY,fdir)
    if (fdir=='N' && 0 <= (flocY+1) <= fmaxY){flocY += 1}
    if (fdir=='S' && 0 <= (flocY-1) <= fmaxY){flocY -= 1}
    if (fdir=='E' && 0 <= (flocX+1) <= fmaxY){flocX += 1}
    if (fdir=='W' && ( 0 <= (flocX-1) <= fmaxY)){flocX -= 1}
    return(flocX+' '+flocY)
}

module.exports = {  
    determineDir,
    determineLoc
};