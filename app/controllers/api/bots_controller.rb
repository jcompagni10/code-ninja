class Api::BotsController < ApplicationController
  def index
    @bots = Bot.all
    render :index
  end
end
