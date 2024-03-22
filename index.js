// Write your code in this file!

//using const assign currentUser 

    const currentUser = " GRACE HOPPER " ;

//using const declare welcomeMessage
  //cat the value in currentUser to welcome message
    //cat end with (!)
    // const welcomeMesage = "welcome to flatbook + currentUser + ! "

    const welcomeMessage = " Welcome to Flatbook, " + currentUser  + "!";

/** declaire excitedWelcomeMessage with const
      it should contain "WELCOME TO FLATBOOK, "
      cat the value of the 'currentUser' variable
      cat the end with an exclamation point
      */
     const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser + "!" ;

//declare a variable for shortGreeting = 'Welcome' + first initial of the name in currentUser 
    // cat '1'

    let shortGreeting = "Welcome, " 

    let firstInitial = currentUser.indexOf("0");
    //let exclamation = "!!";

    shortGreeting ="Welcome, "  + firstInitial+ " " + '!';
