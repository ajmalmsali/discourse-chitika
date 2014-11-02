(function() {

  Handlebars.registerHelper('chitikaBlock', function(width, height, slotid) {
    var currentUser = Discourse.User.current();
    if ((currentUser) && ( currentUser.get('trust_level') > Discourse.SiteSettings.chitika_through_trust_level )) {
        return "";
    }

    var mobile = ( slotid.search('_mobile') !== -1 ) ? true : false;
    if(!mobile){
      if (eval('Discourse.SiteSettings.chitika_show_' + slotid)) {
        return new Handlebars.SafeString('<script type="text/javascript">'+
          '(function() {'+
          'if (window.CHITIKA === undefined) { window.CHITIKA = { \'units\' : [] }; };'+
          'var unit = {"calltype":"async[2]","publisher":"'+Discourse.SiteSettings.chitika_publisher_code.trim()+'","width":'+width+',"height":'+height+',"sid":"Chitika Default"};'+
          'var placement_id = window.CHITIKA.units.length;'+
          'window.CHITIKA.units.push(unit);'+
          'document.write(\'<center><div id="chitikaAdBlock-\'+placement_id+\'"></div></center>\');'+
        '}());'+
        '</script>'+
        '<script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>');
      }
    } 
    return "";
  });

})();
