import { Component, OnInit } from '@angular/core';
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
export class TemplatesComponent implements OnInit {
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

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResume().subscribe({
      next: (resume) => {
        this.resume = resume;
        console.log(1, this.resume);
        this.setTemplateColor();
        this.setTemolateFont();
      },
    });
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
