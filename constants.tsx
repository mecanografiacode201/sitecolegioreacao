
import React from 'react';
import { GraduationCap, Users, Lightbulb } from 'lucide-react';
import { NavItem, Pillar, Unit, EnrollmentStep, Testimonial } from './types';

export const COLORS = {
  blue: '#1b4a9a',
  red: '#e63946',
  navy: '#0d2b52',
  white: '#ffffff',
  lightGray: '#f8fafc'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Infantil', href: '#ensino' },
  { label: 'Anos Iniciais e Finais', href: '#ensino' },
  { label: 'Ensino Médio', href: '#ensino' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Matrículas 2026', href: '#matriculas', isButton: true },
  { label: 'Trabalhe Conosco', href: 'https://docs.google.com/forms/d/e/1FAIpQLSe65z1xJpVgPCEnr0v7w74UipOOnwwuB1l3g4ha8E0xnbW6zQ/viewform' },
];

export const PILLARS: Pillar[] = [
  {
    title: 'Excelência Acadêmica',
    description: 'Foco no desempenho e na construção de bases sólidas para o futuro universitário.',
    icon: <GraduationCap className="w-12 h-12 text-brand-red" />,
  },
  {
    title: 'Ambiente Familiar',
    description: 'Um espaço de acolhimento onde cada aluno é conhecido pelo nome.',
    icon: <Users className="w-12 h-12 text-brand-red" />,
  },
  {
    title: 'Inovação Pedagógica',
    description: 'Metodologias modernas que estimulam a curiosidade e o pensamento crítico.',
    icon: <Lightbulb className="w-12 h-12 text-brand-red" />,
  },
];

export const DIFFERENTIALS = [
  'Ensino Personalizado',
  'Tecnologia Educacional de ponta',
  'Desenvolvimento Socioemocional',
  'Preparação para Vestibulares/ENEM',
  'Projetos Interdisciplinares',
  'Formação de valores éticos',
];

const WHATSAPP_MESSAGE = encodeURIComponent("Olá vim pelo site do Colégio Reação, e quero mais informações.");

export const UNITS: Unit[] = [
  {
    id: 1,
    name: 'Unidade I',
    address: 'Quadra 206 - Recanto das Emas, Brasília - DF',
    phone: '(61) 3333-1434',
    levels: ['Educação Infantil', 'Anos Iniciais', 'Anos Finais'],
    whatsapp: `https://wa.me/5561996410987?text=${WHATSAPP_MESSAGE}`,
    image: 'https://i.imgur.com/aWkKa1hl.png',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.4764836067086!2d-48.0776269!3d-15.9100918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2cda11269d0f%3A0xa1c5b52543482ca9!2zQ29sw6lnaW8gUmVhw6fDo28!5e0!3m2!1spt-BR!2sbr!4v1715818800000',
  },
  {
    id: 2,
    name: 'Unidade II',
    address: 'Quadra 201, Lote 07, Av. Buriti - Recanto das Emas, Brasília - DF',
    phone: '(61) 3333-3332',
    levels: ['Educação Infantil', 'Anos Iniciais', 'Anos Finais', 'Ensino Médio'],
    whatsapp: `https://wa.me/5561999498886?text=${WHATSAPP_MESSAGE}`,
    image: 'https://i.imgur.com/LUEmeOdl.png',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.498!2d-48.0724!3d-15.9089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2ce7021f85bb%3A0x5bc8f50757d27e60!2zQ29sw6lnaW8gUmVhw6fDo28!5e0!3m2!1spt-BR!2sbr!4v1715818800000',
  },
];

export const ENROLLMENT_STEPS: EnrollmentStep[] = [
  { title: 'Agendar Visita', description: 'Conheça nossa infraestrutura e proposta pessoalmente.' },
  { title: 'Entrevista Pedagógica', description: 'Conversa com nossa coordenação para alinhamento de expectativas.' },
  { title: 'Avaliação Diagnóstica', description: 'Entendimento do nível atual do estudante.' },
  { title: 'Apresentação da Proposta', description: 'Detalhamento de valores e metodologia.' },
  { title: 'Formalização', description: 'Assinatura do contrato e entrega de documentos.' },
];

export const DOCUMENTATION = [
  'Certidão de Nascimento do aluno',
  'RG e CPF dos responsáveis',
  'Comprovante de residência',
  'Histórico Escolar',
  'Declaração de transferência',
  'Foto 3x4 recente',
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Silva',
    role: 'Mãe de aluno do Fundamental II',
    text: 'O Colégio Reação foi a melhor escolha que fizemos para o nosso filho. O acolhimento é real e sentimos que ele é valorizado em cada detalhe do seu desenvolvimento.',
  },
  {
    id: 2,
    name: 'Ricardo Almeida',
    role: 'Pai de aluna do Ensino Médio',
    text: 'A preparação para o vestibular é intensa, mas o equilíbrio com o bem-estar emocional da minha filha é o que mais nos impressiona. Recomendo de olhos fechados!',
  },
  {
    id: 3,
    name: 'Letícia Santos',
    role: 'Aluna da 3ª Série EM',
    text: 'Aqui eu não sou apenas um número. Os professores são parceiros e o ambiente me motiva a querer aprender mais todos os dias. Me sinto pronta para o futuro!',
  },
];
