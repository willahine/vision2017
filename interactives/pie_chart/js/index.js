var chart;
var selected;

var types = [{

    type: "Global Fund ",
    percent: 16,
    dollar: "1,350",
    color:"#D3746C",
  }, {
    type: "MCH ",
    percent: 9,
    dollar: "750",
    color:"#aae0f6",
  }, {
    type: "Malaria",
    percent: 8,
    dollar: "674",
    color:"#48a08f",
    },
         {
    type: "FPRH",
    percent: 6,
    dollar: "524",
    color:"#f2dc7d",
    },
               {
    type: "TB ",
    percent: 3,
    dollar: "236",
    color:"#999999",
    },
             {
    type: "Nutrition",
    percent: 1,
    dollar: "125",
    color: "#3A201E",
    },
                  {
    type: "NTDs",
    percent: 1,
    dollar: "100",
    color: "#874B46",
    },
             {
    type: "Security",
    percent: .5,
    dollar: "73",
    color:"#3A3A3A" ,
    },
           {
    type: "Vulnerable Children",
    percent: .5,
    dollar: "22",
    },
          {
    type: "HIV / AIDS",
    percent: 55,
    dollar: "4,650",
      color:"#47b6dd",


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
  "balloonText": "[[title]]: $[[dollar]] (in millions)",
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
