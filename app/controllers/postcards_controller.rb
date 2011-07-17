class PostcardsController < ApplicationController
  
  def index
    render :nothing => true
  end
  
  def create
    puts "params are: #{params.inspect}"
    Postcard.basic(params[:to], params[:from], params[:message]).deliver
    render :nothing => true
  end
  
end