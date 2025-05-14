"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'));

const achievementsList = [
  { metric: 'Projects', value: '10', postfix: '+' },
  { prefix: '~', metric: 'Questions', value: '200', postfix: '+' },
  { metric: 'Accuracy', value: '85', postfix: '%' },
  { metric: 'Years', value: '2' }
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-wrap items-center justify-center gap-4">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-2 md:mx-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-3xl md:text-4xl font-bold"
                configs={(_, i) => ({ mass: 1, friction: 100, tension: 140 * (i + 1) })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-sm md:text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
