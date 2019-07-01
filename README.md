# Getting started

Auto Mart is an online marketplace for automobiles of diverse makes, model or body type. With Auto Mart, users can sell their cars or buy from trusted dealerships or private sellers.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Automart-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Automart-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `AutomartLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Automart-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Automart-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Automart-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Automart-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  AutomartController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=AutomartController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MiscController](#misc_controller)

## <a name="misc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MiscController") MiscController

### Get singleton instance

The singleton instance of the ``` MiscController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MiscController;
```

### <a name="delete_specific_ad"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.deleteSpecificAd") deleteSpecificAd

> Endpoint to delete a specific car ad


```javascript
function deleteSpecificAd(callback)
```

#### Example Usage

```javascript


    controller.deleteSpecificAd(function(error, response, context) {

    
    });
```



### <a name="get_view_all_posted_ads"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.getViewAllPostedAds") getViewAllPostedAds

> Api endpoint to get a specific car advert


```javascript
function getViewAllPostedAds(callback)
```

#### Example Usage

```javascript


    controller.getViewAllPostedAds(function(error, response, context) {

    
    });
```



### <a name="get_specific_ad_from_database"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.getSpecificAdFromDatabase") getSpecificAdFromDatabase

> An endpoint to get all posted ads


```javascript
function getSpecificAdFromDatabase(callback)
```

#### Example Usage

```javascript


    controller.getSpecificAdFromDatabase(function(error, response, context) {

    
    });
```



### <a name="create_flag_a_posted_car_ad"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createFlagAPostedCarAd") createFlagAPostedCarAd

> An endpoint to flag a posted car advert


```javascript
function createFlagAPostedCarAd(xAccessToken, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xAccessToken |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU2MTYxNzE2MSwiZXhwIjoxNTYxNzAzNTYxfQ.4USS0nr5mcft7nkpyBDL_Y-qAZ_1AAPB171DPZc4Wow';
    var contentType = 'application/json';
    var body = new FlagAPostedCarAdRequest({
  "carId": 1,
  "reason": "Pricing",
  "description": "the pricing is too high"
});

    controller.createFlagAPostedCarAd(xAccessToken, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_signup"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createSignup") createSignup

> An endpoint for user registration/signup


```javascript
function createSignup(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new SignupRequest({
  "firstName": "Pe",
  "lastName": "Kamau",
  "email": "peterkamau@gmail.com",
  "password": "1234566",
  "address": "Nairobi",
  "isAdmin": false
});

    controller.createSignup(contentType, body, function(error, response, context) {

    
    });
```



### <a name="post_ad"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.postAd") postAd

> An endpoint to create a car sale ad


```javascript
function postAd(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new PostAdRequest({
  "owner": 1,
  "state": "new",
  "status": "available",
  "price": 54,
  "manufacturer": "Toyota",
  "model": "Prado",
  "bodyType": "suv",
  "description": "a nice suv vehicle"
});

    controller.postAd(contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_the_price_of_a_car_ad"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.updateThePriceOfACarAd") updateThePriceOfACarAd

> Endpoint to update the price of a posted car ad


```javascript
function updateThePriceOfACarAd(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new UpdateThePriceOfACarAdRequest({"price":80});

    controller.updateThePriceOfACarAd(contentType, body, function(error, response, context) {

    
    });
```



### <a name="update_price_of_a_purchase_order"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.updatePriceOfAPurchaseOrder") updatePriceOfAPurchaseOrder

> AN Endpoint whereby a user can update the price of their purchase order


```javascript
function updatePriceOfAPurchaseOrder(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new UpdatePriceOfAPurchaseOrderRequest({"price":37});

    controller.updatePriceOfAPurchaseOrder(contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_view_unsold_price_range"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.getViewUnsoldPriceRange") getViewUnsoldPriceRange

> Endpoint to view all unsold cars within a specific price range


```javascript
function getViewUnsoldPriceRange(status, minPrice, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| status |  ``` Required ```  | TODO: Add a parameter description |
| minPrice |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var status = 'available';
    var minPrice = 0;

    controller.getViewUnsoldPriceRange(status, minPrice, function(error, response, context) {

    
    });
```



### <a name="update_mark_posted_ad_as_sold"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.updateMarkPostedAdAsSold") updateMarkPostedAdAsSold

> Endpoint to mark a posted car ad as sold


```javascript
function updateMarkPostedAdAsSold(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new MarkPostedAdAsSoldRequest({
  "status": "available"
});

    controller.updateMarkPostedAdAsSold(contentType, body, function(error, response, context) {

    
    });
```



### <a name="get_view_all_unsold_cars"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.getViewAllUnsoldCars") getViewAllUnsoldCars

> An endpoint where a user can view all unsold cars


```javascript
function getViewAllUnsoldCars(status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| status |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var status = 'available';

    controller.getViewAllUnsoldCars(status, function(error, response, context) {

    
    });
```



### <a name="create_login"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createLogin") createLogin

> A user is able to login to automart


```javascript
function createLogin(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new LoginRequest({
  "email": "peterkamau@gmail.com",
  "password": "1234566"
});

    controller.createLogin(contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_purchase_order"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.createPurchaseOrder") createPurchaseOrder

> An API endpoint to create a purchase order


```javascript
function createPurchaseOrder(contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var contentType = 'application/json';
    var body = new CreatePurchaseOrderRequest({
  "buyerId": 1,
  "carId": 1,
  "amount": 23,
  "status": "pending"
});

    controller.createPurchaseOrder(contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



