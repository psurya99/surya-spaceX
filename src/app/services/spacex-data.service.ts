import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {
  serviceUrl = "https://api.spacexdata.com/v3/launches?";

  constructor(private Http: HttpClient) {}

  getAllLaunches(): Observable<any> {
    return this.Http.get(this.serviceUrl);
  }

  getYear(params: string): Observable<any> {
    return this.Http.get(this.serviceUrl + "launch_year=" + params);
  }
  // https://api.spacexdata.com/v3/launches?launch_success=`$launch_flag`
  getLaunches(params: string): Observable<any> {
    return this.Http.get(this.serviceUrl + "launch_success=" + params);
  }

//Get all flights
  getAll(launchYear: string, launchSuccess: string, landSuccess: string): Observable<any> {
    return this.Http.get(
      this.serviceUrl + "launch_year=" + launchYear +"&launch_success=" +launchSuccess + "&land_success="+landSuccess
    );
  }

  getLaunches_Land(params: string): Observable<any> {
    return this.Http.get(this.serviceUrl + "land_success=" + params);
  }
  getLaunchLand(launchSuccess: string, landSuccess: string): Observable<any> {
    return this.Http.get(
      this.serviceUrl +
        "limit=100" +
        "&launch_success=" +
        launchSuccess +
        "&land_success=" +
        landSuccess
    );
  }
}
