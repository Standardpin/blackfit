import Image from 'next/image'

const members = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/members/member${i + 1}.jpg`,
  alt: '블랙핏 회원 바디프로필',
  delay: ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5,
}))

export default function Members() {
  return (
    <section id="members" className="section-py" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 reveal">
          <div className="label-en mb-4">Member Gallery</div>
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-wide">
            MEMBERS<br />
            <span className="text-gold-gradient">블랙핏이 만든 변화</span>
          </h2>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {members.map((member) => (
            <div
              key={member.src}
              className={`member-photo reveal reveal-d${member.delay}`}
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src={member.src}
                alt={member.alt}
                fill
                className="member-img object-cover"
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
