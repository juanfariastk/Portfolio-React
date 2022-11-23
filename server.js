const express = require("express")
const router = express.Router()
const cors = require("cors")
const nodemailer = require("nodemailer")

// padrão server para enviar emails com nodemailer

const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(5000, () => console.log("Servidor Aberto!"))
process.env.EMAIL_USER
process.env.EMAIL_PASS

const contactEmail = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: "juanfariasportfolio@outlook.com",
    pass: "portfolioreact2022"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Preparado para Envio!");
  }
});

router.post("/contact", (req, res) => {
  const nome = req.body.primeiro_nome + req.body.sobrenome
  const email = req.body.email
  const mensagem = req.body.mensagem
  const telefone = req.body.telefone
  const mail = {
    from: nome,
    to: "juanfariasportfolio@outlook.com",
    subject: "Contato - Portfolio Pessoal JF",
    html: `<p>Nome: ${nome}</p>
           <p>Email: ${email}</p>
           <p>Telefone: ${telefone}</p>
           <p>Mensagem: ${mensagem}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error)
    } else {
      res.json({ code: 200, status: "Mensagem Enviada" });
    }
  });
});