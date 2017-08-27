var kind = require('enyo/kind');
var AjaxSource = require('enyo/AjaxSource');
var model = require('enyo/Model');
var Collection = require('enyo/Collection');
new AjaxSource({
	name : 'ajax',
});

var Videos_Recientes = kind({
	name : 'MyContactCollection',
	kind : Collection,
	source : 'ajax',
	url : 'https://c3osv1d30.herokuapp.com/C305V1D30/Recientes'
});

var Videos_Buscar = kind({
	name : 'MySearchcollection',
	kind : Collection,
	source : 'ajax',
	getUrl : function() {
		return 'https://c3osv1d30.herokuapp.com/C305V1D30/Buscar/'
				+ this.get('buscar');
	}
});

var masvistopost = kind({
	name : 'masvisto',
	kind : model,
	source : 'ajax',
	published : {
		id_video : null
	},
	getUrl : function() {
		return 'https://c3osv1d30.herokuapp.com/C305V1D30/MasVistos';
	},
	commit : function(model, opts) {
		this.params = {
			method : 'POST',
			postBody : {
				"id_video" : this.id_video
			}
		};
		return this.inherited(arguments);
	}
});

module.exports = {
		Videos_Recientes : Videos_Recientes,
		Videos_Buscar : Videos_Buscar,
		Masvistopost : masvistopost
	};