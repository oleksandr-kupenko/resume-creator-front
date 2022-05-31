import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss'],
})
export class AddBtnComponent implements OnInit {
  @Input() disabled = false;
  @Input() isDarker = false;
  @Input() isThreeDots = false;

  public addButtonIcon = faPlusCircle;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}
}
