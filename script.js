// Setup angular
var app = angular.module( "app", [] );

app.directive( 
	"painting",
	function()
	{
		var directive_object = 
		{
			restrict: "A", // Attribute only
			link: function postLink( scope, element, attributes )
			{
				// Setup event handlers for the canvas here
			}
		};
	
		return directive_object;
	
	} // End of directive function

); // End of directive definition
