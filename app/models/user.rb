class User < ApplicationRecord
  validates :username,
            :email,
            :img_url,
            :score,
            :password_digest,
            :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_img_url, :ensure_session_token
  attr_reader :password


  def ensure_img_url
    self.img_url = "https://media.istockphoto.com/vectors/hacker-silhouette-with-question-symbol-on-the-blue-background-with-vector-id853879324?k=6&m=853879324&s=612x612&w=0&h=ev12cJNEDCav4012scLImGuteci6a0FPFBSZdDvsgm4="
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token
    self.session_token = generate_session_token
    save
    session_token
  end

  def self.find_by_credentials(credentials)
    user = User.find_by(username: credentials[:username])
    return user if user && user.is_password?(credentials[:password])
  end


  private

  def generate_session_token
    # token = null
    # until token && uniq_session_token?(token)
    #   token = SecureRandom.urlsafe_base64
    # end
    # token
    SecureRandom.urlsafe_base64
  end

  def uniq_session_token?(token)
    User.exists?(session_token: token)
  end
end
