import Image from 'next/image'
import { transformations } from '@/data/transformations'

function StoryImages({ story }: { story: (typeof transformations)[number] }) {
  if (story.imageLayout === 'combined-left') {
    return (
      <div className="relative overflow-hidden h-[460px]">
        <Image
          src={story.images[0].src}
          alt={story.images[0].alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    )
  }

  if (story.imageLayout === 'split-right' || story.imageLayout === 'split-left') {
    return (
      <div className="grid grid-cols-2 gap-1 h-[460px]">
        {story.images.map((img) => (
          <div key={img.src} className="relative overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top"
              sizes="25vw"
            />
            {img.overlay && <div className="photo-overlay">{img.overlay}</div>}
          </div>
        ))}
      </div>
    )
  }

  // placeholder
  return (
    <div
      className="flex items-center justify-center min-h-[240px]"
      style={{ background: '#0A0A0A', borderLeft: '1px solid #1F1F1F' }}
    >
      <div className="text-center px-8">
        <div className="w-12 h-12 border border-divider flex items-center justify-center mx-auto mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <p className="font-noto text-xs text-gray-600">사진 준비 중</p>
      </div>
    </div>
  )
}

function StoryText({ story }: { story: (typeof transformations)[number] }) {
  return (
    <div className="p-8 lg:p-10 flex flex-col justify-center">
      <div className="font-bebas text-6xl text-gold/20 leading-none mb-4">{story.number}</div>
      <h3 className="font-noto text-xl font-bold text-white mb-3 leading-snug">{story.title}</h3>
      <p className="font-noto text-gold text-sm font-medium leading-snug mb-4 whitespace-pre-line">
        {story.quote}
      </p>
      <p className="font-noto text-sm text-gray-400 leading-relaxed">{story.description}</p>
    </div>
  )
}

export default function Transformations() {
  return (
    <section id="transformations" className="section-py bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="label-en mb-4">Transformation Stories</div>
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide">
            변화의<br />
            <span className="text-gold-gradient">기록</span>
          </h2>
        </div>

        <div className="space-y-6">
          {transformations.map((story) => {
            const imageOnLeft =
              story.imageLayout === 'combined-left' || story.imageLayout === 'split-left'

            return (
              <div
                key={story.id}
                className={`transform-card reveal reveal-d${story.revealDelay}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {imageOnLeft ? (
                    <>
                      <StoryImages story={story} />
                      <StoryText story={story} />
                    </>
                  ) : (
                    <>
                      <div className="order-2 lg:order-1">
                        <StoryText story={story} />
                      </div>
                      <div className="order-1 lg:order-2">
                        <StoryImages story={story} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
