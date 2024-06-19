1. Exercise
Solution for all steps a, b, c, d are in task 1 Folder.

Super Bonus 
Solution in Super Bonus folder.
- Live solution
https://webappvanitynumbers.s3.amazonaws.com/index.html



Question a.
Record your reasons for implementing the solution the way you did, struggles you
faced and problems you overcame.

1. AWS CloudFormation, enabled us to create template for easy deployment on various environments.
2. Each resource (DynamoDb, Lambda, Amazon Connect) is defined separately, which makes it easy to understand, maintain and modify.
3. Better security with assigning IAM roles.
4. Api gateway provides scalability for lambda Function
5.  Including CORS headers in the Lambda response ensures that the API can be accessed from different origins.

Struggles Faced 
- Cros Configuration
Initially requests where being blocked due to CORS. Adding CORS headers explicitly  resolved the issue.
- Tested code using cloudwatch and cloud trail for lambda and cloudformation.



Question b.
What shortcuts did you take that would be a bad practice in production?
1. Hardcoding Table Names and Resource Identifiers
Ideally environment variable can be defined for that.

2. Lack of Detailed Logging and Error Handling- 
Each type of error handling is not done.

3. Using '*' in CORS Configuration
We should restrict our apis to specific origins.

4. Insufficient IAM Policies:
Broad IAM policies poses security risks which can improved in production version

Question c.
What would you have done with more time? 
1. Details error handling and logs.
2. Automated CI/Cd pipeline
3. Improved IAM roles.
4. Better Documentation.

Question d.

What other considerations would you make before making our toy app into
something that would be ready for high volumes of traffic, potential attacks from bad
folks, etc.

- Authentication and Authorization using AWS cognito
- Data encryption in dynamodb using KMS
- Api gateway Caching
- Indexes in database using GSI and LSI


Question e. Please include an architecture diagram.
Check PNG Files

Pending Items
- BONUS - a working Amazon Connect phone number to test in your environment 
- Task 1d. is not fully complete. Some parts are manual.


