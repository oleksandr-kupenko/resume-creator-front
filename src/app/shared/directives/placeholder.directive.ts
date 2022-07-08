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
  @Input() isWhiteText = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.addPlaceholderContent();
    this.addContenteditableAttribute();
    this.addClasses();
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

  private addClasses() {
    this.renderer.addClass(this.elementRef.nativeElement, 'fictive-input');
    if (this.isWhiteText) {
      this.renderer.addClass(this.elementRef.nativeElement, 'white-text');
    }
  }
}
