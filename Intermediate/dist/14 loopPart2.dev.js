"use strict";

var names = ["Youtube", "Amazon", "Flipkart", "Netflix", "Whatsapp"]; // For of loop
// for(const n of names){
//     console.log(n);
// }

var symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  skn: "Satyamkumarnavneet"
};

for (var n in symbols) {
  console.log(symbols[n]);
}