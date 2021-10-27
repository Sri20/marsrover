
const marsroverMain = require('./marsrover_main.js')


test('check single basic command', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM']            //arrange the data
    expect(marsroverMain(command)).toEqual(['1 3 N'])       //act & assert
})

test('check single basic command', () => {
    const command = ['5 5', '3 3 E', 'MMRMMRMRRM']
    expect(marsroverMain(command)).toEqual(['5 1 E'])
})

test('check multiple commands', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM']
    expect(marsroverMain(command)).toEqual(['1 3 N', '5 1 E'])
})


test.each([
    [['5 5', '2 3 N', 'MMMMMMMMMMMM'], ['2 5 N']],
    [['5 5', '2 3 S', 'MMMMMMMMMMMMM'],['2 0 S']],
    [['5 5', '2 3 W', 'MMMMMMMMMMMMM'],['0 3 W']],
    [['5 5', '2 3 E', 'MMMMMMMMMMMM'], ['5 3 E']]
])('check the rover stays within the boundary)', (command, expected) => {
    expect(marsroverMain(command)).toEqual(expected);
})

test('check for obstacle end of the command', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM', '1 3 N', 'MMR']
    expect(marsroverMain(command)).toEqual(['1 2 N', '1 5 E'])
})

test('check for obstacle in the middle of the command,check the break', () => {
    const command = ['5 5', '1 2 N', 'LMLMLMLMM', '0 2 N', 'MMR']
    expect(marsroverMain(command)).toEqual(['1 2 W', '0 4 E'])
})


test.each([
    [['5 4 ', '1 2 N', 'SMLMLMLMM'], 'Invalid command'],
    [['A 4', '1 2 N', 'MLMLMLMM'], 'Invalid command'],
    [['5 5', '1 2 N', 'LMLMLMLMM', '3 B E', 'MMRMMRMRRM'], 'Invalid command'],
    [['5 4', '1 2 N', 'MLMLSMLMM'], 'Invalid command'],
    [['5 4', '1E 1', 'MLMLMLMM'], 'Invalid command']
])('check input command ,returns message for wrong format)', (command, expected) => {
    expect(marsroverMain(command)).toBe(expected);
})