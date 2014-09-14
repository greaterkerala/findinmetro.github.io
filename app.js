'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
	'ngRoute',
	'ngAnimate',
	'myApp.version'
	]);
var homelayout = 'layouts/home/homelayout.html';
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: homelayout
	});

	var detailslayoutItems = 
	[
	"/explore/wildlife/aralam-wildlife-sanctuary",
	"/explore/wildlife/chinnar-wildlife-sanctuary",
	"/explore/wildlife/eravikulam-wildlife-sanctuary",
	"/explore/wildlife/idukki-wildlife-sanctuary",
	"/explore/wildlife/kadalundi-bird-sanctuary",
	"/explore/wildlife/kumarakom-bird-sanctuary",
	"/explore/wildlife/neyyar-wildlife-sanctuary",
	"/explore/wildlife/parambikulam-wildlife-sanctuary",
	"/explore/wildlife/peechi-vazhani-wildlife-sanctuary",
	"/explore/wildlife/peppara-wildlife-sanctuary",
	"/explore/wildlife/periyar-wildlife-sanctuary",
	"/explore/wildlife/rajamala-wildlife-sanctuary",
	"/explore/wildlife/shendurney-wildlife-sanctuary",
	"/explore/wildlife/silent-valley-national-park",
	"/explore/wildlife/thattekkad-bird-sanctuary",
	"/explore/wildlife/wayanad-wildlife-sanctuary",

	"/explore/touristattractions/attappady",
	"/explore/touristattractions/devikulam",
	"/explore/touristattractions/dhoni",
	"/explore/touristattractions/echo-point",
	"/explore/touristattractions/grampi",
	"/explore/touristattractions/idukki",
	"/explore/touristattractions/ilaveezhapoonchira",
	"/explore/touristattractions/lakkidi",
	"/explore/touristattractions/mattupetti",
	"/explore/touristattractions/munnar",
	"/explore/touristattractions/nelliyampathy",
	"/explore/touristattractions/pakshipathalam",
	"/explore/touristattractions/palakkad",
	"/explore/touristattractions/peermade",
	"/explore/touristattractions/peruvannamuzhi",
	"/explore/touristattractions/ponmudi",
	"/explore/touristattractions/pythal-mala",
	"/explore/touristattractions/rajamala",
	"/explore/touristattractions/topstation",
	"/explore/touristattractions/tusharagiri",
	"/explore/touristattractions/vagamon",
	"/explore/touristattractions/vythiri",
	"/explore/touristattractions/wayanad-hill-station",


	"/explore/waterfalls/athirapilly-and-vazhachal-waterfalls",
	"/explore/waterfalls/cheeyappara-waterfalls",
	"/explore/waterfalls/dhoni-waterfalls-palghat",
	"/explore/waterfalls/meenvallam-waterfall",
	"/explore/waterfalls/palaruvi-waterfalls",
	"/explore/waterfalls/powerhouse-waterfall",
	"/explore/waterfalls/soochipara-waterfalls",
	"/explore/waterfalls/thommankoothu-waterfalls-idukki",
	"/explore/waterfalls/thusharagiri-waterfalls",

	"/explore/backwaters/alleppey-backwaters",
	"/explore/backwaters/alumkadavu-backwaters",
	"/explore/backwaters/kidangara-backwaters",
	"/explore/backwaters/kottayam-backwaters",
	"/explore/backwaters/kumarakom-backwaters",
	"/explore/backwaters/mankotta-backwaters",
	"/explore/backwaters/thottappally-backwaters",
	"/explore/backwaters/trivandrum-backwaters",
	

	"/explore/beaches/alappuzha-beach",
	"/explore/beaches/bekal-beach",
	"/explore/beaches/beypore-beach",
	"/explore/beaches/cherai-beach",
	"/explore/beaches/ezhimala-beach",
	"/explore/beaches/fort-kochi-beach",
	"/explore/beaches/kappad-beach",
	"/explore/beaches/kovalam-beach",
	"/explore/beaches/marari-beach",
	"/explore/beaches/muzhappilangad-beach",
	"/explore/beaches/pathiramanal-beach",
	"/explore/beaches/payyambalam-beach",
	"/explore/beaches/poovar-beach",
	"/explore/beaches/sankhumugham-beach",
	"/explore/beaches/thangassery-beach",
	"/explore/beaches/thirumullavaram-beach",
	"/explore/beaches/varkala-beach",


	"/explore/islands/dharmadam-island",
	"/explore/islands/moppila-bay",
	"/explore/islands/willingdon-island",

	"/explore/lakes/akkulam-lake",
	"/explore/lakes/ashtamudi-lake",
	"/explore/lakes/pookot-lake",
	"/explore/lakes/sasthamkotta-lake",
	"/explore/lakes/vembanad-lake",

	//"/explore/culture/",
	"/explore/art/dance/aravanmuttu",
	"/explore/art/dance/kathakali",
	"/explore/art/dance/koodiyattam",
	"/explore/art/dance/margamkali",
	"/explore/art/dance/oppana",
	"/explore/art/dance/theyyam",
	"/explore/art/dance/thiruvathirakali",
	"/explore/art/dance/thitambu-Nritham/",
	"/explore/art/dance/thullal",

	"/explore/cusine/aviyal",
	"/explore/cusine/banana-chips",
	"/explore/cusine/chicken-masala-malabar",
	"/explore/cusine/chicken-stew",
	"/explore/cusine/drumstick-thoran",
	"/explore/cusine/fish-molly",
	"/explore/cusine/injipuli",
	"/explore/cusine/olan",
	"/explore/cusine/puttu",
	"/explore/cusine/theeyal",
	"/explore/cusine/thoran",
	"/explore/cusine/tomato-rasam",


	"/explore/festivals/anandapalli-maramadi",
	"/explore/festivals/aranmula-boat-race",
	"/explore/festivals/arattu",
	"/explore/festivals/arattupuzha-pooram",
	"/explore/festivals/arthungal-perunal",
	"/explore/festivals/athachamayam",
	"/explore/festivals/attukal-pongala",
	"/explore/festivals/bakrid",
	"/explore/festivals/beemapalli-chandanakudam",
	"/explore/festivals/chettikulangara-bharani",
	"/explore/festivals/cochin-carnival",
	"/explore/festivals/easter",
	"/explore/festivals/edapalli-perunal",
	"/explore/festivals/edathua-perunal",
	"/explore/festivals/elamkavu-attuvela",
	"/explore/festivals/ettumanoor-festival",
	"/explore/festivals/flavour-food-festival",
	"/explore/festivals/indira-gandhi-boat-race",
	"/explore/festivals/jagannatha-festival",
	"/explore/festivals/jewish-festival",
	"/explore/festivals/kadammanitta-patayani",
	"/explore/festivals/kalpathy-ratholsavam",
	"/explore/festivals/kanjiramattom-festival",

	"/explore/historical/ambalavayal-museum",
	"/explore/historical/anchunthengu-fort",
	"/explore/historical/angelo-fort",
	"/explore/historical/archaeological-museum",
	"/explore/historical/bastion-bunglow",
	"/explore/historical/bay-island-driftwood-museum",
	"/explore/historical/bekal-fort",
	"/explore/historical/bishops-house",
	"/explore/historical/bolghatty-palace",
	"/explore/historical/chacha-nehru-childrens-museum",
	"/explore/historical/dutch-palace",
	"/explore/historical/government-museum",
	"/explore/historical/gundert-bunglow",
	"/explore/historical/hill-palace",
	"/explore/historical/indo-portuguese-museum",
	"/explore/historical/jewish-synagogue",
	"/explore/historical/koder-house",
	"/explore/historical/koyikkal-palace",
	"/explore/historical/krishnan-menon-museum",
	"/explore/historical/krishnapuram-palace",
	"/explore/historical/kuthiramalika-museum",
	"/explore/historical/mananthavadi",
	"/explore/historical/mangalam-dam",
	"/explore/historical/mannadi",
	"/explore/historical/maritime-museum",
	"/explore/historical/napier-museum",
	"/explore/historical/neyyar-dam",
	"/explore/historical/padmanabhapuram-palace",
	"/explore/historical/palakkad-fort",
	"/explore/historical/pallippuram-fort",
	"/explore/historical/pazhassiraja-museum",
	"/explore/historical/priyadarshini-museum",
	"/explore/historical/sree-chitra-arts-gallery",
	"/explore/historical/teak-museum",
	"/explore/historical/tea-museum",
	"/explore/historical/thakur-house",
	"/explore/historical/thalassery-fort",
	"/explore/historical/vasco-house",
	"/explore/spiritual/ambalapuzha-temple",
	"/explore/spiritual/ananthapadmanabhaswamy-temple",
	"/explore/spiritual/ananthapura-lake-temple",
	"/explore/spiritual/aranmula",
	"/explore/spiritual/cheraman-juma-masjid",
	"/explore/spiritual/chottanikkara-temple",
	"/explore/spiritual/ettumanoor-temple",
	"/explore/spiritual/francis-church",
	"/explore/spiritual/guruvayoor-temple",
	"/explore/spiritual/kalpathy-temple",
	"/explore/spiritual/kanjiramattom-mosque",
	"/explore/spiritual/koodalmanikyam-temple",
	"/explore/spiritual/kulathupuzha-temple",
	"/explore/spiritual/lokanarkavu-temple",
	"/explore/spiritual/madayi-mosque",
	"/explore/spiritual/malayatoor-church",
	"/explore/spiritual/mangla-devi-temple",
	"/explore/spiritual/mannarasala-temple",
	"/explore/spiritual/mar-thoma-church",
	"/explore/spiritual/mar-thoman-church",
	"/explore/spiritual/oachira-temple",
	"/explore/spiritual/pazhayangadi-mosque",
	"/explore/spiritual/pundareekapuram-temple",
	"/explore/spiritual/sabarimala-temple",
	"/explore/spiritual/santa-cruz-basilica-church",
	"/explore/spiritual/sivagiri-temple",
	"/explore/spiritual/thali-temple",
	"/explore/spiritual/thirunavaya-temple",
	"/explore/spiritual/thirunelli-temple",
	"/explore/spiritual/thiruvalla-temple",
	"/explore/spiritual/thriprayar-temple",
	"/explore/spiritual/vadakkumnathan-temple",
	"/explore/spiritual/vaikom-temple",
	"/explore/spiritual/valiyapalli-church",
	"/explore/spiritual/valliyoorkkavu-temple",

	];
	var homelayoutItems = [
	"/media/news",
	"/media/localnews",
	"/media/newspapers",
	"/media/calendar",
	"/media/books",

	"/entertainment/radio",
	"/entertainment/tv",
	"/entertainment/movies",
	"/entertainment/songs",


	"/explore/101",

	"/explore/wildlife",
	"/explore/touristattractions",
	"/explore/waterfalls",
	"/explore/backwaters",
	"/explore/beaches",
	"/explore/islands",
	"/explore/lakes",
	"/explore/culture",
	"/explore/art",
	"/explore/cusine",
	"/explore/festivals",
	"/explore/historical",
	"/explore/spiritual",


	"/travel/airports",
	"/travel/cities",
	"/travel/districts",
	"/travel/hotels",
	"/travel/touroperators",

	"/health/ayurveda",
	"/health/treatments",

	"/education/engineering",
	"/education/medical",
	"/education/universities",


	"/tradition/panchangam",
	"/tradition/taste",
	"/about"


	];

	for (var i = homelayoutItems.length - 1; i >= 0; i--) {
		$routeProvider.when(homelayoutItems[i], {
			templateUrl: homelayout
		});
	};
	for (var i = detailslayoutItems.length - 1; i >= 0; i--) {
		$routeProvider.when(detailslayoutItems[i], {
			templateUrl: homelayout
		});
	};





	$routeProvider.when('/view2', {
		templateUrl: 'layouts/home/homelayout.html'
	});
	$routeProvider.otherwise({redirectTo: '/home'});
}]);
