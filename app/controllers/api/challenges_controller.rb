class Api::ChallengesController < ApplicationController
    def index
        @challenges = Challenge.all
        render :index
    end
end
