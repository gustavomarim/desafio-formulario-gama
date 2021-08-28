import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(req, res) {
    const TOKEN = '0362d0de424a129bbdf8689e3dd6e0';

    if (req.method === 'POST') {
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "1098217",
            ...req.body,
        })

        res.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return
    }

    res.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}