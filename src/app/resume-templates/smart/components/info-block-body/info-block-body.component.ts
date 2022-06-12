import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { InfoBlockData } from 'src/app/resume-templates/resume.interface';

@Component({
  selector: 'app-info-block-body',
  templateUrl: './info-block-body.component.html',
  styleUrls: ['./info-block-body.component.scss'],
})
export class InfoBlockBodyComponent implements OnInit {
  @Input() isEditMode = false;
  @Input() infoContent: InfoBlockData[] = [];

  public checkIcon = faCheckCircle;

  private defaultItem!: InfoBlockData;

  constructor() {}

  ngOnInit(): void {}

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.infoContent.splice(index, 1);
  }

  public handleAddItem() {
    this.infoContent.push(this.defaultItem);
  }

  public handleChangeValue(indexItem: number, index: number, event: any) {
    this.infoContent[indexItem].rows[index].value = event.target.innerText;
  }
}
