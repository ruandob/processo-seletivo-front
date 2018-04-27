import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {

    constructor(
      @Inject(Injector) private injector: Injector
    ) {
      super(true);
    }

    private get toastrService(): ToastrService {
      return this.injector.get(ToastrService);
    }

    handleError(error: any):void {
      
      console.log(" Custom Error Handler ");

      this.toastrService.error(
          error.message,
          "Error",
          {
              closeButton: true
          }
      );


      super.handleError(error); 


    }
}