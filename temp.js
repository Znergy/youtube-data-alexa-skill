exports.handler = (event, context) => {

// try block to fail gracefully
try {

  if(event.session.new) {
    // new session
    console.log(`new session`);
  }

  switch (event.request.type) {
    case "LaunchRequest":
      // Launch Request
      console.log(`Launch Request`);
      // this sends a custom message and session state to buildSpeechletResponse
      context.succeed(
        generateResponse(
          buildSpeechletResponse("Welcome to an Alexa Skill, this is running on a deployed lambda function", true),
          {}
        )
      )
      break;

    case "IntentRequest":
      // Intent Request
      console.log(`Intent Request`);
      break;

    case "SessionEndedRequest":
      // Session Ended Request
      console.log(`Session Ended Request`);
      break;

    default:
      context.fail(`Invalid Request Type: ${event.request.type}`)
  }

} catch (error) { context.fail(`Exception: ${error}`) }

  // Helper Functions

  buildSpeechletResponse = (outputText, shouldEndSession) => {

    return {
      outputSpeech: {
        type: "PlainText",
        text: outputText
      },
      shouldEndSession: shouldEndSession
    }
  }

  generateResponse = (sessionAttributes, speechletResponse) => {

    return {
      version: "1.0",
      sessionAttributes: sessionAttributes,
      response: speechletResponse
    }
  }
  // speechletResponse comes from buildSpeechletResponse
  // tells alexa what to speak and if to end session or not

}
