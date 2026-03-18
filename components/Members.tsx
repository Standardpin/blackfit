import Image from 'next/image'

const members = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/members/member${i + 1}.jpg`,
  alt: '블랙핏 회원 바디프로필',
  delay: ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5,
}))

export default function Members() {
  return (
    <section id="members" style={{ paddingTop: '100px', paddingBottom: '80px', background: '#FFF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 reveal border-t border-black/10 pt-10">
          <div>
            <div className="label-en mb-3 text-black font-bold">Our Members</div>
            <h2
              className="font-bebas text-black leading-[0.85] tracking-tighter"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              블랙핏이 만든 변화.
            </h2>
          </div>
          <div
            className="font-bebas text-black/10 leading-[0.8] select-none pb-1 tracking-tighter"
            style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}
          >
            10+
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 bg-black/5">
          {members.map((member) => (
            <div
              key={member.src}
              className={`member-photo reveal reveal-d${member.delay} bg-white`}
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src={member.src}
                alt={member.alt}
                fill
                className="member-img object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
