/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function PressKitComponent() {
    return (
        <div className="relative bg-slate-300">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover lg:absolute lg:h-full"
                        src="/images/luku_promo_shot.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Press Kit</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            About The Show
                        </h3>
                        <p className="mt-8 text-lg text-gray-500">
                            Luku the Mad Skald has been dazzling old friends and new alike with his wonderfully melodic Norse tunes, his new versions of favorite classics, drinking songs, and things no one has heard of. Luku's hilarity & interaction during shows and leading adult pub sings has led many to tears of joy. With his quick wit and quirky humor combined with the music, it makes for a unique show!
                        </p>
                        <div className="mt-5 prose prose-indigo text-gray-500">
                            <p>
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Act Information</h3>
                                Luku The Mad, while a solo stage act, has up to two tip/merch girls who also participate in the act in the form of playful banter during the show. They also help to get the crowd involved by leading in ques for audience participation parts such as clapping, call and response during songs, and picking audience members for involvement in the show.
                            </p>
                            <p>
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Promo Tag Lines</h3>
                            <p>
                                Short Line: <b>Poetic Eddas for the Modern Boozer</b>.

                            </p>
                                <p>
                                    <br />Long Line: <b>Poetic Eddas for the Modern Boozer!  Luku the Mad Skald is a high energy and wild
                                    musical comedy act.  With drinking and sing along songs galore, his bawdy shows are not to be missed, and have earned him the title "The Sultan of Smut".
                                </b>.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
