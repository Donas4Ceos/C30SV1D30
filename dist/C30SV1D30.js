(function (scope, bundled) {
	
	var   enyo     = scope.enyo || (scope.enyo = {})
		, manifest = enyo.__manifest__ || (defineProperty(enyo, '__manifest__', {value: {}}) && enyo.__manifest__)
		, exported = enyo.__exported__ || (defineProperty(enyo, '__exported__', {value: {}}) && enyo.__exported__)
		, require  = enyo.require || (defineProperty(enyo, 'require', {value: enyoRequire}) && enyo.require)
		, local    = bundled()
		, entries;

	// below is where the generated entries list will be assigned if there is one
	entries = ['index'];


	if (local) {
		Object.keys(local).forEach(function (name) {
			var value = local[name];
			if (manifest.hasOwnProperty(name)) {
				if (!value || !(value instanceof Array)) return;
			}
			manifest[name] = value;
		});
	}

	function defineProperty (o, p, d) {
		if (Object.defineProperty) return Object.defineProperty(o, p, d);
		o[p] = d.value;
		return o;
	}
	
	function enyoRequire (target) {
		if (!target || typeof target != 'string') return undefined;
		if (exported.hasOwnProperty(target))      return exported[target];
		var   request = enyo.request
			, entry   = manifest[target]
			, exec
			, map
			, ctx
			, reqs
			, reqr;
		if (!entry) throw new Error('Could not find module "' + target + '"');
		if (!(entry instanceof Array)) {
			if (typeof entry == 'object' && (entry.source || entry.style)) {
				throw new Error('Attempt to require an asynchronous module "' + target + '"');
			} else if (typeof entry == 'string') {
				throw new Error('Attempt to require a bundle entry "' + target + '"');
			} else {
				throw new Error('The shared module manifest has been corrupted, the module is invalid "' + target + '"');
			}
		}
		exec = entry[0];
		map  = entry[1];
		if (typeof exec != 'function') throw new Error('The shared module manifest has been corrupted, the module is invalid "' + target + '"');
		ctx  = {exports: {}};
		if (request) {
			if (map) {
				reqs = function (name) {
					return request(map.hasOwnProperty(name) ? map[name] : name);
				};
				defineProperty(reqs, 'isRequest', {value: request.isRequest});
			} else reqs = request;
		}
		reqr = !map ? require : function (name) {
			return require(map.hasOwnProperty(name) ? map[name] : name);
		};
		exec(
			ctx,
			ctx.exports,
			scope,
			reqr,
			reqs
		);
		return exported[target] = ctx.exports;
	}

	// in occassions where requests api are being used, below this comment that implementation will
	// be injected
	

	// if there are entries go ahead and execute them
	if (entries && entries.forEach) entries.forEach(function (name) { require(name); });
})(this, function () {
	// this allows us to protect the scope of the modules from the wrapper/env code
	return {'src/views/Video':[function (module,exports,global,require,request){
var kind = require('enyo/kind');

var Button = require('moonstone/Button'), ChannelInfo = require('moonstone/ChannelInfo'), Clock = require('moonstone/Clock'), Panel = require('moonstone/Panel'), ContextualPopup = require('moonstone/ContextualPopup'), ContextualPopupDecorator = require('moonstone/ContextualPopupDecorator'), IconButton = require('moonstone/IconButton'), Item = require('moonstone/Item'), Panels = require('moonstone/Panels'), ToggleItem = require('moonstone/ToggleItem'), Tooltip = require('moonstone/Tooltip'), TooltipDecorator = require('moonstone/TooltipDecorator'), VideoInfoBackground = require('moonstone/VideoInfoBackground'), VideoInfoHeader = require('moonstone/VideoInfoHeader'), VideoPlayer = require('moonstone/VideoPlayer'), Collection = require('enyo/Collection'), Control = require('enyo/Control'), Repeater = require('enyo/Repeater'), Scroller = require('moonstone/Scroller'), DataRepeater = require('enyo/DataRepeater');
var index = 0;
var myCollectiontemporadas = null;
var myCollectioncapitulos = null;
var Divider = require('moonstone/Divider'), Img = require('enyo/Image'), ImageItem = require('moonstone/ImageItem'), Item = require('moonstone/Item'), ListActions = require('moonstone/ListActions'), Panels = require('moonstone/Panels'), Scroller = require('moonstone/Scroller'), Tooltip = require('moonstone/Tooltip'), TooltipDecorator = require('moonstone/TooltipDecorator');

module.exports = kind({
	name : 'moon.sample.AlwaysViewingPanelsWithVideoSample',
	classes : 'moon enyo-fit enyo-unselectable',
	published : {
		video : null
	},
	components : [
			{
				name : 'player',
				kind : VideoPlayer,
				onPlaybackControlsTapped:'anteriorsiguiente',
				src : null,
				poster : 'src/assets/video-poster.png',
				autoplay : true,
				onended : 'siguiente',
				infoComponents : [
						{
							kind : VideoInfoBackground,
							orient : 'left',
							background : true,
							fit : true,
							components : [
									{
										kind : ChannelInfo,
										channelNo : '13',
										channelName : 'AMC',
										components : [ {
											content : '3D'
										}, {
											content : 'Live'
										}, {
											content : 'REC 08:22',
											classes : 'redicon'
										} ]
									},
									{
										kind : VideoInfoHeader,
										title : 'Downton Abbey - Extra Title',
										subTitle : 'Mon June 21, 7:00 - 8:00pm',
										subSubTitle : 'R - TV 14, V, L, SC',
										description : 'The series, set in the Youkshire country estate of Downton Abbey, depicts the lives of the aristocratic Crawley famiry and'
									} ]
						}, {
							kind : VideoInfoBackground,
							orient : 'right',
							background : true,
							components : [ {
								kind : Clock
							} ]
						} ],
				components : [ {
					kind : IconButton,
					icon : 'list',
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : TooltipDecorator,
					components : [ {
						kind : ContextualPopupDecorator,
						components : [ {
							kind : Button,
							content : 'Popup'
						}, {
							kind : ContextualPopup,
							classes : 'moon-3h moon-6v',
							components : [ {
								kind : Item,
								content : 'Item 1'
							}, {
								kind : Item,
								content : 'Item 2'
							}, {
								kind : Item,
								content : 'Item 3'
							} ]
						} ]
					}, {
						kind : Tooltip,
						floating : true,
						content : 'I\'m a tooltip for a button.'
					} ]
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				}, {
					kind : IconButton,
					small : false,
					backgroundOpacity : 'translucent'
				} ]
			},
			{
				name : 'panels',
				kind : Panels,
				pattern : 'alwaysviewing',
				classes : 'enyo-fit',
				showing : false,
				components : [
						{
							name : 'panel_temporadas',
							headerType : 'medium',
							headerOptions : {
								fullBleedBackground : true
							},
							headerComponents : [ {
								
								name : 'img_descserie',
								kind : ImageItem,
								source : Img.placeholder,
								label : 'Breaking Bad',
								text : 'A struggling high school chemistry teacher who is diagnosed with inoperable lung cancer turns to a life of crime, producing and selling methamphetamine with a former student'
							} ],
							autoNumber : false,

							components : [ {
								kind : Scroller,
								fit : true,
								components : [ {
									kind : DataRepeater,
									name : 'repeatertemporadas',
									ontap : 'next',
									components : [ {
										components : [ {
											kind : Item,
											content : 'Item One',
											name : 'ageLabel'
										} ],
										bindings : [ {
											from : 'model.temporada',
											to : '$.ageLabel.content'
										} ]
									} ]
								} ]
							} ]
						}, {
							//title : 'panel_capitulos',
							name : 'panel_capitulos',
							headerType : 'medium',
							headerOptions : {
								fullBleedBackground : true
							},
							headerComponents : [ {
								
								name : 'img_desccapitulos',
								kind : ImageItem,
								source : Img.placeholder,
								label : 'Breaking Bad'
								//	,
								//text : 'A struggling high school chemistry teacher who is diagnosed with inoperable lung cancer turns to a life of crime, producing and selling methamphetamine with a former student'
							} ],
							autoNumber : false,
							components : [ {
								kind : Scroller,
								fit : true,
								components : [ {
									kind : DataRepeater,
									name : 'repeatercapitulos',
									ontap : 'seleccionar',
									components : [ {
										components : [ {
											kind : Item,
											content : 'Item One',
											name : 'ageLabel'
										} ],
										bindings : [ {
											from : 'model.capitulo',
											to : '$.ageLabel.content'
										} ]
									} ]
								} ]
							} ]
						} ]
			} ],
	bindings : [ {
		from : "video.nombre_video",
		to : ".$.img_descserie.label"
	}, {
		from : "video.desc_video",
		to : ".$.img_descserie.text"
	}, {
		from : "video.url_imagen",
		to : ".$.img_descserie.source"
	} , {
		from : "video.url_imagen",
		to : ".$.img_desccapitulos.source"
	}
	],
	create : function() {
		this.inherited(arguments);
		myCollectiontemporadas = new Collection(this.video.get('temporadas'));
		myCollectioncapitulos = new Collection(myCollectiontemporadas.at(0)
				.get('capitulos'));
		this.$.repeatertemporadas.set('collection', myCollectiontemporadas);
		//this.actualizarvideo(myCollectioncapitulos.at(0).get('stream'));
		this.actualizarvideo(myCollectioncapitulos.at(0).get('stream'));
	},
	seleccionar : function(inSender, inEvent) {
		if (index != inEvent.index) {
			index = inEvent.index;
			this.actualizarvideo(this.$.repeatercapitulos.selected().get(
					'stream'));
		}
		return true;
	},
	siguiente : function() {
		if (index + 1 <= myCollectioncapitulos.length) {
			index = index + 1;
			this.actualizarvideo(myCollectioncapitulos.at(index).get('stream'));
		}
	},
	actualizarvideo : function(video) {
		this.$.player.setSrc(video);
		this.$.player.updateSource();
	},
	anteriorsiguiente:function(sender,ev){
		console.log('dude');
	},
	next : function(sender, ev) {
		index = 0;
		myCollectioncapitulos = new Collection(myCollectiontemporadas.at(
				ev.index).get('capitulos'));
		this.$.repeatercapitulos.set('collection', myCollectioncapitulos);
		
		this.$.img_desccapitulos.set('label', myCollectiontemporadas.at(ev.index)
				.get('temporada'));
		this.$.panels.next();
		return true;
	}
});

module.exports.badgeClasses = 'new';
}],'src/views/Datalist':[function (module,exports,global,require,request){
var kind = require('enyo/kind');
var kind = require('enyo/kind');
var FittableColumns = require('layout/FittableColumns');

var GridListImageItem = require('moonstone/GridListImageItem'),Marquee = require('moonstone/Marquee'),MarqueeSupport = Marquee.Support, IconButton = require('moonstone/IconButton'), InputHeader = require('moonstone/InputHeader'), ToggleButton = require('moonstone/ToggleButton'), Header = require('moonstone/Header'), Button = require('moonstone/Button'), ExpandablePicker = require('moonstone/ExpandablePicker'), NewDataList = require('moonstone/NewDataList'), Overlay = require('moonstone/Overlay'), Panel = require('moonstone/Panel'), Scroller = require('moonstone/Scroller'), Collection = require('enyo/Collection'), Control = require('enyo/Control'), Img = require('enyo/Image'), Spinner = require('moonstone/Spinner');
var AjaxSource = require('enyo/AjaxSource');
var Video = require('./Video');
new AjaxSource({
	name : 'ajax'
});

var MyContactCollection = kind({
	name : 'MyContactCollection',
	kind : Collection,
	source : 'ajax',
	url : 'https://c3osv1d30.herokuapp.com/C305V1D30/Videos'
});

var myCollection = new MyContactCollection();

var ImageItem = kind({
	kind : GridListImageItem,
	subCaption : 'Sub Caption',
	// mixins: [Overlay.Selection],
	bindings : [ {
		from : 'model.id_Menu',
		to : 'id_Menu'
	}, {
		from : 'model.url_video',
		to : 'url_video'
	}, {
		from : 'model.desc_video',
		to : 'desc_video'
	}, {
		from : 'model.id_categoria',
		to : 'id_categoria'
	}, {
		from : 'model.nombre_video',
		to : 'caption'
	}, {
		from : 'model.nombre_video',
		to : 'subCaption'
	}, {
		from : 'model.url_imagen',
		to : 'source'
	} ]
});

var NoImageItem = kind({
	kind : ImageItem,
	bindings : [ {
		from : 'model.bgColor',
		to : 'bgColor'
	} ],
	componentOverrides : {
		image : {
			kind : Control,
			mixins : [ Overlay.Support, Overlay.Selection ]
		}
	},
	imageSizingChanged : function() {
	},
	bgColorChanged : function() {
		this.$.image.applyStyle('background', this.bgColor);
	}
});

var buttonComponents = [ {
	kind : Control,
	style : 'position: absolute;',
	bindings : [ {
		from : 'model.text',
		to : '$.button.content'
	} ],
	components : [ {
		kind : Button,
		name : 'button',
		style : 'position: relative; height: 100%; width: 100%;',
		selectedClass : 'active'
	} ]
} ], imageComponents = [ {
	kind : ImageItem,
	style : 'position: absolute;'
} ], noImageComponents = [ {
	kind : NoImageItem,
	style : 'position: absolute;'
} ], plainImageComponents = [ {
	kind : Control,
	mixins : [ Overlay.Support, Overlay.Selection ],
	components : [ {
		name : 'img',
		kind : Img,
		style : 'height: 100%; width: 100%;'
	} ],
	bindings : [ {
		from : 'model.url',
		to : '$.img.src'
	} ]
} ];

module.exports = kind({
	name : 'moon.sample.NewDataListSample',
	kind : FittableColumns,
	classes : 'moon enyo-fit enyo-unselectable',
	style : 'padding: 0',
	events : {
		onRequestPushPanel : ''
	},
	components : [ {
		kind : Panel,
		fit : true,
		autoNumber : false,
		headerType: 'medium',
		headerBackgroundSrc: 'http://lorempixel.com/g/1920/360/abstract/2/',
		headerOptions : {
			fullBleedBackground : true,
			inputMode : true,
			placeholder : 'Buscar',
		},
		components : [ {
			style : 'text-align: center',
			components : [ {
				kind : Spinner,
				name : "spinner"
			} ]
		}, {
			name : 'list',
			kind : NewDataList,
			minItemHeight : 270,
			minItemWidth : 180,
			spacing : 20,
			columns : 6,
			rows : 1,
			ontap : 'itemSelected',
			components : imageComponents
		} ]
	} ],
	bindings : [ {
		from : ".collection.isFetching",
		to : ".$.spinner.showing"
	}, {
		from : 'collection',
		to : '$.list.collection'
	} ],
	create : function() {
		FittableColumns.prototype.create.apply(this, arguments);
		this.refreshItems();
	},
	itemSelected : function(sender, ev) {
		this.doRequestPushPanel({
			panel : {
				kind : Video,
				video : ev.model
			}
		});
	},
	refreshItems : function() {
		if (this.collection && this.collection.destroy) {
			this.collection.destroy();
		}
		this.set('collection', myCollection.fetch());

	}
});

module.exports.badgeClasses = 'new wip';
},{'./Video':'src/views/Video'}],'src/views/MainView':[function (module,exports,global,require,request){
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

},{'./Datalist':'src/views/Datalist'}],'src/App':[function (module,exports,global,require,request){
/**
	Define your enyo/Application kind in this file.
*/

var
	kind = require('enyo/kind'),
	Application = require('enyo/Application'),
	MainView = require('./views/MainView');

module.exports = kind({
	kind: Application,
	view: MainView
});

},{'./views/MainView':'src/views/MainView'}],'index':[function (module,exports,global,require,request){
/**
	Instantiate your enyo/Application kind in this file.  Note, application
	rendering should be deferred until the DOM is ready by wrapping it in a
	call to ready().
*/

var
	ready = require('enyo/ready'),
	App = require('./src/App');

ready(function () {
	new App();
});

},{'./src/App':'src/App'}]
	};

});
//# sourceMappingURL=C30SV1D30.js.map