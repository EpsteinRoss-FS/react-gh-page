import { FacebookProvider, Like,EmbeddedPost, Page  } from 'react-facebook';
import Embed from 'react-music-embed';

export default function MediaComponent() {
    return (

        <div className="relative bg-slate-400 pb-20 px-4 sm:px-6">

        <h1 className="lukuHeader-pages">Media</h1>
            {/*<div className="absolute inset-0">*/}
            {/*    <div className="bg-white h-1/3 sm:h-2/3" />*/}
            {/*</div>*/}
            <div className="relative max-w-7xl mx-auto">

                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    <div className="flex flex-col rounded-lg m-lg-auto  overflow-hidden">
                        <FacebookProvider appId="1389193744849483">
                            <div className="flex-shrink-0">
                                {/*<h1 className="text-center">Spotify</h1>*/}
                                <iframe src="https://open.spotify.com/embed/artist/6mbwmUYgWsO2IVS6lMTmQC" width="320"
                                        height="400" frameBorder="0" allowTransparency={true}
                                        allow="encrypted-media"></iframe>
                            </div>
                        </FacebookProvider>
                    </div>
                    <div className="flex flex-col rounded-lg  overflow-hidden">
                        {/*<img src={ragnatree}/>*/}
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        {/*<FacebookProvider appId="1389193744849483">*/}
                        <div className="flex-shrink-0">
                            <script async src="https://www.instagram.com/embed.js" />
                            <Embed url="https://music.apple.com/us/album/were-all-going-to-helheim/1503931963" />
                            <Embed url="https://music.apple.com/us/album/pissed-drunk-pissed-off/1563884170" />
                            <Embed url="https://music.apple.com/us/album/from-under-the-northern-lights/1503456053" />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
