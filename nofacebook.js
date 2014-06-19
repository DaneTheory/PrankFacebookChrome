if (document.title.indexOf("Welcome to Facebook") != -1) 
{
		var login = document.getElementById( "login_form" );
		var parentDiv = login.parentNode;
		
		parentDiv.onmouseover = function()
		{
			
			
			var oldX = parentDiv.style.left;
			var newX = (Math.floor(Math.random() * 1980) + 1);
			
			if( newX > 1600 )
			{
				newX -= parentDiv.width;
			}
			
			parentDiv.style.position = "absolute";
			parentDiv.style.top      = "2px";
			parentDiv.style.left     = newX + "px";
		};
}