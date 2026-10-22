import type { Question } from "./questions";

export interface NavItem {
  id: string;
  num: string;
  label: string;
}

export interface Device {
  tag: string;
  name: string;
  hook: string;
  literal: string;
  context: string;
  exam: string;
  trap: string;
  example: string;
  mnemonic: string;
  cf?: string;
  revoked?: boolean;
}

export interface Article {
  id: string;
  num: string;
  kicker: string;
  title: string;
  lead: string;
  plate?: string;
  plateSource?: string;
  devices: Device[];
}

export interface OrganCard {
  sigla: string;
  nome: string;
  funcao: string;
  base: string;
  nao: string;
  tone: "yellow" | "cyan" | "orange" | "violet" | "emerald" | "sky";
}

export interface Swap {
  wrong: string;
  right: string;
}

export interface TimelineItem {
  when: string;
  title: string;
  text: string;
}

export interface RoleCard {
  role: string;
  source: string;
  does: string[];
  doesNot: string[];
}

export interface CompareRow {
  item: string;
  ce: string;
  cf: string;
  effect: "amplia" | "restringe" | "espelha" | "cria" | "separa";
}

export interface ClockCard {
  value: string;
  label: string;
  source: string;
}

export interface StudyModule {
  short: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  reading: string;
  terms: string[];
  subject: string;
  context: string[];
  importance: string;
  distinctions: string[];
  organs: OrganCard[];
  swaps: Swap[];
  timeline: TimelineItem[];
  articles: Article[];
  roles: RoleCard[];
  roleNote: string;
  rolePlate: string;
  rolePlateSource: string;
  summary: { item: string; rule: string; clue: string }[];
  compare: CompareRow[];
  questions: Question[];
  toc: NavItem[];
  diagram?: "seguranca";
  clocks?: ClockCard[];
  organKicker?: string;
  organTitle?: string;
  contextTitle?: string;
  contextLead?: string;
  closing?: string;
  palette?: "warm" | "cool" | "fresh" | "azure" | "leaf" | "ember" | "teal" | "lime" | "rose";
  highlight?: { big: string; small: string };
  heroLead?: string;
  footerLine?: string;
  nextLine?: string;
  closingMnemonic?: string;
  rolesTitle?: string;
  rolesLead?: string;
  compareTitle?: string;
  compareLead?: string;
  compareLeft?: string;
  compareRight?: string;
}
