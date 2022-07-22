import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  NewResumeInstance,
  TEMPLATE_COLOR,
  TEMPLATE_FONT,
} from 'src/app/resume-templates/resume.interface';
import { ResumeService } from 'src/app/resume-templates/resume.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit, OnDestroy {
  public resume!: NewResumeInstance;

  private colorsStyles: { [key in TEMPLATE_COLOR]: string } = {
    violet2: '#63677c',
    navy2: '#031635',
    navy: '#1f497d',
    blue: '#3596f3',
    blue2: '#8eb9eb',
    violet: '#6967ba',
    green: '#4cab96',
    ochre: '#b8b79a',
  };

  private sub = new Subscription();

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.sub.add(
      this.resumeService.getResume().subscribe({
        next: (resume) => {
          this.resume = resume;
          console.log('newResume', this.resume);
          this.setTemplateColor();
          this.setTemolateFont();
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private setTemplateColor() {
    const colorName = this.resume.custom.color;
    document.documentElement.style.setProperty(
      '--main-color',
      this.colorsStyles[colorName]
    );
  }

  private setTemolateFont() {
    const font = this.resume.custom.font;
    document.documentElement.style.setProperty('--main-font', font);
  }
}
