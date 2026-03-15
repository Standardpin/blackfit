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
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </>
            ) : (
              <div className="grid grid-cols-2 h-full gap-px">
                {story.images.map((img) => (
                  <div key={img.src} className="relative overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top"
                      sizes="25vw"
                    />
                    {img.overlay && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                        <span className="font-barlow text-white/60 text-xs uppercase tracking-widest">{img.overlay}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )
          ) : (
            /* Coming soon placeholder */
            <div className="flex items-center justify-center h-full bg-[#080808]">
              <div className="text-center px-8">
                <div
                  className="font-bebas text-white/5 leading-none mb-4"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  COMING
                  <br />
                  SOON
                </div>
                <p className="font-barlow text-white/20 text-xs uppercase tracking-widest">사진 준비 중</p>
              </div>
            </div>
          )}
        </div>

        {/* Text side */}
        <div
          className={`bg-black flex flex-col justify-center px-8 py-12 lg:px-12 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
        >
          {/* Story number */}
          <div
            className="font-bebas text-white/5 leading-none select-none mb-4"
            style={{ fontSize: 'clamp(4rem, 7vw, 6rem)' }}
          >
            {story.number}
          </div>

          <h3 className="font-noto text-lg font-bold text-white mb-3 leading-snug">{story.title}</h3>
          <p className="font-noto text-sm text-white/40 italic leading-relaxed mb-4 whitespace-pre-line">
            {story.quote}
          </p>
          <div className="line-divider my-4" />
          <p className="font-noto text-xs text-white/40 leading-relaxed">{story.description}</p>
        </div>

      </div>
    </div>
  )
}

export default function Transformations() {
  return (
    <section id="transformations" className="bg-black" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex items-end justify-between reveal">
          <div>
            <div className="label-en mb-3">Selected Work</div>
            <h2
              className="font-bebas text-white leading-none tracking-wide"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              변화의 기록
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/5">
          {transformations.map((story, i) => (
            <div key={story.id} className="border-b border-white/5">
              <StoryCard story={story} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
