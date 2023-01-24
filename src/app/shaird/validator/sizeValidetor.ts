import { AbstractControl, ValidationErrors } from "@angular/forms";

export class SizeValidetor{
    static imgSizeValidetor(control: AbstractControl )  : ValidationErrors | null{
        // if(control.value.includes(' ')){
        //     return { 'noSpace' : true}
        // } else{ 
        //     return null}
        //     }
        console.log(control); // Only get access to file name
         
              if (control.value === null || control.value === undefined) {
              return { 'imgSizeValidetor' : true};
            }else{
                return null
            }
      
            // TODO: get file size and convert to kb
          }
        }
    
