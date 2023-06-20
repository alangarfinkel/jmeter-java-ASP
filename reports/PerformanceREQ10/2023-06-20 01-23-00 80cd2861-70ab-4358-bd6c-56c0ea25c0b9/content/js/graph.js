/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 94.0, "minX": 0.0, "maxY": 602.0, "series": [{"data": [[0.0, 94.0], [0.1, 133.0], [0.2, 162.0], [0.3, 162.0], [0.4, 162.0], [0.5, 162.0], [0.6, 162.0], [0.7, 162.0], [0.8, 163.0], [0.9, 163.0], [1.0, 163.0], [1.1, 163.0], [1.2, 163.0], [1.3, 163.0], [1.4, 163.0], [1.5, 163.0], [1.6, 163.0], [1.7, 163.0], [1.8, 163.0], [1.9, 163.0], [2.0, 163.0], [2.1, 163.0], [2.2, 163.0], [2.3, 163.0], [2.4, 163.0], [2.5, 163.0], [2.6, 163.0], [2.7, 163.0], [2.8, 163.0], [2.9, 163.0], [3.0, 163.0], [3.1, 163.0], [3.2, 163.0], [3.3, 164.0], [3.4, 164.0], [3.5, 164.0], [3.6, 164.0], [3.7, 164.0], [3.8, 164.0], [3.9, 164.0], [4.0, 164.0], [4.1, 164.0], [4.2, 164.0], [4.3, 164.0], [4.4, 164.0], [4.5, 164.0], [4.6, 164.0], [4.7, 164.0], [4.8, 164.0], [4.9, 164.0], [5.0, 164.0], [5.1, 164.0], [5.2, 164.0], [5.3, 164.0], [5.4, 164.0], [5.5, 164.0], [5.6, 164.0], [5.7, 164.0], [5.8, 164.0], [5.9, 164.0], [6.0, 164.0], [6.1, 164.0], [6.2, 164.0], [6.3, 164.0], [6.4, 164.0], [6.5, 164.0], [6.6, 164.0], [6.7, 164.0], [6.8, 164.0], [6.9, 164.0], [7.0, 164.0], [7.1, 164.0], [7.2, 164.0], [7.3, 164.0], [7.4, 164.0], [7.5, 164.0], [7.6, 164.0], [7.7, 164.0], [7.8, 164.0], [7.9, 164.0], [8.0, 164.0], [8.1, 164.0], [8.2, 164.0], [8.3, 164.0], [8.4, 164.0], [8.5, 164.0], [8.6, 164.0], [8.7, 164.0], [8.8, 164.0], [8.9, 164.0], [9.0, 164.0], [9.1, 164.0], [9.2, 164.0], [9.3, 164.0], [9.4, 164.0], [9.5, 164.0], [9.6, 164.0], [9.7, 164.0], [9.8, 164.0], [9.9, 164.0], [10.0, 164.0], [10.1, 164.0], [10.2, 164.0], [10.3, 164.0], [10.4, 164.0], [10.5, 164.0], [10.6, 164.0], [10.7, 165.0], [10.8, 165.0], [10.9, 165.0], [11.0, 165.0], [11.1, 165.0], [11.2, 165.0], [11.3, 165.0], [11.4, 165.0], [11.5, 165.0], [11.6, 165.0], [11.7, 165.0], [11.8, 165.0], [11.9, 165.0], [12.0, 165.0], [12.1, 165.0], [12.2, 165.0], [12.3, 165.0], [12.4, 165.0], [12.5, 165.0], [12.6, 165.0], [12.7, 165.0], [12.8, 165.0], [12.9, 165.0], [13.0, 165.0], [13.1, 165.0], [13.2, 165.0], [13.3, 165.0], [13.4, 165.0], [13.5, 165.0], [13.6, 165.0], [13.7, 165.0], [13.8, 165.0], [13.9, 165.0], [14.0, 165.0], [14.1, 165.0], [14.2, 165.0], [14.3, 165.0], [14.4, 165.0], [14.5, 165.0], [14.6, 165.0], [14.7, 165.0], [14.8, 165.0], [14.9, 165.0], [15.0, 165.0], [15.1, 165.0], [15.2, 165.0], [15.3, 165.0], [15.4, 165.0], [15.5, 165.0], [15.6, 165.0], [15.7, 165.0], [15.8, 165.0], [15.9, 165.0], [16.0, 165.0], [16.1, 165.0], [16.2, 165.0], [16.3, 165.0], [16.4, 165.0], [16.5, 165.0], [16.6, 165.0], [16.7, 165.0], [16.8, 165.0], [16.9, 165.0], [17.0, 165.0], [17.1, 165.0], [17.2, 165.0], [17.3, 165.0], [17.4, 165.0], [17.5, 165.0], [17.6, 165.0], [17.7, 165.0], [17.8, 165.0], [17.9, 165.0], [18.0, 165.0], [18.1, 165.0], [18.2, 165.0], [18.3, 165.0], [18.4, 165.0], [18.5, 165.0], [18.6, 165.0], [18.7, 165.0], [18.8, 165.0], [18.9, 165.0], [19.0, 165.0], [19.1, 165.0], [19.2, 165.0], [19.3, 165.0], [19.4, 165.0], [19.5, 165.0], [19.6, 165.0], [19.7, 165.0], [19.8, 165.0], [19.9, 165.0], [20.0, 165.0], [20.1, 165.0], [20.2, 165.0], [20.3, 165.0], [20.4, 165.0], [20.5, 165.0], [20.6, 165.0], [20.7, 165.0], [20.8, 165.0], [20.9, 165.0], [21.0, 165.0], [21.1, 165.0], [21.2, 165.0], [21.3, 165.0], [21.4, 165.0], [21.5, 165.0], [21.6, 165.0], [21.7, 165.0], [21.8, 165.0], [21.9, 166.0], [22.0, 166.0], [22.1, 166.0], [22.2, 166.0], [22.3, 166.0], [22.4, 166.0], [22.5, 166.0], [22.6, 166.0], [22.7, 166.0], [22.8, 166.0], [22.9, 166.0], [23.0, 166.0], [23.1, 166.0], [23.2, 166.0], [23.3, 166.0], [23.4, 166.0], [23.5, 166.0], [23.6, 166.0], [23.7, 166.0], [23.8, 166.0], [23.9, 166.0], [24.0, 166.0], [24.1, 166.0], [24.2, 166.0], [24.3, 166.0], [24.4, 166.0], [24.5, 166.0], [24.6, 166.0], [24.7, 166.0], [24.8, 166.0], [24.9, 166.0], [25.0, 166.0], [25.1, 166.0], [25.2, 166.0], [25.3, 166.0], [25.4, 166.0], [25.5, 166.0], [25.6, 166.0], [25.7, 166.0], [25.8, 166.0], [25.9, 166.0], [26.0, 166.0], [26.1, 166.0], [26.2, 166.0], [26.3, 166.0], [26.4, 166.0], [26.5, 166.0], [26.6, 166.0], [26.7, 166.0], [26.8, 166.0], [26.9, 166.0], [27.0, 166.0], [27.1, 166.0], [27.2, 166.0], [27.3, 166.0], [27.4, 166.0], [27.5, 166.0], [27.6, 166.0], [27.7, 166.0], [27.8, 166.0], [27.9, 166.0], [28.0, 166.0], [28.1, 166.0], [28.2, 166.0], [28.3, 166.0], [28.4, 166.0], [28.5, 166.0], [28.6, 166.0], [28.7, 166.0], [28.8, 166.0], [28.9, 166.0], [29.0, 166.0], [29.1, 166.0], [29.2, 166.0], [29.3, 166.0], [29.4, 166.0], [29.5, 166.0], [29.6, 166.0], [29.7, 166.0], [29.8, 166.0], [29.9, 166.0], [30.0, 166.0], [30.1, 166.0], [30.2, 166.0], [30.3, 166.0], [30.4, 166.0], [30.5, 166.0], [30.6, 166.0], [30.7, 166.0], [30.8, 166.0], [30.9, 166.0], [31.0, 166.0], [31.1, 166.0], [31.2, 166.0], [31.3, 166.0], [31.4, 166.0], [31.5, 166.0], [31.6, 166.0], [31.7, 166.0], [31.8, 166.0], [31.9, 166.0], [32.0, 166.0], [32.1, 166.0], [32.2, 166.0], [32.3, 166.0], [32.4, 166.0], [32.5, 166.0], [32.6, 166.0], [32.7, 166.0], [32.8, 166.0], [32.9, 166.0], [33.0, 166.0], [33.1, 166.0], [33.2, 166.0], [33.3, 166.0], [33.4, 166.0], [33.5, 166.0], [33.6, 166.0], [33.7, 166.0], [33.8, 166.0], [33.9, 166.0], [34.0, 166.0], [34.1, 166.0], [34.2, 166.0], [34.3, 166.0], [34.4, 166.0], [34.5, 166.0], [34.6, 166.0], [34.7, 166.0], [34.8, 166.0], [34.9, 166.0], [35.0, 166.0], [35.1, 166.0], [35.2, 167.0], [35.3, 167.0], [35.4, 167.0], [35.5, 167.0], [35.6, 167.0], [35.7, 167.0], [35.8, 167.0], [35.9, 167.0], [36.0, 167.0], [36.1, 167.0], [36.2, 167.0], [36.3, 167.0], [36.4, 167.0], [36.5, 167.0], [36.6, 167.0], [36.7, 167.0], [36.8, 167.0], [36.9, 167.0], [37.0, 167.0], [37.1, 167.0], [37.2, 167.0], [37.3, 167.0], [37.4, 167.0], [37.5, 167.0], [37.6, 167.0], [37.7, 167.0], [37.8, 167.0], [37.9, 167.0], [38.0, 167.0], [38.1, 167.0], [38.2, 167.0], [38.3, 167.0], [38.4, 167.0], [38.5, 167.0], [38.6, 167.0], [38.7, 167.0], [38.8, 167.0], [38.9, 167.0], [39.0, 167.0], [39.1, 167.0], [39.2, 167.0], [39.3, 167.0], [39.4, 167.0], [39.5, 167.0], [39.6, 167.0], [39.7, 167.0], [39.8, 167.0], [39.9, 167.0], [40.0, 167.0], [40.1, 167.0], [40.2, 167.0], [40.3, 167.0], [40.4, 167.0], [40.5, 167.0], [40.6, 167.0], [40.7, 167.0], [40.8, 167.0], [40.9, 167.0], [41.0, 167.0], [41.1, 167.0], [41.2, 167.0], [41.3, 167.0], [41.4, 167.0], [41.5, 167.0], [41.6, 167.0], [41.7, 167.0], [41.8, 167.0], [41.9, 167.0], [42.0, 167.0], [42.1, 167.0], [42.2, 167.0], [42.3, 167.0], [42.4, 167.0], [42.5, 167.0], [42.6, 167.0], [42.7, 167.0], [42.8, 167.0], [42.9, 167.0], [43.0, 167.0], [43.1, 167.0], [43.2, 167.0], [43.3, 167.0], [43.4, 167.0], [43.5, 167.0], [43.6, 167.0], [43.7, 167.0], [43.8, 167.0], [43.9, 167.0], [44.0, 167.0], [44.1, 167.0], [44.2, 167.0], [44.3, 167.0], [44.4, 167.0], [44.5, 167.0], [44.6, 167.0], [44.7, 167.0], [44.8, 167.0], [44.9, 167.0], [45.0, 167.0], [45.1, 167.0], [45.2, 167.0], [45.3, 167.0], [45.4, 167.0], [45.5, 167.0], [45.6, 167.0], [45.7, 167.0], [45.8, 167.0], [45.9, 167.0], [46.0, 167.0], [46.1, 167.0], [46.2, 167.0], [46.3, 167.0], [46.4, 167.0], [46.5, 167.0], [46.6, 167.0], [46.7, 167.0], [46.8, 167.0], [46.9, 167.0], [47.0, 167.0], [47.1, 167.0], [47.2, 167.0], [47.3, 167.0], [47.4, 167.0], [47.5, 167.0], [47.6, 167.0], [47.7, 167.0], [47.8, 167.0], [47.9, 167.0], [48.0, 167.0], [48.1, 167.0], [48.2, 167.0], [48.3, 167.0], [48.4, 167.0], [48.5, 167.0], [48.6, 167.0], [48.7, 167.0], [48.8, 167.0], [48.9, 167.0], [49.0, 168.0], [49.1, 168.0], [49.2, 168.0], [49.3, 168.0], [49.4, 168.0], [49.5, 168.0], [49.6, 168.0], [49.7, 168.0], [49.8, 168.0], [49.9, 168.0], [50.0, 168.0], [50.1, 168.0], [50.2, 168.0], [50.3, 168.0], [50.4, 168.0], [50.5, 168.0], [50.6, 168.0], [50.7, 168.0], [50.8, 168.0], [50.9, 168.0], [51.0, 168.0], [51.1, 168.0], [51.2, 168.0], [51.3, 168.0], [51.4, 168.0], [51.5, 168.0], [51.6, 168.0], [51.7, 168.0], [51.8, 168.0], [51.9, 168.0], [52.0, 168.0], [52.1, 168.0], [52.2, 168.0], [52.3, 168.0], [52.4, 168.0], [52.5, 168.0], [52.6, 168.0], [52.7, 168.0], [52.8, 168.0], [52.9, 168.0], [53.0, 168.0], [53.1, 168.0], [53.2, 168.0], [53.3, 168.0], [53.4, 168.0], [53.5, 168.0], [53.6, 168.0], [53.7, 168.0], [53.8, 168.0], [53.9, 168.0], [54.0, 168.0], [54.1, 168.0], [54.2, 168.0], [54.3, 168.0], [54.4, 168.0], [54.5, 168.0], [54.6, 168.0], [54.7, 168.0], [54.8, 168.0], [54.9, 168.0], [55.0, 168.0], [55.1, 168.0], [55.2, 168.0], [55.3, 168.0], [55.4, 168.0], [55.5, 168.0], [55.6, 168.0], [55.7, 168.0], [55.8, 168.0], [55.9, 168.0], [56.0, 168.0], [56.1, 168.0], [56.2, 168.0], [56.3, 168.0], [56.4, 168.0], [56.5, 168.0], [56.6, 168.0], [56.7, 168.0], [56.8, 168.0], [56.9, 168.0], [57.0, 168.0], [57.1, 168.0], [57.2, 168.0], [57.3, 168.0], [57.4, 168.0], [57.5, 169.0], [57.6, 169.0], [57.7, 169.0], [57.8, 169.0], [57.9, 169.0], [58.0, 169.0], [58.1, 169.0], [58.2, 169.0], [58.3, 169.0], [58.4, 169.0], [58.5, 169.0], [58.6, 169.0], [58.7, 169.0], [58.8, 169.0], [58.9, 169.0], [59.0, 169.0], [59.1, 169.0], [59.2, 169.0], [59.3, 169.0], [59.4, 169.0], [59.5, 169.0], [59.6, 169.0], [59.7, 169.0], [59.8, 169.0], [59.9, 169.0], [60.0, 169.0], [60.1, 169.0], [60.2, 169.0], [60.3, 169.0], [60.4, 169.0], [60.5, 169.0], [60.6, 169.0], [60.7, 169.0], [60.8, 169.0], [60.9, 169.0], [61.0, 169.0], [61.1, 169.0], [61.2, 169.0], [61.3, 169.0], [61.4, 169.0], [61.5, 169.0], [61.6, 169.0], [61.7, 169.0], [61.8, 169.0], [61.9, 169.0], [62.0, 169.0], [62.1, 169.0], [62.2, 169.0], [62.3, 169.0], [62.4, 169.0], [62.5, 169.0], [62.6, 169.0], [62.7, 169.0], [62.8, 169.0], [62.9, 169.0], [63.0, 169.0], [63.1, 169.0], [63.2, 169.0], [63.3, 169.0], [63.4, 169.0], [63.5, 169.0], [63.6, 169.0], [63.7, 169.0], [63.8, 169.0], [63.9, 169.0], [64.0, 169.0], [64.1, 169.0], [64.2, 169.0], [64.3, 169.0], [64.4, 169.0], [64.5, 169.0], [64.6, 169.0], [64.7, 169.0], [64.8, 169.0], [64.9, 169.0], [65.0, 169.0], [65.1, 169.0], [65.2, 169.0], [65.3, 169.0], [65.4, 170.0], [65.5, 170.0], [65.6, 170.0], [65.7, 170.0], [65.8, 170.0], [65.9, 170.0], [66.0, 170.0], [66.1, 170.0], [66.2, 170.0], [66.3, 170.0], [66.4, 170.0], [66.5, 170.0], [66.6, 170.0], [66.7, 170.0], [66.8, 170.0], [66.9, 170.0], [67.0, 170.0], [67.1, 170.0], [67.2, 170.0], [67.3, 170.0], [67.4, 170.0], [67.5, 170.0], [67.6, 170.0], [67.7, 170.0], [67.8, 170.0], [67.9, 170.0], [68.0, 170.0], [68.1, 170.0], [68.2, 170.0], [68.3, 170.0], [68.4, 170.0], [68.5, 170.0], [68.6, 170.0], [68.7, 170.0], [68.8, 170.0], [68.9, 170.0], [69.0, 170.0], [69.1, 170.0], [69.2, 170.0], [69.3, 170.0], [69.4, 170.0], [69.5, 170.0], [69.6, 170.0], [69.7, 170.0], [69.8, 170.0], [69.9, 170.0], [70.0, 170.0], [70.1, 170.0], [70.2, 170.0], [70.3, 170.0], [70.4, 170.0], [70.5, 171.0], [70.6, 171.0], [70.7, 171.0], [70.8, 171.0], [70.9, 171.0], [71.0, 171.0], [71.1, 171.0], [71.2, 171.0], [71.3, 171.0], [71.4, 171.0], [71.5, 171.0], [71.6, 171.0], [71.7, 171.0], [71.8, 171.0], [71.9, 171.0], [72.0, 171.0], [72.1, 171.0], [72.2, 171.0], [72.3, 171.0], [72.4, 171.0], [72.5, 171.0], [72.6, 171.0], [72.7, 171.0], [72.8, 171.0], [72.9, 171.0], [73.0, 171.0], [73.1, 171.0], [73.2, 171.0], [73.3, 171.0], [73.4, 171.0], [73.5, 171.0], [73.6, 171.0], [73.7, 171.0], [73.8, 171.0], [73.9, 171.0], [74.0, 171.0], [74.1, 171.0], [74.2, 171.0], [74.3, 171.0], [74.4, 171.0], [74.5, 171.0], [74.6, 171.0], [74.7, 171.0], [74.8, 171.0], [74.9, 172.0], [75.0, 172.0], [75.1, 172.0], [75.2, 172.0], [75.3, 172.0], [75.4, 172.0], [75.5, 172.0], [75.6, 172.0], [75.7, 172.0], [75.8, 172.0], [75.9, 172.0], [76.0, 172.0], [76.1, 172.0], [76.2, 172.0], [76.3, 172.0], [76.4, 172.0], [76.5, 172.0], [76.6, 172.0], [76.7, 172.0], [76.8, 172.0], [76.9, 172.0], [77.0, 172.0], [77.1, 172.0], [77.2, 172.0], [77.3, 172.0], [77.4, 172.0], [77.5, 172.0], [77.6, 172.0], [77.7, 172.0], [77.8, 172.0], [77.9, 172.0], [78.0, 172.0], [78.1, 172.0], [78.2, 172.0], [78.3, 172.0], [78.4, 172.0], [78.5, 172.0], [78.6, 172.0], [78.7, 172.0], [78.8, 173.0], [78.9, 173.0], [79.0, 173.0], [79.1, 173.0], [79.2, 173.0], [79.3, 173.0], [79.4, 173.0], [79.5, 173.0], [79.6, 173.0], [79.7, 173.0], [79.8, 173.0], [79.9, 173.0], [80.0, 173.0], [80.1, 173.0], [80.2, 173.0], [80.3, 173.0], [80.4, 173.0], [80.5, 173.0], [80.6, 173.0], [80.7, 173.0], [80.8, 173.0], [80.9, 173.0], [81.0, 173.0], [81.1, 173.0], [81.2, 173.0], [81.3, 173.0], [81.4, 173.0], [81.5, 173.0], [81.6, 173.0], [81.7, 174.0], [81.8, 174.0], [81.9, 174.0], [82.0, 174.0], [82.1, 174.0], [82.2, 174.0], [82.3, 174.0], [82.4, 174.0], [82.5, 174.0], [82.6, 174.0], [82.7, 174.0], [82.8, 174.0], [82.9, 174.0], [83.0, 174.0], [83.1, 174.0], [83.2, 174.0], [83.3, 174.0], [83.4, 175.0], [83.5, 175.0], [83.6, 175.0], [83.7, 175.0], [83.8, 175.0], [83.9, 175.0], [84.0, 175.0], [84.1, 175.0], [84.2, 175.0], [84.3, 175.0], [84.4, 175.0], [84.5, 175.0], [84.6, 175.0], [84.7, 175.0], [84.8, 175.0], [84.9, 175.0], [85.0, 176.0], [85.1, 176.0], [85.2, 176.0], [85.3, 176.0], [85.4, 176.0], [85.5, 176.0], [85.6, 176.0], [85.7, 176.0], [85.8, 176.0], [85.9, 177.0], [86.0, 177.0], [86.1, 177.0], [86.2, 177.0], [86.3, 177.0], [86.4, 177.0], [86.5, 177.0], [86.6, 177.0], [86.7, 177.0], [86.8, 177.0], [86.9, 177.0], [87.0, 177.0], [87.1, 178.0], [87.2, 178.0], [87.3, 178.0], [87.4, 178.0], [87.5, 178.0], [87.6, 178.0], [87.7, 178.0], [87.8, 178.0], [87.9, 178.0], [88.0, 179.0], [88.1, 179.0], [88.2, 179.0], [88.3, 179.0], [88.4, 180.0], [88.5, 180.0], [88.6, 180.0], [88.7, 180.0], [88.8, 180.0], [88.9, 180.0], [89.0, 181.0], [89.1, 181.0], [89.2, 181.0], [89.3, 182.0], [89.4, 182.0], [89.5, 182.0], [89.6, 183.0], [89.7, 183.0], [89.8, 183.0], [89.9, 183.0], [90.0, 183.0], [90.1, 183.0], [90.2, 184.0], [90.3, 184.0], [90.4, 184.0], [90.5, 184.0], [90.6, 185.0], [90.7, 185.0], [90.8, 185.0], [90.9, 185.0], [91.0, 186.0], [91.1, 186.0], [91.2, 186.0], [91.3, 187.0], [91.4, 188.0], [91.5, 189.0], [91.6, 189.0], [91.7, 190.0], [91.8, 192.0], [91.9, 192.0], [92.0, 193.0], [92.1, 194.0], [92.2, 194.0], [92.3, 194.0], [92.4, 195.0], [92.5, 196.0], [92.6, 199.0], [92.7, 199.0], [92.8, 199.0], [92.9, 199.0], [93.0, 200.0], [93.1, 201.0], [93.2, 203.0], [93.3, 204.0], [93.4, 207.0], [93.5, 208.0], [93.6, 208.0], [93.7, 209.0], [93.8, 209.0], [93.9, 210.0], [94.0, 210.0], [94.1, 211.0], [94.2, 211.0], [94.3, 213.0], [94.4, 215.0], [94.5, 215.0], [94.6, 216.0], [94.7, 219.0], [94.8, 219.0], [94.9, 219.0], [95.0, 222.0], [95.1, 223.0], [95.2, 225.0], [95.3, 227.0], [95.4, 229.0], [95.5, 230.0], [95.6, 234.0], [95.7, 236.0], [95.8, 236.0], [95.9, 260.0], [96.0, 271.0], [96.1, 276.0], [96.2, 308.0], [96.3, 309.0], [96.4, 311.0], [96.5, 312.0], [96.6, 312.0], [96.7, 312.0], [96.8, 313.0], [96.9, 314.0], [97.0, 315.0], [97.1, 315.0], [97.2, 315.0], [97.3, 315.0], [97.4, 315.0], [97.5, 316.0], [97.6, 316.0], [97.7, 317.0], [97.8, 318.0], [97.9, 318.0], [98.0, 319.0], [98.1, 320.0], [98.2, 320.0], [98.3, 320.0], [98.4, 321.0], [98.5, 322.0], [98.6, 322.0], [98.7, 323.0], [98.8, 324.0], [98.9, 369.0], [99.0, 421.0], [99.1, 462.0], [99.2, 467.0], [99.3, 467.0], [99.4, 477.0], [99.5, 478.0], [99.6, 478.0], [99.7, 481.0], [99.8, 482.0], [99.9, 483.0], [100.0, 602.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1222.0, "series": [{"data": [[0.0, 1.0], [600.0, 1.0], [300.0, 37.0], [100.0, 1222.0], [400.0, 13.0], [200.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1312.0, "series": [{"data": [[0.0, 1312.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.160447761194031, "minX": 1.68723498E12, "maxY": 4.643442622950818, "series": [{"data": [[1.68723498E12, 4.160447761194031], [1.68723504E12, 4.643442622950818]], "isOverall": false, "label": "RPS Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68723504E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 174.29656607700312, "minX": 1.0, "maxY": 388.0, "series": [{"data": [[1.0, 388.0], [4.0, 174.29656607700312], [2.0, 208.0], [5.0, 184.44057971014493], [3.0, 298.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.249999999999997, 177.8981762917932]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1787.4166666666667, "minX": 1.68723498E12, "maxY": 275718.4, "series": [{"data": [[1.68723498E12, 275718.4], [1.68723504E12, 62118.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68723498E12, 7950.666666666667], [1.68723504E12, 1787.4166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68723504E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 176.05783582089558, "minX": 1.68723498E12, "maxY": 185.98360655737704, "series": [{"data": [[1.68723498E12, 176.05783582089558], [1.68723504E12, 185.98360655737704]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68723504E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 170.6483208955227, "minX": 1.68723498E12, "maxY": 175.4508196721312, "series": [{"data": [[1.68723498E12, 170.6483208955227], [1.68723504E12, 175.4508196721312]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68723504E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.2565298507462728, "minX": 1.68723498E12, "maxY": 2.516393442622951, "series": [{"data": [[1.68723498E12, 1.2565298507462728], [1.68723504E12, 2.516393442622951]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68723504E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 162.0, "minX": 1.68723498E12, "maxY": 602.0, "series": [{"data": [[1.68723498E12, 602.0], [1.68723504E12, 478.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68723498E12, 178.0], [1.68723504E12, 223.80000000000007]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68723498E12, 324.0], [1.68723504E12, 472.79999999999984]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68723498E12, 204.3499999999999], [1.68723504E12, 312.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68723498E12, 162.0], [1.68723504E12, 163.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68723498E12, 167.0], [1.68723504E12, 168.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68723504E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 133.0, "minX": 3.0, "maxY": 330.5, "series": [{"data": [[8.0, 246.5], [16.0, 169.0], [17.0, 172.0], [18.0, 167.0], [19.0, 168.0], [20.0, 167.0], [21.0, 168.0], [11.0, 189.0], [3.0, 330.5], [6.0, 213.0], [13.0, 171.0], [15.0, 174.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 133.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 255.0, "series": [{"data": [[8.0, 175.0], [16.0, 169.0], [17.0, 171.0], [18.0, 167.0], [19.0, 167.0], [20.0, 167.0], [21.0, 167.0], [11.0, 173.0], [3.0, 255.0], [6.0, 202.0], [13.0, 169.0], [15.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.016666666666667, "minX": 1.68723498E12, "maxY": 17.916666666666668, "series": [{"data": [[1.68723498E12, 17.916666666666668], [1.68723504E12, 4.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68723504E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.68723498E12, "maxY": 17.866666666666667, "series": [{"data": [[1.68723498E12, 17.866666666666667], [1.68723504E12, 4.016666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68723504E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68723504E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.68723498E12, "maxY": 17.866666666666667, "series": [{"data": [[1.68723498E12, 17.866666666666667], [1.68723504E12, 4.016666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.68723504E12, 0.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68723504E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.68723498E12, "maxY": 17.866666666666667, "series": [{"data": [[1.68723498E12, 17.866666666666667], [1.68723504E12, 4.016666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68723504E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68723504E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

