class Api::BotsController < ApplicationController
  def index
    @bots = Bot.all
    render :index
  end

  def show
    @bot = Bot.find_by(id: params[:id])
    if @bot
      render :show
    else
      render JSON: { error: 'Bot Not Found' }, status: 404
    end
  end
end
