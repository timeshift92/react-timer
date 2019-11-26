class CreateTimers < ActiveRecord::Migration[6.0]
  def change
    create_table :timers do |t|
      t.timestamp :start_at
      t.timestamp :end_at
      t.integer :tick
      t.boolean :active
      t.timestamps
    end
    
  end
  def down

  end  
end
