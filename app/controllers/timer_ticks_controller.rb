class TimerTicksController < ActionController::API
    def index
        @timers = TimerTick.all
        render json: @timers
    end
    def show
        # Timer.delete_all
        if params[:id]
            @timer = TimerTick.where(timer_id: params[:id]).last
            render json: @timer
        else
            render json: 'required id (timer_id) ', status: :unprocessable_entity
        end
    end
    def create
        
        if  Timer.find(params[:timer_id]) && params[:timer_id] && params[:tick]
            @timer_tick = TimerTick.new
            @timer_tick.timer_id = params[:timer_id];
            @timer_tick.tick = params[:tick];
            @timer_tick.save
            render json: @timer_tick
        else
            render json: 'required timer_id and tick ', status: :unprocessable_entity
        end
    end
    
end
