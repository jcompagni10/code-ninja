class Api::UserBotCompletionsController < ApplicationController
  def create
    @fight = UserBotCompletion.find_or_create_by(
      bot_id: params[:botId],
      user_id: current_user.id,
      status: :pending
    )
    if @fight.save
      render json: {time_limit: @fight.bot.time, fight_id: @fight.id}, status: 200
    else
      render json: @fight.errors_full_messages
    end

  end
end
