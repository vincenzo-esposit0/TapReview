// Set to true (and put the real number, e.g. '393471234567') to turn WhatsApp contact buttons back on
export const WHATSAPP_ENABLED = false;
export const WHATSAPP_NUMBER = '390000000000';

export const whatsappUrl = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
