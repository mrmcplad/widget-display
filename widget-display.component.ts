import { Component, OnInit } from "@angular/core";
import { WidgetService } from "./services/widget.service";
import { Widget } from "./widget.interface";

@Component({
    selector: "widget-display",
    templateUrl: "./widget-display.component.html",
    styleUrls: ["./widget-display.component.scss"]
})
export class WidgetDisplayComponent implements OnInit {
    constructor(private _widgetService: WidgetService) {}

    public widgets: Widget[] = [];

    ngOnInit(): void {
        this._widgetService
            .getWidgetsFromDatabase()
            .subscribe((widgets: Widget[]) => {
                this.widgets = widgets.sort(this._sortWidgets);
                this._widgetService.updateWidgetCount(widgets.length);
            });
    }

    private _sortWidgets(a: Widget, b: Widget): number {
        const aTime: number = a.releaseDate.getTime();
        const bTime: number = b.releaseDate.getTime();
        return bTime - aTime;
    }
}
