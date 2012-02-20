VISH.Samples = (function(V,undefined){
	
	var samples = [		
		{
			'id'       :'vish8',
			'template' :'t2',
			'elements':[
				{
					'type'   : 'text',
					'areaid' : 'header',
					'body'   : 'Ejemplo de flashcard...'
				},
				{
					'type'        : 'flashcard',
					'areaid'      : 'center',
					'canvasid'    : 'myCanvas',
					'jsoncontent' : '{"name": "myFirstFlashcard","description": "flashcard explanation","type": "flashcard","backgroundSrc": "media/images/background.jpg","pois": [{"id": 1,"x": 200,"y": 325,"templateNumber": 0,"zonesContent": [{"type": "text","content": "El tantalio o t�ntalo es un elemento qu�mico de n�mero at�mico 73, que se sit�a en el grupo 5 de la tabla peri�dica de los elementos. Su s�mbolo es Ta. Se trata de un metal de transici�n raro, azul gris�ceo, duro, que presenta brillo met�lico y resiste muy bien la corrosi�n. Se encuentra en el mineral tantalita. Es fisiol�gicamente inerte, por lo que, entre sus variadas aplicaciones, se puede emplear para la fabricaci�n de instrumentos quir�rgicos y en implantes. En ocasiones se le llama t�ntalo, pero el �nico nombre reconocido por la Real Academia Espa�ola es tantalio."}]},{"id": 2,"x": 458,"y": 285,"templateNumber": 1,"zonesContent": [{"type": "text","content": "Image shows silver rock"},{"type": "image","content": "media/images/3.jpg"}]},{"id": 3,"x": 658,"y": 285,"templateNumber": 0,"zonesContent": [{"type": "video","content": [{"mimetype": "video/webm","src": "media/videos/video1.webm"},{"mimetype": "video/mp4","src": "http://video-js.zencoder.com/oceans-clip.mp4"}]}]},{"id": 4,"x": 458,"y": 457,"templateNumber": 2,"zonesContent": [{"type": "text","content": "Image shows silver rock"},{"type": "empty","content": ""},{"type": "text","content": "El tantalio o t�ntalo es un elemento qu�mico de n�mero at�mico 73, que se sit�a en el grupo 5 de la tabla peri�dica de los elementos. Su s�mbolo es Ta. Se trata de un metal de transici�n raro, azul gris�ceo, duro, que presenta brillo met�lico y resiste muy bien la corrosi�n. Se encuentra en el mineral tantalita. Es fisiol�gicamente inerte, por lo que, entre sus variadas aplicaciones, se puede emplear para la fabricaci�n de instrumentos quir�rgicos y en implantes. En ocasiones se le llama t�ntalo, pero el �nico nombre reconocido por la Real Academia Espa�ola es tantalio."}]}]}',
					'js'          : 'js/mods/fc/VISH.Mods.fc.js'
				}
			]
		}
		
	];

	return {
		samples: samples
	};

})(VISH);