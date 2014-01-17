test( 
	"Painting_Client tests", 
	function() 
	{
		// Init the client
		var client = new Painting_Client();
	
		// Is the drawing state initially set to null?
		ok( client.is_drawing() == false, "Drawing state is initially false : pass" );
		
		// Can we change the drawing state
		client.set_drawing( true );
		ok( client.is_drawing() == true, "Drawing state can be changed : pass" );
	}
);