# ShutUp

> What&#39;s in a name?

## About

This API uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
We build it during the Codaisseur Academy. It is used for the [ShutUp App](https://github.com/Woulei/ShutUp-UI) that we build during class.

__NOTE:__ This was build during the Academy. If I would build it again, I would do it differently. Also the finishing touches were skipped due to the small amount of time available.

## Services
We added two services User and Message. They have the following structure:
  * User
    * name:String
    * gravatar:String
    * email:String
    * password:String
  * Message
    * text:String
    * author:String
    * authorId:Schema.Types.ObjectId
 
 ## Running Locally
  1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
  2. Install your dependencies
    `cd path/to/ShutUp; npm install`
  3. Start the app
    `npm start`

__note:__ You should also have a MongoDB server running.
  
  ## Related Documentation
  * [Codaisseur Reader](https://reader.codaisseur.com/courses/advanced-bootcamp-f801cb01-3c56-4975-9610-3c22e8746b97)
  * [Feathers](http://feathersjs.com)
