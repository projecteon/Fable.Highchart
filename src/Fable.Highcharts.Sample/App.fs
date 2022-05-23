module Fable.Highcharts.Sample.App

open Elmish
open Elmish.React
open Fable.Core
open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props
open Fable.HighCharts.Types
open Fable.Highcharts.React.HighchartMap

[<ImportDefault("highcharts/highmaps")>]
let highcharts: IHighcharts = jsNative

[<ImportDefault("@highcharts/map-collection/custom/world.topo.json")>]
let worldMap: Mapdata = jsNative

type Model = {
  counter: int
}

type Msg =
| Increment
| Decrement

let init arg =
  let defaultModel = {
    counter = 1
  }
  defaultModel, Cmd.none


//let [<Global>] console: JS.Console = jsNative
//let test = highcharts.geojson(worldMap, "");
//console.dir(test);

//let series : Series = {
//              Type = "mapline"
//              name = "Lines"
//              accessibility = { enabled = false }
//              data = highcharts.geojson(worldMap, "mapline")
//              nullColor = "#333333"
//              showInLegend = false
//              enableMouseTracking = false
//            }



let data: Data array = [|
  {value = 6702; key = "de"}
  {value = 4810; key = "nl"}
  {value = 4747; key = "gb"}
  {value = 3644; key = "us"}
  {value = 3439; key = "fr"}
  {value = 2762; key = "cz"}
  {value = 2389; key = "it"}
  {value = 1593; key = "ru"}
  {value = 1466; key = "tr"}
  {value = 1445; key = "es"}
  {value = 809; key = "pl"}
  {value = 726; key = "lk"}
  {value = 488; key = "ca"}
  {value = 470; key = "sk"}
  {value = 464; key = "be"}
  {value = 462; key = "ar"}
  {value = 406; key = "pt"}
  {value = 377; key = "hr"}
  {value = 349; key = "cn"}
  {value = 347; key = "ch"}
  {value = 336; key = "br"}
  {value = 327; key = "au"}
  {value = 304; key = "se"}
  {value = 291; key = "il"}
  {value = 218; key = "cl"}
  {value = 190; key = "si"}
  {value = 163; key = "pe"}
  {value = 98; key = "za"}
  {value = 83; key = "lv"}
  {value = 71; key = "mx"}
  {value = 60; key = "bg"}
  {value = 34; key = "my"}
  {value = 30; key = "vn"}
  {value = 27; key = "ie"}
  {value = 27; key = "nz"}
  {value = 26; key = "tz"}
  {value = 11; key = "mu"}
  {value = 5; key = "et"}
|]


let series = {
  //``type`` = "Topology"
  data = data
  keys = ("value", "hc-key")
  joinBy = ("hc-key", "key")
  name = "Tea bags"
  states = {
    hover = {
      color = "#f15c80"
    }
  }
  dataLabels = {
    enabled = false
    style = {
      fontWeight = 100
      fontSize = "10px"
      textOutline = "none"
    }
  }
}



  
// UPDATE
let update (msg:Msg) (model:Model) =
  match msg with
  | Increment -> { model with counter = model.counter + 1 }, Cmd.none
  | Decrement -> { model with counter = model.counter - 1 }, Cmd.none

// VIEW (rendered with React)
// https://stackoverflow.com/questions/52669221/in-fable-elmish-how-to-trigger-a-command-after-the-view-has-been-rendered
let view (model:Model) dispatch =
  div [ Style [ Height 400 ] ] [
    div [] [
      button [ OnClick (fun _ -> dispatch Increment) ] [ str "+" ]
      div [] [ str (string model.counter) ]
      button [ OnClick (fun _ -> dispatch Decrement) ] [ str "-" ]
      br []
      br []
    ]
    div [] [
      highchart [
        Highcharts highcharts
        ConstructorType ConstructorType.MapChart
        Options {
          title = { text = "" }
          chart = { map = worldMap }
          //``type`` = "Topology"
          mapNavigation = {enabled = true; buttonOptions = { alignTo = AlignToType.SpacingBox }}
          mapView = { projection = { name = ProjectionType.WebMercator  }}
          colorAxis = { min = 0; stops = ResizeArray [ (0.0, "#FaFEFE"); (0.05, "#66e3d0"); (0.25, "#62b9f3"); (1.0, "#9467bd") ]}
          legend = {
            layout = Layout.Vertical
            align = HorizontalAlignment.Left
            verticalAlign = VerticalAlignment.Bottom
          }
          series = [| series |]

          //Title { text = "" }
          //Chart { map = worldMap }
          //MapNavigation {enabled = true; buttonOptions = { alignTo = AlignToType.SpacingBox }}
          //MapView { projection = { name = ProjectionType.WebMercator  }}
          //ColorAxis { min = 0; stops = ResizeArray [ (0.0, "#FaFEFE"); (0.05, "#66e3d0"); (0.25, "#62b9f3"); (1.0, "#9467bd") ]}
        }
      ]
    ]
  ]

// App
Program.mkProgram init update view
|> Program.withReactBatched "elmish-app"
|> Program.withConsoleTrace
|> Program.run
