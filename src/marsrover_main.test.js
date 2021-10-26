
const marsroverMain = require('./marsrover_main.js')


test('check basic command', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM']            //arrange the data
    expect(marsroverMain(command)).toEqual(['1 3 N'])       //act & assert
})

test('check basic command', () => {
    const command = ['5 5', '3 3 E', 'MMRMMRMRRM']
    expect(marsroverMain(command)).toEqual(['5 1 E'])
})

test('check basic command', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM',]
    expect(marsroverMain(command)).toEqual(['1 3 N', '5 1 E'])
})