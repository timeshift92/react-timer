class TimersController < ActionController::API
    def index
        @timers = Timer.all
        render json: @timers
    end
    def last
        @timer = Timer.where(active:true).last
        render json: @timer
    end
    def show
        @timer = Timer.find(params[:id])
        render json: @timer
    end
    def create
        if params[:tick] == nil
            render json: 'required tick ', status: :unprocessable_entity
        else
            @timer = Timer.new
            @timer.start_at = DateTime.now;
            @timer.active = true;
            @timer.tick = params[:tick];
            @timer.save
            render json: @timer
        end
    end
    def update
        @timer = Timer.find(params[:id])
        @timer.end_at = DateTime.now
        @timer.active = false
        @timer.save 
        render json: @timer
    end
private
  
end
