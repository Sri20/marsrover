# marsrover

## Introduction

This program is created to move rovers around the plateau around the surface of Mars!
The surface of Mars is represented by a Plateau, you can make the assumption that the Plateau is a square/rectangular grid for the purpose of this program.

The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North,South, West, East (the four cardinal compass points) respectively.


To move a Rover around the Plateau, a string of letters is sent to a Rover.
L - Spins the Rover 90 degrees Left without moving from the current coordinate point
R - Spins the Rover 90 degrees Right without moving from the current coordinate point
M - Moves the Rover forward by one grid point, maintaining the orientation


## Key Features 
  marsrover_main receives the rover commands invokes the functions to process .
   The input rover commands are in the following order
     - upper limit coordinate       
     - rover current coordinate with orientation 
     - movement commands


## Function layout

 marsrover_main ------->| marsrover_commandValidator
                        | marsrover_commandParse
                  <--o/p| marsrover_commandProcess --->| determineDir
                                                       | determineLoc --->|detectObstcle

## Approach

- The input rover commands are sent from test file as dummy data.
- The output is sent as array of string coordinates.

## What's Next?

- The program can be extended to receive inputs from command line.
- The program can be extended to cater for intercardinal directions.
- the program may be extended to support circular plateau if centre point and a point in circle is provided.


## Pre-Requisites

- Node installed 

## How to Get Started

    Fork this repo to your Github and then clone the forked version of this repo


### Running the Unit Tests

You can run the unit tests in your terminal by running:

`npm install` 
 
 Followed by: 
 
 `npm test`

 ### Note




