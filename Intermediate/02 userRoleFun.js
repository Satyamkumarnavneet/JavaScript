function getUserInfo(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all the access.`;
            break;
        
        case "subadmin":
            return `${name} is a subadmin with the access of creating and deleting course.`;
            break;

        case "testperp":
            return `${name} is a testperp with the access of creating and deleting tests.`;
            break;
        
        case "user":
            return `${name} is a user to consume content.`;
            break;    
    
        default:
            return `${name} is a user trail user.`;
            break;
    }
}


console.log(getUserInfo("Satyam", "admin"));

var getRole = getUserInfo("Sweety", "subadmin");
console.log(getRole);