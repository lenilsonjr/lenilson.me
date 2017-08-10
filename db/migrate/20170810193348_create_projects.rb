class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :url
      t.boolean :highlighted
      t.string :image

      t.timestamps
    end
  end
end
