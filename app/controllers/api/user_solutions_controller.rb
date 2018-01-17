class Api::UserSolutionsController < ApplicationController
  def show
    @solution = UserSolution.find_by(id: params[:id])
    if @solution
      render :show
    else
      render json: {}, status: 404
    end
  end

  def submit
    @solution = UserSolution.find_or_create_by(
      user_id: current_user.id,
      task_id: user_solution_params[:task_id],
      mode: user_solution_params[:mode],
    )
    @solution.solution = user_solution_params[:solution]
    if @solution.save
      @test_results = @solution.run_tests
      render :test_results
    else
      render json: @solution.errors.full_messages, status: 422
    end
  end

  private

  def user_solution_params
    params.require(:userSolution).permit(:task_id, :mode, :solution, :fight_id)
  end
end
