# belly-button-challenge
# Belly_Button_Biodiversity

## Target
Build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.<br/>

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.<br/>

[**Click Here**]() to find out how the web page looks like. <br/>

 <img src="https://github.com/ivarvani/belly-button-challenge/blob/main/output_data/dashboard.png"><br/>

## Step by Step Approch

### Step 1 Use the D3 library to read in `samples.json` from the URL
* URL: `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.<br/>

  ``` python 
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function (data) {
      console.log(data);
  ```

### Step 2 Create a horizontal bar chart with a dropdown menu
  * Displayed the top 10 OTUs found in that individual.<br/>

### Step 3 Create a bubble chart that displays each sample

  * Used `otu_ids` for the x values.<br/>

  * Used `sample_values` for the y values.<br/>

  * Used `sample_values` for the marker size.<br/>

  * Used `otu_ids` for the marker colors.<br/>

  * Used `otu_labels` for the text values.<br/>

### Step 4 Display the individual's demographic information
Displayed each key-value pair from the metadata JSON object  on the page.<br/>

## Output Files
  - charts.png<br/>
  - Dashboard.png<br/>
