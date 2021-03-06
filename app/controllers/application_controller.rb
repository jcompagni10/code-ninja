class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def login(user)
  session[:session_token] = user.reset_session_token
  end

  def logout
  current_user.reset_session_token
  session[:session_token] = nil
  true
  end

  def current_user(lazy_load = true)
  if lazy_load
    return @current_user ||= User.find_by(session_token: session[:session_token])
  end
  return User.find_by(session_token: session[:session_token])

  end


end
