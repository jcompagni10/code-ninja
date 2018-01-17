class Api::HeadToHeadResultsController < ApplicationController
  include ActionView::Helpers::DateHelper
  def index
    @fights = HeadToHeadResult.user_results(current_user.id)
    @fights.map! do |fight| 
      fight["date"] = time_ago_in_words(fight["date"]).gsub("about ", "")
      fight["user_time"] = Time.at(fight["user_time"]).utc.strftime("%M:%S")
      fight["opponent_time"] = Time.at(fight["opponent_time"]).utc.strftime("%M:%S")
      fight
    end
  end

  def create
    @fight =  HeadToHeadResult.where("challenger_id != ? OR recipient_id != ?", current_user.id, current_user.id)
      .find_or_initialize_by(status: :AWAIT_RECIPIENT)
    if @fight.new_record?
      @fight.challenger = current_user
      @fight.recipient_id = User.order('RANDOM()').limit(1)[0].id
      @fight.task_id = current_user.possible_levels.sample
    else
      @fight.recipient = current_user
    end
    @fight.save
  end
end
