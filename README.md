# car-stock

## Demo Version
[car-stock](http://car-stock-restapi.surge.sh/)

## Task introduction
Some Car Shop needs front end to keep up their stock of cars. They have following requirements

* Add, Delete and Edit functionalities
* Search and sorting functionalities
* Export data to excel or csv
* User friendly and responsive UI
* They have back end which provides Restful API. It is running in the following [address](https://carstockrest.herokuapp.com)

## Install and running app
```
npm install 
npm start
```
The app will be directed to [http://localhost:3000/](http://localhost:3000/)

## Folder structure
```
myapp/
  node_modules/
  public/
    index.html
    logo.png
  src/
    AddCar.js
    App.css
    App.js
    App.test.js
    CarList.js
    EditCar.js
    index.css
    index.js
    registerService.js
  package.json
  README.md
```

## Deploy on Surge.sh

```
npm install -g surge
cd myapp
npm run build
cd build
surge
```

#### Frontend Development Course - Juha
