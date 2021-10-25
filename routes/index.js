const { Router } = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
    const {name, email, phone, message} = req.body;

    contentHTML = `
    <h1>Informacion del usuario</h1>
    <ul>
    <li>Nombre: ${name}</li>
    <li>Email: ${email}</li>
    <li>Telefono: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

    res.send('recibido')
});

module.exports = router;