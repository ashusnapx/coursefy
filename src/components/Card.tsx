import Image from 'next/image';
import React from 'react';

const Card = () => {
  const sampleCourses = [
    {
      _id: '1',
      createdAt: new Date(),
      courseThumbnailPath:
        'https://cdn.dribbble.com/userupload/13274863/file/original-d5dce283bcfc2702ea79d1010aff62dc.png?resize=752x',
      title: 'Learn Graphic Design',
      tags: ['tag1', 'tag2'],
      adminUserName: 'Admin',
      description: 'Sample course description 1',
      ratings: 4.5,
    },
    {
      _id: '2',
      createdAt: new Date(),
      courseThumbnailPath:
        'https://cdn.dribbble.com/userupload/13200654/file/original-8d112031f0f570b0846d3e55ac1e55b1.png?resize=752x',
      title: 'Learn to build 3D Games',
      tags: ['tag1', 'tag3'],
      adminUserName: 'Admin',
      description: 'Sample course description 2',
      ratings: 4.2,
    },
  ];

  return (
    <div className=''>
      
    </div>
  );
};

export default Card;
