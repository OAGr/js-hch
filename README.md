# react-hch
A simple hch-like system done in javascript. All state is currently stored in the code. Users build trees by directly editing the source code. The app is currently useful for experimentation, though is pretty basic.

## TODO
- Budgets and similar could be added by adding redux or similar. State would have to be stored in an external system.
- There could be a DSL or something for most tasks that involve answering specific inputs with specific outputs. Most tasks in the system will probably be like this.
- Error handling could definitely improve.
- There should be some way of calling a function to say, "I want someone to write a function that does X, with Y inputs".
- There could be generators for creating new functions.

## Running
```
yarn install
yarn run start
```
To use: 
- To make a new root question, edit the RootQuestions in the App component.
- After that, if the subtree needs work, at least one leaf should always be red. Work on this one next.

## Example Screenshot:
![Simple Screenshot](simple-screenshot.png?raw=true "Screenshot Example")
