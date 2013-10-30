require 'susy'
activate :livereload

activate :deploy do |deploy|
	deploy.method = :ftp
	deploy.host = "web332.webfaction.com"
	deploy.user = "piermaria"
	deploy.password = "Nonmelaricordo2"
	deploy.path = "/home/piermaria/webapps/flavialarocca"
	#deploy.build_before = true
	deploy.clean = true
end

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
page "/", :layout => :html5
page "/newsletters/september2013.html", :layout => false
page "/newsletters/temporaryshowroom2013.html", :layout => false
page "/newsletters/temporaryshowroom2013_2.html", :layout => false
page "/newsletters/temporaryshowroom2013_3.html", :layout => false
page "/newsletters/summersale_registration2013.html", :layout => false
page "/newsletters/pressday2013_1.html", :layout => false
page "/newsletters/summersale_tea2013.html", :layout => false
page "/stores.html", :layout => :html5
page "/presskit.html", :layout => :html5
page "/press.html", :layout => :html5

page "/shop/list.html", :layout => :html5

page "/shop/stripesmania/mini-skirt-stripes-green.html", :layout => :html5
page "/shop/stripesmania/minidress-stripes-red.html", :layout => :html5
page "/shop/stripesmania/overalls-stripe-orange.html", :layout => :html5
page "/shop/stripesmania/overalls-stripes-red.html", :layout => :html5
page "/shop/stripesmania/skirt-dress-orange-stripes.html", :layout => :html5
page "/shop/stripesmania/skirt-dress-stripes-green.html", :layout => :html5
page "/shop/stripesmania/skirt-dress-stripes-orange.html", :layout => :html5
#page "/shop/stripesmania/three-piece-skirt-orange.html", :layout => :html5
#page "/shop/stripesmania/top-stripes-orange.html", :layout => :html5
page "/shop/stripesmania/two-piece-short-orange-dress.html", :layout => :html5

page "/shop/summeressentials/3-dress-denim.html", :layout => :html5
#page "/shop/summeressentials/overalls-black.html", :layout => :html5
page "/shop/summeressentials/3-dress-polkadot.html", :layout => :html5
page "/shop/summeressentials/3-dress-popeline.html", :layout => :html5
page "/shop/summeressentials/3-dress-rose.html", :layout => :html5
page "/shop/summeressentials/3-dress-vichy.html", :layout => :html5
page "/shop/summeressentials/3-white-dress.html", :layout => :html5
page "/shop/summeressentials/mini-white.html", :layout => :html5
page "/shop/summeressentials/skirt-black.html", :layout => :html5
page "/shop/summeressentials/skirt-blue.html", :layout => :html5
page "/shop/summeressentials/skirt-white.html", :layout => :html5
page "/shop/summeressentials/top-black.html", :layout => :html5
page "/shop/summeressentials/top-blue.html", :layout => :html5
page "/shop/summeressentials/vichy-dress-babyblue.html", :layout => :html5

#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css
  #activate :minify_html
  # Minify Javascript on build
  activate :minify_javascript
  #activate :favicon_maker
  #activate :smusher
  # Enable cache buster
  #activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
