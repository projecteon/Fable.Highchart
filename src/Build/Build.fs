open Fake.Core
open Fake.IO

open Helpers

initializeContext()

let clientPath = Path.getFullName "src/Fable.Highcharts.Sample"
let deployPath = Path.getFullName "deploy"

Target.create "Clean" (fun _ ->
    Shell.cleanDir deployPath
    run dotnet "fable clean --yes" clientPath // Delete *.fs.js files created by Fable
)

Target.create "InstallClient" (fun _ -> run npm "install" ".")

Target.create "Bundle" (fun _ ->
    run dotnet "fable -o output -s --run webpack -p" clientPath
)

Target.create "Build" (fun _ ->
  run dotnet "fable -o output -s webpack -p" clientPath
)

Target.create "Run" (fun _ ->
  run dotnet "fable watch -o output -s --run webpack-dev-server" clientPath
)

Target.create "Format" (fun _ ->
  run dotnet "fantomas . -r" "src"
)

open Fake.Core.TargetOperators

let dependencies = [
    "Clean"
        ==> "InstallClient"
        ==> "Run"

    "Clean"
        ==> "InstallClient"
        ==> "Build"
]

[<EntryPoint>]
let main args =
    runOrDefault args