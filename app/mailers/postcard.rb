class Postcard < ActionMailer::Base
  default :from => "no-reply@light-art.co.uk"
  
  def basic(from, to, message)
    @message = message
    mail(:to => to, :from => from, :bcc => ["steve@light-art.co.uk"]) do |format|
       format.html        
    end
  end
  
end
