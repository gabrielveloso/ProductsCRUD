import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers!: number[]

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 
      console.log(this.container);
      console.log(this.template);
  }

  ngOnInit(){
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, {$implicit: number});
    }
    console.log(this.numbers);
  }
}
