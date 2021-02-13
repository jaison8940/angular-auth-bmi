import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('My-dynamo')

def lambda_handler(event, context):
    
    if event["name"] == "display":
        response = table.scan()
        result = response['Items']
    elif event["name"] == "insert":
        table.put_item(Item={
            'id': event["id"],
            'country': event["country"]
            }
            )
        result = "Item added"
    elif event["name"] == "delete":
        table.delete_item(
        Key={
            'id': event['id']
            }
        )
        result="deleted"
    return {
        'statusCode': 200,
        'body': result,
        'headers': {
            'Content-Type': 'application/json'
        }
    }