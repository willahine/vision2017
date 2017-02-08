var chart;
var selected;

var types = [{

    type: "Federal Budget",
    percent: 99,
    dollar: "3.9 Trillion",
    color:"#47b6dd",
  }, {
    type: "Global Health Budget ",
    percent: 1,
    dollar: "8.5 Billion",
    color:"#d3746c",

}];

function generateChartData() {
  var chartData = [];
  for (var i = 0; i < types.length; i++) {
    if (i == selected) {
      for (var x = 0; x < types[i].subs.length; x++) {
        chartData.push({
          type: types[i].subs[x].type,
          dollar:types[i].subs[x].dollar,
          percent: types[i].subs[x].percent,
          color: types[i].color,
          pulled: true
        });
      }
    } else {
      chartData.push({
        type: types[i].type,
        percent: types[i].percent,
        color: types[i].color,
         dollar: types[i].dollar,
        id: i
      });
    }
  }
  return chartData;
}

AmCharts.makeChart("chartdiv", {
  "type": "pie",
"theme": "light",

  "dataProvider": generateChartData(),
  "labelText": "[[title]]: [[value]] %",
  "balloonText": "[[title]]: $[[dollar]]",
  "fontFamily": "museo sans",
  "titleField": "type" ,
  "valueField": "percent",
  "outlineColor": "#FFFFFF",
  "outlineAlpha": 0.8,
  "outlineThickness": 2,
  "colorField": "color",
  "pulledField": "pulled",
  "titles": [{
    "text": ""
  }],

  "export": {
    "enabled": true
  }
});
