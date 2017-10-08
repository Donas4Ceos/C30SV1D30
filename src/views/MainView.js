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
var Control = require('enyo/Control');
var lightpanel = require('./lightpanel');
var CarouselArranger = require('layout/CarouselArranger');
var Spinner = require('moonstone/Spinner');
var LunaService = require('enyo-webos/LunaService');
var Scroller = require('moonstone/Scroller');
var Button = require('moonstone/Button');
var Input = require('moonstone/Input');

var service = kind({
	name : "MyApp.MainView",
	kind : Panel,
	title : "Hello World",
	classes : "moon main-view",
	components : [ {
		name : "service",
		kind : LunaService,
		service : "luna://com.yourdomain.app.servicevideo",
		method : "hello",
		subscribe:true,
		onComplete : "onComplete"
	}, {
		kind : Scroller,
		fit : true,
		components : [ {
			classes : "moon-button-sample-wrapper",
			components : [ {
				kind : Button,
				content : "Call Service",
				ontap : "callService"
			}, {
				name : "nameInput",
				kind : Input,
				placeholder : "Enter your name"
			}, {
				name : "result",
				kind : BodyText,
				content : "Button not pressed yet."
			} ]
		} ]
	} ],
	callService : function(inSender, inEvent) {
		// make sure a name is sent to the service
		var name = this.$.nameInput.get("value") || "Mysterious Stranger";

		this.$.result.set("content", "Calling service with: " + name);
		this.$.service.send({
			name : name
		});
	},
	onComplete : function(inSender, inResponse) {
		if (inResponse.returnValue) {
			console.log('disosito ' + inResponse.returnValue);
			console.log('inResponse.data=' + inResponse.message);
			this.set("title", inResponse.message);
			this.$.result.set("content", "Service responded.");
		} else {
			this.$.result.set("content",
					"Oooops!  There is a problem with this service.");
		}
	}
});
//console.log('testermannnnn');
//console.log(document.domain);
//console.log('testermannnnn');
//document.domain='https://www.dios.com';
console.log(document.domain);
module.exports = kind({
	name : 'myapp.MainView',
	classes : 'moon enyo-fit main-view',
	pattern : 'activity',
	handlers : {
		onRequestPushPanel : 'pushPanel'
	}, 
	components : [ {
		kind : Panels,
		hasCloseButton : false,
		arrangerKind : CarouselArranger,
		classes : 'enyo-arranger-fit',
		popOnBack : true,
		components : [ {
			// kind : lightpanel,
			 kind : Datalist
			//kind : service
		} ]
	} ],
	pushPanel : function(sender, ev) {
		this.$.panels.pushPanel(ev.panel);
	}
});
