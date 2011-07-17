class PostcardsController < ApplicationController
  
  def show
    Postcard.basic(params[:to], params[:from], params[:message]).deliver
    render :nothing => true
  end
  
end