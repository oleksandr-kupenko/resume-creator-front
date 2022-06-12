import { Component, OnInit } from '@angular/core';
import {
  NewResumeInstance,
  ResumeInstance,
} from 'src/app/resume-templates/resume.interface';
import { ResumeService } from 'src/app/resume-templates/resume.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit {
  public resume!: NewResumeInstance;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResume().subscribe({
      next: (resume) => {
        this.resume = resume;
        console.log(1, this.resume);
      },
    });
  }
}
