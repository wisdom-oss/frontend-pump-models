import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {JSONObject} from "web-ifc-three/IFC/BaseDefinitions";
import {IfcComponent} from "common";

/** Minimalistic example Component. */
@Component({
  templateUrl: "pump-model.component.html"
})
export class PumpModelComponent {

  @ViewChild("ifc")
  viewer!: IfcComponent;

  config: Record<string, IfcComponent.ModelEntry> = {
    TGA: {path: '/files/WW-Langeoog/20191105-4001110-WW-TGA.ifc', fitToFrame: true, fixed: true},
    ELT: {path: '/files/WW-Langeoog/20191028-4001110-WW-ELT.ifc'},
    ARCH: {path: '/files/WW-Langeoog/20191028-4001110-WW-Arch.ifc', visible: false},
    GEL: {path: '/files/WW-Langeoog/20191028-4001110-WW-Gel.ifc', visible: false}
  }

  showName = "";
  data: string = "";


  updateData(model: JSONObject) {
    console.log(model);
    this.showName = model["Name"].value ? model["Name"].value : "";
    this.data = JSON.stringify(model, null, 2);
  }

  get nonFixedModels() {
    return Object.entries(this.config).filter(([k, v]) => !v.fixed).map(([k, v]) => k);
  }

  toggleModel(event: Event, model: string) {
    let target = event.target as HTMLInputElement;
    if (target.checked) this.viewer.showModel(model);
    else this.viewer.hideModel(model);
  }

  protected readonly InputEvent = InputEvent;
}
