class Api::TasksController < ApplicationController
  def show
    @task = Task.find_by(id: params[:id])
    if @task
      render :show
    else
      render json: {}, status: 404
    end
  end
end
