import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-smart-progress-bar',
  templateUrl: './smart-progress-bar.component.html',
  styleUrls: ['./smart-progress-bar.component.scss'],
})
export class SmartProgressBarComponent implements OnInit {
  @Input() rating = 1;
  @Output() changeRating = new EventEmitter<number>();

  public ratingCircles = [
    { isActive: false },
    { isActive: false },
    { isActive: false },
    { isActive: false },
    { isActive: false },
  ];

  constructor() {}

  ngOnInit(): void {
    this.handleSetRating(this.rating - 1);
  }

  public handleSetRating(activeIndex: number, isUpdateRating?: true) {
    this.ratingCircles = this.ratingCircles.map((circle, index) => ({
      ...circle,
      isActive: index <= activeIndex,
    }));

    this.rating = activeIndex + 1;

    if (isUpdateRating) {
      this.changeRating.emit(this.rating);
    }
  }
}
