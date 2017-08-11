json.extract! social, :id, :name, :link, :description, :icon, :created_at, :updated_at
json.url social_url(social, format: :json)
