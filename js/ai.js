import { nettoyerChamp } from "./validation.js";

export async function genererCategorie(titre) {
    const resultat = await fetch("/.netlify/functions/ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ titre })
    });

    const donnee = await resultat.json();
    return nettoyerChamp(donnee.choices[0].message.content);
}