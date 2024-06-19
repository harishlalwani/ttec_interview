import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


// Digit to letter mapping based on phone keypad
const KEYPAD = {
    '2': 'ABC', '3': 'DEF', '4': 'GHI', '5': 'JKL', '6': 'MNO',
    '7': 'PQRS', '8': 'TUV', '9': 'WXYZ', '0': '0', '1': '1'
};

// Function to get all letter combinations for a phone number
const getVanityCombinations = (phoneNumber) => {
    const digits = phoneNumber.split('');
    const combinations = digits.reduce((acc, digit) => {
        const letters = KEYPAD[digit];
        if (!letters) return acc;
        const newAcc = [];
        for (const combo of acc) {
            for (const letter of letters) {
                newAcc.push(combo + letter);
            }
        }
        return newAcc;
    }, ['']);
    return combinations;
};

// Function to evaluate and select the best vanity numbers
const selectBestVanityNumbers = (combinations) => {
    // Simple criteria for "best": first 5 unique combinations
    const uniqueCombinations = [...new Set(combinations)];
    return uniqueCombinations.slice(0, 5);
};

// Lambda handler
export const handler = async (event, context , callback) => {
    const phoneNumber = event.Details.Parameters.phoneNumber;
    console.log(event, 'phoneNumber');
    // Validate phone number
    if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid phone number' })
        };
    }

    // Get vanity combinations
    const combinations = getVanityCombinations(phoneNumber);

    // Select the best vanity numbers
    const bestVanityNumbers = selectBestVanityNumbers(combinations);

    // Save to DynamoDB
    
    const command = new PutCommand({
        TableName: 'VanityNumbers',
        Item: {
            phoneNumber: phoneNumber,
            vanityNumbers: bestVanityNumbers
        }
    });


    try {
        const response = await docClient.send(command);
        console.log(response);
        return { vanityNumbers: bestVanityNumbers };
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};


