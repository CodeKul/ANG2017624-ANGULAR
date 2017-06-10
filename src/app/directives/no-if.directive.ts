import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[noIf]'
})
export class NoIfDirective {

  @Input() set noIf(con: boolean) {
    if (!con) {
      this.vcRef.createEmbeddedView(this.tmRef);
    }
    else {
      this.vcRef.clear();
    }
  }
  constructor(
    private tmRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
  }
}
