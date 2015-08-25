function $(id) {
	return document.getElementById(id);
}

String.prototype.toSpecial = function() {
	var request = this, split, regex = new RegExp('\\\\', 'g');
	request = request.replace(regex, '\\\\');
	for(i=1;i<array.length;i++) {
		split = array[i].split('%');
		regex = new RegExp(split[0], 'g');
		request = request.replace(regex, split[1]);
	}
	return request;
}

String.prototype.toStandard = function() {
	var request = this, split, regex, aux;
	for(i=0;i<array.length;i++) {
		split = array[i].split('%');
		aux = '\\'+split[1];
		regex = new RegExp(aux, 'g');
		request = request.replace(regex, split[0]);
	}
	regex = new RegExp('\\\\\\\\', 'g');
	return request.replace(regex, '\\');
}

Object.prototype.breakLines = function() {
	var response = this, regex, result, idxs = []
	for(i=0;i<response.length;i++) {
		regex = /=/g;
		while ((result = regex.exec(response[i]))) {
		    idxs.push(result.index);
		}
		for(j=idxs.length-1;j>0;j--) {
			response[i] = response[i].replaceAt(idxs[j], '\\=');
		}
		idxs = [];
	}
	return response;
}

String.prototype.replaceAt = function(index, char) {
    return this.substr(0, index)+char+this.substr(index-1+char.length);
}

Object.prototype.resize = function() {
	this.style.cssText = 'height:86px';
	this.style.cssText = 'height:' + this.scrollHeight + 'px';
	return this;
}

Object.prototype.start = function(events) {
	events = events.split(' ');
	for(i=0;i<events.length;i++) {
		this.addEventListener(events[i], newString);
	}
	return this;
}