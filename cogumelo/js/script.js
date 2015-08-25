var array = ['=%\\=','!%\\!','#%\\#',':%\\:','“%"','”%"','¨%\\u00A8', '´%\\u00B4', '¹%\\u00B9', '²%\\u00B2', '³%\\u00B3', '£%\\u00A3', '¢%\\u00A2', '¬%\\u00AC','§%\\u00A7','á%\\u00E1','é%\\u00E9','í%\\u00ED','ó%\\u00F3','ú%\\u00FA','Á%\\u00C1','É%\\u00C9','Í%\\u00CD','Ó%\\u00D3','Ú%\\u00DA','â%\\u00E2','ê%\\u00EA','ô%\\u00F4','Â%\\u00C2','Ê%\\u00CA','Ô%\\u00D4','ã%\\u00E3','Ã%\\u00C3','õ%\\u00F5','Õ%\\u00D5','ç%\\u00E7','Ç%\\u00C7','à%\\u00E0','À%\\u00C0','ü%\\u00FC','Ü%\\u00DC','º%\\u00BA','ª%\\u00AA'];

window.onload = function() {
	$('content').start('keyup change').focus();
}

function newString() {
	var request = $('content').resize().value;
	var response = request.toStandard().toSpecial().split('\n').breakLines().join('\n');
	try {
		$('new-content').innerText = response;
	} catch(err) {
		console.log(err);
	} finally {
		$('new-content').textContent = response;
	}
}