<?php

	// Kiem tra du lieu khac rong
	function checkEmpty($value){
		$flag = false;
		if(!isset($value) || trim($value) == ""){
			$flag = true;
		}
		return $flag;
	}
	
	// Kiem tra chieu dai du lieu
	function checkLength($value, $min, $max){
		$flag 	= false;
		$length	= strlen($value);
		if($length < $min || $length > $max){
			$flag = true;
		}
		return $flag;
	}
	
	// Tao ra ten file
	function randomString($length = 5){
		
		$arrCharacter = array_merge(range('A','Z'), range('a','z'), range(0,9));
		$arrCharacter = implode('', $arrCharacter);
		$arrCharacter = str_shuffle($arrCharacter);
		
		$result		= substr($arrCharacter, 0, $length);
		return $result;
	}
	
	// Size
	function convertSize($size, $totalDigit = 2, $ditance = ' '){
		$units	= array('B', 'KB', 'MB', 'GB', 'TB');
	
		$length	= count($units);
		for($i = 0; $i < $length; $i++){
			if($size > 1024) {
				$size	= $size / 1024;
			}else {
				$unit	= $units[$i];
				break;
			}
		}
	
		$result = round($size, $totalDigit) . $ditance . $unit;
		return $result;
	}


	function createInput($title, $name, $errorMessage) {
		$xhtml = sprintf('<div class="form-group">
							<label>%s</label>
							<input type="text" name="%s" class="form-control" required>
							<small class="text-danger">%s</small>
						  </div>', $title, $name, $errorMessage);
		return $xhtml;
	}
	
	function createText($title, $name, $errorDescription) {
		$xhtmlOption = sprintf('<div class="form-group">
								  <label>%s</label>
								  <textarea class="form-control" name="%s" required></textarea>
								  <small class="text-danger">%s</small>
								</div>', $title, $name, $errorDescription);
		return $xhtmlOption;
	}
	
	function createFile($title, $errorImage) {
		$xhtmlFile = sprintf('<div class="row">
								<p>%s</p>
								<input type="file" name="file-upload"/>
								<small class="text-danger">%s</small>
							  </div>', $title, $errorImage);
		return $xhtmlFile;
	}

?>