# This project is solution for bonus task number 2.
Build a deployment package with AWS SAM, AWS CDK, or CloudFormation to allow a
user, or assignment reviewer, to deploy your Lambda, custom resource, and anything
else you'd like to add into their own AWS Account/Amazon Connect instance.


Solution

This cloudformation file creates Dynamodb, Lambda function to create Contact Flow and generate Vanity number, Lambda Execution roles.

Lambda Function:

The first cloud formation file deploys generate vanity numbers function. The arn of this code need to be used in second cloud formation file.

Second cloud formation file makes connection between Amazon Cloud connect and generate vanity numbers Lambda function.

Note - 
Amazon Connect instance needs to be created. To be used second lambda function.

Limitations
- Amazon Connect Instance Creation is manual Step
