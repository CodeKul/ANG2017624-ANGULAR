import {
  Directive,
  ElementRef,
  Renderer2,
  Renderer,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class ResizerDirective {

  @HostBinding('style.width') @Input('resizer') width: string;
  @Input() maxWidth: string;

  constructor(private elRef: ElementRef, private rend: Renderer2) {
    //this.elRef.nativeElement.style.width = '300px';
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '300px');
  }

  @HostListener('mouseenter') bigger() {
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '500px');
    this.width = '500px';
  }

  @HostListener('mouseleave') smaller() {
    //this.rend.setStyle(this.elRef.nativeElement, 'width', '300px');
    this.width = '300px';
  }
}
