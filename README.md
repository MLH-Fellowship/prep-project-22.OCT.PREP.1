# MLH Prep Project

MLH Prep Project for Pod 22.OCT.PREP.1

## Table of contents


- [Local Project Setup](#local-project-setup)
   - [Windows](#windows)
   - [Linux](#linux)
- [Docker Setup](#docker-setup)
- [Environment Variables](#environment-variables)
      

## Local Project Setup



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

- `Step 3`: Create a `.env` file and insert your api key:

_You can generate an api key by clicking on this link._

- REACT_APP_APIKEY
  - Step 1: Go to this url and sign up. https://openweathermap.org/current
  - Step 2: Generate the API key in the My API Keys section and add that in .env file.
- REACT_APP_GEOKEY
  - Step 1: Go to this url and sign up. https://myprojects.geoapify.com/projects
  - Step 2: Create a new project and under "Choose a Geoapify API" dropdown select "Places API".
    ![](/src/assets/img/places.PNG)
  - Step 3: Add the generated key in .env file.
- REACT_APP_AUTOCOMPLETE_LOCATION_APIKEY

  - Step 1: Same as above.
  - Step 2: Create a new project and under "Choose a Geoapify API" dropdown select "Autocomplete API".
    ![](/src/assets/img/autocomplete.PNG)
  - Step 3: Add the generated key in .env file.

- REACT_APP_ALERTKEY:

  - Sign Up at :https://www.weatherbit.io/
  - Generate api key
  - Add this to your env file

  Add the following in your `.env` file and replace `Your_Api_Key` with the api key generated

- REACT_APP_WEEKLYFORECASTAPIKEY
    - Step 1: Go to this url and sign up. https://www.weatherapi.com/
    - Step 2: Login into the account with the credentials & switch to the "Accounts" section on the left navbar.
    - Step 3: Add the generated key in .env file.

```
REACT_APP_APIKEY=Your_Api_Key
REACT_APP_GEOKEY=Your_Api_Key
REACT_APP_AUTOCOMPLETE_LOCATION_APIKEY=Your_Api_Key
REACT_APP_ALERTKEY=Your_Api_Key
REACT_APP_WEEKLYFORECASTAPIKEY=Your_Api_Key
```

- `Step 4`: Start the server:

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

### Linux

#### Using npm

- `Step 1`: Install the Curl Command-Line Tool

_You can skip this step if you have curl installed on your system._

```bash
sudo apt install curl
```

- `Step 2`: Install Node.js and npm

_You can skip this step if you have node installed on your system. Make sure it is the latest stable version._

Open the link below to install Node.js and npm for your specific distribution.

https://github.com/nodesource/distributions/blob/master/README.md

- `Step 3`: Install all the dependencies

```bash
npm install
```

- `Step 4`: Start the server.

```bash
npm start
```

You can view your project at `http://localhost:3000/`.

#### Using yarn
- `Step 1`: Install the Curl Command-Line Tool

_You can skip this step if you have curl installed on your system._

```bash
sudo apt install curl
```

- `Step 2`: Install Node.js and npm

_You can skip this step if you have node installed on your system. Make sure it is the latest stable version._

Open the link below to install Node.js and npm for your specific distribution.

https://github.com/nodesource/distributions/blob/master/README.md

- `Step 3`: Install yarn

_You can skip this if you have the yarn installed on your system. Make sure it is the latest stable version._

```bash
npm install --global yarn
```

- `Step 4`: Install the dependencies

```bash
yarn install
```
or simply

```bash
yarn 
```

- `Step 5`: Start the server

```bash
yarn start
```

## Docker Setup


`!!! Have your environment file ready before running the container !!!` <br>


This project contains 2 Dockerfiles := `Dockerfile.dev` and `Dockerfile.prod` for development and production environment respectively.

These 2 enviroments are :-
1. <b>react-dev</b> := For running the app in development setting 
2. <b>react-prod</b> := For running on production ecosystem.

In order to run them simply choose from one of the above and replace them for `env-name`
  
```console
$ docker-compose up <env-name>
```
Both of these environment would be live at **localhost:3000**

#### Make Your Own Image
To make your own image, choose from any of the above mentioned Dockerfile and simply run 
```console
$ docker build -t <image_name> -f <dockerfile_name> .
```

## Environment Variables

Create a `.env` file to insert your API keys. You can refer to the `example.env` format for more information.


##### REACT_APP_APIKEY

- `Step 1`: Go to this url and sign up. https://openweathermap.org/current

- `Step 2`: Generate the API key in the My API Keys section and add that in `.env` file.

##### REACT_APP_GEOKEY
- `Step 1`: Go to this url and sign up. https://myprojects.geoapify.com/projects

- `Step 2`: Create a new project and under "Choose a Geoapify API" dropdown select "Places API".
    ![](/src/assets/img/places.PNG)

- `Step 3`: Add the generated key in `.env` file.

##### REACT_APP_AUTOCOMPLETE_LOCATION_APIKEY
- `Step 1`: Same as above.
- `Step 2`: Create a new project and under "Choose a Geoapify API" dropdown select "Autocomplete API".
    ![](/src/assets/img/autocomplete.PNG)
- `Step 3`: Add the generated key in `.env` file.

Add the following in your `.env` file and replace `Your_Api_Key` with the API key generated

```
REACT_APP_APIKEY=Your_Api_Key
REACT_APP_GEOKEY=Your_Api_Key
REACT_APP_AUTOCOMPLETE_LOCATION_APIKEY=Your_Api_Key
```
