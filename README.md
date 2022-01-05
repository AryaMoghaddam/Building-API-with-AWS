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
2. [Create a Policy](#2-create-table-genre-with-graphql)
3. [ADD the ARN location](#3-insert-data-in-the-table-with-graphql)

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
![creating a DynamoDB NoSQL database](https://user-images.githubusercontent.com/63557848/148151619-76f7a433-adfe-4856-bc7e-d05912193773.png)

## 2. Create records in the table, with id identifier, and Attribute values
**'creating-items'** Crucial events in the History of the wrold with attributes Year,Event,Place and Description
![Items Created](https://user-images.githubusercontent.com/63557848/148151734-3cd6d72d-4e42-4d9e-b74d-6376b1d6e055.png)

## 3. Get the ARN
**'Amazon Resource Name'** Next  we get the ARN(Amazon Resource Name), we will later add the ARN to the system, database cloud ID URL
![ARN Created(database cloud id URL)](https://user-images.githubusercontent.com/63557848/148153785-16cbad9b-43c3-4e37-93d9-56d12edf9d31.png)


# Part 2 - Database Role to Access Database

## 1. Setup IAM & Create a Role
**'History Role'** We use the ARN created before to set up a Role which will be used to create the Policy and the GET and POST methods
![HistoryRole created](https://user-images.githubusercontent.com/63557848/148155185-1877bd22-bd0c-496c-a1ab-65eaf2f7f1ef.png)

## 2. Create a Policy
**'History Role'** We use the ARN created before to set up a Role which will be used to create the Policy and the GET and POST methods
![Creating Policy for the History Role created](https://user-images.githubusercontent.com/63557848/148155474-32321272-c6b9-4cbf-a58f-a4c154986157.png)
 
## 3. Add the ARN location
**'History Role'** Adding the ARN to tell the system where the resources are located
![Creating Policy for the History Role created](https://user-images.githubusercontent.com/63557848/148155474-32321272-c6b9-4cbf-a58f-a4c154986157.png)


# Part 3 - Write Lambda to read the records using GET
**'Lambda Code'** First we bring in the AWS library code that is the Amazon Web Services software development kit. We’re going to use that code later on; next we’re going to use a handler that’s going to handle the “event” that comes in, the event being an HTTP request. it’s going to provide that information in the form of an event, that is what’s being sent, as well as context(The information about the event)
Next we contact the Dynamo Database using there’s an specific API version to not worry about the updates.
We create the path parameter as well as the other parameters, and we’re gonna use the key to get the Year id.
Next we’re going to use the parameters and the GET function from Amazon library to GET the info.
We’re gonna get the response ‘200 OK’ .
Finally we’re gonna put the data response in JSON format and return the response.
![Creating a Lambda Program in Node js ](https://user-images.githubusercontent.com/63557848/148156418-ed596442-84ff-40c4-9b62-8f35a16890d2.png)
After getting the '200 OK' green light, we deploy the Lambda.
![LAmbda Code Deployed](https://user-images.githubusercontent.com/63557848/148156541-0c16b1a7-203c-469e-9efb-a4bdd3e887b0.png)









### Swagger 2.0 JSON File:
```


```
