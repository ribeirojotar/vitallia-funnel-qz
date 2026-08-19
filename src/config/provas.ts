// ============================================================
// VITALLIA V2 · Prova social
// ------------------------------------------------------------
// Fica vazio até existir depoimento real, com autorização por
// escrito. O componente <Depoimento> (src/components/Depoimento.astro)
// não renderiza NADA enquanto este array estiver vazio, ou para
// qualquer item com `autorizado: false` — sem caixa de placeholder,
// sem "em breve", sem foto de banco de imagens. Ver REVISAO-V2.md,
// seção da tela 7 ("PROVA SOCIAL — regra de seleção").
//
// `perfil` usa o mesmo vocabulário da Q3 do diagnóstico (objetivo:
// 'casa' | 'aprender' | 'atender' | 'produtos' | 'tudo'), porque é
// contra `vt_sim.answers.objetivo` que a tela 3 casa o depoimento
// com quem está lendo.
//
// Ordem de força pra decidir QUAL depoimento capturar primeiro
// (não é um campo do tipo — é orientação para quem for a campo
// coletar prova): 1) a primeira ficha preenchida, contada pela aluna
// 2) o primeiro atendimento cobrado 3) o primeiro lote de produto
// vendido 4) a tintura pronta no vidro 5) o certificado impresso.
// Se a aluna citar valor espontaneamente, mantenha na fala dela —
// nunca no título, nunca em número grande, sempre com "resultado
// individual, depende de cidade, esforço e alcance" ao lado. Nunca
// agregar ("nossas alunas faturam X").
// ============================================================

export type Prova = {
  id: string;
  nome: string;
  cidade: string;
  perfil: 'casa' | 'aprender' | 'atender' | 'produtos' | 'tudo';
  tipo: 'video' | 'audio' | 'foto';
  src: string;
  texto: string;
  autorizado: boolean;
};

export const PROVAS: Prova[] = [];
