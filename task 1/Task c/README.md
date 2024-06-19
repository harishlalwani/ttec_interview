# This project is solution for bonus task number 2.
Create
a <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/templatecustom-resources.html> custom resource for CloudFormation] that will allow you to
publish the contact flow to a Connect instance with the appropriate Lambda ARN
already in the contact flow so that there is no manual configuration of the flow


Solution

This cloudformation file creates Dynamodb, Lambda function to create Contact Flow, Lambda Execution roles.

Lambda Function:

The Lambda function handles the creation and deletion of the contact flow in the Amazon Connect instance.
It constructs the contact flow content dynamically, embedding the provided Lambda ARN.
CloudFormation Template:

Defines the Lambda function used as a custom resource.
LambdaExecutionRole: IAM role that grants the necessary permissions to the Lambda function.
Custom resource that uses the Lambda function to manage the contact flow in Amazon Connect.
Outputs: Outputs Dynamodb table Arn and Custom Resource Lambda Arn

Note - 
Amazon Connect instance needs to be created.
A lambda function to read phone number and generate vanity number needs to be created. Code for generate Vanity numbers is in index.mjs
The ARN number for above function needs to be added in cloud formation file.
 - Replace this - arn:aws:lambda:us-east-1:637423546014:function:vanityNumbers


To test Lambda Function 
- Create Payload

    {
        "RequestType": "Create",
        "ResourceProperties": {
            "InstanceId": "arn:aws:connect:us-east-1:637423546014:instance/96131cb9-6d7b-40b3-92fe-95c3d8cbbb2d",
            "ContactFlowName": "contact flow",
            "LambdaArn": "arn:aws:lambda:us-east-1:637423546014:function:vanityNumbers"
        }
    }

- Delete Payload

    {
        "RequestType": "Delete",
        "ResourceProperties": {
            "InstanceId": "arn:aws:connect:us-east-1:637423546014:instance/96131cb9-6d7b-40b3-92fe-95c3d8cbbb2d",
            "ContactFlowId": "e934d2b9-0bab-4b46-8f9a-05c23eaf7712"
        }
    }