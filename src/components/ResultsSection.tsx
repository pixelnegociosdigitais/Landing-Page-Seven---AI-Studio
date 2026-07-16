import { useState } from 'react';
import { TrendingUp, Award, Landmark, Building, ArrowUpRight, BarChart3, PieChart } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

interface MetricPoint {
  period: string;
  desenvolvimento: number;
  retencao?: number;
  organizacao?: number;
}

interface KPIItem {
  label: string;
  value: string;
  description: string;
  trend: string;
}

export default function ResultsSection() {
  const [activeTab, setActiveTab] = useState<'EDUCAÇÃO' | 'EMPRESAS'>('EDUCAÇÃO');

  // Hypothetical data showing development progress through consulting quarters
  const educacaoData: MetricPoint[] = [
    { period: 'Início', desenvolvimento: 35, retencao: 40 },
    { period: 'T1', desenvolvimento: 52, retencao: 55 },
    { period: 'T2', desenvolvimento: 70, retencao: 72 },
    { period: 'T3', desenvolvimento: 82, retencao: 85 },
    { period: 'T4 (1 Ano)', desenvolvimento: 94, retencao: 91 }
  ];

  const empresasData: MetricPoint[] = [
    { period: 'Início', desenvolvimento: 25, organizacao: 30 },
    { period: 'T1', desenvolvimento: 42, organizacao: 50 },
    { period: 'T2', desenvolvimento: 65, organizacao: 68 },
    { period: 'T3', desenvolvimento: 78, organizacao: 80 },
    { period: 'T4 (1 Ano)', desenvolvimento: 89, organizacao: 93 }
  ];

  const educacaoKPIs: KPIItem[] = [
    {
      label: "Adequação às Leis 10.639 e 11.645",
      value: "94%",
      description: "Alinhamento curricular e implementação de diretrizes pedagógicas antirracistas.",
      trend: "+59% de evolução"
    },
    {
      label: "Retenção de Docentes",
      value: "91%",
      description: "Aumento na estabilidade e satisfação do corpo docente com apoio continuado.",
      trend: "+51% de retenção"
    },
    {
      label: "Avaliação do Clima Institucional",
      value: "9.2/10",
      description: "Nível de colaboração, escuta ativa e mediação escolar estabelecida pelas lideranças.",
      trend: "Excelente aceitação"
    }
  ];

  const empresasKPIs: KPIItem[] = [
    {
      label: "Organização e Saúde Financeira",
      value: "93%",
      description: "Previsibilidade do fluxo de caixa, redução de custos invisíveis e clareza fiscal.",
      trend: "+63% de controle"
    },
    {
      label: "Eficiência e Padronização",
      value: "89%",
      description: "Processos internos estruturados de ponta a ponta e redução de gargalos.",
      trend: "+64% de ganho"
    },
    {
      label: "Conversão de Vendas / Clientes",
      value: "1.8x",
      description: "Crescimento sustentável na atração e fechamento de novos clientes recorrentes.",
      trend: "Quase dobrou o ritmo"
    }
  ];

  const chartData = activeTab === 'EDUCAÇÃO' ? educacaoData : empresasData;
  const currentKPIs = activeTab === 'EDUCAÇÃO' ? educacaoKPIs : empresasKPIs;

  return (
    <section className="py-16 border-b border-white/5 relative overflow-hidden" id="homepage-results">
      
      {/* Background glow decorator */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#16BDF0]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16BDF0]/10 border border-[#16BDF0]/20 text-xs text-[#16BDF0] font-bold tracking-[0.12em] uppercase max-w-max mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>MÉTRICAS • IMPACTO E CRESCIMENTO</span>
        </div>
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
          Visualizando a evolução de <span className="text-[#16BDF0] text-transparent bg-clip-text bg-gradient-to-r from-[#16BDF0] to-[#095BFF]">nossos parceiros.</span>
        </h2>
        <p className="text-[#B6BEC8] text-sm sm:text-base leading-relaxed font-medium mt-3 max-w-2xl mx-auto">
          Veja a projeção de desenvolvimento anual de escolas e empresas após a aplicação do método prático da +Seven.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveTab('EDUCAÇÃO')}
          className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'EDUCAÇÃO'
              ? 'bg-[#095BFF] border-[#095BFF] text-white shadow-md shadow-[#095BFF]/15'
              : 'bg-white/5 border-white/10 text-[#B6BEC8] hover:text-white hover:bg-white/10'
          }`}
        >
          <Landmark className="w-3.5 h-3.5" />
          <span>Educação e Escolas</span>
        </button>

        <button
          onClick={() => setActiveTab('EMPRESAS')}
          className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === 'EMPRESAS'
              ? 'bg-[#095BFF] border-[#095BFF] text-white shadow-md shadow-[#095BFF]/15'
              : 'bg-white/5 border-white/10 text-[#B6BEC8] hover:text-white hover:bg-white/10'
          }`}
        >
          <Building className="w-3.5 h-3.5" />
          <span>Empresas e Negócios</span>
        </button>
      </div>

      {/* Grid Layout (Chart on left, KPIs on right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Chart Column (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-6 sm:p-8 bg-[rgba(10,27,48,0.35)] border-white/5 text-left relative">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] text-[#16BDF0] font-bold tracking-widest uppercase">
                ÍNDICE DE EVOLUÇÃO ANUAL (%)
              </span>
              <div className="flex items-center gap-1.5 bg-[#050B16] px-2.5 py-1 rounded-md border border-white/5 text-[9px] text-[#7F8A98] font-bold">
                <BarChart3 className="w-3 h-3 text-[#16BDF0]" />
                <span>Atualização trimestral</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg tracking-tight mb-1">
              {activeTab === 'EDUCAÇÃO' ? 'Avanço de Redes de Ensino' : 'Amadurecimento Organizacional'}
            </h3>
            <p className="text-[#7F8A98] text-xs font-medium mb-6">
              Métricas consolidadas de maturidade e conformidade regulatória ao longo do ciclo.
            </p>
          </div>

          {/* Recharts Container */}
          <div className="w-full h-[280px] sm:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorDesenvolvimento" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16BDF0" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#095BFF" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                <XAxis
                  dataKey="period"
                  stroke="#7F8A98"
                  fontSize={11}
                  fontWeight="bold"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#7F8A98"
                  fontSize={11}
                  fontWeight="bold"
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                  tickFormatter={(val) => `${val}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#07111F',
                    border: '1px solid rgba(22, 189, 240, 0.25)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontSize: '12px'
                  }}
                  formatter={(value: any) => [`${value}%`, 'Maturidade Geral']}
                  labelFormatter={(label) => `Período: ${label}`}
                />
                <Area
                  type="monotone"
                  dataKey="desenvolvimento"
                  stroke="#16BDF0"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorDesenvolvimento)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#7F8A98] font-semibold">
            <span>* Métricas indicativas baseadas em metas ideais de consultoria.</span>
            <span className="text-[#16BDF0] flex items-center gap-1">
              <PieChart className="w-3 h-3" /> Metas de 12 meses atingidas
            </span>
          </div>
        </div>

        {/* KPIs Column (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-4 text-left">
          {currentKPIs.map((kpi, idx) => (
            <div
              key={idx}
              className="glass-card p-5 bg-[rgba(10,27,48,0.25)] border-white/5 hover:border-[#16BDF0]/20 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="text-white font-bold text-sm sm:text-base leading-snug tracking-tight">
                  {kpi.label}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full font-bold uppercase shrink-0">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>{kpi.trend}</span>
                </span>
              </div>
              <p className="text-[#B6BEC8] text-xs leading-relaxed font-semibold mb-3">
                {kpi.description}
              </p>
              <div className="flex items-baseline gap-2 mt-auto pt-2 border-t border-white/5">
                <span className="text-2xl sm:text-3xl font-bold text-[#16BDF0] tracking-tight">
                  {kpi.value}
                </span>
                <span className="text-[10px] text-[#7F8A98] font-bold uppercase">Meta de evolução</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
