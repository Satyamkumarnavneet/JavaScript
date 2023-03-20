var users = {
    firstName : "Satyam",
    lastName : "kumar",
    role : "Admin",
    loginCount : 23,
    facebookSignIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
        
    }
};

var courseList = true;
console.log(users.firstName);
console.log(users.getCourseCount());
users.buyCourse("React JS course");
users.buyCourse("JS course");
console.log(users.getCourseCount());