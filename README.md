# Alexa Skill: YouTube Data API

This Alexa Skill queries the YouTube Data API, and returns the subscriber count and viewer count based off what the user asks for.
  Examples:
  * "Alexa, ask youtube data stream for current subscribers count"
  * "Alexa, ask youtube data stream for number of video views this month"

## Project Requirements
* To fully understand what's taking place
  * You need some understanding of AWS
  * You need some understanding of Node.js
  * You need some understanding of API's

## Lambda Setup
* Navigate to AWS Console, sign in, click Lambda, set geolocation (top right) as N. Virginia, click create new Lambda function
* Select Blank function as template
* Select Alexa Skills Kit as a trigger
  * You need to create an account in the Alexa Developer console for the alexa skills kit to show in the lambda trigger dropdown menu
  * URL: https://developer.amazon.com/
* Set lambda function name as 'youtubeDataAPIAlexaSkill'
* Create a role with basic lambda execution permission (lambda_basic_execution)
* Add the temp.js code to your lambda function
* Get a YouTube Data API Key from https://console.developers.google.com/apis/
  * Go to Library, click YouTube Data API, click get credentials, and copy API key
* Get your channel id from YouTube Advanced Settings
  * Log In, click user icon, click account settings icon, click advanced (next to profile picture)
  * Copy Youtube Channel ID
* Using both your YouTube API Key and YouTube Channel ID add them to the endpoint variable inside of your lambda function (code copied from temp.js)
  * Each different intent needs the updated endpoint for your Alexa skill to work properly

## Alexa Setup
* Go to https://developer.amazon.com/, sign in, click Alexa, click Alexa Skills Kit
* Click 'Add a New Skill'
* Create an Alexa app name, I used 'YouTube Data API'
* Create an Invocation name, I used 'youtube data stream' (this is your Alexa skill name)
* Click Next
* Add the intent-schema.json code and insert into 'Intent Schema' section
* Add the sample-utterances.txt text and insert into 'Sample Utterances' section
* Click next
* Connect your Lambda function using the ARN from AWS Lambda console
  * Example, arn:aws:lambda:us-east-1:xxxxxx:function:youtubeDataAPIAlexaSkill
* Click next
* Type a sample utterance, ex: 'current subscriber count' and hit 'Ask {app name}'
  * This should trigger your lambda function and respond with how many subscribers you have

## Reporting bugs
If any of the information above, doesn't work or is missing a step. You can reach me at ryanjonesirl@gmail.com

## Technologies Used

* [AWS]
* [Alexa]
* [Lambda]
* [Youtube Data API]
* [Alexa Skills Kit]

[AWS]: https://aws.amazon.com/
[Lambda]: https://aws.amazon.com/lambda/
[Youtube Data API]: https://developers.google.com/youtube/v3/
[Alexa Skills Kit]: https://developer.amazon.com/alexa-skills-kit
[Alexa]: https://developer.amazon.com/alexa
