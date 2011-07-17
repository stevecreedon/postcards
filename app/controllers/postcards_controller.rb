class PostcardsController < ApplicationController
  
  def show
    Postcard.basic('steve@light-art.co.uk', 'steve@light-art.co.uk', 'hello postcard').deliver
    render :nothing => true
  end
  
end