# nodeinputerrorcatcher
A basic nodejs package to help catch input errors and return the handled error. It checks for string, number and string lenghth and user role privileges
## Usage

### TypeScript
```javascript
const GlobalErrorClass =  require("easyerrormodule");
const errorString =  GlobalErrorClass.commonGeneralError({string: ['John Doe'], number: [1, 4, 77771818]}, {role: 'admin'});
if(errorString){
    return console.log(errorString)
}
var stringLengthError = GlobalErrorClass.stringLengthError({string: ['This is to test for short string inputs such as name, location, etc']}, {shortMinLength: 3, shortMaxLength: 20}, {longMinLength: 45, longMaxLength: 500} {longString: ['This is a a test for strings that you are looking to test for long strings such as blog posts, about section, etc. ']});
if(stringLengthError){
    return console.log(stringLengthError)
}

```

