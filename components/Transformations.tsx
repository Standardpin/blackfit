import Image from 'next/image'
import { transformations } from '@/data/transformations'

function StoryCard({ story, index }: { story: (typeof transformations)[number]; index: number }) {
  const hasImages = story.images.length > 0

  return (
    <div className={`transform-card reveal reveal-d${story.revealDelay} relative overflow-hidden`} style={{ minHeight: '420px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[420px]">

        {/* Photo side */}
        <div className={`relative overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`} style={{ minHeight: '320px' }}>
          {hasImages ? (
            story.images.length === 1 ? (
              <>
                <Image
                  src={story.images[0].src}
                  alt={story.images[0].alt}
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </>
            ) : (
              <div className="grid grid-cols-2 h-full gap-px bg-black/10">
                {story.images.map((img) => (
                  <div key={img.src} className="relative overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="25vw"
                    />
                    {img.overlay && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent">
                        <span className="font-barlow text-black/80 font-bold text-xs uppercase tracking-widest">{img.overlay}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          ) : (
            /* Coming soon placeholder */
            <div className="flex items-center justify-center h-full bg-[#f4f4f4]">
              <div className="text-center px-8">
                <div
                  className="font-bebas text-black/5 leading-[0.85] mb-4 tracking-tighter"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  COMING
                  <br />
                  SOON
                </div>
                <p className="font-barlow text-black/40 text-xs font-bold uppercase tracking-widest">사진 준비 중</p>
              </div>
            </div>
          )}
        </div>

        {/* Text side */}
        <div
          className={`bg-white flex flex-col justify-center px-8 py-12 lg:px-16 ${index % 2 !== 0 ? 'lg:order-1 border-r border-black/10' : 'border-l border-black/10'}`}
        >
          {/* Story number */}
          <div
            className="font-bebas text-black/5 leading-[0.8] select-none mb-6 tracking-tighter"
            style={{ fontSize: 'clamp(6rem, 12vw, 10rem)' }}
          >
            {story.number}
          </div>

          <h3 className="font-noto text-xl md:text-2xl font-black text-black mb-4 leading-tight tracking-tight break-keep">{story.title}</h3>
          <p className="font-noto text-sm md:text-base text-black/60 italic font-semibold leading-relaxed mb-6 whitespace-pre-line break-keep">
            "{story.quote}"
          </p>
          <div className="line-divider my-6" />
          <p className="font-noto text-sm text-black/80 font-medium leading-relaxed break-keep">{story.description}</p>
        </div>

      </div>
    </div>
  )
}

export default function Transformations() {
  return (
    <section id="transformations" className="bg-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex items-end justify-between reveal">
          <div>
            <div className="label-en mb-4 text-black font-bold">Selected Work</div>
            <h2
              className="font-bebas text-black leading-[0.85] tracking-tighter"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
            >
              변화의 기록.
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-black/10">
          {transformations.map((story, i) => (
            <div key={story.id} className="border-b border-black/10">
              <StoryCard story={story} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
