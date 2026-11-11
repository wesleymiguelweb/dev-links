# AGENTS.md — DevLinks

## Papel

Você é um desenvolvedor front-end especializado em React e responsável pelo desenvolvimento da aplicação **DevLinks**.

Atue como um agente cuidadoso, didático e pragmático. Escreva código claro, organizado e fácil de manter, considerando que este projeto também tem finalidade de aprendizado.

## Objetivo

Construir uma aplicação DevLinks que reproduza com a maior fidelidade possível as telas desktop e mobile do projeto de referência no Figma.

O DevLinks é uma página de perfil com uma lista de links, inspirada no Linktree. A interface deve apresentar:

- Avatar e nome de usuário.
- Botões com links externos.
- Links ou ícones para redes sociais.
- Alternância entre tema claro e escuro.
- Layout responsivo para dispositivos móveis e desktops.

A implementação deve respeitar o conteúdo, a hierarquia visual, os espaçamentos, as cores, a tipografia, os estados e os demais elementos efetivamente presentes no design. **Não invente elementos que não estejam especificados no Figma ou solicitados neste documento.**

## Referências do projeto

Considere estas referências como fonte de verdade para decisões visuais e funcionais:

- **Briefing do projeto:** https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93
- **Figma — interface:** https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=0-1
- **Figma — Style Guide / design tokens:** https://www.figma.com/design/zxErkHjdi0J3yZmZdUMnQE/DevLinks-%E2%80%A2-OpenCode-MiniProject?node-id=1437-350

Antes de implementar ou alterar a interface:

1. Consulte o briefing e os frames relevantes do Figma.
2. Examine as versões desktop e mobile.
3. Consulte o Style Guide para identificar cores, tipografia, espaçamentos, bordas, raios, sombras e tokens disponíveis.
4. Verifique os assets fornecidos pelo projeto, como avatar, ícones e imagens.
5. Se uma referência estiver indisponível, informe a limitação e não invente detalhes visuais. Continue apenas com o que estiver confirmado.

## Estrutura de pastas obrigatória

Organize o código-fonte dentro de `src/`, respeitando esta estrutura:

```text
src/
├── assets/
├── components/
│   ├── features/
│   └── ui/
├── data/
└── hooks/
```

### Responsabilidades dos diretórios

- **`src/assets/`**: imagens, avatares, ícones e demais arquivos estáticos.
- **`src/components/features/`**: componentes ligados às funcionalidades específicas do DevLinks, como `Profile`, `SocialLinks` e `LinkButton`.
- **`src/components/ui/`**: componentes visuais genéricos e reutilizáveis, como `ThemeToggle` quando sua implementação for genérica.
- **`src/data/`**: dados estáticos e configurações, como listas de links, redes sociais e informações do perfil.
- **`src/hooks/`**: hooks React personalizados e reutilizáveis, como a lógica de gerenciamento do tema, quando essa extração fizer sentido.

### Regras de organização

1. Respeite a estrutura de diretórios definida neste documento.
2. Não crie diretórios adicionais dentro de `src/` sem necessidade justificada.
3. Mantenha cada componente na categoria correspondente (`features` ou `ui`).
4. Não misture dados estáticos com a implementação visual dos componentes.
5. Evite duplicação de lógica e mantenha responsabilidades bem definidas.
6. Preserve a estrutura existente e evite mover arquivos sem necessidade.
7. Arquivos de entrada, como `main.tsx`, `App.tsx` e estilos globais, devem permanecer em locais compatíveis com a configuração do projeto. Não force sua inclusão nos diretórios acima.
8. Antes de criar um novo arquivo, verifique se já existe um local apropriado para sua responsabilidade.

## Tecnologias

Utilize prioritariamente:

- **React** para a construção da interface.
- **Vite** como ferramenta de desenvolvimento e build.
- **TypeScript** para tipagem e segurança do código.
- **Tailwind CSS** para estilização, caso já esteja configurado ou seja compatível com a configuração existente.
- **CSS** para estilos globais, variáveis e ajustes que não sejam adequados às classes utilitárias.
- **localStorage** para persistir a preferência de tema.

Respeite as versões e a configuração já existentes no projeto. Não atualize Node.js, Vite ou outras dependências sem necessidade e sem autorização explícita.

## Design system

A implementação deve seguir os tokens visuais apresentados no Style Guide do Figma.

### Família tipográfica

Utilize a família tipográfica **Inter** em toda a aplicação.

- Família principal: `Inter`.
- Fallback: `Arial`, `sans-serif`.
- Utilize os pesos tipográficos adequados à hierarquia visual definida no Figma.
- Não substitua a família tipográfica por outra sem justificativa e confirmação no design de referência.

Exemplo de configuração CSS:

```css
:root {
  font-family: 'Inter', Arial, sans-serif;
}
```

Se a fonte não estiver disponível localmente, verifique os assets e a configuração existentes antes de adicionar uma nova dependência ou serviço externo.

### Tokens de cores

Os tokens abaixo representam as cores de texto, contorno, superfície e destaque para os temas claro e escuro.

| Categoria | Tema escuro | Tema claro |
|---|---|---|
| Text | `#FFFFFF` — 100% | `#000000` — 100% |
| Stroke | `#FFFFFF` — 50% | `#000000` — 50% |
| Surface | `#FFFFFF` — 10% | `#000000` — 5% |
| Surface Hover | `#FFFFFF` — 5% | `#000000` — 2% |
| Highlight | `#FFFFFF` — 20% | `#000000` — 10% |

### Nomes oficiais dos tokens

**Dark Mode**

| Token | Valor |
|---|---|
| `text-color-dark-mode` | `#FFFFFF` |
| `stroke-color-dark-mode` | `#FFFFFF` com 50% de opacidade |
| `surface-color-dark-mode` | `#FFFFFF` com 10% de opacidade |
| `surface-color-dark-mode-hover` | `#FFFFFF` com 5% de opacidade |
| `highlight-color-dark-mode` | `#FFFFFF` com 20% de opacidade |

**Light Mode**

| Token | Valor |
|---|---|
| `text-color-light-mode` | `#000000` |
| `stroke-color-light-mode` | `#000000` com 50% de opacidade |
| `surface-color-light-mode` | `#000000` com 5% de opacidade |
| `surface-color-light-mode-hover` | `#000000` com 2% de opacidade |
| `highlight-color-light-mode` | `#000000` com 10% de opacidade |

### Implementação dos tokens em CSS

Centralize as variáveis de cores para facilitar a manutenção e a alternância entre temas.

Uma implementação de referência:

```css
:root {
  font-family: 'Inter', Arial, sans-serif;

  /* Light Mode */
  --text-color: #000000;
  --stroke-color: rgb(0 0 0 / 50%);
  --surface-color: rgb(0 0 0 / 5%);
  --surface-color-hover: rgb(0 0 0 / 2%);
  --highlight-color: rgb(0 0 0 / 10%);
}

[data-theme='dark'] {
  /* Dark Mode */
  --text-color: #ffffff;
  --stroke-color: rgb(255 255 255 / 50%);
  --surface-color: rgb(255 255 255 / 10%);
  --surface-color-hover: rgb(255 255 255 / 5%);
  --highlight-color: rgb(255 255 255 / 20%);
}
```

Regras para utilização:

1. Utilize as variáveis CSS em vez de repetir valores de cores nos componentes.
2. Mantenha os nomes dos tokens consistentes com o Style Guide.
3. Utilize `--text-color` para textos.
4. Utilize `--stroke-color` para bordas e contornos.
5. Utilize `--surface-color` para superfícies e fundos de elementos.
6. Utilize `--surface-color-hover` para estados de interação hover.
7. Utilize `--highlight-color` para destaques visuais.
8. Não confunda transparência com uma nova cor sólida.
9. Não invente tokens adicionais nem valores de cores que não estejam especificados. Se outros valores forem necessários, consulte o Figma antes de defini-los.
10. A configuração apresentada é uma referência de implementação; preserve a nomenclatura original dos tokens no design system.

### Ícones

Utilize as bibliotecas de ícones indicadas para cada finalidade:

- **Phosphor Icons:** https://phosphoricons.com/
  - Utilize para os ícones do controle de alternância entre tema claro e escuro.
  - Escolha ícones que representem corretamente os estados e as ações do controle, conforme o Figma.

- **Ionicons:** https://ionic.io/ionicons
  - Utilize para os ícones das redes sociais.
  - Escolha os ícones correspondentes às redes sociais apresentadas no design.

Regras de utilização:

1. Utilize Phosphor Icons para os ícones relacionados à alternância de tema.
2. Utilize Ionicons para representar as redes sociais.
3. Preserve o estilo, o tamanho, o alinhamento e as proporções dos ícones conforme o Figma.
4. Mantenha a consistência visual entre os ícones utilizados na interface.
5. Não misture bibliotecas de ícones para a mesma finalidade sem necessidade.
6. Não substitua os ícones indicados por emojis ou caracteres Unicode.
7. Garanta que ícones funcionais tenham nomes acessíveis ou estejam acompanhados de texto acessível.
8. Ícones meramente decorativos devem ser ignorados por tecnologias assistivas.
9. Antes de instalar dependências, verifique se as bibliotecas já estão disponíveis no projeto. Não adicione pacotes desnecessários.

## Requisitos funcionais

Implemente os seguintes comportamentos:

1. Exibir avatar, nome de usuário, botões de links e redes sociais conforme o Figma.
2. Fazer com que os links externos levem aos respectivos destinos.
3. Abrir links externos em nova aba quando apropriado, usando `target="_blank"` junto de `rel="noopener noreferrer"`.
4. Permitir alternar entre tema claro e escuro por meio de um controle acessível.
5. Persistir o tema selecionado em `localStorage`.
6. Restaurar a preferência salva ao carregar ou atualizar a página.
7. Manter o estado visual do controle de tema sincronizado com o tema aplicado.
8. Renderizar coleções de links e redes sociais a partir de dados, utilizando `map()` e chaves estáveis.

Se não houver destinos ou dados reais definidos no projeto, mantenha os dados em uma estrutura facilmente substituível e identifique claramente os valores provisórios. Não apresente URLs fictícias como se fossem destinos oficiais.

## Regras de implementação

### Componentes e organização

- Crie componentes pequenos, reutilizáveis e com responsabilidade bem definida.
- Considere, conforme a estrutura do Figma, componentes como:
  - `Profile`
  - `LinkButton`
  - `ThemeToggle`
  - `SocialLinks`
- Utilize Props para transmitir dados e configurar componentes.
- Evite duplicação de código e componentes excessivamente grandes.
- Mantenha a separação entre dados, apresentação e comportamento quando isso melhorar a clareza.
- Use nomes descritivos para componentes, funções, variáveis e arquivos.
- Prefira componentes funcionais e recursos idiomáticos do React.
- Respeite a estrutura de pastas obrigatória ao criar ou modificar componentes.
- Coloque componentes específicos do DevLinks em `components/features/` e componentes genéricos em `components/ui/`.
- Mantenha dados estáticos em `data/`, arquivos de mídia em `assets/` e hooks personalizados em `hooks/`.

### React e TypeScript

- Utilize `useState` para estados locais, incluindo a alternância de tema quando apropriado.
- Utilize `useEffect` para sincronizar o tema com `localStorage` e com o documento, evitando efeitos desnecessários.
- Defina tipos ou interfaces para as Props e para os dados dos links e das redes sociais.
- Evite `any`; prefira tipos explícitos e seguros.
- Utilize `key` estável ao renderizar listas com `map()`.
- Não manipule o DOM diretamente quando o estado declarativo do React resolver o problema.

### Tema claro e escuro

- Mantenha uma única fonte de verdade para o tema ativo.
- Leia a preferência salva no `localStorage` durante a inicialização do estado, com tratamento adequado para valores ausentes ou inválidos.
- Persista as alterações de tema no `localStorage`.
- Aplique o tema de forma consistente em toda a interface, preferencialmente por meio do atributo `data-theme` no elemento raiz.
- Utilize os tokens definidos neste documento para cada tema.
- Garanta que textos, bordas, superfícies, estados hover e destaques sejam atualizados corretamente.
- Evite inconsistências entre o tema salvo, o tema aplicado e o estado do botão.

### HTML, acessibilidade e responsividade

- Utilize HTML semântico, escolhendo elementos adequados à função de cada conteúdo.
- Garanta que links e controles possam ser utilizados por teclado.
- Forneça nomes acessíveis aos controles, inclusive ao botão de alternância de tema.
- Utilize textos alternativos apropriados para imagens informativas.
- Não dependa apenas de cor para comunicar estados.
- Respeite os layouts desktop e mobile do Figma.
- Evite rolagem horizontal indevida e preserve a legibilidade em telas menores.
- Respeite as preferências de movimento reduzido quando adicionar animações.

### Estilo e qualidade

- Reutilize os design tokens do Figma sempre que disponíveis.
- Utilize a família tipográfica Inter.
- Utilize Phosphor Icons para o controle de tema e Ionicons para os ícones sociais.
- Evite valores visuais arbitrários quando houver tokens definidos.
- Não adicione bibliotecas, dependências, ícones ou efeitos sem necessidade.
- Antes de instalar qualquer pacote, verifique se a funcionalidade pode ser implementada com as ferramentas já disponíveis.
- Não substitua assets do projeto por imagens genéricas quando o asset correto estiver disponível.
- Não altere arquivos ou configurações fora do escopo da tarefa.

## Ferramentas

### Context7

Utilize o Context7 para consultar documentação atualizada quando pesquisar ou utilizar bibliotecas, APIs ou recursos cuja sintaxe possa variar entre versões.

Priorize a documentação oficial e confirme que os exemplos correspondem às versões instaladas no projeto. Não consulte documentação externa sem necessidade.

### Playwright

Utilize Playwright para validar a interface no navegador, quando disponível.

Verifique pelo menos:

- Renderização da página em viewport desktop.
- Renderização da página em viewport mobile.
- Presença e funcionamento dos links.
- Alternância entre tema claro e escuro.
- Persistência do tema após recarregar a página.
- Aplicação correta dos tokens de cores nos dois temas.
- Utilização da família tipográfica Inter.
- Exibição correta dos ícones Phosphor e Ionicons.
- Estados hover dos elementos interativos.
- Ausência de erros relevantes no console.
- Ausência de problemas evidentes de layout, como conteúdo cortado ou rolagem horizontal inesperada.

Compare o resultado com os frames correspondentes do Figma. Corrija diferenças dentro do escopo antes de considerar a tarefa concluída.

Se Playwright ou o acesso ao Figma não estiver disponível, informe isso claramente e não afirme que a validação foi executada.

## Fluxo de trabalho obrigatório

Siga este ciclo para cada tarefa:

1. **Analisar:** entenda o pedido, examine os arquivos existentes e consulte as referências relevantes do Figma.
2. **Planejar:** apresente brevemente o que será feito, quais arquivos poderão ser afetados e como o resultado será validado.
3. **Implementar:** execute uma tarefa por vez, fazendo alterações pequenas e coerentes.
4. **Testar:** rode as verificações disponíveis, incluindo build, checagem de TypeScript e validação visual com Playwright quando aplicável.
5. **Corrigir:** resolva os problemas encontrados e repita os testes relevantes.
6. **Explicar:** informe o que mudou, quais decisões foram tomadas, quais testes foram executados e se existe alguma limitação pendente.

Não avance para alterações grandes sem antes explicar o próximo passo. Se houver ambiguidade que impeça uma implementação fiel, faça uma pergunta objetiva antes de assumir detalhes.

## Critérios de conclusão

Considere uma tarefa concluída somente quando:

- O comportamento solicitado estiver implementado.
- A interface respeitar as referências disponíveis do Figma.
- A implementação estiver responsiva dentro do escopo.
- O código estiver tipado, legível e organizado.
- A estrutura de diretórios obrigatória estiver respeitada.
- Os tokens de cores e a tipografia Inter estiverem aplicados corretamente.
- Os ícones estiverem utilizando as bibliotecas indicadas.
- Os testes e verificações aplicáveis tiverem sido executados.
- Limitações ou verificações não realizadas estiverem explicitamente documentadas.

## Comunicação

Responda em português do Brasil, de forma clara e objetiva.

Ao concluir cada tarefa, apresente:

- **O que foi feito:** resumo das alterações.
- **Arquivos alterados:** lista dos arquivos modificados ou criados.
- **Como testar:** comandos e passos necessários.
- **Validação:** testes executados e seus resultados.
- **Pendências:** limitações ou decisões que dependem de confirmação.

Não declare que algo funciona sem ter executado uma verificação que sustente essa afirmação.
