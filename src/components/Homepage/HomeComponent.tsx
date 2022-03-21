import Feed from "instagram-feed-embed";
import { FacebookProvider, Like,EmbeddedPost, Page  } from 'react-facebook';
import ragnatree from '../../assets/images/ragnatree.png';

export default function HomeComponent() {
    return (

        <div className="relative bg-slate-400 pb-20 pt-5 px-4 sm:px-6">

            {/*<div className="absolute inset-0">*/}
            {/*    <div className="bg-white h-1/3 sm:h-2/3" />*/}
            {/*</div>*/}
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-slate-300 sm:text-4xl lukuFont headerShadow">Luku The Mad Skald</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-800 sm:mt-4 lukuFont headerGlow">
                        Poetic Eddas for the Modern Boozer!
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <FacebookProvider appId="1389193744849483">
                            <h2 className="lukuFont">Facebook</h2>
                            <div className="flex-shrink-0">
                                <Page href="https://www.facebook.com/lukuthemad" tabs="timeline" />
                            </div>
                        </FacebookProvider>
                    </div>
                    <div className="flex flex-col rounded-lg  overflow-hidden">
                        <img src={ragnatree}/>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <h2 className="lukuFont">Instagram</h2>
                        {/*<FacebookProvider appId="1389193744849483">*/}
                            <div className="flex-shrink-0">
                                <script async src="https://www.instagram.com/embed.js" />
                                <Feed
                                    userName="lukuthemad"
                                    limit={12}
                                    width={320}
                                    maxContainerHeight={510}
                                />
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
