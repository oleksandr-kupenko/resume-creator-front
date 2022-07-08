import { Component, OnInit } from '@angular/core';
import {
  faCamera,
  faCameraRotate,
  faPlus,
  faPlusCircle,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-photo-btn',
  templateUrl: './add-photo-btn.component.html',
  styleUrls: ['./add-photo-btn.component.scss'],
})
export class AddPhotoBtnComponent implements OnInit {
  public plusIcon = faPlus;
  public cameraIcon = faCamera;

  constructor() {}

  ngOnInit(): void {}
}
