/*******************************************************************************

  OVERVIEW:

    An Optimizely Project JavaScript snippet that tracks to which quarter of
    the page the visitor scrolled. This is useful for determining which
    variation a user "consumed" more of.

    If the user is on the /pricing page, the custom event goal in Optimizely
    will have these values:

    - "/pricing first quarter viewed"
    - "/pricing second quarter viewed"
    - "/pricing third quarter viewed"
    - "/pricing fourth quarter viwed"

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

(function(w, d, $){

  var report = function(quarter){

    w.optimizely = w.optimizely || [];

    //report with raw optimizely
    w.optimizely.push(['trackEvent', w.location.pathname.replace(/\/$/, '') + ' ' + quarter + ' quarter viewed']);

    //report to ga (optional)
    //w.ga('send', 'event', 'scroll', w.location.pathname.replace(/\/$/, ''), quarter + ' quarter viewed');

  };

  $(function(){

    var firstQuarterViewed, secondQuarterViewed, thirdQuarterViewed, fourthQuarterViewed, quarters;

    firstQuarterViewed = false;
    secondQuarterViewed = false;
    thirdQuarterViewed = false;
    fourthQuarterViewed = false;

    quarters = $(d).height() / 4;

    $(w).scroll(function(){

      if(w.pageYOffset <= quarters * 1){
        if(!firstQuarterViewed){
          report('first');
          firstQuarterViewed = true;
        }
      } else if(w.pageYOffset <= quarters * 2){
        if(!secondQuarterViewed){
          report('second');
          secondQuarterViewed = true;
        }
      } else if(w.pageYOffset <= quarters * 3){
        if(!thirdQuarterViewed){
          report('third');
          thirdQuarterViewed = true;
        }
      } else if (!fourthQuarterViewed){
        report('fourth');
        fourthQuarterViewed = true;
      }

    });

  });

})(window, document, jQuery);
