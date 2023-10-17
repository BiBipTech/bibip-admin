/**
 * @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
 */
//crypto-secure-random-digit is used here to get random challenge code - https://github.com/ottokruse/crypto-secure-random-digit
const digitGenerator = require("crypto-secure-random-digit");
const AWS = require("aws-sdk");

function sendChallengeCode(phoneNumber, secretCode) {
    // Use SES or custom logic to send the secret code to the user.
    console.log(phoneNumber);
    var params = {
        Message: `Your OTP is: ${secretCode}` /* required */ ,
        PhoneNumber: phoneNumber,
    };
    console.log(params);
    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS().publish(params).promise();
    console.log("publish text");

    // Handle promise's fulfilled/rejected states
    return publishTextPromise
        .then(function(data) {
            console.log("MessageID is " + data.MessageId);
        })
        .catch(function(err) {
            console.error(err, err.stack);
        });
}

function createAuthChallenge(event) {
    console.log("inside createAuthChallenge");
    console.log(event.request.userAttributes);
    if (event.request.challengeName === "CUSTOM_CHALLENGE") {
        // Generate a random code for the custom challenge
        const challengeCode = digitGenerator.randomDigits(6).join("");

        // Send the custom challenge to the user
        var sentPromise = sendChallengeCode(
            event.request.userAttributes.phone_number,
            challengeCode
        );

        event.response.privateChallengeParameters = {};
        event.response.privateChallengeParameters.answer = challengeCode;

        return sentPromise;
    }
}

exports.handler = async(event) => {
    var sentPromise = createAuthChallenge(event);
    return sentPromise;
};