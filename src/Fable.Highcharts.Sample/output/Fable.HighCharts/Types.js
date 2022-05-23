import { Record, Union } from "../.fable/fable-library.3.2.11/Types.js";
import { array_type, tuple_type, float64_type, int32_type, bool_type, record_type, string_type, union_type, obj_type } from "../.fable/fable-library.3.2.11/Reflection.js";

export class Mapdata extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Matdata"];
    }
}

export function Mapdata$reflection() {
    return union_type("Fable.HighCharts.Types.Mapdata", [], Mapdata, () => [[["Item", obj_type]]]);
}

export class HexColor extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["HexColor"];
    }
}

export function HexColor$reflection() {
    return union_type("Fable.HighCharts.Types.HexColor", [], HexColor, () => [[["Item", string_type]]]);
}

export class ButtonOptions extends Record {
    constructor(alignTo) {
        super();
        this.alignTo = alignTo;
    }
}

export function ButtonOptions$reflection() {
    return record_type("Fable.HighCharts.Types.ButtonOptions", [], ButtonOptions, () => [["alignTo", string_type]]);
}

export class Projection extends Record {
    constructor(name) {
        super();
        this.name = name;
    }
}

export function Projection$reflection() {
    return record_type("Fable.HighCharts.Types.Projection", [], Projection, () => [["name", string_type]]);
}

export class Title extends Record {
    constructor(text) {
        super();
        this.text = text;
    }
}

export function Title$reflection() {
    return record_type("Fable.HighCharts.Types.Title", [], Title, () => [["text", string_type]]);
}

export class Chart extends Record {
    constructor(map) {
        super();
        this.map = map;
    }
}

export function Chart$reflection() {
    return record_type("Fable.HighCharts.Types.Chart", [], Chart, () => [["map", Mapdata$reflection()]]);
}

export class MapNavigation extends Record {
    constructor(enabled, buttonOptions) {
        super();
        this.enabled = enabled;
        this.buttonOptions = buttonOptions;
    }
}

export function MapNavigation$reflection() {
    return record_type("Fable.HighCharts.Types.MapNavigation", [], MapNavigation, () => [["enabled", bool_type], ["buttonOptions", ButtonOptions$reflection()]]);
}

export class MapView extends Record {
    constructor(projection) {
        super();
        this.projection = projection;
    }
}

export function MapView$reflection() {
    return record_type("Fable.HighCharts.Types.MapView", [], MapView, () => [["projection", Projection$reflection()]]);
}

export class ColorAxis extends Record {
    constructor(min, stops) {
        super();
        this.min = (min | 0);
        this.stops = stops;
    }
}

export function ColorAxis$reflection() {
    return record_type("Fable.HighCharts.Types.ColorAxis", [], ColorAxis, () => [["min", int32_type], ["stops", array_type(tuple_type(float64_type, string_type))]]);
}

export class Legend extends Record {
    constructor(layout, align, verticalAlign) {
        super();
        this.layout = layout;
        this.align = align;
        this.verticalAlign = verticalAlign;
    }
}

export function Legend$reflection() {
    return record_type("Fable.HighCharts.Types.Legend", [], Legend, () => [["layout", string_type], ["align", string_type], ["verticalAlign", string_type]]);
}

export class Data extends Record {
    constructor(value, key) {
        super();
        this.value = (value | 0);
        this.key = key;
    }
}

export function Data$reflection() {
    return record_type("Fable.HighCharts.Types.Data", [], Data, () => [["value", int32_type], ["key", string_type]]);
}

export class Hover extends Record {
    constructor(color) {
        super();
        this.color = color;
    }
}

export function Hover$reflection() {
    return record_type("Fable.HighCharts.Types.Hover", [], Hover, () => [["color", string_type]]);
}

export class States extends Record {
    constructor(hover) {
        super();
        this.hover = hover;
    }
}

export function States$reflection() {
    return record_type("Fable.HighCharts.Types.States", [], States, () => [["hover", Hover$reflection()]]);
}

export class Style extends Record {
    constructor(fontWeight, fontSize, textOutline) {
        super();
        this.fontWeight = (fontWeight | 0);
        this.fontSize = fontSize;
        this.textOutline = textOutline;
    }
}

export function Style$reflection() {
    return record_type("Fable.HighCharts.Types.Style", [], Style, () => [["fontWeight", int32_type], ["fontSize", string_type], ["textOutline", string_type]]);
}

export class DataLabels extends Record {
    constructor(enabled, style) {
        super();
        this.enabled = enabled;
        this.style = style;
    }
}

export function DataLabels$reflection() {
    return record_type("Fable.HighCharts.Types.DataLabels", [], DataLabels, () => [["enabled", bool_type], ["style", Style$reflection()]]);
}

export class Series extends Record {
    constructor(type, data, keys, joinBy, name, states, dataLabels) {
        super();
        this.type = type;
        this.data = data;
        this.keys = keys;
        this.joinBy = joinBy;
        this.name = name;
        this.states = states;
        this.dataLabels = dataLabels;
    }
}

export function Series$reflection() {
    return record_type("Fable.HighCharts.Types.Series", [], Series, () => [["type", string_type], ["data", array_type(Data$reflection())], ["keys", tuple_type(string_type, string_type)], ["joinBy", tuple_type(string_type, string_type)], ["name", string_type], ["states", States$reflection()], ["dataLabels", DataLabels$reflection()]]);
}

//# sourceMappingURL=Types.js.map
