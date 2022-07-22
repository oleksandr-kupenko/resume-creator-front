import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[checkNoHeigh]',
})
export class CheckNoHeighDirective implements OnInit, OnDestroy {
  @Output() onRanOutOfSpace = new EventEmitter<boolean>();

  sizeObserver = new ResizeObserver((entries) => {
    if (entries[0].contentRect.height == 0) {
      this.onRanOutOfSpace.emit(true);
    }
  });

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.sizeObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.sizeObserver.unobserve(this.elementRef.nativeElement);
  }
}
