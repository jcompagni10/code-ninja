class HeadToHeadResult < ApplicationRecord

  belongs_to :task

  belongs_to :challenger,
             class_name: :User,
             foreign_key: :challenger_id

  belongs_to :recipient,
             class_name: :User,
             foreign_key: :recipient_id
    
  after_initialize :set_status

  # possible statuses :NO_RESULTS, :AWAIT_RECIPIENT :COMPLETE
  def set_status
    self.status ||= :NO_RESULTS
  end

  def self.user_results(user)
    ActiveRecord::Base.connection.execute(<<-SQL)
      SELECT 
        *
      FROM
       ( SELECT
          head_to_head_results.id,
          recipients.username as opponent, 
          head_to_head_results.created_at as date,
          challenger_time < recipient_time  as win,
          challenger_time as user_time,
          recipient_time as opponent_time
        FROM
          head_to_head_results    
        JOIN
          users as recipients
        ON
        head_to_head_results.recipient_id = recipients.id
        WHERE
          challenger_id = #{user.id} ) challenger
      LEFT OUTER JOIN
        ( SELECT
          id,
          username
        FROM
          head_to_head_results    
        JOIN
          users as challengers
        ON
          head_to_head_results.challenger_id = challengers.id
        WHERE
          recipient_id = #{user.id} ) recipient
      ON
        challenger.id = recipient.id

    SQL
    # results = []
    # challenger = HeadToHeadResult.where("status = 'COMPLETE'").joins(:challenger).joins(:recipient).where('users.id = ?' , user.id)
    # challenger.each do |result|
    #   data = {}
    #   data[:opponent] = result.recipient.username
    #   data[:date] = time_ago_in_words(result.created_at).remove("about ")
    #   data[:score] = result.challanger_time < result.recipient_time ? 300 : 0 
    #   data[:opponent_pic] = result.recipient.img_url
    # end
    # recipient = HeadToHeadResult.where("status = 'COMPLETE'").joins(:recipient).where('users.id = ?' , user.id)
  end      

end

