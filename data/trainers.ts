export interface TrainerData {
  id: string
  image: string
  alt: string
  name: string
  title: string
  badges: string[]
  accordionLabel: string
  qualifications: string[]
}

export const trainers: TrainerData[] = [
  {
    id: 'choi',
    image: '/images/trainers/choi.jpg',
    alt: '최혜리 실장',
    name: '최혜리',
    title: '실장',
    badges: ['NASM', 'NSCA'],
    accordionLabel: '자격 보기',
    qualifications: [
      'NASM CPT 미국공인 퍼스널 트레이너',
      'NASM CES 교정운동전문가',
      'NSCA 스포츠영양코치',
      '생활체육지도사2급 보디빌딩',
      '2021 ICN 인천 비키니 1위',
      '2025 WKSF Open Cup Africa 1위',
    ],
  },
  {
    id: 'ko',
    image: '/images/trainers/ko.jpg',
    alt: '고석현 팀장',
    name: '고석현',
    title: '팀장',
    badges: ['NSCA', 'NASM'],
    accordionLabel: '자격 보기',
    qualifications: [
      '차대학원 통합의학 박사과정',
      'NSCA CSCS · TSAC-F · CPT',
      'NASM CES · PES · GFS',
      '대한운동사협회 이사',
      'ACSM CPT · FMS LV1 · TPI LV1',
    ],
  },
  {
    id: 'kim_js',
    image: '/images/trainers/kim_js.jpg',
    alt: '김정식 팀장',
    name: '김정식',
    title: '팀장',
    badges: ['PT전문'],
    accordionLabel: '경력 보기',
    qualifications: [
      '㈜호텔신라 삼성전자(화성) PT',
      '삼성전자(기흥사업장) 임직원 PT',
      'HAC 보디빌딩&피트니스대회 대상',
      '광명시 보디빌딩대회 60kg 1위',
      '생활스포츠지도자(보디빌딩)2급',
    ],
  },
  {
    id: 'kim_hs',
    image: '/images/trainers/kim_hs.jpg',
    alt: '김한성 트레이너',
    name: '김한성',
    title: '트레이너',
    badges: [],
    accordionLabel: '경력 보기',
    qualifications: [
      '삼성화재 영등포사옥 사내 트레이너',
      '동탄 씨포스짐 PT팀장',
      '동탄 엑스피짐 이사',
      '생활체육지도자2급 보디빌딩·수영',
      '수원시장배 보디빌딩 입상',
    ],
  },
  {
    id: 'park',
    image: '/images/trainers/park.jpg',
    alt: '박상준 트레이너',
    name: '박상준',
    title: '트레이너',
    badges: [],
    accordionLabel: '자격 보기',
    qualifications: [
      '대한근육학협회 기능해부학 · 재활 과정',
      'AKF Kettlebell Academy',
      '피트니스스타 보디빌딩 Top 5',
      '아시아 피트니스 콘테스트 Top 6',
      '메꿀다이어트 전담 코치',
    ],
  },
]
