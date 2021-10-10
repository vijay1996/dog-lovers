# Dog Lovers app installation and access

Dog lovers is a simple application that uses clean and well commented React code and [The dogs api](https://www.thedogapi.com/) to display dog cards with basic information of displayed dogs like name, life span, height, weight, temperament and other breed related details.

## Installation

You need yarn to run this application in your local host. Follow the commands below to get started with the installation.
```
git clone https://github.com/vijay1996/dog-lovers.git
cd dog-lovers
yarn install

```
This will create a file with the application code and install all the required dependencies.

## Starting the app

Once the installation is complete, run the following command in the project directory.
```
yarn start
```
This will host the app in your [localhost:3000](http://localhost:3000).

## Production build

To generate a production build, the following command has to be executed.
```
yarn build
```
This will create a production build of the app and store the production files in a folder called build inside the project directroy.

## Test cases

This app has 5 test suites and has a test coverage of upto 80%. The test coverage can be accessed by running the following command.
```
yarn test
```

## Tech stack

Following technologies are used to create this app - 
1. React - front end framework
2. Redux - state management
3. Material UI - design library
4. Web designing (HTML, CSS and JavaScript)
5. Jest - testing framework
6. React testing library - testing library exclusive to react

# Dog Lovers user manual

The dog lovers application is a single page application that at any given point displays 10 dog cards. The homepage of the application looks like the following screenshot.

![image](https://user-images.githubusercontent.com/16256964/135749390-5c9607c3-7f48-46da-926f-5b74b75b2c08.png)

This page has a button - RELOAD LIST. Each time this button is clicked, a fresh list of 10 dogs is shown. There is also a pair of radio buttons addressed as "Imperial" and "Metric". On choosing either of the buttons, the values of height and weight of the dogs change based on the corresponding unit system chosen.

Each of these dog cards also have a button to like the displayed dog. Though primitive, clicking the button increases the like count of the dog and sends a vote object to the API. So when the same dog is rerendered, it will hold the updated like count. Since the application does not host a feature to let user create accounts, the vote button can be clicked multiple times and each click will be considered as a separate vote. Here is a screenshot of a dog card - 

![image](https://user-images.githubusercontent.com/16256964/135749678-1a948ddf-2cd7-4fda-8db1-06bab3a3a2e3.png)

The application is designed using Material UI for react and it is responsive as mobile first approach was considered during the design and coding process.

![image](https://user-images.githubusercontent.com/16256964/135750027-73089dd5-abec-4306-b434-7c4741186ed1.png)

This application is maticulusly tested using the react test library and jest. It has a code coverage of upto 80% and a thorough manual testing to make up for the remaining coverage ultimately ensuring the quality of the application and its code.

![image](https://user-images.githubusercontent.com/16256964/135750141-b63e289f-2d81-4371-aef7-39dca5e15cec.png)

On the off chance that you find any bug or have feedback, please feel to contact me - vijaybhojraj.cm@gmail.com
