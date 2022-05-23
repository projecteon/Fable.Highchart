import React, { useState } from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highmaps";
import worldMap from "@highcharts/map-collection/custom/world.topo.json";
import HighchartsReact from "highcharts-react-official";

// https://codesandbox.io/s/highcharts-react-demo-forked-f3ti95
export const HighchartPage = () => {
  // const formatter = function (this: any) {
  //   return this.point.properties && this.point.properties["hc-a2"];
  // };
  // const exportData = worldMap.objects.default.geometries.map((g, value) => ({
  //   key: g.properties["hc-key"],
  //   name: g.properties.name
  // }));

  // exportData.forEach(value => {
  //   console.log(value.name + ";" + value.key);
  // });

  // const data2 = worldMap.objects.default.geometries.map((g, value) => ({
  //   key: g.properties["hc-key"],
  //   value
  // }));

  const data = [
    {value: 6702, key: 'de'},
    {value: 4810, key: 'nl'},
    {value: 4747, key: 'gb'},
    {value: 3644, key: 'us'},
    {value: 3439, key: 'fr'},
    {value: 2762, key: 'cz'},
    {value: 2389, key: 'it'},
    {value: 1593, key: 'ru'},
    {value: 1466, key: 'tr'},
    {value: 1445, key: 'es'},
    {value: 809, key: 'pl'},
    {value: 726, key: 'lk'},
    {value: 488, key: 'ca'},
    {value: 470, key: 'sk'},
    {value: 464, key: 'be'},
    {value: 462, key: 'ar'},
    {value: 406, key: 'pt'},
    {value: 377, key: 'hr'},
    {value: 349, key: 'cn'},
    {value: 347, key: 'ch'},
    {value: 336, key: 'br'},
    {value: 327, key: 'au'},
    {value: 304, key: 'se'},
    {value: 291, key: 'il'},
    {value: 218, key: 'cl'},
    {value: 190, key: 'si'},
    {value: 163, key: 'pe'},
    {value: 98, key: 'za'},
    {value: 83, key: 'lv'},
    {value: 71, key: 'mx'},
    {value: 60, key: 'bg'},
    {value: 34, key: 'my'},
    {value: 30, key: 'vn'},
    {value: 27, key: 'ie'},
    {value: 27, key: 'nz'},
    {value: 26, key: 'tz'},
    {value: 11, key: 'mu'},
    {value: 5, key: 'et'},
  ];

  const [options] = useState({
    title:{
      text:''
    },
    chart: {
      map: worldMap
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },

    mapView: {
      projection: {
        name: "WebMercator"
      }
    },

    colorAxis: {
      min: 0,
      stops: [
        // [0, "#FFFEFE"], // white
        // [0.1, "#32dac1"],
        // [1, "#00D1B2"] // bulma priamry
      
        [0, "#FaFEFE"], // white
        [0.05, "#66e3d0"],
        [0.25  , "#62b9f3"],
        [1, "#9467bd"]
      ]
    },

    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "bottom"
    },

    series: [
      {
        data,
        keys: ['value', 'hc-key'],
        joinBy: ["hc-key", "key"],
        name: "Tea bags",
        states: {
          hover: {
            color: "#f15c80"
          }
        },
        dataLabels: {
          enabled: false,
          // formatter,
          style: {
            fontWeight: 100,
            fontSize: "10px",
            textOutline: "none"
          }
        }
      },
      // {
      //   type: "mapline",
      //   name: "Lines",
      //   accessibility: {
      //     enabled: false
      //   },
      //   data: Highcharts.geojson(worldMap, "mapline"),
      //   /*
      // data: [{
      //   geometry: mapData.objects.default['hc-recommended-mapview'].insets[0].geoBounds
      // }],
      // // */
      //   nullColor: "#333333",
      //   showInLegend: false,
      //   enableMouseTracking: false
      // }
    ]
  });

  console.dir(options);
  console.dir(Highcharts);
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"mapChart"}
      options={options}
    />
  );
};


