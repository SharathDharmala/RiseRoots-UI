import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AppLang = 'en' | 'te' | 'hi';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private langSubject = new BehaviorSubject<AppLang>('en');

  lang$ = this.langSubject.asObservable();

  setLang(lang: AppLang) {
    this.langSubject.next(lang);
  }

  get current(): AppLang {
    return this.langSubject.value;
  }
}
