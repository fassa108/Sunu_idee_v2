export async function handler(evenement) {
    const { titre } = JSON.parse(evenement.body);

    const reponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CLE_API}`
        },
        body: JSON.stringify({
            model: "mistralai/mistral-nemo",
            messages: [
                {
                    role: "user",
                    content: `Tu vas choisir la categorie la plus adaptée au titre "${titre}" fourni parmi les elements de cette liste de categories : pedagogie, evenement, vie_de_campus, amelioration_technique et autre. Tu donnes seulement la categorie en reponse et respecte la casse`
                }
            ]
        })
    });

    const donnee = await reponse.json();
    return {
        statusCode: 200,
        body: JSON.stringify(donnee)
    };
}