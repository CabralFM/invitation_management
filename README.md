# Convite digital – 4 anos da Vitoria ❄️

Convite de aniversário que abre no telemóvel sem login, a partir de um link do WhatsApp.
Cada confirmação é guardada automaticamente num Google Sheet (grátis) e há uma página de
administração privada com a lista de presenças e exportação para Excel.

**Site:** https://cabralfm.github.io/invitation_management/
**Admin:** https://cabralfm.github.io/invitation_management/admin.html (precisa da chave de administração)

## Como funciona (custo zero)

```
Convidado  → GitHub Pages (index.html)
               ├─ POST  → Apps Script (Web App) → Google Sheet "RSVP Vitoria"
               └─ abre wa.me → WhatsApp dos pais (aviso imediato)

Admin      → GitHub Pages (admin.html) ──(chave)──→ Apps Script → Sheet
               └─ SheetJS gera o .xlsx no browser
```

- **GitHub Pages:** aloja o site estático, grátis.
- **Google Sheets + Apps Script:** base de dados e backend, grátis.
- Se a gravação na base de dados falhar, o WhatsApp abre na mesma — a mensagem é o plano B.

## Ficheiros

```
index.html            convite + formulário de confirmação
admin.html            painel de presenças (privado)
config.js             URL do Apps Script, WhatsApp, prazo, link do Sheet
assets/vitoria-princesa.jpg   foto do convite
assets/preview.jpg            imagem da pré-visualização (Open Graph, 1200×630)
apps-script/Code.gs   backend, para colar no Apps Script
```

---

## Instalação (passo a passo)

### 1. Criar o Google Sheet e colar o backend
1. Em https://sheets.google.com cria uma folha nova e dá-lhe o nome **RSVP Vitoria**.
2. Menu **Extensões → Apps Script**.
3. Apaga o conteúdo do ficheiro `Code.gs` que aparece e cola o conteúdo de
   `apps-script/Code.gs` deste repositório. Guarda (💾).

As folhas `respostas` e `convidados` são criadas automaticamente na primeira utilização.

### 2. Definir a chave de administração
1. No Apps Script: ⚙️ **Definições do projeto**.
2. Em **Propriedades do script**, carrega em **Adicionar propriedade**:
   - Nome: `ADMIN_KEY`
   - Valor: uma palavra-passe forte (só tua).
3. Guardar. *(Opcional: criar também `NOTIFY_EMAIL` com o teu email e descomentar a função
   `notifyEmail` no fim do `Code.gs` para receberes um email a cada resposta.)*

### 3. Publicar o backend como Web App
1. No Apps Script: **Implementar → Nova implementação**.
2. Tipo: **Aplicação Web**.
3. **Executar como:** eu (a tua conta).
4. **Quem tem acesso:** Qualquer pessoa.
5. Implementar e autorizar as permissões.
6. Copia o **URL da aplicação web** (termina em `/exec`).
7. Cola esse URL no `config.js`, no campo `API_URL`.
   Copia também o link do Sheet para `SHEET_URL`.

### 4. Publicar o site no GitHub Pages
1. Faz push deste código para o repositório público `CabralFM/invitation_management`.
2. No GitHub: **Settings → Pages**.
3. **Source:** Deploy from a branch → branch `main` / `/root`. Guardar.
4. Em 1–2 minutos o site fica em https://cabralfm.github.io/invitation_management/

### 5. Testar
1. Abre o site e faz uma confirmação de teste.
2. Confirma que aparece no Google Sheet e no `admin.html`, e apaga o teste.

### 6. Testar a pré-visualização
Cola o link numa conversa de WhatsApp contigo próprio e confirma que aparece a foto e o título.

---

## Privacidade
- O repositório público expõe o código, a foto e o número de WhatsApp (que já estão no convite).
- A **lista de convidados e as respostas ficam só no Google Sheet**, que é privado.
- **Não faças commit da `ADMIN_KEY`** — ela vive apenas nas Propriedades do script.
