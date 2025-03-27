<?php 
function createText($title, $name) {
		$xhtmlOption = sprintf('<div class="row">
					                <p>%s</p>
					                <input type="text" name="%s" />
				                </div>', $title, $name);
		return $xhtmlOption;
	}

    // function createContent($title, $name) {
	// 	$xhtml = sprintf('<div class="row">
	// 				                <p>%s</p>
	// 				                <input type="text" name="%s" />
	// 			                </div>', $title, $name);
	// 	return $xhtmlOption;
	// }
?>