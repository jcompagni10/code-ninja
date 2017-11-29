class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true


# TODO: safely eliminate this
  def parse_by_type(value, type)
  #   case type
  #   when "Integer"
  #     Integer(value)
  #   when "String"
  #     value
  #   when "IntegerArray"
  #     value[1...-1].split(",").map(&:to_i)
  #   when "StringArray"
  #     value[1...-1].split(",").map(&:to_s)
  #   end
  value
  end

end
