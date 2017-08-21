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
				src : null,
				poster : '@../assets/video-poster.png',
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