const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json(url).then(function(data) {
console.log(data);})
  function bar_chart(sample){
  d3.json(url).then(function(data) {
  let sample_list = data.samples.filter(sample_element => sample_element.id==sample)
  let sample_data = sample_list[0]
  // Create arrays for sample_values, OTU ids, and OTU label
  let otu_ids=sample_data.otu_ids;
  let otu_labels=sample_data.otu_labels;
  let sample_values=sample_data.sample_values;
  
// Get the top 10 OTU
  let top_ten_values = sample_values.slice(0,10);
  console.log(top_ten_values)
  let top_ten_ids = otu_ids.slice(0,10);
  console.log(top_ten_ids)
  let top_ten_labels = otu_labels.slice(0,10);;
  console.log(top_ten_labels)
// source for the format of the chart https://plotly.com/javascript/bar-charts/
let trace1 = {
  x : top_ten_values.reverse(),
  y : top_ten_ids.map(x => "OTU" + x).reverse(),
  text : top_ten_labels.reverse(),
  type : 'bar',
  orientation : 'h',
  marker: {
    color: 'rgb(27, 161, 187)',
    opacity: 0.6,
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};
// Create layout
let layout1 = {
  title : '<b>Top 10 OTU</b>',
};


// Draw the bar chart
let  data1 = [trace1];
Plotly.newPlot('bar', data1, layout1);

    })}
    




// Create a  function for bubble chart 

function bubble_chart(sample){
  d3.json(url).then(function(data) {
  let sample_list = data.samples.filter(sample_element => sample_element.id==sample)
  let sample_data = sample_list[0]
//find sample_values, OTU ids, and OTU label
  let otu_ids=sample_data.otu_ids;
  let otu_labels=sample_data.otu_labels;
  let sample_values=sample_data.sample_values;
let trace2 = {
    x : otu_ids,
    y : sample_values,
    text : otu_labels,
    mode : 'markers',
    marker : {
        color : otu_ids,
        size : sample_values
    }
};

// Create layout
let layout2 = {
    title: '<b>Bubble Chart</b>',
    automargin: true,
    autosize: true,
    showlegend: false,
        margin: {
            l: 150,
            r: 50,
            b: 50,
            t: 50,
            pad: 4      
}};

  // Draw the bubble chart
  let data2 = [trace2];
  Plotly.newPlot('bubble',data2,layout2);})}

function demo_info(sample){
  d3.json(url).then(function(data) {
  let mdata=data.metadata.filter(function(sample_element){return sample_element.id==sample});
  //let mdata=data.metadata.filter(sample_element => sample_element.id==sample)
  let meta_info=mdata[0];
  console.log(data)
  d3.select("#sample-metadata").html("");
  Object.entries(meta_info).forEach(function([key,value]){
  d3.select("#sample-metadata")
  .append("p").text(`${key}:${value}`);

        });})}

function initialize(){
d3.json(url).then(function(data) {
let names = data.names;
console.log(names);
for (let i=0;i<names.length;i++){
d3.select("#selDataset")
  .append("option")
  .text(names[i])}
let sample1=names[0];
demo_info(sample1);
bar_chart(sample1);
bubble_chart(sample1);

})}


function optionChanged(item){
  demo_info(item)
  bar_chart(item)
  bubble_chart(item)
  Gauge_chart(item)
}

initialize();