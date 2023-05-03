import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorCodes, ServerErrorCodes } from '../models/statusCodes';
import { applicationStorageService } from '../services/applicationStorage.service';
import { DialogPopupsComponent } from '../components/dialogPopups/dialogPopups.component';

@Injectable()
export class Utilities {

  private redirectPath: string = "";

  constructor(private dialog: MatDialog,) { }

  isLoggedIn(): boolean {
    if (applicationStorageService.getValueFromStorage("DetourAccessToken") != "") {
      return true;
    }
    else {
      return false;
    }
  }

  filterErrors(startingPoint: string, error: any) {
    if (typeof error === 'number') {
      if (error == 0) {
        this.selectPopupError(startingPoint, 0);
      } else if (error >= 400 && error <= 499) {
        for (let code in ErrorCodes) {
          if (parseInt(ErrorCodes[code]) == error) {
            this.selectPopupError(startingPoint, parseInt(ErrorCodes[code]));
            break;
          }
        }
      } else if (error >= 500 && error <= 599) {
        for (let code in ServerErrorCodes) {
          if (parseInt(ServerErrorCodes[code]) == error) {
            this.selectPopupError(startingPoint, parseInt(ServerErrorCodes[code]));
            break;
          }
        }
      }
    }
  }

  selectPopupError(startingPoint: string, errorCode: number) {
    this.dialog.open(DialogPopupsComponent, {
      data: {
        type: startingPoint + errorCode,
      },
      position: {
        top: '200px',
      },
    });
  }
}
