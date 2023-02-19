var user = "admin";

switch(user){
    case "admin":
        console.log("You have full access!!");
        break;
        
    case "subadmin":
        console.log("You have access create and delete");
        break;
        
    case "testprep":
        console.log("You have access create and delete tests");
        break;
        
    case "user":
        console.log("Get access to consume the content");
        break;

    default:
        console.log("Trail user");
        break;
}