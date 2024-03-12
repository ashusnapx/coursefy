'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { LucideBackpack, LucideHome, Settings2Icon } from 'lucide-react';
import { UpdateIcon } from '@radix-ui/react-icons';
import Card from './Card';

const Homepage = () => {
  const linksData = [
    { href: '/home', text: 'Home', icon: <LucideHome className='h-6 w-6' /> },
    {
      href: '/courses',
      text: 'My Courses',
      icon: <LucideBackpack className='h-6 w-6' />,
    },
    {
      href: '/settings',
      text: 'Settings',
      icon: <Settings2Icon className='h-6 w-6' />,
    },
    {
      href: '/changelogs',
      text: 'Changelogs',
      icon: <UpdateIcon className='h-6 w-6' />,
    },
  ];

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

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='grid grid-cols-3 md:grid-cols-8 min-h-screen'>
      {/* sidebar */}
      <div
        className={`col-span-1 md:col-span-1 bg-black/90 text-white duration-600 ease-in-out ${
          isSidebarOpen ? 'w-45' : 'w-12'
        }`}
        onMouseEnter={() => setSidebarOpen(true)}
        onMouseLeave={() => setSidebarOpen(false)}
      >
        <div className='flex flex-col p-3 gap-2'>
          {linksData.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`flex items-center gap-2 text-xl font-semibold hover:bg-primary/70 hover:rounded-full px-3 py-2 ${
                isSidebarOpen ? 'justify-start' : 'justify-center'
              }`}
            >
              {!isSidebarOpen && <span>{link.icon}</span>}
              {isSidebarOpen && <span>{link.icon}</span>}
              {isSidebarOpen && <span>{link.text}</span>}
            </Link>
          ))}
        </div>
      </div>
      {/* contents */}
      <div className='col-span-2 md:col-span-7 overflow-auto p-5'>
        <Link href='/course:id' className='grid grid-cols-4 gap-2 p-2'>
          {sampleCourses.map((course) => (
            <div
              key={course._id}
              className='border-2 border-slate-300 hover:border-primary rounded-md p-5 w-fit hover:cursor-pointer'
            >
              <Image
                height={250}
                width={350}
                src={course.courseThumbnailPath}
                alt={course.title}
                className='rounded-md'
              />
              <div>
                <h2 className='text-xl font-semibold mt-2'>{course.title}</h2>
                <p className='text-base'>{course.description}</p>
                <div>
                  {course.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                  ))}
                </div>
                <div className='ratings'>
                  <span className='rating'>{course.ratings}</span>
                  <span className='stars'>
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
