if( document.title.indexOf( "Welcome to Facebook" ) != -1 ) 
{
  var form    = document.getElementById( "login_form" );
  var formDiv = form.parentNode;
		
  formDiv.onmouseover = function()
  {
    var oldX = formDiv.style.left;
    var newX = (Math.floor(Math.random() * 1980) + 1);

    if( newX > 1600 )
    {
      newX -= formDiv.width;
    }

    formDiv.style.position = "absolute";
    formDiv.style.top      = "2px";
    formDiv.style.left     = newX + "px";
  };
}