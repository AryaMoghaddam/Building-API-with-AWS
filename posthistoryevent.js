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