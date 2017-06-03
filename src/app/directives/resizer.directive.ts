import { Directive, ElementRef, Renderer2, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class ResizerDirective {

  constructor(private elRef: ElementRef, private rend: Renderer2) {
    //this.elRef.nativeElement.style.width = '300px';
    this.rend.setStyle(this.elRef.nativeElement, 'width', '300px');
  }

  @HostListener('mouseenter') bigger() {
    this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');
  }

  @HostListener('mouseleave') smaller() {
    this.rend.setStyle(this.elRef.nativeElement, 'width', '300px');
  }
}
