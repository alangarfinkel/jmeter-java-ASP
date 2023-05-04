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
        data: {"result": {"minY": 143.0, "minX": 0.0, "maxY": 879.0, "series": [{"data": [[0.0, 143.0], [0.1, 145.0], [0.2, 145.0], [0.3, 146.0], [0.4, 146.0], [0.5, 146.0], [0.6, 146.0], [0.7, 147.0], [0.8, 147.0], [0.9, 147.0], [1.0, 147.0], [1.1, 147.0], [1.2, 147.0], [1.3, 148.0], [1.4, 148.0], [1.5, 148.0], [1.6, 148.0], [1.7, 148.0], [1.8, 149.0], [1.9, 149.0], [2.0, 149.0], [2.1, 149.0], [2.2, 149.0], [2.3, 149.0], [2.4, 149.0], [2.5, 149.0], [2.6, 150.0], [2.7, 150.0], [2.8, 150.0], [2.9, 150.0], [3.0, 150.0], [3.1, 150.0], [3.2, 150.0], [3.3, 150.0], [3.4, 150.0], [3.5, 151.0], [3.6, 151.0], [3.7, 151.0], [3.8, 151.0], [3.9, 151.0], [4.0, 151.0], [4.1, 151.0], [4.2, 151.0], [4.3, 151.0], [4.4, 151.0], [4.5, 151.0], [4.6, 152.0], [4.7, 152.0], [4.8, 152.0], [4.9, 152.0], [5.0, 152.0], [5.1, 152.0], [5.2, 152.0], [5.3, 152.0], [5.4, 152.0], [5.5, 153.0], [5.6, 153.0], [5.7, 153.0], [5.8, 153.0], [5.9, 153.0], [6.0, 153.0], [6.1, 153.0], [6.2, 153.0], [6.3, 153.0], [6.4, 154.0], [6.5, 154.0], [6.6, 154.0], [6.7, 154.0], [6.8, 154.0], [6.9, 154.0], [7.0, 154.0], [7.1, 154.0], [7.2, 154.0], [7.3, 155.0], [7.4, 155.0], [7.5, 155.0], [7.6, 155.0], [7.7, 155.0], [7.8, 155.0], [7.9, 155.0], [8.0, 155.0], [8.1, 155.0], [8.2, 156.0], [8.3, 156.0], [8.4, 156.0], [8.5, 156.0], [8.6, 156.0], [8.7, 156.0], [8.8, 157.0], [8.9, 157.0], [9.0, 157.0], [9.1, 157.0], [9.2, 157.0], [9.3, 157.0], [9.4, 158.0], [9.5, 158.0], [9.6, 158.0], [9.7, 158.0], [9.8, 158.0], [9.9, 158.0], [10.0, 159.0], [10.1, 159.0], [10.2, 159.0], [10.3, 159.0], [10.4, 159.0], [10.5, 159.0], [10.6, 159.0], [10.7, 160.0], [10.8, 160.0], [10.9, 160.0], [11.0, 160.0], [11.1, 161.0], [11.2, 161.0], [11.3, 161.0], [11.4, 161.0], [11.5, 161.0], [11.6, 162.0], [11.7, 162.0], [11.8, 162.0], [11.9, 162.0], [12.0, 163.0], [12.1, 163.0], [12.2, 163.0], [12.3, 163.0], [12.4, 164.0], [12.5, 164.0], [12.6, 164.0], [12.7, 164.0], [12.8, 165.0], [12.9, 165.0], [13.0, 165.0], [13.1, 165.0], [13.2, 166.0], [13.3, 166.0], [13.4, 166.0], [13.5, 167.0], [13.6, 167.0], [13.7, 167.0], [13.8, 167.0], [13.9, 167.0], [14.0, 168.0], [14.1, 168.0], [14.2, 168.0], [14.3, 168.0], [14.4, 168.0], [14.5, 169.0], [14.6, 169.0], [14.7, 169.0], [14.8, 169.0], [14.9, 169.0], [15.0, 170.0], [15.1, 170.0], [15.2, 170.0], [15.3, 170.0], [15.4, 171.0], [15.5, 171.0], [15.6, 171.0], [15.7, 171.0], [15.8, 172.0], [15.9, 172.0], [16.0, 172.0], [16.1, 172.0], [16.2, 172.0], [16.3, 172.0], [16.4, 172.0], [16.5, 173.0], [16.6, 173.0], [16.7, 173.0], [16.8, 173.0], [16.9, 174.0], [17.0, 174.0], [17.1, 174.0], [17.2, 174.0], [17.3, 174.0], [17.4, 175.0], [17.5, 175.0], [17.6, 175.0], [17.7, 175.0], [17.8, 175.0], [17.9, 175.0], [18.0, 176.0], [18.1, 176.0], [18.2, 176.0], [18.3, 176.0], [18.4, 176.0], [18.5, 177.0], [18.6, 177.0], [18.7, 177.0], [18.8, 177.0], [18.9, 177.0], [19.0, 177.0], [19.1, 177.0], [19.2, 178.0], [19.3, 178.0], [19.4, 178.0], [19.5, 178.0], [19.6, 178.0], [19.7, 178.0], [19.8, 178.0], [19.9, 179.0], [20.0, 179.0], [20.1, 179.0], [20.2, 179.0], [20.3, 179.0], [20.4, 179.0], [20.5, 179.0], [20.6, 179.0], [20.7, 180.0], [20.8, 180.0], [20.9, 180.0], [21.0, 180.0], [21.1, 180.0], [21.2, 180.0], [21.3, 180.0], [21.4, 180.0], [21.5, 180.0], [21.6, 181.0], [21.7, 181.0], [21.8, 181.0], [21.9, 181.0], [22.0, 181.0], [22.1, 181.0], [22.2, 181.0], [22.3, 181.0], [22.4, 181.0], [22.5, 181.0], [22.6, 181.0], [22.7, 181.0], [22.8, 181.0], [22.9, 182.0], [23.0, 182.0], [23.1, 182.0], [23.2, 182.0], [23.3, 182.0], [23.4, 182.0], [23.5, 182.0], [23.6, 182.0], [23.7, 182.0], [23.8, 182.0], [23.9, 182.0], [24.0, 182.0], [24.1, 182.0], [24.2, 183.0], [24.3, 183.0], [24.4, 183.0], [24.5, 183.0], [24.6, 183.0], [24.7, 183.0], [24.8, 183.0], [24.9, 183.0], [25.0, 183.0], [25.1, 183.0], [25.2, 183.0], [25.3, 183.0], [25.4, 183.0], [25.5, 183.0], [25.6, 184.0], [25.7, 184.0], [25.8, 184.0], [25.9, 184.0], [26.0, 184.0], [26.1, 184.0], [26.2, 184.0], [26.3, 184.0], [26.4, 184.0], [26.5, 184.0], [26.6, 184.0], [26.7, 184.0], [26.8, 184.0], [26.9, 184.0], [27.0, 184.0], [27.1, 185.0], [27.2, 185.0], [27.3, 185.0], [27.4, 185.0], [27.5, 185.0], [27.6, 185.0], [27.7, 185.0], [27.8, 185.0], [27.9, 185.0], [28.0, 185.0], [28.1, 185.0], [28.2, 185.0], [28.3, 185.0], [28.4, 185.0], [28.5, 186.0], [28.6, 186.0], [28.7, 186.0], [28.8, 186.0], [28.9, 186.0], [29.0, 186.0], [29.1, 186.0], [29.2, 186.0], [29.3, 186.0], [29.4, 186.0], [29.5, 187.0], [29.6, 187.0], [29.7, 187.0], [29.8, 187.0], [29.9, 187.0], [30.0, 187.0], [30.1, 187.0], [30.2, 187.0], [30.3, 187.0], [30.4, 187.0], [30.5, 187.0], [30.6, 187.0], [30.7, 187.0], [30.8, 188.0], [30.9, 188.0], [31.0, 188.0], [31.1, 188.0], [31.2, 188.0], [31.3, 188.0], [31.4, 188.0], [31.5, 188.0], [31.6, 188.0], [31.7, 188.0], [31.8, 188.0], [31.9, 188.0], [32.0, 188.0], [32.1, 188.0], [32.2, 188.0], [32.3, 189.0], [32.4, 189.0], [32.5, 189.0], [32.6, 189.0], [32.7, 189.0], [32.8, 189.0], [32.9, 189.0], [33.0, 189.0], [33.1, 189.0], [33.2, 189.0], [33.3, 189.0], [33.4, 189.0], [33.5, 189.0], [33.6, 189.0], [33.7, 189.0], [33.8, 190.0], [33.9, 190.0], [34.0, 190.0], [34.1, 190.0], [34.2, 190.0], [34.3, 190.0], [34.4, 190.0], [34.5, 190.0], [34.6, 190.0], [34.7, 190.0], [34.8, 190.0], [34.9, 190.0], [35.0, 190.0], [35.1, 190.0], [35.2, 190.0], [35.3, 190.0], [35.4, 190.0], [35.5, 191.0], [35.6, 191.0], [35.7, 191.0], [35.8, 191.0], [35.9, 191.0], [36.0, 191.0], [36.1, 191.0], [36.2, 191.0], [36.3, 191.0], [36.4, 191.0], [36.5, 191.0], [36.6, 191.0], [36.7, 191.0], [36.8, 191.0], [36.9, 191.0], [37.0, 191.0], [37.1, 191.0], [37.2, 192.0], [37.3, 192.0], [37.4, 192.0], [37.5, 192.0], [37.6, 192.0], [37.7, 192.0], [37.8, 192.0], [37.9, 192.0], [38.0, 192.0], [38.1, 192.0], [38.2, 192.0], [38.3, 192.0], [38.4, 192.0], [38.5, 192.0], [38.6, 192.0], [38.7, 192.0], [38.8, 193.0], [38.9, 193.0], [39.0, 193.0], [39.1, 193.0], [39.2, 193.0], [39.3, 193.0], [39.4, 193.0], [39.5, 193.0], [39.6, 193.0], [39.7, 193.0], [39.8, 193.0], [39.9, 193.0], [40.0, 193.0], [40.1, 193.0], [40.2, 193.0], [40.3, 193.0], [40.4, 194.0], [40.5, 194.0], [40.6, 194.0], [40.7, 194.0], [40.8, 194.0], [40.9, 194.0], [41.0, 194.0], [41.1, 194.0], [41.2, 194.0], [41.3, 194.0], [41.4, 194.0], [41.5, 194.0], [41.6, 194.0], [41.7, 194.0], [41.8, 195.0], [41.9, 195.0], [42.0, 195.0], [42.1, 195.0], [42.2, 195.0], [42.3, 195.0], [42.4, 195.0], [42.5, 195.0], [42.6, 195.0], [42.7, 195.0], [42.8, 195.0], [42.9, 195.0], [43.0, 195.0], [43.1, 195.0], [43.2, 195.0], [43.3, 195.0], [43.4, 195.0], [43.5, 195.0], [43.6, 196.0], [43.7, 196.0], [43.8, 196.0], [43.9, 196.0], [44.0, 196.0], [44.1, 196.0], [44.2, 196.0], [44.3, 196.0], [44.4, 196.0], [44.5, 196.0], [44.6, 196.0], [44.7, 196.0], [44.8, 196.0], [44.9, 196.0], [45.0, 196.0], [45.1, 197.0], [45.2, 197.0], [45.3, 197.0], [45.4, 197.0], [45.5, 197.0], [45.6, 197.0], [45.7, 197.0], [45.8, 197.0], [45.9, 197.0], [46.0, 197.0], [46.1, 197.0], [46.2, 197.0], [46.3, 197.0], [46.4, 198.0], [46.5, 198.0], [46.6, 198.0], [46.7, 198.0], [46.8, 198.0], [46.9, 198.0], [47.0, 198.0], [47.1, 198.0], [47.2, 198.0], [47.3, 198.0], [47.4, 198.0], [47.5, 198.0], [47.6, 198.0], [47.7, 198.0], [47.8, 198.0], [47.9, 199.0], [48.0, 199.0], [48.1, 199.0], [48.2, 199.0], [48.3, 199.0], [48.4, 199.0], [48.5, 199.0], [48.6, 199.0], [48.7, 199.0], [48.8, 199.0], [48.9, 199.0], [49.0, 199.0], [49.1, 200.0], [49.2, 200.0], [49.3, 200.0], [49.4, 200.0], [49.5, 200.0], [49.6, 200.0], [49.7, 200.0], [49.8, 200.0], [49.9, 200.0], [50.0, 200.0], [50.1, 201.0], [50.2, 201.0], [50.3, 201.0], [50.4, 201.0], [50.5, 201.0], [50.6, 201.0], [50.7, 201.0], [50.8, 201.0], [50.9, 201.0], [51.0, 201.0], [51.1, 201.0], [51.2, 202.0], [51.3, 202.0], [51.4, 202.0], [51.5, 202.0], [51.6, 202.0], [51.7, 202.0], [51.8, 202.0], [51.9, 202.0], [52.0, 202.0], [52.1, 203.0], [52.2, 203.0], [52.3, 203.0], [52.4, 203.0], [52.5, 203.0], [52.6, 203.0], [52.7, 203.0], [52.8, 203.0], [52.9, 204.0], [53.0, 204.0], [53.1, 204.0], [53.2, 204.0], [53.3, 204.0], [53.4, 204.0], [53.5, 204.0], [53.6, 205.0], [53.7, 205.0], [53.8, 205.0], [53.9, 205.0], [54.0, 205.0], [54.1, 205.0], [54.2, 206.0], [54.3, 206.0], [54.4, 207.0], [54.5, 207.0], [54.6, 207.0], [54.7, 207.0], [54.8, 207.0], [54.9, 208.0], [55.0, 208.0], [55.1, 208.0], [55.2, 209.0], [55.3, 209.0], [55.4, 210.0], [55.5, 210.0], [55.6, 210.0], [55.7, 210.0], [55.8, 211.0], [55.9, 211.0], [56.0, 211.0], [56.1, 212.0], [56.2, 213.0], [56.3, 214.0], [56.4, 214.0], [56.5, 216.0], [56.6, 217.0], [56.7, 218.0], [56.8, 220.0], [56.9, 222.0], [57.0, 223.0], [57.1, 224.0], [57.2, 226.0], [57.3, 235.0], [57.4, 244.0], [57.5, 246.0], [57.6, 248.0], [57.7, 254.0], [57.8, 264.0], [57.9, 273.0], [58.0, 295.0], [58.1, 334.0], [58.2, 411.0], [58.3, 447.0], [58.4, 455.0], [58.5, 471.0], [58.6, 510.0], [58.7, 528.0], [58.8, 591.0], [58.9, 599.0], [59.0, 602.0], [59.1, 608.0], [59.2, 614.0], [59.3, 617.0], [59.4, 622.0], [59.5, 625.0], [59.6, 629.0], [59.7, 632.0], [59.8, 635.0], [59.9, 638.0], [60.0, 641.0], [60.1, 644.0], [60.2, 645.0], [60.3, 646.0], [60.4, 648.0], [60.5, 651.0], [60.6, 653.0], [60.7, 653.0], [60.8, 654.0], [60.9, 655.0], [61.0, 656.0], [61.1, 657.0], [61.2, 657.0], [61.3, 658.0], [61.4, 659.0], [61.5, 660.0], [61.6, 660.0], [61.7, 661.0], [61.8, 661.0], [61.9, 663.0], [62.0, 663.0], [62.1, 664.0], [62.2, 664.0], [62.3, 665.0], [62.4, 666.0], [62.5, 667.0], [62.6, 667.0], [62.7, 668.0], [62.8, 669.0], [62.9, 669.0], [63.0, 670.0], [63.1, 671.0], [63.2, 672.0], [63.3, 673.0], [63.4, 674.0], [63.5, 675.0], [63.6, 675.0], [63.7, 676.0], [63.8, 677.0], [63.9, 678.0], [64.0, 679.0], [64.1, 680.0], [64.2, 681.0], [64.3, 682.0], [64.4, 684.0], [64.5, 686.0], [64.6, 687.0], [64.7, 688.0], [64.8, 689.0], [64.9, 690.0], [65.0, 692.0], [65.1, 693.0], [65.2, 694.0], [65.3, 696.0], [65.4, 697.0], [65.5, 699.0], [65.6, 703.0], [65.7, 708.0], [65.8, 715.0], [65.9, 719.0], [66.0, 722.0], [66.1, 724.0], [66.2, 728.0], [66.3, 742.0], [66.4, 751.0], [66.5, 754.0], [66.6, 756.0], [66.7, 757.0], [66.8, 758.0], [66.9, 758.0], [67.0, 760.0], [67.1, 761.0], [67.2, 761.0], [67.3, 762.0], [67.4, 763.0], [67.5, 764.0], [67.6, 764.0], [67.7, 765.0], [67.8, 766.0], [67.9, 766.0], [68.0, 767.0], [68.1, 768.0], [68.2, 768.0], [68.3, 769.0], [68.4, 769.0], [68.5, 770.0], [68.6, 770.0], [68.7, 771.0], [68.8, 771.0], [68.9, 772.0], [69.0, 772.0], [69.1, 773.0], [69.2, 773.0], [69.3, 773.0], [69.4, 774.0], [69.5, 774.0], [69.6, 774.0], [69.7, 774.0], [69.8, 775.0], [69.9, 775.0], [70.0, 775.0], [70.1, 775.0], [70.2, 776.0], [70.3, 776.0], [70.4, 776.0], [70.5, 777.0], [70.6, 777.0], [70.7, 777.0], [70.8, 778.0], [70.9, 778.0], [71.0, 778.0], [71.1, 778.0], [71.2, 778.0], [71.3, 779.0], [71.4, 779.0], [71.5, 779.0], [71.6, 779.0], [71.7, 780.0], [71.8, 780.0], [71.9, 780.0], [72.0, 780.0], [72.1, 780.0], [72.2, 781.0], [72.3, 781.0], [72.4, 781.0], [72.5, 781.0], [72.6, 782.0], [72.7, 782.0], [72.8, 782.0], [72.9, 782.0], [73.0, 783.0], [73.1, 783.0], [73.2, 783.0], [73.3, 783.0], [73.4, 784.0], [73.5, 784.0], [73.6, 784.0], [73.7, 784.0], [73.8, 784.0], [73.9, 784.0], [74.0, 785.0], [74.1, 785.0], [74.2, 785.0], [74.3, 785.0], [74.4, 785.0], [74.5, 785.0], [74.6, 785.0], [74.7, 786.0], [74.8, 786.0], [74.9, 786.0], [75.0, 786.0], [75.1, 787.0], [75.2, 787.0], [75.3, 787.0], [75.4, 787.0], [75.5, 787.0], [75.6, 787.0], [75.7, 788.0], [75.8, 788.0], [75.9, 788.0], [76.0, 788.0], [76.1, 788.0], [76.2, 789.0], [76.3, 789.0], [76.4, 789.0], [76.5, 789.0], [76.6, 789.0], [76.7, 790.0], [76.8, 790.0], [76.9, 790.0], [77.0, 790.0], [77.1, 790.0], [77.2, 790.0], [77.3, 790.0], [77.4, 790.0], [77.5, 791.0], [77.6, 791.0], [77.7, 791.0], [77.8, 791.0], [77.9, 791.0], [78.0, 792.0], [78.1, 792.0], [78.2, 792.0], [78.3, 792.0], [78.4, 792.0], [78.5, 792.0], [78.6, 793.0], [78.7, 793.0], [78.8, 793.0], [78.9, 793.0], [79.0, 793.0], [79.1, 794.0], [79.2, 794.0], [79.3, 794.0], [79.4, 794.0], [79.5, 794.0], [79.6, 794.0], [79.7, 795.0], [79.8, 795.0], [79.9, 795.0], [80.0, 795.0], [80.1, 795.0], [80.2, 796.0], [80.3, 796.0], [80.4, 796.0], [80.5, 796.0], [80.6, 796.0], [80.7, 796.0], [80.8, 797.0], [80.9, 797.0], [81.0, 797.0], [81.1, 797.0], [81.2, 797.0], [81.3, 798.0], [81.4, 798.0], [81.5, 798.0], [81.6, 798.0], [81.7, 798.0], [81.8, 798.0], [81.9, 799.0], [82.0, 799.0], [82.1, 799.0], [82.2, 799.0], [82.3, 799.0], [82.4, 800.0], [82.5, 800.0], [82.6, 800.0], [82.7, 800.0], [82.8, 800.0], [82.9, 801.0], [83.0, 801.0], [83.1, 801.0], [83.2, 801.0], [83.3, 801.0], [83.4, 802.0], [83.5, 802.0], [83.6, 802.0], [83.7, 802.0], [83.8, 802.0], [83.9, 802.0], [84.0, 802.0], [84.1, 803.0], [84.2, 803.0], [84.3, 803.0], [84.4, 803.0], [84.5, 803.0], [84.6, 803.0], [84.7, 804.0], [84.8, 804.0], [84.9, 804.0], [85.0, 804.0], [85.1, 804.0], [85.2, 805.0], [85.3, 805.0], [85.4, 805.0], [85.5, 805.0], [85.6, 805.0], [85.7, 805.0], [85.8, 805.0], [85.9, 806.0], [86.0, 806.0], [86.1, 806.0], [86.2, 806.0], [86.3, 806.0], [86.4, 806.0], [86.5, 807.0], [86.6, 807.0], [86.7, 807.0], [86.8, 807.0], [86.9, 807.0], [87.0, 808.0], [87.1, 808.0], [87.2, 808.0], [87.3, 808.0], [87.4, 809.0], [87.5, 809.0], [87.6, 809.0], [87.7, 809.0], [87.8, 809.0], [87.9, 810.0], [88.0, 810.0], [88.1, 810.0], [88.2, 811.0], [88.3, 811.0], [88.4, 811.0], [88.5, 811.0], [88.6, 811.0], [88.7, 812.0], [88.8, 812.0], [88.9, 812.0], [89.0, 812.0], [89.1, 813.0], [89.2, 813.0], [89.3, 813.0], [89.4, 814.0], [89.5, 814.0], [89.6, 814.0], [89.7, 814.0], [89.8, 814.0], [89.9, 814.0], [90.0, 815.0], [90.1, 815.0], [90.2, 815.0], [90.3, 815.0], [90.4, 815.0], [90.5, 816.0], [90.6, 816.0], [90.7, 816.0], [90.8, 816.0], [90.9, 817.0], [91.0, 817.0], [91.1, 817.0], [91.2, 817.0], [91.3, 818.0], [91.4, 818.0], [91.5, 818.0], [91.6, 818.0], [91.7, 819.0], [91.8, 819.0], [91.9, 819.0], [92.0, 820.0], [92.1, 820.0], [92.2, 820.0], [92.3, 820.0], [92.4, 821.0], [92.5, 821.0], [92.6, 821.0], [92.7, 821.0], [92.8, 821.0], [92.9, 822.0], [93.0, 822.0], [93.1, 823.0], [93.2, 823.0], [93.3, 823.0], [93.4, 824.0], [93.5, 824.0], [93.6, 824.0], [93.7, 825.0], [93.8, 825.0], [93.9, 825.0], [94.0, 825.0], [94.1, 826.0], [94.2, 826.0], [94.3, 826.0], [94.4, 826.0], [94.5, 826.0], [94.6, 827.0], [94.7, 827.0], [94.8, 827.0], [94.9, 827.0], [95.0, 828.0], [95.1, 828.0], [95.2, 828.0], [95.3, 829.0], [95.4, 830.0], [95.5, 830.0], [95.6, 831.0], [95.7, 831.0], [95.8, 832.0], [95.9, 832.0], [96.0, 833.0], [96.1, 833.0], [96.2, 833.0], [96.3, 834.0], [96.4, 834.0], [96.5, 835.0], [96.6, 835.0], [96.7, 836.0], [96.8, 836.0], [96.9, 837.0], [97.0, 837.0], [97.1, 838.0], [97.2, 839.0], [97.3, 839.0], [97.4, 840.0], [97.5, 840.0], [97.6, 841.0], [97.7, 842.0], [97.8, 843.0], [97.9, 843.0], [98.0, 844.0], [98.1, 844.0], [98.2, 845.0], [98.3, 846.0], [98.4, 847.0], [98.5, 848.0], [98.6, 849.0], [98.7, 851.0], [98.8, 852.0], [98.9, 853.0], [99.0, 854.0], [99.1, 856.0], [99.2, 857.0], [99.3, 859.0], [99.4, 860.0], [99.5, 861.0], [99.6, 862.0], [99.7, 865.0], [99.8, 867.0], [99.9, 869.0], [100.0, 879.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 100.0, "maxY": 3557.0, "series": [{"data": [[300.0, 9.0], [600.0, 477.0], [700.0, 1219.0], [100.0, 3557.0], [200.0, 650.0], [400.0, 29.0], [800.0, 1282.0], [500.0, 27.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7250.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7250.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 7250.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.727272727272725, "minX": 1.68320538E12, "maxY": 56.46419023497959, "series": [{"data": [[1.68320544E12, 56.46419023497959], [1.68320538E12, 7.727272727272725]], "isOverall": false, "label": "RPS Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320544E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 150.27397260273975, "minX": 1.0, "maxY": 799.0, "series": [{"data": [[2.0, 151.83333333333334], [32.0, 258.78632478632477], [35.0, 794.0], [37.0, 787.6666666666666], [36.0, 756.6363636363636], [39.0, 786.5], [41.0, 761.0], [40.0, 745.3333333333334], [43.0, 787.3333333333334], [11.0, 150.27397260273975], [45.0, 799.0], [47.0, 321.08467741935505], [50.0, 795.25], [14.0, 757.3333333333334], [15.0, 151.04347826086953], [60.0, 461.48943323727184], [1.0, 184.0], [4.0, 152.7307692307692], [19.0, 168.08294930875573], [20.0, 792.0], [21.0, 319.0], [24.0, 660.0], [7.0, 151.92857142857136], [28.0, 171.72592592592594]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[55.466344827586084, 430.26220689655173]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 781.7333333333333, "minX": 1.68320538E12, "maxY": 41102.15, "series": [{"data": [[1.68320544E12, 41102.15], [1.68320538E12, 827.0166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68320544E12, 38851.6], [1.68320538E12, 781.7333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320544E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 151.71328671328675, "minX": 1.68320538E12, "maxY": 435.86689179682054, "series": [{"data": [[1.68320544E12, 435.86689179682054], [1.68320538E12, 151.71328671328675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320544E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 151.55944055944053, "minX": 1.68320538E12, "maxY": 435.8258055438305, "series": [{"data": [[1.68320544E12, 435.8258055438305], [1.68320538E12, 151.55944055944053]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320544E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04235261010271571, "minX": 1.68320538E12, "maxY": 0.23776223776223804, "series": [{"data": [[1.68320544E12, 0.04235261010271571], [1.68320538E12, 0.23776223776223804]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320544E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 150.0, "minX": 1.0, "maxY": 787.0, "series": [{"data": [[130.0, 205.0], [129.0, 205.0], [128.0, 211.5], [150.0, 158.5], [144.0, 171.5], [39.0, 151.0], [10.0, 150.5], [60.0, 787.0], [1.0, 184.0], [69.0, 151.0], [87.0, 151.0], [92.0, 169.5], [24.0, 152.0], [105.0, 176.0], [118.0, 150.0], [124.0, 181.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 150.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 150.0, "minX": 1.0, "maxY": 787.0, "series": [{"data": [[130.0, 205.0], [129.0, 205.0], [128.0, 211.5], [150.0, 158.5], [144.0, 171.5], [39.0, 151.0], [10.0, 150.5], [60.0, 787.0], [1.0, 182.0], [69.0, 151.0], [87.0, 151.0], [92.0, 169.5], [24.0, 152.0], [105.0, 173.0], [118.0, 150.0], [124.0, 181.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 150.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.566666666666667, "minX": 1.68320538E12, "maxY": 118.26666666666667, "series": [{"data": [[1.68320544E12, 118.26666666666667], [1.68320538E12, 2.566666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320544E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.3833333333333333, "minX": 1.68320538E12, "maxY": 118.45, "series": [{"data": [[1.68320544E12, 118.45], [1.68320538E12, 2.3833333333333333]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320544E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.3833333333333333, "minX": 1.68320538E12, "maxY": 118.45, "series": [{"data": [[1.68320544E12, 118.45], [1.68320538E12, 2.3833333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320544E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.3833333333333333, "minX": 1.68320538E12, "maxY": 118.45, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68320544E12, 118.45], [1.68320538E12, 2.3833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320544E12, "title": "Total Transactions Per Second"}},
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

