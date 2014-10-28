# name: Discourse Chitika
# about: Adds Chitika to Discourse
# version: 0.18
# author: DiscourseHosting.com
# minimum Discourse version: v0.9.9.18

register_asset "javascripts/chitika.js"
register_asset "javascripts/discourse/templates/discovery.js.handlebars"
register_asset "javascripts/discourse/templates/topic.js.handlebars"

register_css <<CSS

.chitika {
  text-align: center;
  padding: 3px;
  margin-bottom: 10px;
}

CSS
