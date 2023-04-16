import { comonErrorAttributes, commonGeneralErrorRoleAttributes, stringLengthErrorValueAttributes, stringLengthErrorShortLengthAttributes, 
    stringLengthErrorLongStringLengthAttributes, stringLengthErrorLongStringAttributes} from "./easyerrormodule"

//global error handling and type checking

 class GlobalErrorClass {
    //This method checks for string type errors such as null, empty, and string of string
    commonGeneralError(obj?: comonErrorAttributes, role?: commonGeneralErrorRoleAttributes  ){
       
       //check for role privileges that you have set
        if(role?.role !== role?.setRole && role?.role !== undefined){
            return `This user does not have the permission`
        }

     
        //ensures that double spaces are checked and not passed. Meaning, empty strings with double spaces will fail and caught as error
        const checkEmptyString = obj?.string?.filter((singleString)=> {

            if(typeof singleString === 'string'){
                const customString = singleString.trim()
                if(customString === ""){
                    return singleString
                }
            }  
        })

       
      
        //Return an error string
        if(checkEmptyString?.length !== 0 && checkEmptyString !== undefined){
            return 'This input value must not be empty value'
        }

       
        //test for null and if value is not a string value
         const checkString =  obj?.string?.filter((singleString)=> typeof singleString !== 'string' || singleString == null || singleString === "");
        
         if(checkString?.length !== 0 && checkEmptyString !== undefined){
                const getString = checkString?.toString();
                
                if(getString === '' || getString === ' '){
                    return `This input value is required and can not be empty`
                }
                 return `This value ${checkString} must be string value and can not be empty`
         }


        //check for number values
        const checkNum = obj?.number?.filter((singleNum)=> typeof singleNum !== 'number' || singleNum === null);
      
        
        if(checkNum?.length !== 0 && checkNum !== undefined){
            return `This value ${checkNum} must be a number value and can not be empty`
        }

    }
   
    //String type error checking ends here



    //This error checks for short and long string minimum and maximum length. Target the argument that you want to check for short string values or long string values.

    stringLengthError(obj?: stringLengthErrorValueAttributes, shortStringLength?: stringLengthErrorShortLengthAttributes, longStringLength?: stringLengthErrorLongStringLengthAttributes, longString?: stringLengthErrorLongStringAttributes ){

       //check for short string length for min error
        const checkShortStringMinLength = obj?.string?.find((singleString)=> {
            if(shortStringLength?.shortMinLength && singleString.length < shortStringLength.shortMinLength){
                    return singleString
               
            }
        });
        
      
        if(checkShortStringMinLength){
            return `This value ${checkShortStringMinLength.toUpperCase()} must not be less than ${shortStringLength?.shortMinLength} letters`
        }
   

        //check for short string length for max error
        const checkShortStringMaxLength = obj?.string?.find((singleString) => shortStringLength?.shortMaxLength && (singleString?.length > shortStringLength?.shortMaxLength));
       

        if(checkShortStringMaxLength){
           return `This value ${ checkShortStringMaxLength.toUpperCase()} must not be greater than ${shortStringLength?.shortMaxLength}` 
        }
       
       
        //check for long string length min error
        const checkLongStringMinLength = longString?.longString?.find((singleString) => longStringLength?.longMinLength && (singleString?.length < longStringLength.longMinLength));

        if(checkLongStringMinLength){
            return `This value ${checkLongStringMinLength.toUpperCase()} must not be less than ${longStringLength?.longMinLength} lettters`
        }

        //check for long string max error
        const checkLongStringMaxLength = longString?.longString?.find((singleString)=> longStringLength?.longMaxLength && (singleString.length > longStringLength.longMaxLength) );

        if(checkLongStringMaxLength){
            return `This value ${checkLongStringMaxLength.toUpperCase()} must not be greater than ${longStringLength?.longMaxLength} lettters`
        }

       
    }
  
    //string length for min amd max error check ends here

}


export const errorInstance = new GlobalErrorClass()











