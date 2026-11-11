# DevLinks

Página de perfil com links, redes sociais e alternância entre temas claro e escuro, construída com React, TypeScript e Vite.

O layout foi implementado a partir dos frames desktop e mobile do projeto **DevLinks • OpenCode MiniProject** no Figma.

## Funcionalidades

- Avatar, nome de usuário, links principais e redes sociais.
- Tema claro e escuro com persistência em `localStorage`.
- Restauração do tema salvo antes da primeira pintura da página.
- Layout responsivo para mobile e desktop.
- Links externos abertos em nova aba com `rel="noopener noreferrer"`.
- Navegação por teclado, nomes acessíveis e estados de foco visíveis.
- Respeito à preferência de movimento reduzido.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Phosphor Icons para o controle de tema
- Ionicons para as redes sociais
- Inter (Google Fonts)

## Como executar

```bash
npm install
npm run dev
```

O servidor local será iniciado pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

Para executar o lint:

```bash
npm run lint
```

## Estrutura

```text
src/
├── assets/                  # Avatar e fundos desktop/mobile
├── components/
│   ├── features/            # Profile, ProfileAvatar, LinkButton e SocialLinks
│   └── ui/                  # ThemeToggle
├── data/                    # Dados do perfil, links e configuração do tema
├── hooks/                   # useTheme
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Links provisórios

Os destinos ainda não foram definidos no projeto de referência. Por isso, as URLs em
`src/data/profile.ts` apontam para o domínio reservado `example.com` e estão comentadas
como provisórias. Substitua cada valor pelos destinos reais antes de publicar.

## Temas e tokens

As cores ficam centralizadas em `src/index.css` por meio das variáveis CSS do design
system. O tema ativo é aplicado com o atributo `data-theme` no elemento `<html>` e a
preferência é salva com a chave `devlinks-theme`.

## Referências

- [Briefing do projeto](https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93)
- [Figma — interface](https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=0-1)
- [Figma — Style Guide](https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=1437-350)
