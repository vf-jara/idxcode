import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function leadTrafego(req, res) {
  if(req.body.email){
    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "bernardo@idxcode.com.br", // Your email where you'll receive emails
            from: "bernardo@idxcode.com.br", // your website email address here
            subject: "Novo Lead para Gestão de Tráfego em Idxcode.com.br",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="pt-BR">
      <head>
      </head>
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Novo Lead: ${req.body.empresa}<br/></h3>
              <p>Nome: ${req.body.nome}</p><br/>
              <p>Empresa: ${req.body.empresa}</p><br/>
              <p>E-mail para contato é:✉️${req.body.email}</p><br/>
              <p>WhatsApp para contato: ${req.body.whatsapp}</p><br/>
              <p>Área de atuação: ${req.body.area}</p><br/>
              <p>Faturamento: ${req.body.faturamento}</p><br/>

              <br>IDXCODE<br>Soluções em tecnologia<br>+55 67 99838-2687</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://idxcode.com.br/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://instagram.com/idx.code/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
              </div>
              </div>
      </body>
      </html>`,
        }).then(() => {
          return res.json({ status: "sent" });
        });
    } catch (error) {
        // console.log(error);
        return res.json({ error: error.message });
    }
  }
  return res.json({ error: "" });
}

export default leadTrafego;