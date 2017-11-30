class Api::UserBotCompletionsController < ApplicationController
  def create
    # if not pending fight make new fight
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

  def update
    @match = UserBotCompletion.find_by(id: params[:id])
    if @match
      if @match.status = "pending"
        @match.update(status: params[:status])
        # TODO: allow tie
        botResult = params[:status] == "win" ? "loss": "win"
        @match.bot.send(botResult)
      end
    end
  end

end
