import { Union, Record } from "../.fable/fable-library.3.2.11/Types.js";
import { Series$reflection, Legend$reflection, ColorAxis$reflection, MapView$reflection, MapNavigation$reflection, Chart$reflection, Title$reflection } from "../Fable.HighCharts/Types.js";
import { union_type, class_type, record_type, array_type, string_type } from "../.fable/fable-library.3.2.11/Reflection.js";
import { keyValueList } from "../.fable/fable-library.3.2.11/MapUtil.js";
import { some } from "../.fable/fable-library.3.2.11/Option.js";
import * as react from "react";
import highcharts_react_official from "highcharts-react-official";

export class Options extends Record {
    constructor(title, chart, type, mapNavigation, mapView, colorAxis, legend, series) {
        super();
        this.title = title;
        this.chart = chart;
        this.type = type;
        this.mapNavigation = mapNavigation;
        this.mapView = mapView;
        this.colorAxis = colorAxis;
        this.legend = legend;
        this.series = series;
    }
}

export function Options$reflection() {
    return record_type("Fable.Highcharts.React.HighchartMap.Options", [], Options, () => [["title", Title$reflection()], ["chart", Chart$reflection()], ["type", string_type], ["mapNavigation", MapNavigation$reflection()], ["mapView", MapView$reflection()], ["colorAxis", ColorAxis$reflection()], ["legend", Legend$reflection()], ["series", array_type(Series$reflection())]]);
}

export class Prop extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Highcharts", "ConstructorType", "Options"];
    }
}

export function Prop$reflection() {
    return union_type("Fable.Highcharts.React.HighchartMap.Prop", [], Prop, () => [[["Item", class_type("Fable.HighCharts.Types.IHighcharts")]], [["Item", string_type]], [["Item", Options$reflection()]]]);
}

export function highchart(props) {
    const propsObject = keyValueList(props, 1);
    console.dir(some(propsObject));
    return react.createElement(highcharts_react_official, propsObject);
}

//# sourceMappingURL=HighchartMap.js.map
