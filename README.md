# MLH Prep Project

Over the next 2 weeks, you'll be building a React App that works with various APIs (Application Programming Interfaces) that talk to different data sources to do cool stuff.

We're using the [OpenWeather API](https://openweathermap.org/current) to get weather data on different cities. Your challenge over the next 2 weeks is to build out this website and add even more functionality to it. At the moment, it displays basic information about a location when you type it in. Check out [Issues](/issues) for some more ideas!

You'll need to get your own API Key from their website (for free) and add it as an environment variable in a `.env` file. We have a template available as `example.env`.

You'll be using React initially to build this. If you're new to React, check out the [website](https://reactjs.org) for some information on getting started! 

## Project Setup

Follow the steps below to setup the project on your local machine according to the operating system you are using.

### Windows
#### Using npm
- `Step 1`: Install Node.js and npm

_You can skip this step if you have node installed on your system._

Open the link below to install Node.js and npm on your system.

https://nodejs.org/en/download/

- `Step 2`: Install all the dependencies

```bash
npm install
```

- `Step 3`: Create a `.env` file and insert your api key 

_You can generate an api key by clicking on this link._

https://openweathermap.org/current

Add the following in your `.env` file and replace `Your_Api_Key` with the api key generated

```
REACT_APP_APIKEY=Your_Api_Key
```

- `Step 4`: Start the server.

```bash
npm start
```

You can view your project at `http://localhost:3000/`.

#### Using yarn
- `Step 1`: Install Node.js and npm

_You can skip this step if you have node installed on your system._

Open the link below to install Node.js and npm on your system.

https://nodejs.org/en/download/

- `Step 2`: Install yarn

_You can skip this if you have the yarn installed on your system. Make sure it is the latest stable version._

Run the following command in Powershell.

```bash
npm install --global yarn
```

- `Step 3`: Install the dependencies

```bash
yarn install
```
or simply

```bash
yarn 
```

_Note_: The **yarn.lock** may cause issues with the installation of dependencies. If you face this issue, try deleting the **yarn.lock** file and repeat the command above.

- `Step 4`: Start the server

```bash
yarn start
```
