import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Widget } from "../widget.interface";
import { BackendCallService } from "../../common/services/backend.service";

@Injectable()
export class WidgetService {
    private _widgetCount: number = 0;

    constructor(private _backendCallService: BackendCallService) {}

    getWidgetsFromDatabase(): Observable<Widget[]> {
        // simulated data retrieval
        return of([
            {
                id: 1,
                iconURL: "/icons/widget-alpha.png",
                tooltip: "Widget Alpha",
                name: "Alpha",
                description: "Alpha is the funnest widget",
                releaseDate: new Date("2021/06/10")
            },
            {
                id: 2,
                iconURL: "/icons/widget-gamma.png",
                tooltip: "Widget Gamma",
                name: "Gamma",
                description: "Gamma is the weirdest widget",
                releaseDate: new Date("2021/06/08")
            },
            {
                id: 3,
                iconURL: "/icons/widget-omega.png",
                tooltip: "Widget Omega",
                name: "Omega",
                description: "Omega is the angriest widget",
                releaseDate: new Date("2021/06/13")
            }
        ]);
    }

    updateWidgetCount(count: number): void {
        this._widgetCount = count;
    }

    removeWidget(widget: Widget): Observable<void> {
        return this._backendCallService.makeRequest("removeWidget", {widgetID: widget.id});
    }
}
