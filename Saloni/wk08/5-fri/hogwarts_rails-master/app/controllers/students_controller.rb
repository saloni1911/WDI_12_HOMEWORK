class StudentsController < ApplicationController

  def index
    @students = Student.all
    @house = House.all
  end

  def show
    @student = Student.find(params[:id])
    @house = House.all
  end

end
