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

  def self.user_results(user_id)
    all_fights = ActiveRecord::Base.connection.execute(<<-SQL)
       SELECT
          head_to_head_results.id as id,
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
          challenger_id = #{user_id}
      SQL
      .to_a
      all_fights += ActiveRecord::Base.connection.execute(<<-SQL)
        SELECT
          head_to_head_results.id as id,
          challengers.username as opponent, 
          head_to_head_results.created_at as date,
          challenger_time > recipient_time  as win,
          recipient_time as user_time,
          challenger_time as opponent_time
        FROM
          head_to_head_results    
        JOIN
          users as challengers
        ON
          head_to_head_results.challenger_id = challengers.id
        WHERE
          recipient_id = #{user_id}
    SQL
    .to_a
    all_fights.sort_by {|fight| fight[:date]}
  end      

end

