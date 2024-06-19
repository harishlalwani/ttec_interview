# This project is solution for bonus task number 1a.
Create a Lambda that converts phone numbers to vanity numbers and save the best
5 resulting vanity numbers and the caller's number in a DynamoDB table. "Best" is
defined as you see fit - explain your thoughts.


Implementation Steps
- Convert phone numbers to vanity numbers.
- Use combinations of letters corresponding to each digit.
- Implement a basic heuristic to select the best numbers.
- Use the DynamoDB client to store the results.

The "best" vanity numbers can be defined by the following criteria:
- Patterns or repetitions that are easy to remember
- Shorter and simpler combinations might be preferable.

Test Data 
{
    "Details": {
        "Parameters": {
            "phoneNumber": "18001234567"
        } 
    }
}


