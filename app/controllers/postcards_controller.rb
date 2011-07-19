class PostcardsController < ApplicationController
  
  def index
    render :nothing => true
  end
  
  def create
    Postcard.basic(params[:to], params[:from], params[:message]).deliver
  end
  
end