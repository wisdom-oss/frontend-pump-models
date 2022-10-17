/*
 * Public API Surface of pump-models
 */

import {WisdomInterface} from "common";

import {PumpModelComponent} from "./lib/pump-model.component";
import de_DE from "./lib/i18n/de_DE";
import en_US from "./lib/i18n/en_US";

/** The wisdom interface for the core module to inject this module. */
export const wisdomInterface: WisdomInterface = {
  route: {
    path: "pump-models",
    component: PumpModelComponent
  },
  scopes: ["example"],
  translations: {
    de_DE,
    en_US
  }
}

export * from "./lib/pump-model.service";
export * from "./lib/pump-model.component";
export * from "./lib/pump-model.module";
