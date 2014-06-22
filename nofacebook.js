if( document.title.indexOf( "Welcome to Facebook" ) != -1 ) 
{
  var form    = document.getElementById( "login_form" );
  var formDiv = form.parentNode;
		
  formDiv.onmouseover = function()
  {
    var winWidth = 0;
		chrome.windows.getLastFocused( function(w) 
		{
			winWidth = window.innerWidth;
	  } );
		
    var oldX = formDiv.style.left;
    var newX = (Math.floor(Math.random() * winWidth) + 1);
		
		
		
    if( newX > winWidth - formDiv.width )
    {
      newX -= formDiv.width;
    }

    formDiv.style.position = "absolute";
    formDiv.style.top      = "2px";
    formDiv.style.left     = newX + "px";
  };
}