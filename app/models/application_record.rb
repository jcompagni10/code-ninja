class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true


# TODO: safely eliminate this
  def parse_by_type(value, type)
    case type
    when "Integer"
      Integer(value)
    when "String"
      value.inspect
    # when "IntegerArray"
    #   [JSON(value)]
    when "StringArray"
      JSON(value)
    else
      value
    end
  value
  end

end
