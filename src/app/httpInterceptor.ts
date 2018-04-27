import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from "@angular/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs/Rx";

// operators
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"
import "rxjs/add/operator/map"

@Injectable()
export class HttpInterceptor extends Http {

    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        public http: Http,
        private injector: Injector
    ) {
        super(backend, options)
    }

    public request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options)
            .catch(this.handleError)
    }

    public handleError = (error: Response) => {
    
        if(error.status == 500){
            error.statusText =  "Deu zica com 500";
        } else {
            error.statusText =  "Deu zica com GERAL";
        }

        // Do messaging and error handling here
        return Observable.throw(new Error(`${ error.status } ${ error.statusText }`));
    }
}