export interface ResumeHead {
  photo: string;
  name: string;
  role: string;
}

export interface InfoBlock {
  head: InfoBlockHead;
  type: INFO_BLOCK_TYPE;
  rows: InfoBlockDataRow[];
}

export interface InfoBlockHead {
  title: string;
  icon: BLCOK_TYPE;
  placeholder: string;
}

export interface InfoBlockData {
  rows: InfoBlockDataRow[];
}

export interface InfoBlockDataRow {
  placeholder: string;
  value: string;
  date?: { from: Date | null; to: Date | null };
  isTitle?: boolean;
}

export enum INFO_BLOCK_TYPE {
  text = 'text',
  progress = 'progress',
}

export enum CONTACT_ICON {
  faPhone = 'faPhone',
  faMapMarkerAlt = 'faMapMarkerAlt',
  faFacebook = 'faFacebook',
  faLinkedin = 'faLinkedin',
  faGithub = 'faGithub',
  faInstagram = 'faInstagram',
  faTelegram = 'faTelegram',
  faEnvelope = 'faEnvelope',
  faLink = 'faLink',
}

export enum INFO_BLOCK_ICON {
  faSuitcase = 'faSuitcase',
  faGraduationCap = 'faGraduationCap',
  faPencilSquare = 'faPencilSquare',
  faCertificate = 'faCertificate',
  faCog = 'faCog',
  faCrosshairs = 'faCrosshairs',
  faComments = 'faComments',
  faInfo = 'faInfo',
}

export interface NewResumeInstance {
  head: HeadInfo;
  contacts: Contacts;
  blocks: ResumeBlcokItem & { next: number };
  disposition: {
    smart: {
      main: Array<keyof ResumeBlcokItem>;
      right: Array<keyof ResumeBlcokItem>;
    };
  };
  custom: { color: TEMPLATE_COLOR; font: TEMPLATE_FONT };
}

export enum TEMPLATE_COLOR {
  violet2 = 'violet2',
  navy2 = 'navy2',
  navy = 'navy',
  blue = 'blue',
  blue2 = 'blue2',
  violet = 'violet',
  green = 'green',
  ochre = 'ochre',
}

export enum TEMPLATE_FONT {
  gambria = 'Cambria',
  garamond = 'Garamond',
  minionPro = 'MinionPro',
  myriadPro = 'Myriad Pro',
  helvetica = 'Helvetica',
  roboto = 'Roboto',
}

export interface ResumeBlcokItem {
  [key: number]: ResumeInfoBlock;
}

export type ResumeInfoBlock =
  | Summary
  | About
  | Experience
  | Education
  | Certificates
  | Skills
  | Competence;

export interface HeadInfo {
  fullname: string;
  position: string;
  photo: {
    image: string;
  };
  type: 'headInfo';
}

export interface Contacts {
  type: 'contacts';
  items: ContactsItem[];
}

export interface Summary {
  type: BLCOK_TYPE.summary;
  data: {
    summary: string;
    title: string;
  };
}

export interface About {
  type: BLCOK_TYPE.about;
  data: {
    about: string;
    title: string;
  };
}

export interface Experience {
  type: BLCOK_TYPE.experience;
  data: {
    title: string;
    items: ExperienceItem[];
  };
}

export interface Education {
  type: BLCOK_TYPE.education;
  data: {
    title: string;
    items: EducationItem[];
  };
}

export interface Certificates {
  type: BLCOK_TYPE.certificates;
  data: {
    title: string;
    items: CertificateItem[];
  };
}

export interface Skills {
  type: BLCOK_TYPE.profskills | BLCOK_TYPE.techskills | BLCOK_TYPE.langskills;
  data: {
    title: string;
    items: SkillItem[];
  };
}

export interface Competence {
  type: 'competence';
  data: {
    title: string;
    items: CompatenceItem[];
  };
}

export interface SkillItem {
  name: string;
  rate: number;
}

export interface CompatenceItem {
  name: string;
}

export interface ContactsItem {
  type: CONTACT_TYPE;
  value: string;
}

export interface ExperienceItem {
  company: string;
  description: string;
  period: Period;
  position: string;
}

export interface EducationItem {
  institution: string;
  description: string;
  period: Period;
}

export interface CertificateItem {
  description: string;
  date: string | null;
}

export interface Period {
  start: string | null;
  end: string | null;
}

export enum CONTACT_TYPE {
  email = 'email',
  phone = 'phone',
  location = 'location',
  link = 'link',
  github = 'github',
  facebook = 'facebook',
  telegram = 'telegram',
  instagram = 'instagram',
  linkedin = 'linkedin',
}

export enum BLCOK_TYPE {
  summary = 'summary',
  about = 'about',
  education = 'education',
  experience = 'experience',
  certificates = 'certificates',
  profskills = 'profskills',
  techskills = 'techskills',
  langskills = 'langskills',
  competence = 'competence',
}
