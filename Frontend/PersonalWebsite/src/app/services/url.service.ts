import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UrlService {
  public previousUrl: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  setPreviousUrl(previousUrl: string) {
    this.previousUrl.next(previousUrl);
  }
}