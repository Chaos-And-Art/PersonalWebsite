import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { applicationStorageService } from './applicationStorage.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ErrorCodes, InfoCodes, RedirectCodes, ServerErrorCodes, SuccessCodes } from '../models/statusCodes';
import { PopupsComponent } from '../components/popups/popups.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public dialog: MatDialog) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = applicationStorageService.getValueFromStorage("DetourAccessToken");
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }
    return next.handle(request).pipe(catchError(error => {
      /*
        Here I can listen to all errors that come back from the Server,
        and implement a reponse I see fit.
      */

      // this.filterErrors(error)

      return throwError(error.status);
    }));
  }

  // filterErrors(error: any) {
  //   if (typeof error === 'number') {
  //     if (error == 0) {

  //     } else if (error >= 100 && error <= 199) {
  //       for (let code in InfoCodes) {
  //         if (parseInt(InfoCodes[code]) == error) {
  //           this.selectPopupResponse(parseInt(InfoCodes[code]));
  //           break;
  //         }
  //       }
  //     } else if (error >= 200 && error <= 299) {
  //       for (let code in SuccessCodes) {
  //         if (parseInt(SuccessCodes[code]) == error) {
  //           this.selectPopupResponse(parseInt(SuccessCodes[code]));
  //           break;
  //         }
  //       }
  //     } else if (error >= 300 && error <= 399) {
  //       for (let code in RedirectCodes) {
  //         if (parseInt(RedirectCodes[code]) == error) {
  //           this.selectPopupResponse(parseInt(RedirectCodes[code]));
  //           break;
  //         }
  //       }
  //     } else if (error >= 400 && error <= 499) {
  //       for (let code in ErrorCodes) {
  //         if (parseInt(ErrorCodes[code]) == error) {
  //           this.selectPopupResponse(parseInt(ErrorCodes[code]));
  //           break;
  //         }
  //       }
  //     } else if (error >= 500 && error <= 599) {
  //       for (let code in ServerErrorCodes) {
  //         if (parseInt(ServerErrorCodes[code]) == error) {
  //           this.selectPopupResponse(parseInt(ServerErrorCodes[code]));
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }

  // selectPopupResponse(errorCode: number) {
  //   this.dialog.open(PopupsComponent, {
  //     data: {
  //       type: "loginFailed_" + errorCode,
  //     },
  //     position: {
  //       top: '200px',
  //     },
  //   });
  // }
}
