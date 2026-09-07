export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Carlos Eduardo',
    role: 'Professor Titular / Faculty',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces',
  },
  {
    name: 'Dra. Ana Beatriz',
    role: 'Professora Adjunta / Faculty',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces',
  },
  {
    name: 'Lucas Gabriel',
    role: 'Doutorando / PhD Student',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
  },
  {
    name: 'Mariana Souza',
    role: 'Mestranda / MSc Student',
    photo:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=faces',
  },
];