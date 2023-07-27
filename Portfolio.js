import React from 'react';
import Header from './Header';
import Project from './Project';

const footballers = [
  {
    title: 'Lionel Messi',
    description: 'Lionel Messi, often considered one of the greatest footballers of all time, is an Argentine forward known for his extraordinary dribbling skills, precise finishing, and exceptional vision on the field. He spent most of his career with FC Barcelona, where he won numerous domestic and international titles, including multiple Ballon d\'Or awards.',
  },
  {
    title: 'Cristiano Ronaldo',
    description: 'Cristiano Ronaldo, a Portuguese forward, is renowned for his incredible athleticism, goal-scoring prowess, and leadership abilities. He has played for top clubs such as Manchester United, Real Madrid, and Juventus. With a fierce work ethic and dedication, Ronaldo has won several league titles and Champions League trophies.',
  },
  {
    title: 'Neymar Jr.',
    description: 'Neymar Jr., a Brazilian forward, is known for his electrifying pace, dazzling skills, and creativity on the field. He has played for clubs like Barcelona and Paris Saint-Germain (PSG). Neymar is famous for his flair and ability to take on multiple defenders, making him a formidable attacking force.',
  },
  {
    title: 'Andrés Iniesta',
    description: 'Andrés Iniesta, a Spanish midfielder, is admired for his exceptional passing accuracy, intelligence, and calmness under pressure. He was a crucial player for FC Barcelona during their most successful years, helping the team win numerous domestic and international trophies, including the 2010 FIFA World Cup with the Spanish national team.',
  },
  {
    title: 'Luka Modrić',
    description: 'Luka Modrić, a Croatian midfielder, is known for his precise passing, playmaking abilities, and defensive work rate. He has been a key player for Real Madrid, playing a vital role in their three consecutive Champions League victories. Modrić\'s vision and control of the game have earned him high praise from football fans and experts alike.',
  },
  {
    title: 'Virgil van Dijk',
    description: 'Virgil van Dijk, a Dutch center-back, is widely regarded as one of the best defenders in the world. His commanding presence, aerial prowess, and strong tackling skills have made him an integral part of Liverpool FC\'s defensive line. Van Dijk\'s performances have been crucial in helping Liverpool win the Premier League and Champions League.',
  },
  // Add more footballers here
];

const Portfolio = () => {
  return (
    <div>
      <Header />
      <h2>Famous Footballers</h2>
      {footballers.map((footballer, index) => (
        <Project key={index} project={footballer} />
      ))}
    </div>
  );
};

export default Portfolio;
