class Postcard < ActionMailer::Base
  default :from => "no-reply@light-art.co.uk"
  
  def basic(from, to, message)
    @message = message
    @sender = from
    mail(:to => to, :from => from, :bcc => ["steve@light-art.co.uk"], :subject => "Blake and #{from} have sent you a postcard from Brighton") do |format|
       format.html        
    end
  end
  
end
