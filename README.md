# CS47-React-Native
Developing Mob App with React Native by Stanford

For the record, I'm not a student of Stanford. I'm just doing this for fun. All the start code are found on the github.

notes:

<br><br>

Part 1: Intro to JS, JSX, Babel
JS (ES6) has latest features like
1. lambda funcion
2. use “const” and “let"
3. Destruct ex: [one, two, …rest] = people (people = [1, 2, 3, 4, 5]

JSX:
An extension to JS to build UI interface,
Overall it’s a shortcut for using the React.createElement() API

It makes easier for designer to write code

Babel trans-compile ES6 into older JS version so all browser can understand

<br><br>

Part 2: env setup
1. install homebrew
2. install node (I suggest using nvm with node 10.15)
3. run ```npm install -g create-react-native-app```

testing env on your mobil device
1. install xcode on mac and open simulator
2. create a project, ```brew update```, ```brew install watchman```
3. download expo XDE on mac
