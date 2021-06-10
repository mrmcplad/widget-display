import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Widget } from "@sf/submitter/components/widget-display/widget.interface";

@Injectable()
export class WidgetService {
    private _widgetCount: number = 0;

    getWidgetsFromDatabase(): Observable<Widget[]> {
        // simulated data retrieval
        return of([
            {
                iconURL: "/sf/ui/images/icons/widget-alpha.png",
                tooltip: "Widget Alpha",
                name: "Alpha",
                description: "Alpha is the funnest widget",
                releaseDate: new Date("2021/06/10")
            },
            {
                iconURL: "/sf/ui/images/icons/widget-gamma.png",
                tooltip: "Widget Gamma",
                name: "Gamma",
                description: "Gamma is the weirdest widget",
                releaseDate: new Date("2021/06/08")
            },
            {
                iconURL: "/sf/ui/images/icons/widget-omega.png",
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
}
