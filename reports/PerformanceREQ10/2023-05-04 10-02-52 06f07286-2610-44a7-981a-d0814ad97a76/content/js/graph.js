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
        data: {"result": {"minY": 148.0, "minX": 0.0, "maxY": 3062.0, "series": [{"data": [[0.0, 148.0], [0.1, 149.0], [0.2, 151.0], [0.3, 153.0], [0.4, 154.0], [0.5, 156.0], [0.6, 157.0], [0.7, 158.0], [0.8, 159.0], [0.9, 163.0], [1.0, 167.0], [1.1, 171.0], [1.2, 176.0], [1.3, 179.0], [1.4, 180.0], [1.5, 181.0], [1.6, 182.0], [1.7, 183.0], [1.8, 183.0], [1.9, 184.0], [2.0, 185.0], [2.1, 185.0], [2.2, 186.0], [2.3, 187.0], [2.4, 187.0], [2.5, 187.0], [2.6, 188.0], [2.7, 188.0], [2.8, 189.0], [2.9, 189.0], [3.0, 189.0], [3.1, 189.0], [3.2, 190.0], [3.3, 190.0], [3.4, 190.0], [3.5, 190.0], [3.6, 191.0], [3.7, 191.0], [3.8, 191.0], [3.9, 191.0], [4.0, 192.0], [4.1, 192.0], [4.2, 192.0], [4.3, 192.0], [4.4, 192.0], [4.5, 192.0], [4.6, 193.0], [4.7, 193.0], [4.8, 193.0], [4.9, 193.0], [5.0, 193.0], [5.1, 193.0], [5.2, 194.0], [5.3, 194.0], [5.4, 194.0], [5.5, 194.0], [5.6, 194.0], [5.7, 194.0], [5.8, 194.0], [5.9, 195.0], [6.0, 195.0], [6.1, 195.0], [6.2, 195.0], [6.3, 195.0], [6.4, 195.0], [6.5, 196.0], [6.6, 196.0], [6.7, 196.0], [6.8, 196.0], [6.9, 196.0], [7.0, 196.0], [7.1, 196.0], [7.2, 196.0], [7.3, 197.0], [7.4, 197.0], [7.5, 197.0], [7.6, 197.0], [7.7, 197.0], [7.8, 197.0], [7.9, 197.0], [8.0, 197.0], [8.1, 197.0], [8.2, 198.0], [8.3, 198.0], [8.4, 198.0], [8.5, 198.0], [8.6, 198.0], [8.7, 198.0], [8.8, 198.0], [8.9, 198.0], [9.0, 199.0], [9.1, 199.0], [9.2, 199.0], [9.3, 199.0], [9.4, 199.0], [9.5, 199.0], [9.6, 199.0], [9.7, 200.0], [9.8, 200.0], [9.9, 200.0], [10.0, 200.0], [10.1, 200.0], [10.2, 201.0], [10.3, 201.0], [10.4, 201.0], [10.5, 201.0], [10.6, 202.0], [10.7, 202.0], [10.8, 202.0], [10.9, 202.0], [11.0, 203.0], [11.1, 203.0], [11.2, 203.0], [11.3, 204.0], [11.4, 204.0], [11.5, 204.0], [11.6, 204.0], [11.7, 205.0], [11.8, 205.0], [11.9, 206.0], [12.0, 206.0], [12.1, 207.0], [12.2, 208.0], [12.3, 208.0], [12.4, 208.0], [12.5, 209.0], [12.6, 209.0], [12.7, 210.0], [12.8, 212.0], [12.9, 213.0], [13.0, 214.0], [13.1, 216.0], [13.2, 217.0], [13.3, 219.0], [13.4, 228.0], [13.5, 253.0], [13.6, 258.0], [13.7, 263.0], [13.8, 268.0], [13.9, 269.0], [14.0, 269.0], [14.1, 270.0], [14.2, 272.0], [14.3, 272.0], [14.4, 274.0], [14.5, 275.0], [14.6, 276.0], [14.7, 278.0], [14.8, 279.0], [14.9, 280.0], [15.0, 281.0], [15.1, 281.0], [15.2, 282.0], [15.3, 283.0], [15.4, 283.0], [15.5, 285.0], [15.6, 286.0], [15.7, 286.0], [15.8, 288.0], [15.9, 289.0], [16.0, 290.0], [16.1, 291.0], [16.2, 292.0], [16.3, 293.0], [16.4, 294.0], [16.5, 295.0], [16.6, 296.0], [16.7, 296.0], [16.8, 297.0], [16.9, 298.0], [17.0, 299.0], [17.1, 300.0], [17.2, 301.0], [17.3, 302.0], [17.4, 304.0], [17.5, 305.0], [17.6, 305.0], [17.7, 306.0], [17.8, 307.0], [17.9, 308.0], [18.0, 310.0], [18.1, 314.0], [18.2, 317.0], [18.3, 319.0], [18.4, 321.0], [18.5, 323.0], [18.6, 326.0], [18.7, 328.0], [18.8, 330.0], [18.9, 331.0], [19.0, 333.0], [19.1, 337.0], [19.2, 355.0], [19.3, 375.0], [19.4, 387.0], [19.5, 398.0], [19.6, 405.0], [19.7, 414.0], [19.8, 420.0], [19.9, 424.0], [20.0, 431.0], [20.1, 435.0], [20.2, 437.0], [20.3, 439.0], [20.4, 442.0], [20.5, 445.0], [20.6, 447.0], [20.7, 452.0], [20.8, 455.0], [20.9, 458.0], [21.0, 472.0], [21.1, 477.0], [21.2, 480.0], [21.3, 494.0], [21.4, 527.0], [21.5, 537.0], [21.6, 555.0], [21.7, 565.0], [21.8, 583.0], [21.9, 603.0], [22.0, 628.0], [22.1, 644.0], [22.2, 677.0], [22.3, 692.0], [22.4, 703.0], [22.5, 714.0], [22.6, 723.0], [22.7, 728.0], [22.8, 733.0], [22.9, 737.0], [23.0, 740.0], [23.1, 742.0], [23.2, 746.0], [23.3, 749.0], [23.4, 754.0], [23.5, 757.0], [23.6, 761.0], [23.7, 766.0], [23.8, 769.0], [23.9, 772.0], [24.0, 774.0], [24.1, 776.0], [24.2, 777.0], [24.3, 779.0], [24.4, 780.0], [24.5, 782.0], [24.6, 784.0], [24.7, 786.0], [24.8, 788.0], [24.9, 789.0], [25.0, 789.0], [25.1, 792.0], [25.2, 793.0], [25.3, 795.0], [25.4, 796.0], [25.5, 799.0], [25.6, 801.0], [25.7, 804.0], [25.8, 805.0], [25.9, 807.0], [26.0, 808.0], [26.1, 810.0], [26.2, 812.0], [26.3, 813.0], [26.4, 815.0], [26.5, 815.0], [26.6, 817.0], [26.7, 819.0], [26.8, 820.0], [26.9, 821.0], [27.0, 822.0], [27.1, 822.0], [27.2, 823.0], [27.3, 823.0], [27.4, 824.0], [27.5, 825.0], [27.6, 825.0], [27.7, 826.0], [27.8, 826.0], [27.9, 827.0], [28.0, 827.0], [28.1, 828.0], [28.2, 828.0], [28.3, 828.0], [28.4, 829.0], [28.5, 829.0], [28.6, 830.0], [28.7, 831.0], [28.8, 831.0], [28.9, 832.0], [29.0, 833.0], [29.1, 833.0], [29.2, 834.0], [29.3, 834.0], [29.4, 835.0], [29.5, 836.0], [29.6, 836.0], [29.7, 837.0], [29.8, 837.0], [29.9, 838.0], [30.0, 839.0], [30.1, 839.0], [30.2, 839.0], [30.3, 840.0], [30.4, 840.0], [30.5, 841.0], [30.6, 841.0], [30.7, 842.0], [30.8, 842.0], [30.9, 843.0], [31.0, 843.0], [31.1, 844.0], [31.2, 844.0], [31.3, 845.0], [31.4, 845.0], [31.5, 845.0], [31.6, 846.0], [31.7, 846.0], [31.8, 846.0], [31.9, 847.0], [32.0, 847.0], [32.1, 848.0], [32.2, 848.0], [32.3, 848.0], [32.4, 849.0], [32.5, 849.0], [32.6, 849.0], [32.7, 850.0], [32.8, 850.0], [32.9, 851.0], [33.0, 851.0], [33.1, 852.0], [33.2, 852.0], [33.3, 852.0], [33.4, 853.0], [33.5, 853.0], [33.6, 853.0], [33.7, 853.0], [33.8, 854.0], [33.9, 854.0], [34.0, 855.0], [34.1, 855.0], [34.2, 855.0], [34.3, 855.0], [34.4, 856.0], [34.5, 856.0], [34.6, 857.0], [34.7, 857.0], [34.8, 857.0], [34.9, 857.0], [35.0, 858.0], [35.1, 858.0], [35.2, 858.0], [35.3, 859.0], [35.4, 859.0], [35.5, 859.0], [35.6, 860.0], [35.7, 860.0], [35.8, 860.0], [35.9, 860.0], [36.0, 861.0], [36.1, 861.0], [36.2, 861.0], [36.3, 862.0], [36.4, 862.0], [36.5, 862.0], [36.6, 862.0], [36.7, 863.0], [36.8, 863.0], [36.9, 863.0], [37.0, 863.0], [37.1, 863.0], [37.2, 863.0], [37.3, 864.0], [37.4, 864.0], [37.5, 864.0], [37.6, 864.0], [37.7, 865.0], [37.8, 865.0], [37.9, 865.0], [38.0, 865.0], [38.1, 866.0], [38.2, 866.0], [38.3, 866.0], [38.4, 866.0], [38.5, 866.0], [38.6, 867.0], [38.7, 867.0], [38.8, 867.0], [38.9, 867.0], [39.0, 867.0], [39.1, 867.0], [39.2, 868.0], [39.3, 868.0], [39.4, 868.0], [39.5, 868.0], [39.6, 869.0], [39.7, 869.0], [39.8, 869.0], [39.9, 869.0], [40.0, 869.0], [40.1, 870.0], [40.2, 870.0], [40.3, 870.0], [40.4, 870.0], [40.5, 870.0], [40.6, 871.0], [40.7, 871.0], [40.8, 871.0], [40.9, 871.0], [41.0, 871.0], [41.1, 871.0], [41.2, 872.0], [41.3, 872.0], [41.4, 872.0], [41.5, 872.0], [41.6, 873.0], [41.7, 873.0], [41.8, 873.0], [41.9, 873.0], [42.0, 873.0], [42.1, 873.0], [42.2, 874.0], [42.3, 874.0], [42.4, 874.0], [42.5, 874.0], [42.6, 874.0], [42.7, 874.0], [42.8, 875.0], [42.9, 875.0], [43.0, 875.0], [43.1, 875.0], [43.2, 875.0], [43.3, 875.0], [43.4, 875.0], [43.5, 875.0], [43.6, 876.0], [43.7, 876.0], [43.8, 876.0], [43.9, 876.0], [44.0, 876.0], [44.1, 876.0], [44.2, 876.0], [44.3, 877.0], [44.4, 877.0], [44.5, 877.0], [44.6, 877.0], [44.7, 877.0], [44.8, 877.0], [44.9, 878.0], [45.0, 878.0], [45.1, 878.0], [45.2, 879.0], [45.3, 879.0], [45.4, 879.0], [45.5, 879.0], [45.6, 879.0], [45.7, 879.0], [45.8, 880.0], [45.9, 880.0], [46.0, 880.0], [46.1, 880.0], [46.2, 881.0], [46.3, 881.0], [46.4, 881.0], [46.5, 881.0], [46.6, 881.0], [46.7, 882.0], [46.8, 882.0], [46.9, 882.0], [47.0, 882.0], [47.1, 882.0], [47.2, 883.0], [47.3, 883.0], [47.4, 883.0], [47.5, 883.0], [47.6, 883.0], [47.7, 884.0], [47.8, 884.0], [47.9, 884.0], [48.0, 884.0], [48.1, 884.0], [48.2, 884.0], [48.3, 885.0], [48.4, 885.0], [48.5, 885.0], [48.6, 885.0], [48.7, 885.0], [48.8, 886.0], [48.9, 886.0], [49.0, 886.0], [49.1, 886.0], [49.2, 886.0], [49.3, 887.0], [49.4, 887.0], [49.5, 887.0], [49.6, 887.0], [49.7, 887.0], [49.8, 888.0], [49.9, 888.0], [50.0, 888.0], [50.1, 888.0], [50.2, 888.0], [50.3, 889.0], [50.4, 889.0], [50.5, 889.0], [50.6, 890.0], [50.7, 890.0], [50.8, 890.0], [50.9, 891.0], [51.0, 891.0], [51.1, 891.0], [51.2, 891.0], [51.3, 892.0], [51.4, 892.0], [51.5, 892.0], [51.6, 892.0], [51.7, 893.0], [51.8, 893.0], [51.9, 893.0], [52.0, 893.0], [52.1, 894.0], [52.2, 894.0], [52.3, 894.0], [52.4, 894.0], [52.5, 895.0], [52.6, 895.0], [52.7, 895.0], [52.8, 896.0], [52.9, 896.0], [53.0, 896.0], [53.1, 897.0], [53.2, 897.0], [53.3, 898.0], [53.4, 898.0], [53.5, 898.0], [53.6, 899.0], [53.7, 899.0], [53.8, 900.0], [53.9, 900.0], [54.0, 901.0], [54.1, 902.0], [54.2, 902.0], [54.3, 902.0], [54.4, 903.0], [54.5, 903.0], [54.6, 904.0], [54.7, 904.0], [54.8, 905.0], [54.9, 905.0], [55.0, 906.0], [55.1, 906.0], [55.2, 907.0], [55.3, 907.0], [55.4, 908.0], [55.5, 908.0], [55.6, 909.0], [55.7, 909.0], [55.8, 909.0], [55.9, 910.0], [56.0, 910.0], [56.1, 911.0], [56.2, 911.0], [56.3, 912.0], [56.4, 912.0], [56.5, 912.0], [56.6, 913.0], [56.7, 914.0], [56.8, 914.0], [56.9, 915.0], [57.0, 915.0], [57.1, 916.0], [57.2, 916.0], [57.3, 917.0], [57.4, 918.0], [57.5, 919.0], [57.6, 919.0], [57.7, 921.0], [57.8, 922.0], [57.9, 923.0], [58.0, 924.0], [58.1, 925.0], [58.2, 925.0], [58.3, 926.0], [58.4, 926.0], [58.5, 927.0], [58.6, 927.0], [58.7, 928.0], [58.8, 928.0], [58.9, 929.0], [59.0, 929.0], [59.1, 929.0], [59.2, 930.0], [59.3, 930.0], [59.4, 931.0], [59.5, 931.0], [59.6, 932.0], [59.7, 932.0], [59.8, 933.0], [59.9, 933.0], [60.0, 934.0], [60.1, 934.0], [60.2, 935.0], [60.3, 935.0], [60.4, 935.0], [60.5, 936.0], [60.6, 937.0], [60.7, 937.0], [60.8, 938.0], [60.9, 938.0], [61.0, 939.0], [61.1, 939.0], [61.2, 940.0], [61.3, 940.0], [61.4, 940.0], [61.5, 941.0], [61.6, 941.0], [61.7, 941.0], [61.8, 942.0], [61.9, 942.0], [62.0, 942.0], [62.1, 943.0], [62.2, 943.0], [62.3, 944.0], [62.4, 944.0], [62.5, 945.0], [62.6, 945.0], [62.7, 946.0], [62.8, 946.0], [62.9, 947.0], [63.0, 947.0], [63.1, 947.0], [63.2, 948.0], [63.3, 948.0], [63.4, 948.0], [63.5, 948.0], [63.6, 949.0], [63.7, 949.0], [63.8, 949.0], [63.9, 950.0], [64.0, 950.0], [64.1, 950.0], [64.2, 950.0], [64.3, 951.0], [64.4, 951.0], [64.5, 951.0], [64.6, 951.0], [64.7, 951.0], [64.8, 951.0], [64.9, 952.0], [65.0, 952.0], [65.1, 952.0], [65.2, 952.0], [65.3, 953.0], [65.4, 953.0], [65.5, 953.0], [65.6, 953.0], [65.7, 953.0], [65.8, 953.0], [65.9, 954.0], [66.0, 954.0], [66.1, 954.0], [66.2, 954.0], [66.3, 955.0], [66.4, 955.0], [66.5, 955.0], [66.6, 955.0], [66.7, 955.0], [66.8, 955.0], [66.9, 956.0], [67.0, 956.0], [67.1, 956.0], [67.2, 956.0], [67.3, 957.0], [67.4, 957.0], [67.5, 957.0], [67.6, 958.0], [67.7, 958.0], [67.8, 958.0], [67.9, 958.0], [68.0, 959.0], [68.1, 959.0], [68.2, 959.0], [68.3, 959.0], [68.4, 959.0], [68.5, 959.0], [68.6, 959.0], [68.7, 960.0], [68.8, 960.0], [68.9, 960.0], [69.0, 960.0], [69.1, 960.0], [69.2, 960.0], [69.3, 961.0], [69.4, 961.0], [69.5, 961.0], [69.6, 961.0], [69.7, 961.0], [69.8, 962.0], [69.9, 962.0], [70.0, 962.0], [70.1, 962.0], [70.2, 962.0], [70.3, 963.0], [70.4, 963.0], [70.5, 963.0], [70.6, 963.0], [70.7, 963.0], [70.8, 963.0], [70.9, 963.0], [71.0, 963.0], [71.1, 964.0], [71.2, 964.0], [71.3, 964.0], [71.4, 964.0], [71.5, 964.0], [71.6, 964.0], [71.7, 965.0], [71.8, 965.0], [71.9, 965.0], [72.0, 965.0], [72.1, 965.0], [72.2, 965.0], [72.3, 965.0], [72.4, 965.0], [72.5, 966.0], [72.6, 966.0], [72.7, 966.0], [72.8, 966.0], [72.9, 966.0], [73.0, 966.0], [73.1, 967.0], [73.2, 967.0], [73.3, 967.0], [73.4, 967.0], [73.5, 967.0], [73.6, 967.0], [73.7, 968.0], [73.8, 968.0], [73.9, 968.0], [74.0, 968.0], [74.1, 968.0], [74.2, 969.0], [74.3, 969.0], [74.4, 969.0], [74.5, 969.0], [74.6, 969.0], [74.7, 969.0], [74.8, 970.0], [74.9, 970.0], [75.0, 970.0], [75.1, 970.0], [75.2, 970.0], [75.3, 970.0], [75.4, 971.0], [75.5, 971.0], [75.6, 971.0], [75.7, 971.0], [75.8, 971.0], [75.9, 971.0], [76.0, 971.0], [76.1, 972.0], [76.2, 972.0], [76.3, 972.0], [76.4, 972.0], [76.5, 972.0], [76.6, 972.0], [76.7, 972.0], [76.8, 972.0], [76.9, 973.0], [77.0, 973.0], [77.1, 973.0], [77.2, 973.0], [77.3, 973.0], [77.4, 974.0], [77.5, 974.0], [77.6, 974.0], [77.7, 974.0], [77.8, 974.0], [77.9, 974.0], [78.0, 974.0], [78.1, 975.0], [78.2, 975.0], [78.3, 975.0], [78.4, 975.0], [78.5, 975.0], [78.6, 975.0], [78.7, 975.0], [78.8, 976.0], [78.9, 976.0], [79.0, 976.0], [79.1, 976.0], [79.2, 976.0], [79.3, 976.0], [79.4, 976.0], [79.5, 976.0], [79.6, 976.0], [79.7, 977.0], [79.8, 977.0], [79.9, 977.0], [80.0, 977.0], [80.1, 977.0], [80.2, 977.0], [80.3, 977.0], [80.4, 977.0], [80.5, 978.0], [80.6, 978.0], [80.7, 978.0], [80.8, 978.0], [80.9, 978.0], [81.0, 978.0], [81.1, 978.0], [81.2, 978.0], [81.3, 979.0], [81.4, 979.0], [81.5, 979.0], [81.6, 979.0], [81.7, 979.0], [81.8, 979.0], [81.9, 979.0], [82.0, 979.0], [82.1, 979.0], [82.2, 980.0], [82.3, 980.0], [82.4, 980.0], [82.5, 980.0], [82.6, 980.0], [82.7, 980.0], [82.8, 980.0], [82.9, 980.0], [83.0, 981.0], [83.1, 981.0], [83.2, 981.0], [83.3, 981.0], [83.4, 981.0], [83.5, 981.0], [83.6, 981.0], [83.7, 982.0], [83.8, 982.0], [83.9, 982.0], [84.0, 982.0], [84.1, 982.0], [84.2, 982.0], [84.3, 982.0], [84.4, 982.0], [84.5, 983.0], [84.6, 983.0], [84.7, 983.0], [84.8, 983.0], [84.9, 983.0], [85.0, 984.0], [85.1, 984.0], [85.2, 984.0], [85.3, 984.0], [85.4, 984.0], [85.5, 984.0], [85.6, 984.0], [85.7, 984.0], [85.8, 985.0], [85.9, 985.0], [86.0, 985.0], [86.1, 985.0], [86.2, 986.0], [86.3, 986.0], [86.4, 986.0], [86.5, 986.0], [86.6, 986.0], [86.7, 986.0], [86.8, 986.0], [86.9, 987.0], [87.0, 987.0], [87.1, 987.0], [87.2, 987.0], [87.3, 987.0], [87.4, 988.0], [87.5, 988.0], [87.6, 988.0], [87.7, 988.0], [87.8, 989.0], [87.9, 989.0], [88.0, 989.0], [88.1, 989.0], [88.2, 989.0], [88.3, 989.0], [88.4, 990.0], [88.5, 990.0], [88.6, 990.0], [88.7, 990.0], [88.8, 991.0], [88.9, 991.0], [89.0, 991.0], [89.1, 992.0], [89.2, 992.0], [89.3, 992.0], [89.4, 992.0], [89.5, 993.0], [89.6, 993.0], [89.7, 993.0], [89.8, 994.0], [89.9, 994.0], [90.0, 994.0], [90.1, 995.0], [90.2, 995.0], [90.3, 995.0], [90.4, 995.0], [90.5, 995.0], [90.6, 996.0], [90.7, 996.0], [90.8, 996.0], [90.9, 997.0], [91.0, 997.0], [91.1, 997.0], [91.2, 998.0], [91.3, 998.0], [91.4, 998.0], [91.5, 998.0], [91.6, 999.0], [91.7, 999.0], [91.8, 999.0], [91.9, 1000.0], [92.0, 1000.0], [92.1, 1000.0], [92.2, 1001.0], [92.3, 1001.0], [92.4, 1001.0], [92.5, 1002.0], [92.6, 1002.0], [92.7, 1002.0], [92.8, 1003.0], [92.9, 1003.0], [93.0, 1003.0], [93.1, 1003.0], [93.2, 1004.0], [93.3, 1004.0], [93.4, 1004.0], [93.5, 1005.0], [93.6, 1005.0], [93.7, 1006.0], [93.8, 1006.0], [93.9, 1007.0], [94.0, 1007.0], [94.1, 1008.0], [94.2, 1008.0], [94.3, 1008.0], [94.4, 1009.0], [94.5, 1009.0], [94.6, 1010.0], [94.7, 1011.0], [94.8, 1011.0], [94.9, 1011.0], [95.0, 1012.0], [95.1, 1012.0], [95.2, 1013.0], [95.3, 1014.0], [95.4, 1016.0], [95.5, 1017.0], [95.6, 1018.0], [95.7, 1019.0], [95.8, 1022.0], [95.9, 1023.0], [96.0, 1023.0], [96.1, 1024.0], [96.2, 1025.0], [96.3, 1026.0], [96.4, 1027.0], [96.5, 1028.0], [96.6, 1029.0], [96.7, 1030.0], [96.8, 1031.0], [96.9, 1032.0], [97.0, 1033.0], [97.1, 1035.0], [97.2, 1045.0], [97.3, 1049.0], [97.4, 1050.0], [97.5, 1052.0], [97.6, 1055.0], [97.7, 1055.0], [97.8, 1057.0], [97.9, 1061.0], [98.0, 1063.0], [98.1, 1070.0], [98.2, 1073.0], [98.3, 1076.0], [98.4, 1078.0], [98.5, 1085.0], [98.6, 1089.0], [98.7, 1097.0], [98.8, 1109.0], [98.9, 1159.0], [99.0, 1516.0], [99.1, 1710.0], [99.2, 1877.0], [99.3, 1979.0], [99.4, 2007.0], [99.5, 2857.0], [99.6, 2931.0], [99.7, 2945.0], [99.8, 2956.0], [99.9, 2984.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2654.0, "series": [{"data": [[600.0, 32.0], [700.0, 220.0], [800.0, 1963.0], [900.0, 2654.0], [1000.0, 477.0], [1100.0, 15.0], [1200.0, 1.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 2.0], [100.0, 670.0], [1600.0, 4.0], [1700.0, 2.0], [1800.0, 7.0], [1900.0, 11.0], [2000.0, 4.0], [2100.0, 2.0], [2400.0, 1.0], [2800.0, 5.0], [2700.0, 2.0], [2900.0, 27.0], [3000.0, 3.0], [200.0, 517.0], [300.0, 171.0], [400.0, 126.0], [500.0, 40.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6959.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 6959.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6959.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.32330827067669, "minX": 1.68320532E12, "maxY": 99.45256237860454, "series": [{"data": [[1.68320532E12, 50.32330827067669], [1.68320538E12, 99.45256237860454]], "isOverall": false, "label": "RPS Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320538E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 289.0, "minX": 2.0, "maxY": 1106.0666666666668, "series": [{"data": [[2.0, 447.3333333333333], [33.0, 843.0], [32.0, 914.5], [35.0, 912.0], [34.0, 843.0], [36.0, 438.0], [37.0, 865.0], [39.0, 917.0], [41.0, 859.0], [43.0, 888.5], [42.0, 885.25], [45.0, 913.0], [44.0, 849.5], [47.0, 919.5], [49.0, 880.0], [3.0, 847.0], [51.0, 833.0], [50.0, 833.0], [52.0, 439.3333333333333], [53.0, 630.5], [59.0, 813.0], [66.0, 532.5616438356166], [70.0, 812.0], [73.0, 1002.0], [79.0, 997.0], [81.0, 776.7912087912084], [83.0, 983.0], [85.0, 874.0], [88.0, 994.0], [95.0, 986.0], [100.0, 799.009818731119], [8.0, 412.625], [13.0, 289.0], [15.0, 388.0], [18.0, 1106.0666666666668], [20.0, 1035.0], [26.0, 455.38888888888886], [27.0, 915.0], [28.0, 862.0], [29.0, 597.3333333333334], [30.0, 865.0], [31.0, 863.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[97.53887052737478, 790.8586003736154]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1538.3666666666666, "minX": 1.68320532E12, "maxY": 42615.13333333333, "series": [{"data": [[1.68320532E12, 1538.3666666666666], [1.68320538E12, 39365.183333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68320532E12, 1697.9666666666667], [1.68320538E12, 42615.13333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320538E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 549.6992481203009, "minX": 1.68320532E12, "maxY": 800.4430001494082, "series": [{"data": [[1.68320532E12, 549.6992481203009], [1.68320538E12, 800.4430001494082]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320538E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 549.578947368421, "minX": 1.68320532E12, "maxY": 797.4253697893323, "series": [{"data": [[1.68320532E12, 549.578947368421], [1.68320538E12, 797.4253697893323]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320538E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.029433736739877515, "minX": 1.68320532E12, "maxY": 1.0338345864661656, "series": [{"data": [[1.68320532E12, 1.0338345864661656], [1.68320538E12, 0.029433736739877515]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320538E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 154.0, "minX": 7.0, "maxY": 963.0, "series": [{"data": [[32.0, 343.0], [52.0, 437.0], [69.0, 449.0], [88.0, 742.5], [102.0, 813.5], [100.0, 914.5], [107.0, 891.0], [108.0, 901.0], [109.0, 963.0], [111.0, 882.0], [7.0, 154.0], [113.0, 930.5], [114.0, 898.0], [112.0, 961.5], [115.0, 962.5], [116.0, 948.0], [120.0, 894.5], [122.0, 869.5], [121.0, 889.0], [123.0, 871.0], [124.0, 898.0], [125.0, 889.0], [127.0, 939.0], [126.0, 889.0], [129.0, 887.0], [128.0, 895.0], [130.0, 906.0], [132.0, 907.5], [131.0, 892.0], [133.0, 946.0], [135.0, 854.0], [137.0, 885.0], [136.0, 886.0], [138.0, 932.5], [140.0, 789.5], [139.0, 875.0], [18.0, 403.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 140.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 154.0, "minX": 7.0, "maxY": 963.0, "series": [{"data": [[32.0, 343.0], [52.0, 437.0], [69.0, 443.0], [88.0, 742.5], [102.0, 813.5], [100.0, 895.0], [107.0, 888.5], [108.0, 895.0], [109.0, 963.0], [111.0, 882.0], [7.0, 154.0], [113.0, 930.5], [114.0, 898.0], [112.0, 961.5], [115.0, 962.5], [116.0, 948.0], [120.0, 894.5], [122.0, 869.5], [121.0, 889.0], [123.0, 871.0], [124.0, 898.0], [125.0, 889.0], [127.0, 939.0], [126.0, 889.0], [129.0, 887.0], [128.0, 895.0], [130.0, 906.0], [132.0, 906.0], [131.0, 892.0], [133.0, 946.0], [135.0, 854.0], [137.0, 885.0], [136.0, 886.0], [138.0, 932.5], [140.0, 789.5], [139.0, 875.0], [18.0, 403.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 140.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.783333333333333, "minX": 1.68320532E12, "maxY": 110.2, "series": [{"data": [[1.68320532E12, 5.783333333333333], [1.68320538E12, 110.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320538E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.68320532E12, "maxY": 111.26666666666667, "series": [{"data": [[1.68320532E12, 4.433333333333334], [1.68320538E12, 111.26666666666667]], "isOverall": false, "label": "404", "isController": false}, {"data": [[1.68320538E12, 0.2833333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68320538E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.433333333333334, "minX": 1.68320532E12, "maxY": 111.55, "series": [{"data": [[1.68320532E12, 4.433333333333334], [1.68320538E12, 111.55]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320538E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.433333333333334, "minX": 1.68320532E12, "maxY": 111.55, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68320532E12, 4.433333333333334], [1.68320538E12, 111.55]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68320538E12, "title": "Total Transactions Per Second"}},
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

