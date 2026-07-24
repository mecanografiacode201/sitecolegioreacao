// Fix: Import React to resolve 'React' namespace for React.ReactNode type
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Unit {
  id: number;
  name: string;
  address: string;
  phone: string;
  levels: string[];
  whatsapp: string;
  image: string;
  mapUrl: string;
}

export interface EnrollmentStep {
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}