// Below is the function that will create what's called an event listener and will capture the number that is given by the user once the enter button is pressed
function invitation(){ 
    document.getElementById("numrecip").addEventListener("keypress", enterkey);
}

function enterkey(e){
    if (e.which == 13) { // If the ENTER key (the numerical value of "13") was pressed then carry on with the rest of the following function
    var nrecip = document.getElementById("numrecip").value;

// Below is a "for loop" that loops a user define amount of times that was determined in previous function 
        for (i = 0; i < Math.abs(nrecip); i++){

// Below is the variable that generates a new paragraph that is constructed from the following field variables as defined by the user        
        var paragraph = document.createElement("p") 

// The following variable will pair each preset field with the matching user defined information that was provided
        var information = document.createElement("input"); 
            information.id = "name[" + i + "]";
            information.type = "text";
            information.placeholder = "Input receiver " + (i+1) + "'s name";
            paragraph.appendChild(information); 

// The above "appendChild" command will compile all the the user information to create the paragraph
        var element = document.getElementById("information");
        element.appendChild(paragraph);
        }
    }
}

function assignvar(){
    
// This coding generates a user defined number of text fields for the form and the integer "i" is the number chosen by the user
    var i; 
    var recipients = [];
    var nrecipients = document.getElementById("numrecip").value;

// This "for loop" is used to create records and place that information in the array "recipients[i]"
    for (i=0; i < Math.abs(nrecipients); i++){

// This array will gather the information that was provided by the user, place that corresponding information into each indexed value
        recipients[i]=[ 
            document.getElementById("name[" + i + "]").value,
            document.getElementById("organization").value,
            document.getElementById("date").value,
            document.getElementById("site").value,
            document.getElementById("host").value];
    }
// This "for loop" will print out a user defined amount of invitations according to how many are to recieve an invitation    
    for (i=0; i<Math.abs(nrecipients); i++){       
        var paragraph = document.createElement("p");

// The "\n" function makes sure that the information provided within the predefined paragraph isn't interrupted by additional commands/elements that are embedded in the paragraph itself
        var info=document.createTextNode("Hello "+recipients[i][0]+
            "!\n You have been invited to volunteer for an event held by "+
            recipients[i][1]+" on "+recipients[i][2]+". Please come to the following website: " + recipients[i][3] + " to sign up as a volunteer.\nThanks!\n" +
            recipients[i][4]);
        paragraph.appendChild(info);
        var element=document.getElementById("iparagraph");
        element.appendChild(paragraph);
    }
}