import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {JSONObject} from "web-ifc-three/IFC/BaseDefinitions";

/** Minimalistic example Component. */
@Component({
  templateUrl: "pump-model.component.html"
})
export class PumpModelComponent {

  logModel(model: JSONObject) {
    console.log(model);
  }

}
