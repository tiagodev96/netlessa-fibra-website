This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Campanha Indique

Página pública `/indique` (aliases `/indicar` e `/indique-um-amigo` redirecionam para ela) com formulário em 3 passos. Campos obrigatórios: nome e telefone do indicado, nome e telefone de quem indica e o consentimento. Telefone 2 e bairro do indicado são opcionais.

A indicação segue por dois caminhos:

1. **Planilha.** O envio chama `POST /api/indique`, que valida o body com o schema zod compartilhado em `src/lib/indique/schema.ts` e grava uma linha no Google Sheets. Responde `200` se gravar e `502` se falhar. Além do honeypot (campo `site`), o endpoint limita a 5 envios por IP a cada 10 minutos (`429`); o contador é em memória, por instância do servidor.
2. **WhatsApp.** Assim que a chamada à planilha termina, o site abre uma nova aba com a conversa da Netlessa (`wa.me/5571986064654`) e a mensagem da indicação já preenchida, começando por "Promoção Indique". Como quem envia é o próprio cliente, do número dele, a conversa cai no robô e na fila do Opa! Suite como um atendimento normal, sem template nem custo de mensagem. O WhatsApp abre mesmo se a planilha falhar: o cliente não vê erro, e a falha fica no log do servidor.

A aba é aberta no momento do toque em "Enviar indicação", mostrando "Abrindo o WhatsApp...", e só depois da chamada é redirecionada. Navegadores de celular bloqueiam `window.open` chamado depois de uma espera assíncrona. Se mesmo assim a aba for bloqueada, a tela de confirmação tem o botão "Abrir o WhatsApp".

A query `?src=` (`modem`, `tela`, `instagram`; qualquer outro valor vira `site`) identifica de onde veio o QR Code e é gravada como `Origem`.

### Google Sheets (`sheets.ts`)

Copie `.env.example` para `.env.local` e preencha as variáveis. A planilha `GOOGLE_SHEETS_ID` recebe uma linha por indicação na aba `Indicacoes`, e o cabeçalho é criado na primeira execução. Autenticação por service account:

1. No Google Cloud Console, ative a API **Google Sheets** no projeto.
2. Em **IAM e administrador > Contas de serviço**, crie uma conta e gere uma chave JSON.
3. Copie `client_email` para `GOOGLE_SERVICE_ACCOUNT_EMAIL` e `private_key` para `GOOGLE_PRIVATE_KEY` (entre aspas, mantendo os `\n`).
4. Na planilha, clique em **Compartilhar** e adicione o e-mail da service account como **Editor**. Sem isso a API responde 403.
5. Crie a aba `Indicacoes` (o cabeçalho é gerado automaticamente).

Colunas: Data/Hora (America/Bahia), Indicado Nome, Indicado Tel 1, Indicado Tel 2, Indicado Bairro, Indicante Nome, Indicante Tel, Origem, Status (`Novo`), Instalação efetivada e Mês grátis creditado (as duas últimas ficam vazias para preenchimento manual).

### QR Codes

Os arquivos em `public/qr/` (`qr-indique-modem`, `qr-indique-tela`, `qr-indique-instagram`, em SVG e PNG 2000px) apontam para `https://netlessafibra.com.br/indique?src=...`. Para regenerar (por exemplo, ao adicionar uma nova origem em `scripts/gerar-qr-indique.mjs`):

```bash
npm run qr:indique
```
