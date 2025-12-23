import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private languageSubject = new BehaviorSubject<'en' | 'ru'>('en');
  language$ = this.languageSubject.asObservable();

  toggleLanguage() {
    const current = this.languageSubject.value;
    this.languageSubject.next(current === 'en' ? 'ru' : 'en');
  }

  setLanguage(lang: 'en' | 'ru') {
    this.languageSubject.next(lang);
  }

  get currentLanguage(): 'en' | 'ru' {
    return this.languageSubject.value;
  }
}
