import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Bell, 
  Download, 
  Share2, 
  Filter, 
  ArrowRight,
  BookmarkCheck,
  CheckCircle,
  Timer
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Types for our events calendar
export interface SchoolEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate?: Date;
  time: string;
  location: string;
  category: 'festivo' | 'academico' | 'matriculas' | 'comunidade' | 'feriado';
  targetAudience: string;
  isCrucial?: boolean;
}

// 2026 events database tailored to Colégio Reação
const SCHOOL_EVENTS_2026: SchoolEvent[] = [
  {
    id: 'ev-simulado-ftd',
    title: 'Simulados 1ª e 2ª série - FTD 📚',
    description: 'Avaliação diagnóstica intensiva do sistema de ensino FTD para consolidação das habilidades escolares e preparação técnica continuada.',
    date: new Date(2026, 5, 2), // June 2
    endDate: new Date(2026, 5, 3), // June 3
    time: 'Turno Regular',
    location: 'Salas de Aula - Ensino Médio',
    category: 'academico',
    targetAudience: 'Alunos do Ensino Médio (1ª e 2ª série)',
    isCrucial: false
  },
  {
    id: 'ev-corpus-christi',
    title: 'Feriado & Recesso de Corpus Christi 🕊️',
    description: 'Feriado nacional de Corpus Christi e recesso acadêmico institucional. Não haverá expediente letivo ou administrativo.',
    date: new Date(2026, 5, 4), // June 4
    endDate: new Date(2026, 5, 6), // June 6
    time: 'Integral',
    location: 'Todas as Unidades',
    category: 'feriado',
    targetAudience: 'Todos os Alunos, Professores e Funcionários',
    isCrucial: false
  },
  {
    id: 'ev-encerra-esportivas',
    title: 'Encerramento das Modalidades Esportivas ⚽🩰',
    description: 'Último dia de treinos e atividades das escolinhas esportivas regulares do Colégio Reação neste primeiro semestre.',
    date: new Date(2026, 5, 5), // June 5
    time: 'Horários dos treinos regulares',
    location: 'Quadra Poliesportiva Coberta',
    category: 'academico',
    targetAudience: 'Alunos matriculados em escolinhas esportivas',
    isCrucial: false
  },
  {
    id: 'ev-prepara-festa',
    title: 'Preparativos da Festa Folclórica (Saída Especial) ⚠️',
    description: 'Atenção pais e responsáveis: devido aos últimos ensaios e montagem física de toda a estrutura para a nossa grande festa de amanhã, os estudantes do Turno Vespertino serão dispensados mais cedo, às 16:00.',
    date: new Date(2026, 5, 19), // June 19
    time: 'Dispensa às 16:00 (Turno Vespertino)',
    location: 'Todas as Unidades',
    category: 'comunidade',
    targetAudience: 'Estudantes do Turno Vespertino',
    isCrucial: false
  },
  {
    id: 'ev-festa-folclorica',
    title: 'FESTA FOLCLÓRICA REAÇÃO 🎉🌽',
    description: 'Nossa tradicionalíssima e maravilhosa Festa Folclórica! Danças folclóricas, apresentações culturais espetaculares de todos os segmentos, barraquinhas de iguarias típicas, correio elegante, brincadeiras e momentos incríveis em família.',
    date: new Date(2026, 5, 20), // June 20
    time: '09:00 às 19:00',
    location: 'Complexo Esportivo Coberto - Unidade I',
    category: 'festivo',
    targetAudience: 'Alunos, Familiares, Ex-Alunos e Comunidade',
    isCrucial: true
  },
  {
    id: 'ev-simulado-fund2',
    title: 'Simulado Geral (6° ao 9° ano) 📝',
    description: 'Aplicação das avaliações simuladas para mensuração de metas e verificação de conteúdos consolidados do bimestre letivo.',
    date: new Date(2026, 5, 22), // June 22
    time: '07:30 - 12:00',
    location: 'Salas de Aula',
    category: 'academico',
    targetAudience: 'Ensino Fundamental Anos Finais (6° ao 9° ano)',
    isCrucial: false
  },
  {
    id: 'ev-resultado-quadrilhas',
    title: 'Resultado do 12° Concurso de Quadrilhas 🏆',
    description: 'Divulgação oficial e premiação da turma vencedora do 12º Concurso Integredado de Quadrilhas Juninas de nosso Ensino Médio!',
    date: new Date(2026, 5, 24), // June 24
    time: 'Durante o recreio regular',
    location: 'Pátio Central',
    category: 'festivo',
    targetAudience: 'Alunos do Ensino Médio',
    isCrucial: false
  },
  {
    id: 'ev-semana-avaliacoes',
    title: 'Semana de Avaliações Bimestrais 📝',
    description: 'Período oficial de provas escritas e avaliações diagnósticas integradas relativas ao fechamento do 2° bimestre letivo.',
    date: new Date(2026, 5, 25), // June 25
    endDate: new Date(2026, 6, 2), // July 2
    time: 'Horário Regular de Aula',
    location: 'Salas de Aula - Todas as Unidades',
    category: 'academico',
    targetAudience: 'Alunos do Ensino Fundamental ao Ensino Médio',
    isCrucial: true
  },
  {
    id: 'ev-conselho-classe',
    title: 'Conselho de Classe (Saída Antecipada) 👩‍🏫',
    description: 'Alinhamento acadêmico e reunião deliberativa do corpo docente. Atenção aos horários especiais de dispensa das turmas de Anos Finais e Ensino Médio: às 10:00 (matutino) e às 16:00 (vespertino).',
    date: new Date(2026, 6, 3), // July 3
    time: 'Saída às 10h (Matutino) e às 16h (Vespertino)',
    location: 'Salas Específicas de Conselho',
    category: 'comunidade',
    targetAudience: 'Alunos dos Anos Finais e Ensino Médio',
    isCrucial: false
  },
  {
    id: 'ev-reuniao-pais',
    title: 'Reunião de Pais e Mestres Semestral 🤝',
    description: 'Encontro oficial presencial para compartilhamento de resultados, entrega de boletins do 2° Bimestre e alinhamento individual com professores. Horários divididos:\n- Matutino (Anos Iniciais ao Ensino Médio): 8h às 9h30\n- Vespertino (Educação Infantil aos Anos Finais): 14h às 15h30',
    date: new Date(2026, 6, 7), // July 7
    time: 'Matutino: 08:00 - 09:30 | Vespertino: 14:00 - 15:30',
    location: 'Salas de Aula de Referência',
    category: 'comunidade',
    targetAudience: 'Pais e Responsáveis',
    isCrucial: true
  },
  {
    id: 'ev-recuperacao-semestral',
    title: 'Semana de Recuperação Semestral 📑',
    description: 'Período destinado às aulas especiais de nivelamento pedagógico, reforço prático e avaliações substitutivas da média semestral. Divulgação do resultado oficial programada para a primeira semana de agosto.',
    date: new Date(2026, 6, 8), // July 8
    endDate: new Date(2026, 6, 14), // July 14
    time: 'Atividades e provas agendadas por turma',
    location: 'Blocos de Apoio Pedagógico',
    category: 'academico',
    targetAudience: 'Estudantes convocados para recuperação semestral',
    isCrucial: false
  },
  {
    id: 'ev-recesso-aprovados',
    title: 'Recesso Escolar (Estudantes Aprovados) 🏖️',
    description: 'Férias de inverno merecidas para os estudantes que atingiram média de aprovação direta no encerramento das bimestrais do primeiro semestre letivo!',
    date: new Date(2026, 6, 8), // July 8
    endDate: new Date(2026, 6, 28), // July 28
    time: 'Integral',
    location: 'Férias Letivas',
    category: 'feriado',
    targetAudience: 'Estudantes Aprovados Diretos',
    isCrucial: false
  },
  {
    id: 'ev-recesso-contraturno',
    title: 'Recesso Escolar do Contraturno/Integral 🧸',
    description: 'Início oficial do período de férias das oficinas, treinos e monitorias do contraturno integral do colégio.',
    date: new Date(2026, 6, 15), // July 15
    endDate: new Date(2026, 6, 28), // July 28
    time: 'Integral',
    location: 'Atividades Externas',
    category: 'feriado',
    targetAudience: 'Estudantes do Período Integral e Contraturno',
    isCrucial: false
  },
  {
    id: 'ev-jornada-pedagogica',
    title: 'Jornada Pedagógica do 2º Semestre 📝',
    description: 'Período com palestras formativas, planejamento estratégico das aulas de alta performance, revisão de metas e workshops metodológicos dedicados a todo o corpo docente.',
    date: new Date(2026, 6, 22), // July 22
    endDate: new Date(2026, 6, 28), // July 28
    time: 'Horário Comercial Docente',
    location: 'Auditório e Espaços Maker',
    category: 'comunidade',
    targetAudience: 'Docentes, Orientadores e Coordenação',
    isCrucial: false
  },
  {
    id: 'ev-aniversario-recanto',
    title: 'Feriado Local: Aniversário do Recanto das Emas 🎂🎉',
    description: 'Festa municipal em celebração aos anos de história, cultura e bravura de nossa amada cidade administrativa de Recanto das Emas. Não haverá expediente curricular ou administrativo.',
    date: new Date(2026, 6, 28), // July 28
    time: 'Feriado Comunitário',
    location: 'Recanto das Emas - DF',
    category: 'feriado',
    targetAudience: 'Comunidade Geral',
    isCrucial: false
  },
  {
    id: 'ev-retorno-aulas',
    title: 'Grande Retorno às Aulas - 2º Semestre! 🚀',
    description: 'Acolhimento animado de todos os canais e início regular do 3º Bimestre letivo focando em excelência de objetivos e preparação vestibular.',
    date: new Date(2026, 6, 29), // July 29
    time: '07:30 (Matutino) / 13:15 (Vespertino)',
    location: 'Todas as Unidades',
    category: 'academico',
    targetAudience: 'Todos os Alunos do Colégio',
    isCrucial: true
  }
];

// Months list portuguese
const MONTHS_PT = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const WEEKDAYS_PT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const CATEGORY_META = {
  festivo: { label: 'Festivo & Cultural', bg: 'bg-amber-100 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
  academico: { label: 'Acadêmico & Provas', bg: 'bg-sky-100 text-sky-800 border-sky-200', dot: 'bg-sky-500' },
  matriculas: { label: 'Matrícula & Descontos', bg: 'bg-rose-100 text-rose-800 border-rose-200', dot: 'bg-rose-500' },
  comunidade: { label: 'Família & Escola', bg: 'bg-emerald-100 text-emerald-800 border-emerald-200', dot: 'bg-emerald-500' },
  feriado: { label: 'Recesso & Feriados', bg: 'bg-purple-100 text-purple-800 border-purple-200', dot: 'bg-purple-500' }
};

export const EventCalendar: React.FC = () => {
  // Current system date context
  const anchorDate = new Date();
  
  const [currentYear, setCurrentYear] = useState(anchorDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(anchorDate.getMonth());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 5, 20)); // Pre-selected Arraiá (Festa Folclórica)
  const [countdownString, setCountdownString] = useState('');
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // Sync real-time countdown to nearest crucial event
  useEffect(() => {
    // Find next crucial event after June 12, 2026
    const crucialEvents = SCHOOL_EVENTS_2026
      .filter(e => e.date >= anchorDate && e.isCrucial)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    const nextEvent = crucialEvents[0] || SCHOOL_EVENTS_2026[0];

    const timer = setInterval(() => {
      const now = new Date(); // Browser time
      // Let's calculate based on a mock static real-time drift for parent engagement to look live
      // Align 2026 target time. We can treat target as nextEvent date + specific starting time
      // e.g., nextEvent date at 16:00
      const targetDate = new Date(nextEvent.date);
      targetDate.setHours(16, 0, 0, 0);

      // In order to make it keep running dynamically in user actual browser in 2026 vs current reality,
      // let's compute real offset relative to today or anchor appropriately:
      const todayReal = new Date();
      // Calculate countdown to the June 2026 event. If browser is already in 2026 or later, use absolute difference.
      // If browser is in 2024, let's treat the date difference gracefully.
      const diffMs = targetDate.getTime() - now.getTime();

      if (diffMs <= 0) {
        setCountdownString('Evento Iniciado! 🎉');
        return;
      }

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      // Nicely formatted string with proper language singulars/plurals
      const daysText = days > 0 ? `${days}d ` : '';
      setCountdownString(`${daysText}${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filtered list of events
  const filteredEvents = SCHOOL_EVENTS_2026.filter(event => {
    // Basic Category Match
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    // Check if within bounds of active selected month & year
    const eventYear = event.date.getFullYear();
    const eventMonth = event.date.getMonth();
    const matchesMonth = eventYear === currentYear && eventMonth === currentMonth;

    return matchesCategory && matchesMonth;
  });

  // Calendar rendering computations
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  const prevMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonthIndex);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  // Check if a day has events on it
  const getDayEvents = (day: number) => {
    return SCHOOL_EVENTS_2026.filter(event => {
      const matchDate = event.date.getFullYear() === currentYear &&
                        event.date.getMonth() === currentMonth &&
                        event.date.getDate() === day;
      
      const inRange = event.endDate 
        ? (new Date(currentYear, currentMonth, day) >= event.date && 
           new Date(currentYear, currentMonth, day) <= event.endDate)
        : false;

      return (matchDate || inRange) && (selectedCategory === 'all' || event.category === selectedCategory);
    });
  };

  // Generate .ics file standard formatting as standard string download
  const handleCalendarDownload = (event: SchoolEvent) => {
    const formatICSDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const targetStart = formatICSDate(event.date);
    const targetEnd = formatICSDate(event.endDate || new Date(event.date.getTime() + 3 * 60 * 60 * 1000)); // Default 3 hours

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Colegio Reacao//Events Calendar//PT',
      'BEGIN:VEVENT',
      `UID:${event.id}@colegioreacaodf.com`,
      `DTSTAMP:${formatICSDate(new Date())}`,
      `DTSTART:${targetStart}`,
      `DTEND:${targetEnd}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${event.id}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setAlertMessage(`Evento "${event.title}" baixado com sucesso! Adicione no seu Calendário Google, Apple ou Outlook.`);
    setTimeout(() => setAlertMessage(null), 5000);
  };

  // Copy school event sharing info
  const handleShare = (event: SchoolEvent) => {
    const shareText = `📅 *${event.title}* no Colégio Reação 2026!\n📍 Local: ${event.location}\n⏰ Horário: ${event.time}\n💬 ${event.description}\nSaiba mais no site institucional!`;
    navigator.clipboard.writeText(shareText);
    setCopiedEventId(event.id);
    setTimeout(() => setCopiedEventId(null), 3000);
  };

  // Helper date parsing for nice badges
  const formatDateBeautifully = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', weekday: 'long' });
  };

  // Next upcoming primary highlights
  const nextHighlightedEvent = SCHOOL_EVENTS_2026
    .filter(e => e.date >= anchorDate)
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];

  return (
    <section id="calendario" className="py-16 md:py-32 bg-gradient-to-b from-brand-offwhite to-white relative overflow-hidden" aria-labelledby="calendar-heading">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header section with badge */}
        <ScrollReveal className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest">Ano Letivo 2026</span>
          </div>
          <h2 id="calendar-heading" className="text-3xl md:text-6xl font-black text-brand-navy tracking-tight leading-[1.1] mb-4">
            Calendário de Eventos <span className="text-brand-red">Reação</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Acompanhe nossas datas acadêmicas, períodos de matrículas, vivências em família e feriados. Atividades escolares integradas em tempo real.
          </p>
        </ScrollReveal>

        {/* Real-time Event Countdown Banner */}
        {nextHighlightedEvent && (
          <ScrollReveal delay={100} className="mb-10 md:mb-14">
            <div className="bg-brand-navy rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 text-white relative overflow-hidden border-2 border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              {/* background overlay */}
              <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-brand-red/15 to-transparent skew-x-12 pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-5 relative z-10 w-full md:w-auto">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-red flex items-center justify-center text-white shrink-0 shadow-lg animate-soft-pulse">
                  <Timer size={24} className="md:size-[28px]" />
                </div>
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-brand-red uppercase tracking-wider mb-1 justify-center sm:justify-start">
                    Próximo Grande Evento • {formatDateBeautifully(nextHighlightedEvent.date)}
                  </div>
                  <h3 className="text-lg md:text-2xl font-black leading-tight">{nextHighlightedEvent.title}</h3>
                  <p className="text-white/65 text-xs md:text-sm mt-1 max-w-lg line-clamp-2 md:truncate">{nextHighlightedEvent.description}</p>
                </div>
              </div>

              {/* Live Ticker Clock */}
              <div className="bg-white/5 border border-white/15 px-6 py-4 rounded-xl shrink-0 text-center relative z-10 w-full md:w-auto">
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-1 font-semibold flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                  Tempo Restante
                </div>
                <div className="text-xl md:text-3xl font-mono font-bold tracking-tight text-brand-red">
                  {countdownString || 'Contando...'}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Categories Toolbar Filter */}
        <ScrollReveal delay={150} className="mb-10 w-full overflow-hidden">
          <div 
            className="flex md:flex-wrap items-center md:justify-center gap-2 overflow-x-auto md:overflow-x-visible bg-slate-50 p-2 rounded-2xl border border-slate-100 max-w-4xl mx-auto px-3 md:px-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 shrink-0 transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-150'
              }`}
            >
              <Filter size={13} className="shrink-0" />
              Todos ({SCHOOL_EVENTS_2026.length})
            </button>
            {Object.entries(CATEGORY_META).map(([categoryName, meta]) => {
              const count = SCHOOL_EVENTS_2026.filter(e => e.category === categoryName).length;
              return (
                <button
                  key={categoryName}
                  onClick={() => setSelectedCategory(categoryName)}
                  className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                    selectedCategory === categoryName
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'text-slate-600 hover:bg-white border border-slate-100 hover:shadow-sm'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${meta.dot}`} />
                  <span className="whitespace-nowrap">{meta.label.split(' & ')[0]} ({count})</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Global Toast Alerts */}
        {alertMessage && (
          <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 max-w-md bg-brand-navy border border-brand-red/30 text-white px-5 py-4 rounded-2xl shadow-2xl z-50 flex items-start gap-3 animate-slide-up">
            <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={20} />
            <div className="text-sm">
              <p className="font-semibold text-white">Calendário Sincronizado</p>
              <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">{alertMessage}</p>
            </div>
          </div>
        )}

        {/* Main Grid Layout: Interactive Calendar Left, Details/List Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* LEFT: Complete Monthly Calendar Grid */}
          <ScrollReveal delay={200} className="lg:col-span-7 bg-white p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] card-elevation border border-slate-100 relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-6 pb-5 border-b border-slate-100 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-11 h-11 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center shrink-0">
                  <CalendarIcon size={22} className="shrink-0" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy capitalize tracking-tight">
                    {MONTHS_PT[currentMonth]}, {currentYear}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Toque nos dias destacados para ver os detalhes</p>
                </div>
              </div>

              {/* Month Switcher Navigation controls */}
              <div className="flex items-center gap-1">
                <button 
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-slate-50 text-slate-700 hover:text-brand-red rounded-xl border border-slate-100 active:scale-95 transition-all"
                  aria-label="Mês anterior"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => { setCurrentMonth(5); setCurrentYear(2026); }}
                  className="px-3 py-1.5 hover:bg-slate-50 text-slate-600 hover:text-brand-navy font-bold text-xs rounded-lg transition-all"
                >
                  Hoje
                </button>
                <button 
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-slate-50 text-slate-700 hover:text-brand-red rounded-xl border border-slate-100 active:scale-95 transition-all"
                  aria-label="Próximo mês"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Weekdays Labels Header */}
            <div className="grid grid-cols-7 gap-1 md:gap-3 text-center text-slate-400 text-xs font-semibold tracking-wider uppercase mb-3">
              {WEEKDAYS_PT.map(day => (
                <div key={day} className="py-1">{day}</div>
              ))}
            </div>

            {/* Days Calendar Grid Assembly */}
            <div className="grid grid-cols-7 gap-1 md:gap-3">
              {/* Padding days from previous month structure */}
              {Array.from({ length: firstDayIndex }).map((_, i) => {
                const dayNum = daysInPrevMonth - firstDayIndex + i + 1;
                return (
                  <div 
                    key={`prev-${i}`} 
                    className="aspect-square flex items-center justify-center text-slate-300 text-xs sm:text-sm font-medium rounded-xl select-none"
                  >
                    {dayNum}
                  </div>
                );
              })}

              {/* Active current month days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateObj = new Date(currentYear, currentMonth, day);
                const dayEvents = getDayEvents(day);
                const isSelected = selectedDate !== null && 
                                   selectedDate.getFullYear() === currentYear &&
                                   selectedDate.getMonth() === currentMonth &&
                                   selectedDate.getDate() === day;
                
                const isAnchorToday = anchorDate.getFullYear() === currentYear &&
                                      anchorDate.getMonth() === currentMonth &&
                                      anchorDate.getDate() === day;

                const hasEvents = dayEvents.length > 0;
                
                // Color tags based on event categories
                const primaryCategory = hasEvents ? dayEvents[0].category : null;
                const dotColor = primaryCategory ? CATEGORY_META[primaryCategory].dot : '';

                return (
                  <button
                    key={`day-${day}`}
                    onClick={() => {
                      setSelectedDate(dateObj);
                    }}
                    className={`aspect-square relative w-full flex flex-col items-center justify-center rounded-lg md:rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                      isSelected 
                        ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 ring-2 md:ring-4 ring-brand-red/10' 
                        : isAnchorToday
                          ? 'bg-brand-navy text-white ring-2 md:ring-4 ring-brand-navy/15'
                          : hasEvents
                            ? 'bg-brand-red/5 text-brand-navy border border-brand-red/25 hover:bg-brand-red/15'
                            : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    {/* Day number */}
                    <span>{day}</span>

                    {/* Has events visual indicator dot */}
                    {hasEvents && !isSelected && (
                      <span className={`absolute bottom-1 md:bottom-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${dotColor} animate-pulse`} />
                    )}

                    {/* Inline countdown flag for Festa Junina or custom visual flair */}
                    {day === 20 && currentMonth === 5 && !isSelected && (
                      <span className="absolute top-0.5 right-0.5 text-[8px] md:text-[10px]">🌽</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Helper guidelines footer */}
            <div className="mt-8 pt-5 border-t border-slate-100 text-[10px] md:text-xs text-slate-500">
              <div className="grid grid-cols-2 xs:flex xs:flex-wrap gap-2.5 md:gap-4 justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-navy" />
                  Hoje ({anchorDate.getDate()}/{MONTHS_PT[anchorDate.getMonth()].slice(0, 3)})
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                  Selecionado
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  Festejos
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  Provas
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Selected Date Details & Dynamic List of Month Events */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Displaying specifics about active clicked date */}
            <ScrollReveal delay={250} className="bg-white p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] card-elevation border border-slate-100">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Atividades para o dia</h4>
                {selectedDate && (
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold shrink-0">
                    {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/{selectedDate.getFullYear()}
                  </span>
                )}
              </div>

              {selectedDate ? (
                (() => {
                  const dayEvents = getDayEvents(selectedDate.getDate());
                  if (dayEvents.length === 0) {
                    return (
                      <div className="text-center py-10">
                        <BookmarkCheck size={40} className="mx-auto text-slate-300 mb-3" />
                        <h5 className="font-bold text-slate-700 text-sm">Nenhum evento letivo neste dia</h5>
                        <p className="text-slate-400 text-xs max-w-xs mx-auto mt-1 leading-relaxed">
                          Aproveite para curtir em família ou focar no cronômetro do seu plano de estudos regular!
                        </p>
                      </div>
                    );
                  }

                  return (
                    <div className="flex flex-col gap-5">
                      {dayEvents.map(event => {
                        const meta = CATEGORY_META[event.category];
                        return (
                          <div 
                            key={event.id}
                            className="p-4 sm:p-5 bg-gradient-to-br from-brand-navy/5 to-white rounded-2xl border border-slate-150 relative overflow-hidden transition-all hover:shadow-md"
                          >
                            <span className="absolute top-0 right-0 w-1.5 h-full bg-brand-red" />
                            
                            <div className="flex items-start justify-between gap-2 mb-2.5">
                              <span className={`text-[9px] sm:text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full border ${meta.bg}`}>
                                {meta.label}
                              </span>
                              <span className="text-[10px] text-slate-400 font-semibold">{event.targetAudience}</span>
                            </div>

                            <h5 className="font-black text-brand-navy text-base sm:text-lg leading-snug mb-2">{event.title}</h5>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">{event.description}</p>

                            <div className="flex flex-col gap-2 border-t border-dashed border-slate-200 pt-3.5 mb-4 text-xs text-slate-600">
                              <div className="flex items-center gap-2">
                                <Clock size={13} className="text-slate-400" />
                                <span><strong>Horário:</strong> {event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={13} className="text-slate-400 shrink-0" />
                                <span className="truncate"><strong>Local:</strong> {event.location}</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-2">
                              <button
                                onClick={() => handleCalendarDownload(event)}
                                className="w-full sm:flex-1 bg-brand-navy text-white hover:bg-brand-red px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                              >
                                <Download size={13} />
                                Agendar
                              </button>
                              <button
                                onClick={() => handleShare(event)}
                                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
                                title="Copiar Atalho de Compartilhamento"
                              >
                                <Share2 size={13} />
                                {copiedEventId === event.id ? 'Copiado!' : 'Compartilhar'}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()
              ) : (
                <div className="text-center py-10">
                  <CalendarIcon size={40} className="mx-auto text-slate-300 mb-3" />
                  <h5 className="font-bold text-slate-600 text-sm">Selecione uma data para detalhar</h5>
                </div>
              )}
            </ScrollReveal>

            {/* Month's Highlights / Outros Eventos no Mês */}
            <ScrollReveal delay={300} className="bg-brand-navy p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] text-white">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-white/40 mb-4">
                Destaques de {MONTHS_PT[currentMonth]}
              </h4>

              {filteredEvents.length === 0 ? (
                <p className="text-xs text-white/50 italic py-4">Sem eventos adicionais cadastrados para este mês.</p>
              ) : (
                <div className="flex flex-col gap-3.5 max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 pr-2">
                  {filteredEvents.map(event => (
                    <div 
                      key={`highlight-${event.id}`}
                      onClick={() => setSelectedDate(event.date)}
                      className="group flex gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer items-start border border-transparent hover:border-white/5"
                    >
                      <div className="w-11 h-11 rounded-lg bg-white/10 shrink-0 flex flex-col items-center justify-center font-bold text-white text-xs leading-none">
                        <span className="text-brand-red text-[9px] font-black uppercase mb-0.5">
                          {MONTHS_PT[event.date.getMonth()].slice(0, 3)}
                        </span>
                        <span>{event.date.getDate()}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs sm:text-sm text-white group-hover:text-brand-red transition-colors truncate">
                          {event.title}
                        </h5>
                        <p className="text-[10px] sm:text-[11px] text-white/50 truncate mt-0.5">{event.time}</p>
                      </div>

                      <ArrowRight size={13} className="text-white/30 group-hover:text-white shrink-0 self-center transition-colors" />
                    </div>
                  ))}
                </div>
              )}
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
