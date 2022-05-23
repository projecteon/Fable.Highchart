module rec Fable.Highcharts.React.HighchartMap

open Fable.Core
open Fable.Core.JsInterop
open Fable.React

open Fable.HighCharts.Types

[<StringEnum>]
[<RequireQualifiedAccess>]
type ConstructorType =
  | MapChart

type Options = {
  title: Title
  chart: Chart
  ``type``: string
  mapNavigation: MapNavigation
  mapView: MapView
  colorAxis: ColorAxis
  legend: Legend
  series: Series array
}

//type Options = 
//    | Title of Title
//    | Chart of Chart
//    | MapNavigation of MapNavigation
//    | MapView of MapView
//    | ColorAxis of ColorAxis
//    | Legend of Legend
//    | Series of ResizeArray<obj>


let [<Global>] console: JS.Console = jsNative

type Prop =
    | Highcharts of IHighcharts
    | ConstructorType of ConstructorType
    | Options of Options
    //| Options of Options list

let highchart (props : Prop list) : ReactElement =
    let propsObject = keyValueList CaseRules.LowerFirst props // converts Props to JS object
    console.dir(propsObject);
    ofImport "default" "highcharts-react-official" propsObject [] // import the default function/object from react-d3-speedometer
