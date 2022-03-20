/* This example requires Tailwind CSS v2.0+ */
const songs = {
    Clean: [
        {
            id: 1,
            name: 'A Song For Odin',
            album: 'From Under The Northern Lights',
        },
        {
            id: 2,
            name: 'Black Velvet Band',
            album: 'Songs From The Briarwood',

        },
        {
            id: 3,
            name: 'Captain Kidd',
            // album: '',

        },
        {
            id: 4,
            name: 'Drunken Lullabies',
            album: 'Songs From The Briarwood',

        },
        {
            id: 5,
            name: 'Fields Of Gold',
            album: 'Songs From The Briarwood',

        },
        {
            id: 6,
            name: 'Galway Girl',
            // album: '',

        },
        {
            id: 7,
            name: 'If I Should Fall From Grace With God',
            // album: '',

        },
        {
            id: 7,
            name: 'Isn\'t It Grand?',
            album: 'Songs From The Briarwood',

        },





    ],
    Bawdy: [
        {
            id: 1,
            name: 'Leslie Abbott',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 2,
            name: 'Hector Adams',
            role: 'VP, Marketing',
            imageUrl:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 3,
            name: 'Blake Alexander',
            role: 'Account Coordinator',
            imageUrl:
                'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            id: 4,
            name: 'Fabricio Andrews',
            role: 'Senior Art Director',
            imageUrl:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ],


}

export default function SongsComponent() {
    return (
        <nav className="h-full overflow-y-auto" aria-label="songs">
            {Object.keys(songs).map((genre) => (
                <div key={genre} className="relative">
                    <div className="z-10 sticky top-0 border-t border-b border-gray-400 bg-blue-100 px-6 py-1 text-sm font-medium text-gray-500">
                        <h1>{genre}</h1>
                    </div>
                    <ul role="list" className="relative z-0 divide-y divide-gray-200">
                        {songs[genre].map((song) => (
                            <li key={song.id} className="bg-white">
                                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-200">
                                    <div className="flex-shrink-0">
                                        {/*<img className="h-10 w-10 rounded-full" src={song.imageUrl} alt="" />*/}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <a href="#" className="focus:outline-none">
                                            {/* Extend touch target to entire panel */}
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <p className="text-sm font-medium text-gray-900">{song.name}</p>
                                            <p className="text-sm text-gray-500 truncate">{song.album != null ? "Available on: " + song.album : '' }</p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/*<br className="co-black" />*/}
                </div>
            ))}
        </nav>
    )
}
