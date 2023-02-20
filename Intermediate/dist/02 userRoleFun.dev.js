"use strict";

function getUserInfo(name, role) {
  switch (role) {
    case "admin":
      return "".concat(name, " is admin with all the access.");
      break;

    case "subadmin":
      return "".concat(name, " is a subadmin with the access of creating and deleting course.");
      break;

    case "testperp":
      return "".concat(name, " is a testperp with the access of creating and deleting tests.");
      break;

    case "user":
      return "".concat(name, " is a user to consume content.");
      break;

    default:
      return "".concat(name, " is a user trail user.");
      break;
  }
}

console.log(getUserInfo("Satyam", "admin"));
var getRole = getUserInfo("Sweety", "subadmin");
console.log(getRole);