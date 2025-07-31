type Product = {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  likesCount: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: '월레스의 오리지널 웬슬리데일',
    category: 'CHEESE',
    stock: 3,
    price: 12.99,
    description: '전통 영국식 크리미한 웬슬리데일 치즈',
    imageUrl: '/moon-cheese-images/cheese-1.jpg',
    rating: 4.8,
    likesCount: 0,
  },
  {
    id: 2,
    name: '그랜드 데이 아웃 체다',
    category: 'CHEESE',
    stock: 3,
    price: 14.87,
    description: '달 착륙 모험에서 영감받은 체다 치즈',
    imageUrl: '/moon-cheese-images/cheese-2.jpg',
    rating: 4.9,
    likesCount: 0,
  },
  {
    id: 3,
    name: '전자바지 브리',
    category: 'CHEESE',
    stock: 1,
    price: 10,
    description: '전자바지를 모티브로 한 부드러운 브리',
    imageUrl: '/moon-cheese-images/cheese-3.jpg',
    rating: 4.6,
    likesCount: 0,
  },
  {
    id: 4,
    name: '숀 더 쉽 크림치즈',
    category: 'CHEESE',
    stock: 3,
    price: 13.55,
    description: '숀 더 쉽 크림치즈',
    imageUrl: '/moon-cheese-images/cheese-4.jpg',
    rating: 4.7,
    likesCount: 0,
  },
  {
    id: 5,
    name: '치즈홀 크래커',
    category: 'CRACKER',
    stock: 2,
    price: 10.85,
    description: '달 표면을 닮은 구멍 크래커',
    imageUrl: '/moon-cheese-images/cracker-1.jpg',
    rating: 4.5,
    likesCount: 0,
  },
  {
    id: 6,
    name: '로봇 크런치 비스킷',
    category: 'CRACKER',
    stock: 2,
    price: 5,
    description: '로봇 캐릭터 모양의 귀리 비스킷',
    imageUrl: '/moon-cheese-images/cracker-2.jpg',
    rating: 4.4,
    likesCount: 0,
  },
  {
    id: 7,
    name: '펭귄 페퍼잭 크래커',
    category: 'CRACKER',
    stock: 1,
    price: 6.5,
    description: '매콤한 맛, 펭귄 페더스 테마',
    imageUrl: '/moon-cheese-images/cracker-3.jpg',
    rating: 4.3,
    likesCount: 0,
  },
  {
    id: 8,
    name: '그로밋의 잉글리쉬 브렉퍼스트 티',
    category: 'TEA',
    stock: 2,
    price: 6.75,
    description: '영국식 클래식 블랙티',
    imageUrl: '/moon-cheese-images/tea-1.jpg',
    rating: 4.8,
    likesCount: 0,
  },
  {
    id: 9,
    name: '문라이트 카모마일 티',
    category: 'TEA',
    stock: 1,
    price: 7,
    description: '달빛 같은 부드러운 허브차',
    imageUrl: '/moon-cheese-images/tea-2.jpg',
    rating: 4.6,
    likesCount: 0,
  },
  {
    id: 10,
    name: '레드 로켓 루이보스 티',
    category: 'TEA',
    stock: 1,
    price: 6.8,
    description: '우주선 컨셉의 루이보스 티',
    imageUrl: '/moon-cheese-images/tea-3.jpg',
    rating: 4.7,
    likesCount: 0,
  },
];

// 등급별 포인트 설정
const GRADE_POINTS = {
  EXPLORER: 0,
  PILOT: 3.5,
  COMMANDER: 7,
} as const;

// 등급별 배송 설정
const GRADE_SHIPPING = {
  EXPLORER: {
    fee: 2,
    freeThreshold: 30,
  },
  PILOT: {
    fee: 1,
    freeThreshold: 30,
  },
  COMMANDER: {
    fee: 0,
    freeThreshold: 0, // 무조건 무료
  },
} as const;

// 등급 타입 정의
export type GradeType = 'EXPLORER' | 'PILOT' | 'COMMANDER';

// 포인트 관련 등급 타입
type GradePoint = {
  type: GradeType;
  minPoint: number;
};

// 배송 관련 등급 타입
type GradeShipping = {
  type: GradeType;
  shippingFee: number;
  freeShippingThreshold: number;
};

// 등급별 포인트 데이터
const gradePointData: Record<GradeType, GradePoint> = {
  EXPLORER: {
    type: 'EXPLORER',
    minPoint: GRADE_POINTS.EXPLORER,
  },
  PILOT: {
    type: 'PILOT',
    minPoint: GRADE_POINTS.PILOT,
  },
  COMMANDER: {
    type: 'COMMANDER',
    minPoint: GRADE_POINTS.COMMANDER,
  },
};

export const gradePointList = [gradePointData.EXPLORER, gradePointData.PILOT, gradePointData.COMMANDER];

// 등급별 배송 데이터
const gradeShippingData: Record<GradeType, GradeShipping> = {
  EXPLORER: {
    type: 'EXPLORER',
    shippingFee: GRADE_SHIPPING.EXPLORER.fee,
    freeShippingThreshold: GRADE_SHIPPING.EXPLORER.freeThreshold,
  },
  PILOT: {
    type: 'PILOT',
    shippingFee: GRADE_SHIPPING.PILOT.fee,
    freeShippingThreshold: GRADE_SHIPPING.PILOT.freeThreshold,
  },
  COMMANDER: {
    type: 'COMMANDER',
    shippingFee: GRADE_SHIPPING.COMMANDER.fee,
    freeShippingThreshold: GRADE_SHIPPING.COMMANDER.freeThreshold,
  },
};

export const gradeShippingList = [gradeShippingData.EXPLORER, gradeShippingData.PILOT, gradeShippingData.COMMANDER];

type User = {
  id: number;
  name: string;
  email: string;
  point: number;
  grade: GradeType;
  wishList: Product[];
};

export const user: User = {
  id: 10111,
  name: '김철수',
  email: 'kim@gmail.com',
  point: 3,
  grade: 'EXPLORER',
  wishList: [],
};
