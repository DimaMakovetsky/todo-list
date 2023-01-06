import { Directive, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector:"[spaceRemover]"
})
export class SpaceRemoverDirective
{

    constructor(private control:NgControl)
    {
        
    }
    
    @HostListener('blur')
    onBlur():void
    {
        if(this.control.control.value)
            this.control.control.setValue(this.control.control.value.trim());
    }
    
    
}