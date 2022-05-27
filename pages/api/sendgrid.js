import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "bernardo@idxcode.com.br", // Your email where you'll receive emails
            from: "bernardo@idxcode.com.br", // your website email address here
            subject: "Novo contato em Idxcode.com.br",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Você tem um novo E-mail de: ${req.body.name}<br/>E-mail para contato é:✉️${req.body.mail}<br/>Telefone para contato: ${req.body.phone} </h3>
              <div style="font-size: 16px;">
              <p>Mensagem:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <br>IDXCODE<br>Soluções em tecnologia<br>+55 67 99838-2687</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://idxcode.com.br/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://instagram.com/idx.code/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                
              </div>
              </div>
      </body>
      </html>`,
        });
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;