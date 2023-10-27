import React, { useState } from 'react'

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: '10 Tips for Successful Content Marketing',
        href: '#',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor purus a justo consequat.',
        date: 'Apr 10, 2020',
        datetime: '2020-04-10',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Sarah Johnson',
            role: 'Content Strategist',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'The Power of Social Media Advertising',
        href: '#',
        description:
            'Learn how social media advertising can boost your brand and increase sales.',
        date: 'May 5, 2020',
        datetime: '2020-05-05',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'John Smith',
            role: 'Digital Marketing Specialist',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1533934133946-3f8fda8c5765?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        title: 'The Art of Email Marketing',
        href: '#',
        description:
            'Explore the strategies and best practices for successful email marketing campaigns.',
        date: 'Jun 20, 2020',
        datetime: '2020-06-20',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Emily Davis',
            role: 'Email Marketing Manager',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'Maximizing SEO for Your Website',
        href: '#',
        description:
            'Discover how to optimize your website for search engines and improve your online visibility.',
        date: 'Jul 15, 2020',
        datetime: '2020-07-15',
        category: { title: 'SEO', href: '#' },
        author: {
            name: 'David Wilson',
            role: 'SEO Specialist',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1504198453319-c3e9ce6e0c29?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 6,
        title: 'The Future of E-Commerce',
        href: '#',
        description:
            'Explore the latest trends and technologies shaping the future of e-commerce.',
        date: 'Aug 30, 2020',
        datetime: '2020-08-30',
        category: { title: 'E-Commerce', href: '#' },
        author: {
            name: 'Linda Adams',
            role: 'E-Commerce Consultant',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1530882574612-72b29a506d21?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 7,
        title: 'Mastering Social Media Marketing',
        href: '#',
        description:
            'Learn the key strategies and tactics for successful social media marketing campaigns.',
        date: 'Sep 25, 2020',
        datetime: '2020-09-25',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Jessica Carter',
            role: 'Social Media Manager',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1530882574612-72b29a506d21?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 8,
        title: 'The Science of Data Analytics',
        href: '#',
        description:
            'Discover how data analytics can drive business decisions and improve performance.',
        date: 'Oct 10, 2020',
        datetime: '2020-10-10',
        category: { title: 'Data Analytics', href: '#' },
        author: {
            name: 'Daniel Miller',
            role: 'Data Analyst',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1530882574612-72b29a506d21?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 9,
        title: 'Creating Engaging Video Content',
        href: '#',
        description:
            'Learn the art of creating compelling video content that captivates your audience.',
        date: 'Nov 20, 2020',
        datetime: '2020-11-20',
        category: { title: 'Video Marketing', href: '#' },
        author: {
            name: 'Sophia Anderson',
            role: 'Video Marketing Specialist',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 10,
        title: 'Web Design Best Practices',
        href: '#',
        description:
            'Discover the essential principles of effective web design and user experience.',
        date: 'Dec 15, 2020',
        datetime: '2020-12-15',
        category: { title: 'Web Design', href: '#' },
        author: {
            name: 'Benjamin Wright',
            role: 'Web Designer',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1530882574612-72b29a506d21?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
];


const Articles = () => {

    return (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-[5%]">
            {posts?.slice(0,10).map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="alt" className='rounded-md object-cover mb-3' />
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                            {post.date}
                        </time>
                        <a
                            href={post.category.href}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                            {post.category.title}
                        </a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                </a>
                            </p>
                            <p className="text-gray-600">{post.author.role}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Articles