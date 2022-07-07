import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import {
  HeadInfo,
  NewResumeInstance,
} from 'src/app/resume-templates/resume.interface';
import { resume } from 'src/app/resume-templates/resume.mock';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private _resume$$ = new ReplaySubject<NewResumeInstance>(0);

  getResume(): Observable<NewResumeInstance> {
    this._resume$$.next(resume);
    return this._resume$$.asObservable();
  }

  setResume(reume: NewResumeInstance) {
    this._resume$$.next(reume);
  }

  
}
