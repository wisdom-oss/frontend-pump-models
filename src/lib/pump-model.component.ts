import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {BimComponent} from "common";

/** Minimalistic example Component. */
@Component({
  templateUrl: "pump-model.component.html"
})
export class PumpModelComponent {

  @ViewChild("bim") bim!: BimComponent;
  @ViewChild("bimElt") bimElt!: ElementRef<HTMLInputElement>;

  toggleElt(evt: Event) {
    console.log(this.bimElt.nativeElement.checked);
    if (this.bimElt.nativeElement.checked) this.bim.show("ELT");
    else this.bim.hide("ELT");
  }
}
