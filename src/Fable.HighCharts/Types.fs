module Fable.HighCharts.Types

open Fable.Core
    
type Mapdata = Matdata of obj
type IHighcharts =
  abstract geojson: mapdata: Mapdata * name: string -> obj array

[<StringEnum>]
[<RequireQualifiedAccess>]
type Layout =
  | Vertical

[<StringEnum>]
[<RequireQualifiedAccess>]
type HorizontalAlignment =
  | Left

[<StringEnum>]
[<RequireQualifiedAccess>]
type VerticalAlignment =
  | Bottom

[<StringEnum>]
[<RequireQualifiedAccess>]
type AlignToType =
  | SpacingBox

[<StringEnum>]
[<RequireQualifiedAccess>]
type ProjectionType =
  | WebMercator

type HexColor = HexColor of string
  
type ButtonOptions = {
  alignTo: AlignToType
}

type Projection = {
  name: ProjectionType
}

type Title = {
  text: string
}
    
type Chart = {
  map: Mapdata
}
    
type MapNavigation = {
  enabled: bool
  buttonOptions: ButtonOptions
}

type MapView = {
  projection: Projection
}

type ColorAxis = {
  min: int
  stops: ResizeArray<(float * string)>  
}

type Legend = {
  layout: Layout
  align: HorizontalAlignment
  verticalAlign: VerticalAlignment
}




//type Accessibility = { enabled: bool }

//type Series = {
//  [<CompiledName("type")>] Type: string
//  name: string
//  accessibility: Accessibility
//  data: obj array
//  nullColor: string
//  showInLegend: bool
//  enableMouseTracking: bool
//}


type Data = {value: int; key: string}
type Hover = { color: string }
type States = { hover: Hover }
type Style = {
  fontWeight: int
  fontSize: string
  textOutline: string
}
type DataLabels = {
  enabled: bool
  style: Style
}

type Series = {
  ``type``: string
  data: Data array
  keys: (string*string)
  joinBy: (string*string)
  name: string
  states: States
  dataLabels: DataLabels
}