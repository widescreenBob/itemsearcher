source 'https://rubygems.org'

group :development do

  # Sass, Compass and extensions.
  gem 'singularitygs', '~>1.2.0' # Alternative to the Susy grid framework.
  gem 'singularity-extras', '~> 1.0.0.alpha.3'
  gem 'breakpoint'              # Manages CSS media queries.
  gem 'sassy-buttons'

  gem 'sass','3.3.8'         # Sass.
  gem 'sass-globbing'           # Import Sass files based on globbing pattern.
  gem 'compass', '1.0.0.alpha.19'                # Framework built on Sass.
  gem 'compass-validator'       # So you can `compass validate`.
  gem 'compass-normalize'       # Compass version of normalize.css.

  gem 'toolkit'                 # Compass utility from the fabulous Snugug.
  gem 'oily_png'                # Faster Compass sprite generation.
  gem 'css_parser'              # Helps `compass stats` output statistics.

  # Guard
  gem 'guard'                   # Guard event handler.
  gem 'guard-bundler'           # Auto install/update bundle when needed.
  gem 'guard-compass'           # Compile on sass/scss change.
  gem 'guard-shell'             # Run shell commands.
  gem 'guard-livereload'        # Browser reload.

  gem 'listen', '~> 1.1.0'     # Listens to file mods & notifies you of changes.
  gem 'yajl-ruby'                  # Faster JSON with LiveReload in the browser.


  # Dependency to prevent polling. Setup for multiple OS environments.
  # Optionally remove the lines not specific to your OS.
  # https://github.com/guard/guard#efficient-filesystem-handling
  gem 'rb-inotify', '~> 0.9', :require => false      # Linux
  gem 'rb-fsevent', :require => false                # Mac OSX
  gem 'rb-fchange', :require => false                # Windows

end
