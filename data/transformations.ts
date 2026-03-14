export type TransformationImageLayout =
  | 'combined-left'      // single combined photo on left
  | 'split-right'        // before/after side by side on right
  | 'split-left'         // before/after side by side on left
  | 'placeholder-right'  // no photo yet — placeholder on right

export interface TransformationStory {
  id: string
  number: string
  title: string
  quote: string
  description: string
  imageLayout: TransformationImageLayout
  images: { src: string; alt: string; overlay?: string }[]
  revealDelay: 1 | 2 | 3 | 4
}

export const transformations: TransformationStory[] = [
  {
    id: 'story1',
    number: '01',
    title: '두 아이 엄마의 새로운 인생',
    quote: '"100kg 고도비만에서 바디프로필까지,\n엄마의 기적은 블랙핏에서 시작됩니다."',
    description:
      '치열한 육아 일상 속, 생애 첫 PT를 통해 단순한 체중 감량을 넘어 삶의 활력을 되찾았습니다.',
    imageLayout: 'combined-left',
    images: [
      {
        src: '/images/transformations/story1_combined.jpg',
        alt: '두 아이 엄마의 새로운 인생 - before after',
      },
    ],
    revealDelay: 1,
  },
  {
    id: 'story2',
    number: '02',
    title: '인생의 터닝포인트',
    quote: '"회원에서 트레이너까지,\n1위의 영광이 증명하는 과학적 코칭의 힘"',
    description:
      '첫 대회 우승과 생활스포츠지도사 자격 취득! 단순한 운동을 넘어 인생의 새로운 꿈을 현실로 만듭니다.',
    imageLayout: 'split-right',
    images: [
      {
        src: '/images/transformations/story2_before.jpg',
        alt: '인생의 터닝포인트 - before',
        overlay: 'Before',
      },
      {
        src: '/images/transformations/story2_after.jpg',
        alt: '인생의 터닝포인트 - after',
        overlay: 'After',
      },
    ],
    revealDelay: 2,
  },
  {
    id: 'story3',
    number: '03',
    title: '기본기의 힘, 운동을 제대로 배우다',
    quote: '"머신의 한계를 넘어 프리웨이트의 정석으로,\n아빠의 화려한 변신"',
    description:
      '통증 때문에 머신에만 의존하던 과거를 뒤로하고 기본기부터 다시 세웠습니다. 고도비만 탈출부터 바디프로필까지, \'아빠\'라는 이름에 자신감을 더해드립니다.',
    imageLayout: 'split-left',
    images: [
      {
        src: '/images/transformations/story3_before.jpg',
        alt: '기본기의 힘 - before',
        overlay: 'Before',
      },
      {
        src: '/images/transformations/story3_after.jpg',
        alt: '기본기의 힘 - after',
        overlay: 'After',
      },
    ],
    revealDelay: 3,
  },
  {
    id: 'story4',
    number: '04',
    title: '환경을 이겨낸 의지',
    quote: '"100kg+ 교대근무의 불가능을 가능으로,\n당신의 환경까지 케어합니다"',
    description:
      '불규칙한 생활 패턴과 무거운 체중도 블랙핏에서는 장애물이 되지 않습니다. 스트레스 없이 즐겁게 목표에 도달하는 변화의 과정을 함께합니다.',
    imageLayout: 'placeholder-right',
    images: [],
    revealDelay: 4,
  },
]
