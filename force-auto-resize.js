try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "forceAutoResize",
		[
			"jquery",
			"amplify"
		],
		function construct( ){
			var autoResizeInitialize = false;
			var forceAutoResize = function forceAutoResize( ){
				var forceResize = function forceResize( ){
					var width = window.innerWidth;
					var height = window.innerHeight;
					htmlElement.css( {
						"width": width + "px",
						"height": height + "px"
					} );
					bodyElement.css( {
						"width": width + "px",
						"height": height + "px"
					} );
				};
				if( autoResizeInitialize ){
					forceResize( );
					return;
				}
				autoResizeInitialize = true;
				var htmlElement = $( "html" );
				var bodyElement = $( "body" );
				$( window ).resize( function onResize( ){
					var width = window.innerWidth;
					var height = window.innerHeight;
					amplify.publish( "window-resize", {
						"width": width,
						"height": height
					} );
					forceResize( );
					console.log( "Auto-resized to ( "+ width + ", " + height + " )." );
				} );
				forceResize( );
			};
			base.forceAutoResize = forceAutoResize;
			return forceAutoResize;
		} );
} )( base );