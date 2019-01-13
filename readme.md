# express-input-validation

![npm version](https://img.shields.io/npm/v/express-validator.svg)

An [express.js]( https://github.com/visionmedia/express ) middleware for input validation.

![logo-image](https://lh3.googleusercontent.com/-Tlf06DHQyqs/XDtJJ2TIOsI/AAAAAAAACFQ/EKOKyYdYIJ4xDIE6XIykFni01ox2AEolACL0BGAYYCw/h128/2019-01-13.png)

Securing your `API`s by validating the inputs.


express-input-validation is simple yet powerful node module that makes your API robust and discard any request with invalid input.

- [Installation](#installation)
- [Features](#features)
- [Examples](#examples)
- [RoadMap](#roadmap)
- [License](#license)

## Installation
```
npm install express-input-validation
```
OR
```
yarn add express-input-validation
```
## Features
you can ask `express-input-validation` to get value from any of these(following list) using `from` key in rules array, 

- Header (header)
- Query (query)
- Body (body)
- Params (param)

and can pass any custom validation function using `validation_function` in the rules array. Also you can pass a `message` in rules for particular rule or it'll be default send a `invalid ${key_name}` as message.

## Example
Following are the example for validating using `express-input-validation`, here I have included all four type of inputs that most commonly an API can have:

```
    {
        "from": "query",
        "key": "emailId",
        validation_function: value => value.indexOf("@") > -1
    }
```

In rules array the above one can be one of the objects, here I've showed a custom `validation_function` without message, this ll return `Invalid emailId` incase the email id is not found or if it doesn't have an `@` in the value string.

# Note
- `key`, `from` are required keys in object in all of the rule you define.
- a rule without a `validation_function` is considered to be only `required` field, i.e., `express-input-validation` only checks if there is a field in specified `from` key in the object.
- for more examples

# Roadmap

![Raodmap](https://lh3.googleusercontent.com/-FjSo_oAplUg/XDtIqBkPS6I/AAAAAAAACFA/GuN3X8cjj30TsN5hF10XAfpJ_6TwHZRqACLcBGAs/s0/Screen%2BShot%2B2019-01-13%2Bat%2B7.46.36%2BPM.png)

## License

MIT License
