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
        {
            id: 8,
            name: 'I\'s The By',
            // album: 'Songs From The Briarwood',

        },
        {
            id: 9,
            name: 'Lifeblood',
            album: 'From Under The Northern Lights',

        },
        {
            id: 10,
            name: 'Loch Lomond',
            album: 'Songs From The Briarwood',

        },
        {
            id: 11,
            name: 'Mari Mac',
            // album: 'Songs From The Briarwood',

        },
        {
            id: 12,
            name: 'Mingulay Boat Song',
            album: 'Songs From The Briarwood',

        },
        {
            id: 13,
            name: 'Nancy Whiskey',
            // album: 'Songs From The Briarwood',

        },
        {
            id: 14,
            name: 'Of Silk And Fine Furs',
            album: 'From Under The Northern Lights',

        },
        {
            id: 15,
            name: 'Paddy West',
            album: 'Songs From The Briarwood',

        },
        {
            id: 16,
            name: 'Places Unseen',
            album: 'From Under The Northern Lights',

        },
        {
            id: 17,
            name: 'Raise Your Horns To The Sky',
            album: 'From Under The Northern Lights',

        },
        {
            id: 18,
            name: 'Run Runaway',
            // album: 'Songs From The Briarwood',

        },
        {
            id: 19,
            name: 'Tell Me Ma',
            album: 'Songs From The Briarwood',

        },
        {
            id: 20,
            name: 'Truth About The Vikings',
            album: 'From Under The Northern Lights',

        },
        {
            id: 21,
            name: 'Twilight Of The Thunder God',
            album: 'From Under The Northern Lights',

        },
        {
            id: 22,
            name: 'Under The Glow',
            album: 'Songs From The Briarwood',

        },
        {
            id: 23,
            name: 'Whiskey In The Jar',
            album: 'Songs From The Briarwood',

        },
        {
            id: 24,
            name: 'IKEA',
            // album: 'Songs From The Briarwood',

        },
        {
            id: 25,
            name: 'Wild Mountain Thyme',
            album: 'Songs From The Briarwood',

        },
        {
            id: 26,
            name: 'Yggdrasil',
            album: 'From Under The Northern Lights',

        },





    ],
    Bawdy: [
        {
            id: 1,
            name: 'Betty West',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 2,
            name: 'Big Bosomed Girls',
            // album: 'We\'re All Going To Helheim',

        },
        {
            id: 3,
            name: 'Boned Her In The Alley',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 4,
            name: 'The Chandler\'s Wife',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 5,
            name: 'Charlotte the Harlot',
            album: 'Very Unnecessary Lewd Vulgar Album',

        },
        {
            id: 6,
            name: 'Renfaire Day (First Of May)',
            album: 'Very Unnecessary Lewd Vulgar Album',

        },
        {
            id: 7,
            name: 'Grandfather\'s Song',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 8,
            name: 'How The Money Rolls In',
            album: 'Very Unnecessary Lewd Vulgar Album',

        },
        {
            id: 9,
            name: 'Johnny Be Fair',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 10,
            name: 'Mingulay Corpse Song',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 11,
            name: 'O\'Reiley\'s Daughter',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 12,
            name: 'The Scottsman',
            album: 'Very Unnecessary Lewd Vulgar Album',

        },
        {
            id: 13,
            name: 'The Widow And The Devil',
            // album: 'Very Unnecessary Lewd Vulgar Album',

        },
        {
            id: 14,
            name: 'To Hell With The Company',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 15,
            name: 'XY(ZED)',
            album: 'We\'re All Going To Helheim',

        },
        {
            id: 16,
            name: 'Lydia The Tattooed Lady',
            album: 'Very Unnecessary Lewd Vulgar Album',

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
