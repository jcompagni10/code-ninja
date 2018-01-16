class Api::HeadToHeadResultsController < ApplicationController
  include ActionView::Helpers::DateHelper
  def index
    user =  params[:user]
    if user
      @fights = HeadToHeadResult.user_results(user)
      @fights.map! do |fight| 
        fight["date"] = time_ago_in_words(fight["date"])
        fight
      end
    else
      render json: {error: true}, status: 422
    end
  end
end
