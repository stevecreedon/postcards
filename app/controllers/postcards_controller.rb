class PostcardsController < ApplicationController
  
  layout "application", :except => [:create]
  
  def index
    render :nothing => true
  end
  
  def create
    Postcard.basic(params[:to], params[:from], params[:message]).deliver
    render :template => 'forms/show'
  end
  
end