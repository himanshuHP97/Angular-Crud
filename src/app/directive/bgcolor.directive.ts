import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {
 constructor(private el: ElementRef, private renderer: Renderer2) { 
  // this.changeColor('black');
 }
 
 changeColor(color: string){
  // this.renderer.setStyle(this.el.nativeElement,'background-color',color);
 }

 @HostListener('mouseenter') mouseover(eventData: Event){
  this.renderer.setStyle(this.el.nativeElement,'background-color','black');
 }

 @HostListener('mouseleave') mouseleave(eventData: Event){
  this.renderer.setStyle(this.el.nativeElement,'background-color','tranparent');
 }
}
