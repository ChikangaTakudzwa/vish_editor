VISH.Editor.Preview = (function(V,$,undefined){

	var presentation_preview;
	var forcePresentation = false;

	/*
	 * function to prepare the preview of the excursion as it is now
	 * <a id="preview_circle" href="/vishEditor/viewer.html"></a>
	 *
	 * forcePresentation is a boolean to indicate if we should preview only the slide, although we might be in flashcard
	 *
	 */
	var prepare = function(slideNumberToPreview){
		if(!slideNumberToPreview){
			slideNumberToPreview =  V.Slides.getCurrentSlideNumber();
		}
		$("#preview_circle").attr("href", "/vishEditor/viewer.html#" + slideNumberToPreview);
		
		presentation_preview = V.Editor.saveExcursion(forcePresentation);	
	};

	var setForcePresentation = function(force){
		forcePresentation = force;
	};

	var getPreview = function(){
		return presentation_preview;
	};

	return {
		prepare	 				: prepare,
		getPreview 				: getPreview,
		setForcePresentation	: setForcePresentation
	};

}) (VISH, jQuery);