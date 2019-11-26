class CreateTimerTicks < ActiveRecord::Migration[6.0]
  def change
    create_table :timer_ticks do |t|
      t.string :timer_id
      t.integer :tick

      t.timestamps
    end
  end
end
