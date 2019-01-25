# A Custom JavaScript Testing Framework

Joust is a custom JS framework, heavily inspired by jasmine. Created for my own use in order to demystify how testing frameworks work.

I used this framework to TDD an [event planner single page app](https://github.com/Sindex42/event-planner-js).


## Getting Started

1. Clone this repo `git clone git@github.com:Sindex42/joust-testing-framework.git`
2. Change directory `cd joust-testing-framework`
3. Copy the contents of the folder
4. Navigate to the root of the project folder in which you wish to use Joust
5. Paste all the files to root of your project folder


## Usage

### Viewing the example tests

1. Open the SpecRunner file in your browser `open SpecRunner.html`
2. Open the developer console to view your tests, e.g. in Chrome:  
  `ctrl + shift + J` (windows) or
 `cmd + option + J` (mac)

### Adding your own tests

Example src and spec files are included that demonstrate the syntax and file structure. If you add any additional files, be sure to include them in SpecRunner.html.

## Matchers

* ToEqual: tests equality between your actual and expected values using `===`
* ToContain: tests whether an expected value is included in an array
* ToThrowError : tests if an expected error is thrown after executing a block

## Future direction

* A matcher to compare equality between objects and arrays
* A block that lets you execute some code before each test


## Contributors/Sources

[Alina Goaga](https://github.com/AlinaGoaga)

[#LearnByDIY - How to create a JavaScript unit testing framework from scratch](https://medium.freecodecamp.org/learnbydiy-how-to-create-a-javascript-unit-testing-framework-from-scratch-c94e0ba1c57a)
