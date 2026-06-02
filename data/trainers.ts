export interface TrainerData {
  id: string
  image: string
  alt: string
  name: string
  nameEn: string
  title: string
  role: string
  qualifications: string[]
  achievements?: string[][]
}

export const trainers: TrainerData[] = [
  {
    id: 'shin',
    image: '/images/trainers/shin.jpg',
    alt: '신형영 대표 - 보디빌딩 전 국가대표',
    name: '신형영',
    nameEn: 'SHIN HYUNG YOUNG',
    title: '대표 / Head Trainer',
    role: 'Head Trainer',
    achievements: [
      ['제60회 세계남자 보디빌딩 선수권대회', '국가대표'],
      ['2005 미스터코리아 선발대회 75kg', '1위'],
      ['제15회 춘계 전국 보디빌딩 선수권 80kg', '1위'],
      ['경기도 도민체전', '7회 연속 1위'],
      ['2007 동아시아 선수권대회', '국가대표'],
    ],
    qualifications: [
      'NSCA CPT 미국공인 퍼스널 트레이너',
      'NSCA Korea Recognized Gym 공인',
      '생활체육지도사 2급 보디빌딩',
    ],
  },
  {
    id: 'choi',
    image: '/images/trainers/choi.jpg',
    alt: '최혜리 실장',
    name: '최혜리',
    nameEn: 'CHOI HYE RI',
    title: '실장',
    role: 'Manager',
    qualifications: [
      'NASM CPT 미국공인 퍼스널 트레이너',
      'NASM CES 교정운동전문가',
      'NSCA 스포츠영양코치',
      '생활체육지도사 2급 보디빌딩',
      '2021 ICN 인천 비키니 1위',
      '2025 WKSF Open Cup Africa 1위',
    ],
  },
  {
    id: 'ko',
    image: '/images/trainers/ko.jpg',
    alt: '고석현 팀장',
    name: '고석현',
    nameEn: 'KO SEOK HYUN',
    title: '팀장',
    role: 'Team Lead',
    qualifications: [
      '차대학원 통합의학 박사과정',
      'NSCA CSCS · TSAC-F · CPT',
      'NASM CES · PES · GFS',
      'ACSM CPT · FMS LV1 · TPI LV1',
      '대한운동사협회 이사',
    ],
  },
  {
    id: 'kim_js',
    image: '/images/trainers/kim_js.jpg',
    alt: '김정식 팀장',
    name: '김정식',
    nameEn: 'KIM JUNG SIK',
    title: '팀장',
    role: 'Team Lead',
    qualifications: [
      '㈜호텔신라 삼성전자(화성) 전담 트레이너',
      '삼성전자(기흥사업장) 임직원 PT',
      '생활스포츠지도자 2급 보디빌딩',
      'HAC 보디빌딩&피트니스대회 대상',
      '광명시 보디빌딩대회 60kg 1위',
    ],
  },
  {
    id: 'kim_hs',
    image: '/images/trainers/kim_hs.jpg',
    alt: '김한성 트레이너',
    name: '김한성',
    nameEn: 'KIM HAN SUNG',
    title: '트레이너',
    role: 'Trainer',
    qualifications: [
      '삼성화재 영등포사옥 사내 트레이너',
      '동탄 씨포스짐 PT팀장',
      '동탄 엑스피짐 이사',
      '생활체육지도자 2급 보디빌딩·수영',
      '수원시장배 보디빌딩 입상',
    ],
  },
  {
    id: 'park',
    image: '/images/trainers/park.jpg',
    alt: '박상준 트레이너',
    name: '박상준',
    nameEn: 'PARK SANG JUN',
    title: '트레이너',
    role: 'Trainer',
    qualifications: [
      'Nasm cpt 미국공인 퍼스널 트레이너',
      '대한근육학협회 기능해부학 · 재활 과정',
      'AKF Kettlebell Academy',
      '피트니스스타 보디빌딩 Top 5',
      '아시아 피트니스 콘테스트 Top 6',
      '메꿀다이어트 전담 코치',
    ],
  },
]
