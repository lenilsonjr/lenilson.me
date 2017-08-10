require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LenilsonCodes
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.time_zone = ActiveSupport::TimeZone.new('America/Recife')
    config.active_record.time_zone_aware_types = [:datetime]
    config.active_record.default_timezone = :utc # Or :utc

    config.exceptions_app = self.routes

    config.generators do |g|
      g.orm             :active_record
      g.template_engine :haml
      g.test_framework  :test_unit, fixture: true
      g.scaffold_stylesheet false
      g.stylesheets     false
      g.javascripts     false
    end

  end
end
