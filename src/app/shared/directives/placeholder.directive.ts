import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appFictiveInput]',
})
export class FictiveInputDirective implements AfterViewInit {
  @Input() fictivePlaceholder = '';
  @Input() value = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.addPlaceholderContent();
    this.addContenteditableAttribute();
    this.addStyle();
  }

  private addPlaceholderContent() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      `--placeholder`,
      '"' + this.fictivePlaceholder.toString() + '"',
      2
    );
  }

  private addContenteditableAttribute() {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'contenteditable',
      'true'
    );
  }

  private addStyle() {
    this.renderer.addClass(this.elementRef.nativeElement, 'fictive-input');
  }
}
