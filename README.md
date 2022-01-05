# 🎓 Time Capsule API

## 🎯 Objectives
* Creating an API using **Amazon Web Services**
* Create a Role to access database
* Use **DynamoDB database** to create, store and edit new records
* Use **Lambda** and **OpenAPI** to create "GET" and "POST" method


### I- DataBase Setup:
1. [Create a Dynamo DB database table](#1-DynamoDB-NoSQL)
2. [Create records in the table, with id identifier, and Attribute values](#2-creating-items)
3. [Get the ARN](#4-Amazon-Resource-name)

### II- Database Role to Access Database:
1. [Setup IAM](#1-login-or-register-to-astradb-and-create-database)
2. [Create a Role](#2-create-a-security-token)
3. [Create a Policy](#3-create-table-genre-with-graphql)
4. [ADD the ARN location](#4-insert-data-in-the-table-with-graphql)

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
**'Amazon Resource Name'** Next  we get the ARN(Amazon Resource Name), we will later add the ARN to the system
![ARN Created(database cloud id URL)](https://user-images.githubusercontent.com/63557848/148153785-16cbad9b-43c3-4e37-93d9-56d12edf9d31.png)

### Swagger 2.0 JSON File:
```


```
