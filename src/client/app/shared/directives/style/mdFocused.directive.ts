import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[obFocused]'
})
export class FocusedInputDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {

        this.renderer.setElementClass(this.el.nativeElement, 'focused', false);

    }

    @HostListener('focus') onMouseEnter() {
        this.focuse(true);
    }

    @HostListener('blur') onMouseLeave() {
        this.focuse(false);
    }

    focuse(shouldFocuse: boolean) {
        if (shouldFocuse) {
            this.renderer.setElementClass(this.el.nativeElement, 'focused', true);
        } else {
            this.renderer.setElementClass(this.el.nativeElement, 'focused', false);
        }
    }
}
