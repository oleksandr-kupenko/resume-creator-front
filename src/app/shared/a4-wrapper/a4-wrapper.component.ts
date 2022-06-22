import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-a4-wrapper',
  templateUrl: './a4-wrapper.component.html',
  styleUrls: ['./a4-wrapper.component.scss'],
})
export class A4WrapperComponent implements OnInit, AfterViewInit {
  public currentHeight = 1440;
  private currentWidth = 990;

  @ViewChild('sheet') sheet!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setSheetSizes();
  }

  private setSheetSizes() {
    this.currentWidth = this.sheet.nativeElement.offsetWidth;
    this.currentHeight = this.currentWidth * 1.45;
  }
}
