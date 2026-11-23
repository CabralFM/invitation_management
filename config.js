// Configuração do convite da Vitoria.
// Preenche API_URL e SHEET_URL depois de criares o Apps Script e o Google Sheet.
window.CONFIG = {
  // URL da Web App do Apps Script (termina em /exec). Enquanto estiver "XXXX",
  // o convite continua a funcionar e a abrir o WhatsApp; só não grava na base de dados.
  API_URL: "https://script.google.com/macros/s/AKfycbyRCSJfF6OTk3RWr7ytwcn4rRuMmN55fj53A6VMBbR2LyMMqS_hEF4oEt-dRYZug9S6wg/exec",

  // Número de WhatsApp dos pais (formato wa.me, sem + nem espaços).
  WHATSAPP: "351919081504",

  // Prazo para confirmar (AAAA-MM-DD).
  PRAZO: "2026-12-05",

  // Link do Google Sheet "RSVP Vitoria" (aparece no admin). Opcional.
  SHEET_URL: "https://docs.google.com/spreadsheets/d/XXXX"
};
