class Api::UserSolutionsController < ApplicationController
  def show
    @solution = UserSolution.find_by(id: params[:id])
    if @solution
      render :show
    else
      render json: {}, status: 404
    end
  end


  # find or creat
  # run tests
  # update solution data accordingly
  #update user score
  #render test results

  def submit
    @solution = UserSolution.find_or_create_by(
      user_id: current_user.id,
      task_id: user_solution_params[:task_id],
      mode: user_solution_params[:mode],
    ) do |user_solution|
      user_solution.solution = user_solution_params[:solution]
    end
    @solution.user = current_user
    if @solution.save
      render :show
    else
      render json @solution.errors.full_messages, status: 422
    end
  end

  private
  def user_solution_params
    params.require(:user_solution).permit(:task_id, :mode, :solution)

  end
end
