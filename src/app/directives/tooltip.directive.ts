import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:"[tooltip]"
})
export class TooltipDirective
{
    @Input() tooltip: string="BRUH";
    @Input() title: string;

    private popup:any;
    private timer:any;
    constructor(private el:ElementRef)
    {
        
    }

    @HostListener('mouseover')
    onMouseover():void
    {
        this.timer= setTimeout(()=>
        {
            const rect=this.el.nativeElement.getBoundingClientRect();
            const top=rect.y+rect.height;
            const left=rect.x+rect.height;
            this.createTooltip(left,top);
        },1500)
    }
    
    private createTooltip(x:number, y:number):void
    {
        this.popup=document.createElement('div');
        this.popup.innerText=this.tooltip;
        this.popup.classList.add("tooltip");
        this.popup.style.top=`${y}px`;
        this.popup.style.left=`${x}px`;
        document.body.appendChild(this.popup);
    }

    @HostListener('mouseout')
    onMouseout():void
    {
        if(this.timer)
            clearTimeout(this.timer);
        if(this.popup)
            this.popup.remove();
    }
}