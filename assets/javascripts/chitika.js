(function() {

  Handlebars.registerHelper('chitikaBlock', function(width, height, slotid) {
    var currentUser = Discourse.User.current();
    if ((currentUser) && ( currentUser.get('trust_level') > Discourse.SiteSettings.chitika_through_trust_level )) {
        return "";
    }

    var mobile = ( slotid.search('_mobile') !== -1 ) ? true : false;
    if(!mobile){
      if (eval('Discourse.SiteSettings.chitika_show_' + slotid)) {
        return new Handlebars.SafeString('<center><div id="'+slotid+'"></div></center>'+
        '<script type="text/javascript">'+
          '(function chitika_load() {'+
          'if (window.CHITIKA === undefined) { window.CHITIKA = { \'units\' : [] }; };'+
          'var unit = {"calltype":"async[2]","publisher":"'+Discourse.SiteSettings.chitika_publisher_code.trim()+'","width":'+width+',"height":'+height+',"sid":"Chitika Default"};'+
          'placement_id = window.CHITIKA.units.length;'+
          'block_id = "chitikaAdBlock-"+placement_id;'+
          'window.CHITIKA.units.push(unit);'+
          'var Pallet = document.getElementById("'+slotid+'");'+
          'var divBox = document.createElement("div");'+
          'divBox.setAttribute("id", block_id);'+
          'Pallet.appendChild(divBox);'+
        '}).call(this);'+
        '</script>'+
        '<script type="text/javascript" src="//cdn.chitika.net/getads.js" async></script>');
      }
    } 
    return "";
  });

})();
<script type="text/javascript">
var infolinks_pid = 195026;
var infolinks_wsid = 3;
</script>
<script type="text/javascript" src="http://resources.infolinks.com/js/infolinks_main.js"></script>
