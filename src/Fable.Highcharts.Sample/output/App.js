import { Union, Record } from "./.fable/fable-library.3.2.11/Types.js";
import { union_type, record_type, int32_type } from "./.fable/fable-library.3.2.11/Reflection.js";
import { Cmd_none } from "./.fable/Fable.Elmish.3.1.0/cmd.fs.js";
import { Legend, ColorAxis, MapView, Projection, MapNavigation, ButtonOptions, Chart, Title, Series, DataLabels, Style, States, Hover, Data } from "./Fable.HighCharts/Types.js";
import * as react from "react";
import { int32ToString } from "./.fable/fable-library.3.2.11/Util.js";
import { Options, Prop, highchart } from "./Fable.Highcharts.React/HighchartMap.js";
import highmaps from "highcharts/highmaps";
import world$002Etopo from "@highcharts/map-collection/custom/world.topo.json";
import { ofArray } from "./.fable/fable-library.3.2.11/List.js";
import { ProgramModule_mkProgram, ProgramModule_withConsoleTrace, ProgramModule_run } from "./.fable/Fable.Elmish.3.1.0/program.fs.js";
import { Program_withReactBatched } from "./.fable/Fable.Elmish.React.3.0.1/react.fs.js";

export class Model extends Record {
    constructor(counter) {
        super();
        this.counter = (counter | 0);
    }
}

export function Model$reflection() {
    return record_type("Fable.Highcharts.Sample.App.Model", [], Model, () => [["counter", int32_type]]);
}

export class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Increment", "Decrement"];
    }
}

export function Msg$reflection() {
    return union_type("Fable.Highcharts.Sample.App.Msg", [], Msg, () => [[], []]);
}

export function init(arg) {
    return [new Model(1), Cmd_none()];
}

export const data = [new Data(6702, "de"), new Data(4810, "nl"), new Data(4747, "gb"), new Data(3644, "us"), new Data(3439, "fr"), new Data(2762, "cz"), new Data(2389, "it"), new Data(1593, "ru"), new Data(1466, "tr"), new Data(1445, "es"), new Data(809, "pl"), new Data(726, "lk"), new Data(488, "ca"), new Data(470, "sk"), new Data(464, "be"), new Data(462, "ar"), new Data(406, "pt"), new Data(377, "hr"), new Data(349, "cn"), new Data(347, "ch"), new Data(336, "br"), new Data(327, "au"), new Data(304, "se"), new Data(291, "il"), new Data(218, "cl"), new Data(190, "si"), new Data(163, "pe"), new Data(98, "za"), new Data(83, "lv"), new Data(71, "mx"), new Data(60, "bg"), new Data(34, "my"), new Data(30, "vn"), new Data(27, "ie"), new Data(27, "nz"), new Data(26, "tz"), new Data(11, "mu"), new Data(5, "et")];

export const series = new Series("Topology", data, ["value", "hc-key"], ["hc-key", "key"], "Tea bags", new States(new Hover("#f15c80")), new DataLabels(false, new Style(100, "10px", "none")));

export function update(msg, model) {
    if (msg.tag === 1) {
        return [new Model(model.counter - 1), Cmd_none()];
    }
    else {
        return [new Model(model.counter + 1), Cmd_none()];
    }
}

export function view(model, dispatch) {
    return react.createElement("div", {
        style: {
            height: 400,
        },
    }, react.createElement("div", {}, react.createElement("button", {
        onClick: (_arg1) => {
            dispatch(new Msg(0));
        },
    }, "+"), react.createElement("div", {}, int32ToString(model.counter)), react.createElement("button", {
        onClick: (_arg2) => {
            dispatch(new Msg(1));
        },
    }, "-"), react.createElement("br", {}), react.createElement("br", {})), react.createElement("div", {}, highchart(ofArray([new Prop(0, highmaps), new Prop(1, "mapChart"), new Prop(2, new Options(new Title(""), new Chart(world$002Etopo), "Topology", new MapNavigation(true, new ButtonOptions("spacingBox")), new MapView(new Projection("webMercator")), new ColorAxis(0, [[0, "#FaFEFE"], [0.05, "#66e3d0"], [0.25, "#62b9f3"], [1, "#9467bd"]]), new Legend("vertical", "left", "bottom"), [series]))]))));
}

ProgramModule_run(ProgramModule_withConsoleTrace(Program_withReactBatched("elmish-app", ProgramModule_mkProgram(init, (msg, model) => update(msg, model), (model_1, dispatch) => view(model_1, dispatch)))));

//# sourceMappingURL=App.js.map
