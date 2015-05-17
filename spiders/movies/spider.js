// Print all of the news items on Hacker News
var jsdom = require("jsdom");

var urls = 
[
  "http://www.nowrunning.com/movie/11583/malayalam/honey-bee/index.htm",
 "http://www.nowrunning.com/movie/16126/malayalam/action-hero-biju/index.htm", 
 "http://www.nowrunning.com/movie/16230/malayalam/anthyakoodasha/index.htm", 
 "http://www.nowrunning.com/movie/15726/malayalam/alif/index.htm", 
 "http://www.nowrunning.com/movie/15904/malayalam/aamayum-muyalum/index.htm", 
 "http://www.nowrunning.com/movie/15702/malayalam/amar-akbar-antony/index.htm"
];


//crawlurl("http://www.nowrunning.com/movie/15031/malayalam/actually/index.htm");
for (var i = urls.length - 1; i >= 0; i--) {
  var currentUrl = urls[i];
  try
  {
    crawlurl(currentUrl);
  }
  catch(ex){
    console.error(ex);
  }
  
};


function crawlurl(url)
{

  for (var i = 3; i >= 0; i--) {
    console.log("");
  };
  jsdom.env({
    url: url,
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (errors, window) {
      if(!window)
      {
        console.error("FAILED==> " + url);
        return;
      }
      var $ = window.$;
      console.log("HN Links");

      var currentData = {};

      $("#ctl00_ContentPlaceHolder_Header_MovieTabs1_MovieName").each(function() {
        //console.log("Movie Name -", $(this).text());
        currentData.moviename = $(this).text();
      });

      $("#ctl00_ContentPlaceHolder_Header_MovieTabs1_MovieHeader1_MovieName").each(function() {
        //console.log("Movie Name -", $(this).text());
        currentData.moviename = $(this).text();
      });


      $("#ctl00_ContentPlaceHolder_Header_MovieTabs1_ReleaseYear").each(function() {
        //console.log("Movie Release Year -", $(this).text());
        currentData.moviereleaseyear = $(this).text();
      });
      $("#ctl00_ContentPlaceHolder_Middle_Director").each(function() {
        //console.log("Director Name -", $(this).text().replace("Director:", ""));
        currentData.director = $(this).text().replace("Director:", "");
      });
      $("#ctl00_ContentPlaceHolder_Middle_MusicDirector .text3").each(function() {
        //console.log("Music Director Name -", $(this).text());
        currentData.musicdirector = $(this).text();
      });
      $("#ctl00_ContentPlaceHolder_Middle_MovieStatus").each(function() {
        //console.log("Movie Status -", $(this).text());
        currentData.moviestatus = $(this).text();
      });
      $("#ctl00_ContentPlaceHolder_Middle_Genre").each(function() {
        //console.log("Music Director Name -", $(this).text().replace("Genre:", ""));
        currentData.genre = $(this).text().replace("Genre:", "");
      });
      $("#ctl00_ContentPlaceHolder_Middle_Producer").each(function() {
        //console.log("Producer -", $(this).text().replace("Producer:", ""));
        currentData.producer = $(this).text().replace("Producer:", "");
      });
      $("#ctl00_ContentPlaceHolder_Middle_Cast").each(function() {
        //console.log("Cast -", $(this).text().replace("Cast:", "").split(","));
        currentData.cast = $(this).text().replace("Cast:", "").split(",");
      });
      $("#ctl00_ContentPlaceHolder_Middle_MovieDescription").each(function() {
        //console.log("Description -", $(this).text());
        currentData.description = $(this).text();
      });
      $("#ctl00_ContentPlaceHolder_Left_1_MoviePoster").each(function() {
        //console.log("Poster -", $(this)[0].src);
        currentData.poster = $(this)[0].src;
      });

      console.log(JSON.stringify(currentData));





    }
  });  
}
