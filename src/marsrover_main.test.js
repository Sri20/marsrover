
const marsroverMain = require('./marsrover_main.js')


test('check basic command', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM']            //arrange the data
    expect(marsroverMain(command)).toEqual(['1 3 N'])       //act & assert
})

test('check basic command', () => {
    const command = ['5 5', '3 3 E', 'MMRMMRMRRM']
    expect(marsroverMain(command)).toEqual(['5 1 E'])
})

test('check two commands', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM',]
    expect(marsroverMain(command)).toEqual(['1 3 N', '5 1 E'])
})

test('check for obstacle end of the command', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM', '1 3 N', 'MMR',]
    expect(marsroverMain(command)).toEqual(['1 2 N', '1 5 E']) 
})

test('check for obstacle in the middle of the command,check the break', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM', '0 2 N', 'MMR',]
    expect(marsroverMain(command)).toEqual(['1 2 W', '0 4 E'])
})