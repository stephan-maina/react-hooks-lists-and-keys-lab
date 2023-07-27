import React from 'react';
import Header from './Header';
import Project from './Project';

const footballers = [
  // Previous footballers...
  {
    title: 'Robert Lewandowski',
    description: 'Robert Lewandowski, a Polish striker, is celebrated for his exceptional goal-scoring abilities and clinical finishing. He has been the top goal-scorer in multiple seasons of the Bundesliga and has achieved great success with Bayern Munich. Lewandowski\'s ability to find the back of the net consistently makes him one of the deadliest strikers in the world.',
  },
  {
    title: 'Kevin De Bruyne',
    description: 'Kevin De Bruyne, a Belgian midfielder, is renowned for his exceptional passing, vision, and playmaking skills. He has been a crucial player for Manchester City, helping the team win numerous Premier League titles. De Bruyne\'s ability to create scoring opportunities and deliver pinpoint passes sets him apart as one of the best midfielders in the game.',
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
