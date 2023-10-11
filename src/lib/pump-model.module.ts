import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {WisdomModule} from "common";

import {PumpModelComponent} from "./pump-model.component";

/** Minimalistic example module. */
@NgModule({
  declarations: [
    PumpModelComponent
  ],
  imports: [
    WisdomModule,
    CommonModule,
    TranslateModule
  ],
  exports: [
    PumpModelComponent
  ]
})
export class PumpModelModule { }
