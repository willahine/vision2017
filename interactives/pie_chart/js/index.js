var chart;
var legend;
var selected;

var types = [{
  type: "Global Health Budget",
  percent: 1,
  dollar: "8.5 Billion",
  color: "#D3746C",
  subs: [{
    type: "Global Fund (in millions)",
    percent: 16,
    dollar: "1,350",
  }, {
    type: "MCH (in millions)",
    percent: 9,
    dollar: "750",
  }, {
    type: "Malaria (in millions)",
    percent: 8,
    dollar: "674",
    },
         {
    type: "FPRH (in millions)",
    percent: 6,
    dollar: "524",
    },
               {
    type: "TB (in millions)",
    percent: 3,
    dollar: "236",
    },
             {
    type: "Nutrition (in millions)",
    percent: 1,
    dollar: "125",
    },
                  {
    type: "NTDs (in millions)",
    percent: 1,
    dollar: "100",
    },
             {
    type: "Global Health Security (in millions)",
    percent: 1,
    dollar: "73",
    },
           {
    type: "Vulnerable Children (in millions)",
    percent: 1,
    dollar: "22",
    },
          {
    type: "HIV / AIDS (in millions)",
    percent: 55,
    dollar: "4,650"

  }]
}, {
  type: "Federal Budget",
  percent: 99,
  dollar: "4 Trillion",
  color: "#47b6dd",


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
  "titleField": "type",
  "valueField": "percent",
  "outlineColor": "#FFFFFF",
  "outlineAlpha": 0.8,
  "outlineThickness": 2,
  "colorField": "color",
  "pulledField": "pulled",
  "titles": [{
    "text": "Click to see how each budget is spent."
  }],
  "listeners": [{
    "event": "clickSlice",
    "method": function(event) {
      var chart = event.chart;
      if (event.dataItem.dataContext.id != undefined) {
        selected = event.dataItem.dataContext.id;
      } else {
        selected = undefined;
      }
      chart.dataProvider = generateChartData();
      chart.validateData();
    }
  }],
  "export": {
    "enabled": true
  }
});
