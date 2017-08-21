/**
 * For simple applications, you might define all of your views in this file. For
 * more complex applications, you might choose to separate these kind
 * definitions into multiple files under this folder and require() them as
 * needed.
 * 
 * Notice the IconButton's src property value uses an '@' notation URI, which
 * represents the relative filepath from the current module source. It will be
 * evaluated and normalized during building with enyo-dev.
 */

var kind = require('enyo/kind'), Panels = require('moonstone/Panels'), Panel = require('moonstone/Panel'), BodyText = require('moonstone/BodyText'), IconButton = require('moonstone/IconButton');
var Datalist = require('./Datalist');
var CarouselArranger = require('layout/CarouselArranger');

module.exports = kind({
	name : 'myapp.MainView',
	classes : 'moon enyo-fit main-view',
	pattern : 'activity',
	handlers : {
		onRequestPushPanel : 'pushPanel'
	},
	components : [ {
		kind : Panels,
		hasCloseButton:false,
		arrangerKind : CarouselArranger,
		classes : 'enyo-arranger-fit',
		popOnBack : true,
		components : [ {
			kind : Datalist
		} ]
	} ],
	pushPanel : function(sender, ev) {
		this.$.panels.pushPanel(ev.panel);
	}
});
