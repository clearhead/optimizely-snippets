/*******************************************************************************

  AUTHOR:

    Kyle Rush, Head of Optimization at Optimizely
    - http://kylerush.net
    - https://github.com/kylerush
    - https://twitter.com/kylerush

  OVERVIEW:

    An Optimizely Project JavaScript snippet that tracks to which quarter of
    the page the visitor scrolled. This is useful for determining which
    variation a user "consumed" more of.

    If the user is on the /pricing page, the custom event goal in Optimizely
    will have these values:

    - "/pricing second quarter viewed"
    - "/pricing third quarter viewed"
    - "/pricing fourth quarter viwed"

  OPTIONS:

    pageID (string)
      You can define a global variable on the window object to identify the page
      rather than relying on window.location.pathname. This is helpful when
      doing redirect experiments that show two different versions of a page.
      When you define window.pageID = '/pricing' in the variation code for each
      variation, even though the actual URLs are different, this script will
      still report /pricing for the conversion goal so that you can compare the
      two pages against each other.

  NOTES:

    - You will setup 4 custom goals total
    - The snippets removes any trailing slaches from the URL
    - The path of the page is included because this is project level JavaScript.
      If the path was not included then the results would be disingenuous since
      scrolling on any page of your website (not just the variation) would
      trigger a "second quarter viewed" conversion
    - Customize the report function to suit your needs - you can enable
      Google Analytics (Universal Analytics) by uncommenting that line

*******************************************************************************/

(function poll(){
  if (!window.optimizely || !window.optimizely.$)
    return setTimeout(poll, 50);
  var $ = window.optimizely.$;

  var report = function(quarter){

    var pageID = window.optimizelyScrollTrackerID ? window.optimizelyScrollTrackerID : window.location.pathname.replace(/\/$/, '');

    window.optimizely = window.optimizely || [];

    //report with raw optimizely
    window.optimizely.push(['trackEvent', pageID + ' ' + quarter + ' quarter viewed']);

    //report to ga (optional)
    //window.ga('send', 'event', 'scroll', pageID, quarter + ' quarter viewed');

  };

  $(function(){

    var secondQuarterViewed, thirdQuarterViewed, fourthQuarterViewed, quarters;

    secondQuarterViewed = false;
    thirdQuarterViewed = false;
    fourthQuarterViewed = false;

    quarters = $(document).height() / 4;

    $(window).scroll(function(){

      if(window.pageYOffset <= quarters * 2 && window.pageYOffset > quarters){
        if(!secondQuarterViewed){
          report('second');
          secondQuarterViewed = true;
        }
      } else if(window.pageYOffset <= quarters * 3 && window.pageYOffset > quarters * 2){
        if(!thirdQuarterViewed){
          report('third');
          thirdQuarterViewed = true;
        }
      } else if (!fourthQuarterViewed && window.pageYOffset > quarters * 3){
        report('fourth');
        fourthQuarterViewed = true;
      }

    });

  });

})();
