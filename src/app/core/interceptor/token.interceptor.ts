import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class tokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = localStorage.getItem("token");
    let authReq = request;

    if (token != null) {
      const httpOptions = new HttpHeaders({
        'Authorization': `Bearer ` + token
      })
      authReq = request.clone({ headers: httpOptions })
    }
    return next.handle(authReq);
  }
 
};
