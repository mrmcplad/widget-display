import { WidgetDisplayComponent } from "./widget-display.component";
import { Widget } from "./widget.interface";
import { Subject } from "rxjs";
import Mock = jest.Mock;

describe("WidgetDisplayComponent", () => {
    let component: WidgetDisplayComponent;

    let widgetServiceMock: {
        getWidgetsFromDatabase: Mock;
        updateWidgetCount: Mock;
    };
    let mockWidgetsResponse$: Subject<Widget[]> = new Subject<Widget[]>();

    beforeEach(() => {
        widgetServiceMock = {
            getWidgetsFromDatabase: jest
                .fn()
                .mockReturnValue(mockWidgetsResponse$.asObservable()),
            updateWidgetCount: jest.fn()
        };

        component = new WidgetDisplayComponent(widgetServiceMock as any);
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    describe("lifecycle hook: ngOnInit", () => {
        let mockWidgets: Widget[];
        beforeEach(() => {
            mockWidgets = [
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
            ];
        });

        it("should call getWidgetsFromDatabase", () => {
            component.ngOnInit();

            expect(widgetServiceMock.getWidgetsFromDatabase).toHaveBeenCalled();
        });

        it("should sort the widgets by releaseDate, newest to oldest", () => {
            component.ngOnInit();
            mockWidgetsResponse$.next(mockWidgets);

            expect(component.widgets[0].name).toEqual("Omega");
            expect(component.widgets[1].name).toEqual("Alpha");
            expect(component.widgets[2].name).toEqual("Gamma");
        });

        it("should call updateWidgetCount with the number of widgets", () => {
            component.ngOnInit();
            mockWidgetsResponse$.next(mockWidgets);

            expect(widgetServiceMock.updateWidgetCount).toHaveBeenCalledWith(
                mockWidgets.length
            );
        });
    });
});
