import { ChartBarIcon, EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]

const buttons = [
    {
        name: "10k",
        icon: ChartBarIcon
    },
    {
        name: "view",
        icon: EyeIcon
    },
    {
        name: "edit",
        icon: PencilSquareIcon
    },
    {
        name: "delete",
        icon: TrashIcon
    },
]

function PostList({posts}) {
    
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-base mb-4">semua ({posts.length})</h1>
            <ul role="list" className="divide-y divide-gray-100">
                {posts?.slice(0, 10).map((post) => (
                    <li key={post._id} className="flex justify-between gap-x-6 py-5 md:w-8/12">
                        <div className="flex min-w-0 gap-x-2">
                            <img className="h-20 w-24 flex-none rounded-md bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <div className="min-w-0 md:flex md:flex-col md:justify-between flex-auto">
                                <p className="text-base font-semibold leading-5 text-gray-800">{post.title}</p>
                                <div className='mt-5 flex gap-2 flex-wrap'>
                                    {
                                        buttons.map((item) => (
                                            <a href='#' key={item.name} className='flex items-center text-gray-600 gap-1  hover:text-indigo-600'>
                                                <item.icon className="h-5 w-5" />
                                                <span>{item.name}</span>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
