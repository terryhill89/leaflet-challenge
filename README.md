![1-Logo](https://user-images.githubusercontent.com/112741203/228730639-279bff03-a3d0-43b2-997a-90971d566556.png)

# Leaflet-Challenge By Terry Goins
## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Instructions
The instructions for this activity are broken into two parts:

 - Part 1: Create the Earthquake Visualization

 - Part 2: Gather and Plot More Data (Optional with no extra points earning)

## Part 1: Create the Earthquake Visualization

![2-BasicMap](https://user-images.githubusercontent.com/112741203/228730958-51188abe-cfad-4413-81b0-afa65c7670ae.png)

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps:

 - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset      to visualize. The following image is an example screenshot of what appears when you visit this link:
 
 ![3-Data](https://user-images.githubusercontent.com/112741203/228731668-5a27871c-359d-4a87-ba6c-ee3fadeebd40.png)

 - When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data    for the visualization. The following image is a sampling of earthquake data in JSON format:
  
![4-JSON](https://user-images.githubusercontent.com/112741203/228731886-1c9f88cb-22a1-42ae-8d61-1ce231925292.png)

2. Import and visualize the data by doing the following:

 - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

      - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear         larger, and earthquakes with greater depth should appear darker in color.

### Hint: The depth of the earth can be found as the third coordinate for each earthquake.

 - Include popups that provide additional information about the earthquake when its associated marker is clicked.

 - Create a legend that will provide context for your map data.

 - Your visualization should look something like the preceding map.

## Part 2: Gather and Plot More Data (Optional with no extra points earning)
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplatesLinks to an external site..

This part is completely optional; you can complete this part as a way to challenge yourself and boost your new skills.

The following image is an example screenshot of what you should produce:

![5-Advanced](https://user-images.githubusercontent.com/112741203/228732235-3119f400-46fb-4ccd-bdb9-05a940183a97.png)

Perform the following tasks:

 - Plot the tectonic plates dataset on the map in addition to the earthquakes.

 - Add other base maps to choose from.

 - Put each dataset into separate overlays that can be turned on and off independently.

 - Add layer controls to your map.
 
 ## End of leaflet Challenge By Terry Goins
 
## More Data Time keeps on ticking
 
![6-Time_Keeps_On_Ticking](https://user-images.githubusercontent.com/112741203/228736207-de2a8eab-1895-4e1f-9811-0b764da8a502.gif)

  - Use a Leaflet plugin (found at http://leafletjs.com/plugins.html) to visualize your earthquake as it takes place over periods of time.
  - Visualization of just how many earthquakes happen over the course of a day or a week.
  
  ## A set of geospatial data that you can use to show a new correlation or insight about our existing earthquake data to further visualize our data in a unique way using        plug- ins from the Leaflet Documentation: https://leafletjs.com/plugins.html
  - Heat Map
  
  ![Heat](https://user-images.githubusercontent.com/112741203/228736689-daf2caf3-88d8-4037-beff-10a5d5e95a84.png)
  
  - Data Clustering 
  
  ![Cluster](https://user-images.githubusercontent.com/112741203/228736715-9743af32-77ce-4e94-83aa-3d5223dd5241.png)

# Helpful links
 - https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
 - https://github.com/fraxen/tectonicplates
 - https://github.com/timwis/leaflet-choropleth/tree/gh-pages/examples/legend
 - https://github.com/Leaflet/Leaflet.heat
 - https://leafletjs.com/plugins.html#basemap-providers
 - https://leafletjs.com/index.html#marker-option
 - https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3

# References
Dataset created by the United States Geological Survey 
 - https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
