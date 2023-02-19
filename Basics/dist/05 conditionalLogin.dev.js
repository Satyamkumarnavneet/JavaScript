"use strict";

var email = true;
var facebook = false;
var insta = true;
var gitHub = true;

if (email || facebook || insta || gitHub) {
  console.log("Login success!!");
} else {
  console.log("Login UnSuccessfull");
}

var authenticated = false;

if (authenticated) {
  console.log("Show signOut Button");
} else {
  console.log("Show login option");
} // Ternary operators


authenticated ? console.log("SignOut button") : console.log("Log in button");