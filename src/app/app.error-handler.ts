import {Injectable, Injector} from '@angular/core';
import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

@Injectable()
export class ErrorHandler {

  constructor(
    private injector: Injector
  ) { }

  handleError( error: Response | any){
    let errorMessage: string;

    console.log(" NON STATIC APP ERROR HANDLER ");
    console.log(error);
    console.log("------------------------");

    if (error instanceof Response) {
      errorMessage = `Error ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    } else {
      errorMessage = error.toString()
    }
    
    return Observable.throw(errorMessage);

  }

  static handleError(error: Response | any) {
    let errorMessage: string;
    
    console.log(" APP ERROR HANDLER")
    console.log(error);
    console.log("-----------------")

    if (error instanceof Response) {
      errorMessage = `Error ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    } else {
      errorMessage = error.toString()
    }

    console.log(errorMessage)
    return Observable.throw(errorMessage)
  }
}
