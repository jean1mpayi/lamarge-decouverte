export const sendToTelegram = async (formData) => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Telegram credentials missing");
    return { success: false, error: "Configuration missing" };
  }

  const message = `
🎤 *Nouvelle Candidature - La Marge Découverte*

👤 *Nom:* ${formData.nom}
👤 *Post-nom:* ${formData.postNom}
📱 *Téléphone:* ${formData.telephone}
🎵 *Style:* ${formData.style}
📍 *Commune:* ${formData.commune}

_Envoyé depuis le site web_
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return { success: true };
    } else {
      console.error("Telegram API Error:", data);
      return { success: false, error: data.description };
    }
  } catch (error) {
    console.error("Network Error:", error);
    return { success: false, error: error.message };
  }
};
