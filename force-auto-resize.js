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
						"width": width,
						"height": height
					} );
					bodyElement.css( {
						"width": width,
						"height": height
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
					amplify.publish( "window-resize", {
						"width": window.innerWidth,
						"height": window.innerHeight
					} );
					forceResize( );
				} );
			};
			base.forceAutoResize = forceAutoResize;
			return forceAutoResize;
		} );
} )( base );