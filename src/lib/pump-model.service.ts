import {Injectable} from "@angular/core";
import {HttpClient, HttpContext, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {USE_API_URL} from "common";

// FIXME: set correct url here
const BIM_API_URL = "bim/";

/** Unused but exported service as example. */
@Injectable({
  providedIn: "root"
})
export class PumpModelService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  fetchModelInstance(
    modelId: string,
    instanceId: string
  ): Observable<object[]> {
    let url = this.router.parseUrl(BIM_API_URL);
    url.queryParams["modelID"] = modelId;
    url.queryParams["instanceID"] = instanceId;
    return this.http.get(url.toString(), {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      responseType: "json",
      context: new HttpContext()
        .set(USE_API_URL, true)
    }) as Observable<object[]>;
  }
}
