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