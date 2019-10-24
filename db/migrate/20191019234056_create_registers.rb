class CreateRegisters < ActiveRecord::Migration[6.0]
  def change
    create_table :registers do |t|
      t.references :user, null: false, foreign_key: true
      t.datetime :entry
      t.datetime :exit

      t.timestamps
    end
  end
end
