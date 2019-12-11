import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class HttpErrorInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          let errorMessage = '';
          if (response.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${response.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${response.status}\nMessage: ${response.error}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
