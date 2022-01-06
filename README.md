# 🎓 Time Capsule API

## 🎯 Objectives
* Creating an API using **Amazon Web Services**
* Create a Role to access database
* Use **DynamoDB database** to create, store and edit new records
* Use **Lambda** and **OpenAPI** to create "GET" and "POST" method


### I- DataBase Setup:
1. [Create a Dynamo DB database table](#1-DynamoDB-NoSQL)
2. [Create records in the table, with id identifier, and Attribute values](#2-creating-items)
3. [Get the ARN](#3-Amazon-Resource-name)

### II- Database Role to Access Database:
1. [Setup IAM & Create a Role](#1-create-a-security-token)
2. [Create a Policy](#2-Creating-the-Policies)
3. [ADD the ARN location](#3-Inserting-the-ARN)

### III- Write Lambda to read the records using GET
1. [Lambda Java](#Write-the-Lambda-code-and-Test-the-program-in-Java-code)

### IV- Create the GET API
1. [GET API](#In-API-module-we-use-the-GET-function-used-to-create-the-GET-API)

### V- Create POST method
1. [Creating Lambda](#Lambda-Code)

### VI- Read records and add to them with Postman
1. [Setup IAM](#Using-Base-URL-to-Read-and-Post-records)


# Part 1 - DataBase Setup

## 1. Create a DynamoDB NoSQL database table
**'DynamoDB'** is a NoSQL database, which allows for creating and keeping records. 

![Screenshot 2022-01-06 145430](https://user-images.githubusercontent.com/63557848/148443098-54664d02-0deb-4f0b-95ed-7b01bf8a7ac4.png)

## 2. Create records in the table, with id identifier, and Attribute values
**'creating-items'** Crucial events in the History of the wrold with attributes Year,Event,Place and Description.

![Items Created](https://user-images.githubusercontent.com/63557848/148151734-3cd6d72d-4e42-4d9e-b74d-6376b1d6e055.png)

## 3. Get the ARN
**'Amazon Resource Name'** Next  we get the ARN(Amazon Resource Name), we will later add the ARN to the system, database cloud ID URL.

![ARN Created(database cloud id URL)](https://user-images.githubusercontent.com/63557848/148153785-16cbad9b-43c3-4e37-93d9-56d12edf9d31.png)


# Part 2 - Database Role to Access Database

## 1. Setup IAM & Create a Role
**'History Role'** We use the ARN created before to set up a Role which will be used to create the Policy and the GET and POST methods.

![HistoryRole created](https://user-images.githubusercontent.com/63557848/148155185-1877bd22-bd0c-496c-a1ab-65eaf2f7f1ef.png)

## 2. Create a Policy
**'History Role'** We use the ARN created before to set up a Role which will be used to create the Policy and the GET and POST methods.

![Creating Policy for the History Role created](https://user-images.githubusercontent.com/63557848/148155474-32321272-c6b9-4cbf-a58f-a4c154986157.png)
 
## 3. Add the ARN location
**'History Role'** Adding the ARN to tell the system where the resources are located.

![Creating Policy for the History Role created](https://user-images.githubusercontent.com/63557848/148155474-32321272-c6b9-4cbf-a58f-a4c154986157.png)


# Part 3 - Write Lambda to read the records using GET
**'Lambda Code'** First we bring in the AWS library code that is the Amazon Web Services software development kit. We’re going to use that code later on. 
Next we’re going to use a handler that’s going to handle the “event” that comes in, the event being an HTTP request. 
The handler is going to provide that information in the form of an event, that is what’s being sent, as well as context (The information about the event)
Next we contact the Dynamo Database using an specific API version to not worry about the updates.
We create the path parameter as well as the other parameters, and we’re gonna use the key to get the Year id.
Next we’re going to use the parameters and the GET function from Amazon library to GET the info.
As a result We get the response ‘200 OK’ .
Finally we’re gonna put the data response in JSON format and return the response.

![Creating a Lambda Program in Node js ](https://user-images.githubusercontent.com/63557848/148156418-ed596442-84ff-40c4-9b62-8f35a16890d2.png)

After getting the '200 OK' green light, we deploy the Lambda.

![LAmbda Code Deployed](https://user-images.githubusercontent.com/63557848/148156541-0c16b1a7-203c-469e-9efb-a4bdd3e887b0.png)


# Part 4 - Create the GET API

## 1. In the API module we use the GET function used to create the GET API
**'GET API'** We use the Lambda code written for the GET method to create the Request.

![Creating the GET method using the Lambda code we created before](https://user-images.githubusercontent.com/63557848/148157039-2c4b3a27-d047-473a-9c8a-04d9c49f0f73.png)


### GET Lambda code:
```
//Bring in the AWS Library
var AWS = require('aws-sdk');

//Create DynamoDB document client
exports.handler = async (event, context) => {
var awsddbdc = new AWS.DynamoDB.DocumentClient ({apiVersion: '2012-08-10'});

//Path Parameters
const {year} = event.pathParameters;

//Query Parameters
var params = {
	TableName : 'history',
	Key : {
		Year : year
		//Year: '1921'
		
	}
};

const data = await awsddbdc.get(params).promise();
const response = {
	statusCode: '200' ,
	body: JSON.stringify(data.Item)
}

return response;

};

```

AWS provides the services for us to test the Lambda Code

![Tetsting the GET method](https://user-images.githubusercontent.com/63557848/148157246-6b8e6b20-2fa3-4b91-bd05-cbf0d5435934.png)

![testing the GET method](https://user-images.githubusercontent.com/63557848/148157259-36005b86-18ec-40db-8889-99073eab7897.png)


# Part 5 - Create the GET API

## 1. Creating the POST methos
**'POST API'** Similar to the GET method, we write a Lambda code for POST

![POST API created using the lambda Function](https://user-images.githubusercontent.com/63557848/148157739-7111a368-ac0b-40e7-b682-7afedb6a67c3.png)

### POST Lambda Code:
```
//Bring in the AWS library
var AWS = require ('aws-sdk');

//Create DynamoDB document client 
exports.handler = async (event, context) => {
var awsddbdc = new AWS.DynamoDB.DocumentClient ({apiVersion: '2012-08-10'});

//Parse the incoming JSON values
const {Year,Place,Event,Description} = JSON.parse(event.body);

//Query Parameters
var params = {
	TableName : 'history',
	Item: {
		Year : Year,
		Place : Place,
		Event : Event,
		Description : Description
		//Year: '1891', Place: 'Springfield, Massachusetts', Event: 'Invention of Basketball', Description: 'Basketball was invented in 1891 by James Naismith at the YMCA International Training School (now Springfield College) in Springfield, Massachusetts.'
	}
}

const data = await awsddbdc.put(params).promise();
const response = {
	statusCode: '201',
	body: JSON.stringify(data)
}

return response;

};
```

Also we test it using AWS 

![Lambda code POST Test response](https://user-images.githubusercontent.com/63557848/148157797-3f278c67-ecad-4506-aa91-630545820f36.png)

![Testing the POST Lambda Code](https://user-images.githubusercontent.com/63557848/148157811-2e12eb07-8745-4f04-a9d4-ed2774e9e8a7.png)



