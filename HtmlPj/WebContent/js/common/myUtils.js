/**
 * 
 */
/**
 * 빈 값인지 확인하는 함수
 * @param val : 값(문자열)
 * @returns true/false
 * ex) isEmpty("홍길동")
 */
function isEmpty(val) { //isEmpty 이것은 Empty 입니까 ? true : 네 false : 아니요
	var val = val.trim(); //공백 삭제
	if(val == null || val.length == 0) {
		return true; //빈값이에요
	}
	
	return false;
}

function checkValue(obj, strName) { //strId, strName
	obj.value;
	//var obj = document.getElementById(strId);
	if(isEmpty(obj.value)) {
		alert(strName + "은(는) 필수 입력 항목입니다.");
		obj.focus();
		return false;
	}
	
	return true;
}

function checkValueLength(strId, strName, min, max) {
	var val = document.getElementById(strId).value;
	
	if(val.length < min || val.length > max) {
		alert(strName+ "은(는) " + min + "자 이상, " + max + "자 이하로 입력 가능합니다.");
		document.getElementById(strId).focus();
		return false;
	}
	
	return true;
}
	