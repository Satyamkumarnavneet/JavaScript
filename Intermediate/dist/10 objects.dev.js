"use strict";

var users = {
  firstName: "Satyam",
  lastName: "kumar",
  role: "Admin",
  loginCount: 23,
  facebookSignIn: true
};
console.log(users.firstName);
console.log(users["lastName"]);
users.loginCount = 55;
console.log(users.loginCount);
console.log(users);
console.table(users);
var mobileSpecf = {
  DeviceName: "Vivo s1 pro",
  RAM: "8GB",
  ROM: 128,
  RAMType: "DDR4",
  Fcam: "48mp",
  Bcam: "64,16,8,4mp",
  USBType: "C",
  FingerPrint: true,
  FingerPrintType: "ScrrenF",
  ScreenType: "sAmoled"
};
console.log(mobileSpecf);
console.table(mobileSpecf);