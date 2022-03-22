/**
 *   Kevin Cisneros 
 		March 21, 2022
 		Purpose: validiate usernames and passwords for our data 
 */
 
 //create an array that will be looped to check if login details exists
 var people = [
	{
	//first example
	ID: "Scott",
	
	Password: "Cookies"
	
	
	},
	
	{
		//second example
		ID: "Conner",
		
		Psssword: "Food"
	}
	
	
	
	
]//end array

//create a function that will gather the data from the array and then a loop that will 
// check to see if the entered details exists, if so send out a login successful,  else try again
function getdata() {
	var ID = document.getElementById('ID').Value
	var Password = document.getElementById('Password').Value
	
	//create for loop that will walk through our array (.length) and check if user and password are the same
	
	for (var i=0;i < people.length;i++){
		
		//check with if statement 
		if(ID == people[i].ID && Password == people[i].Password) {
			//send console that you are logged in 
			console.log(ID + " has logged in  Successfuly")
			//add return to break the loop
			
			return
			
			
			
			
			
			
			
		}//end if statement 
		
		
		
		
		
		
		
	}//end for loop
	//our else statement 
	console.log("please try again")
	
}//end function