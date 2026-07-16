# Diretrizes de Desenvolvimento e Regras de SEO (+Seven)

Este arquivo contém as diretrizes que todos os agentes de IA e desenvolvedores devem seguir estritamente ao trabalhar neste repositório.

## ⚡ Regra de Ouro: Atualização Contínua de SEO

Sempre que uma página for adicionada, modificada ou removida, as configurações de SEO **devem** ser atualizadas de forma síncrona. Nunca deixe metadados desatualizados em relação ao conteúdo atual da página.

### 1. Utilização Obrigatória do Componente `<SEO />`
Cada página da aplicação (localizada sob `src/pages/`) deve obrigatoriamente invocar o componente `SEO` importado de `@/components/SEO` (ou `../components/SEO` dependendo do nível do diretório).

**Parâmetros exigidos:**
- `title`: Título único, persuasivo e focado em palavras-chave da página, limitado a 60-70 caracteres. Sempre incluir o sufixo `| +Seven` ou prefixo correspondente.
- `description`: Descrição rica de 120-160 caracteres, focada em conversão e busca orgânica (SEO).
- `image` (opcional): URL de imagem do Unsplash otimizada que represente visualmente o assunto da página.
- `type` (opcional): Padrão é `'website'`. Use `'article'` para materiais e publicações.

#### Exemplo de Uso:
```tsx
import SEO from '../components/SEO';

export default function ExemploPage() {
  return (
    <div>
      <SEO 
        title="Título Otimizado da Página | +Seven"
        description="Descrição cativante contendo palavras-chave relevantes para SEO."
        image="https://images.unsplash.com/photo-..."
      />
      {/* Resto do conteúdo */}
    </div>
  );
}
```

### 2. Otimização de Imagens (Sem Preto e Branco / Filtros)
- Todas as imagens do site devem exibir suas **cores originais** e vibrantes.
- É **estritamente proibido** aplicar filtros utilitários do Tailwind como `grayscale` ou `saturate-0` nas tags `<img>` das páginas.
- Os overlays de escurecimento ou gradientes (ex: `bg-gradient-to-t`) devem ser usados apenas em níveis suaves para garantir contraste legível para textos sobrepostos, nunca mascarando as cores reais da imagem em sua totalidade.

### 3. Sincronia com `index.html`
- Os metadados estáticos em `index.html` representam o fallback geral da marca. Sempre que houver uma alteração na proposta de valor institucional, atualize as tags `<title>`, `<meta name="description">` e os equivalentes de Open Graph (`og:title`, `og:description`, `og:image`) no cabeçalho do `index.html` para refletirem de forma idêntica.
