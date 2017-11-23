class Api::LevelSetsController < ApplicationController
  def index
    @level_sets = LevelSet.all
    render :index
  end
end
