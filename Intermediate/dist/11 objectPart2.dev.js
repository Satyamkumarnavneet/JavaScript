"use strict";

var users = {
  firstName: "Satyam",
  lastName: "kumar",
  role: "Admin",
  loginCount: 23,
  facebookSignIn: true,
  courseList: [],
  buyCourse: function buyCourse(courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function getCourseCount() {
    return "".concat(this.firstName, " is enrolled in total of ").concat(this.courseList.length);
  }
};
var courseList = true;
console.log(users.firstName);
console.log(users.getCourseCount());
users.buyCourse("React JS course");
users.buyCourse("JS course");
console.log(users.getCourseCount());