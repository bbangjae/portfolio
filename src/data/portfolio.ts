import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  navigation: {
    logo: "Young Jae",
    logoAccent: "_",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Tech", href: "#Tech" },
      { label: "Education", href: "#education" },
      {
        label: "Blog",
        href: "https://a-steady-byun.tistory.com/",
        external: true,
      },
      {
        iconClass: "fab fa-github",
        href: "https://github.com/bbangjae",
        external: true,
        noUnderline: true,
      },
    ],
  },

  hero: {
    intro: {
      text: "안녕하세요 👋",
      link: { label: "변영재", href: "https://github.com/bbangjae" },
    },
    subtitle: "오늘도 성장하는 개발자 ",
    achievements: [
      {
        label: "Proactive",
        href: "https://raw.githubusercontent.com/wnghdcjfe/wnghdcjfe.github.io/master/4percent.JPG",
        suffix: "주도적 해결",
      },
      {
        label: "Team-Driven",
        href: "https://github.com/mochajs/mocha/graphs/contributors",
        suffix: "협업 중심",
      },
      {
        label: "Problem Solving",
        href: "https://solved.ac/profile/zagabi",
        suffix: "근본 해결",
      },
    ],
  },

  projects: [
    {
      title: "rush deal",
      description: "대규모 트래픽 처리를 고려한 마이크로서비스 아키텍처 기반의 커머스 시스템 ",
      techStack: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "Redis", "MySQL", "Docker"],
      implementation: [
        "API Gateway 및 JWT·Redis 기반의 인증 시스템 구축",
        "DDD & 4계층 아키텍처로 관심사를 명확히 분리하여 유지보수성 확보",
        "Write-Behind 설계로 DB 부하를 줄이고 대규모 트래픽 처리 성능 최적화",
        "Kafka & Saga 패턴을 도입하여 MSA 환경의 트랜잭션과 데이터 정합성 보장",
        "Redis 분산 락(Redisson)을 적용해 재고 차감 등 핵심 비즈니스의 동시성 이슈 해결"
      ],
      url: "https://github.com/bbangjae/rush-deal-review",
      backgroundImage: "/imgs/rushdeal.gif",
      backgroundColor: "#0b2a3e",
      featured: true,
    },
    {
      title: "sparta-logistics",
      description: "MSA 기반 물류 관리 시스템",
      techStack: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
      implementation: [
        "Redis Look-aside 캐싱 전략 도입으로 최단 경로 조회 성능 10배 이상 향상 및 정합성 이슈 해결",
        "Dijkstra 알고리즘(O(E log V)구현으로 가중치 기반 최적 경로 탐색 엔진 개발",
        "MSA 환경에서 FeignClient 및 RabbitMQ를 도입하여 서비스 간 결합도를 낮추고 확장성 확보",
        "DDD Value Object 적용: HubCode, Location 등 도메인 개념을 타입으로 표현하여 비즈니스 로직 응집도 향상"
      ],
      url: "https://github.com/bbangjae/sparta-logistics-review",
      backgroundImage: "/imgs/sparta-logistics.gif",
      backgroundColor: "#ed1a44",
    },
    {
      title: "TDD",
      description: "모놀리식 주문 관리 플랫폼",
      techStack: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Github Actions" ],
      implementation: [
        "Spring AOP 기반 포인트 적립/회수 로직 자동화로 비즈니스 로직 결합도를 낮추고 데이터 정합성 확보",
        "QueryDSL 2단계 조회 및 데이터 반정규화를 통해 N+1 문제를 해결하고, 쿼리 발생을 3회로 단축하여 조회 성능 최적화",
        "Mockito 단위 테스트를 통해 Given-When-Then 패턴으로 Service Layer 의존성을 격리하고 비즈니스 로직을 검증",
        "JPA Auditing과 Soft Delete를 적용해 데이터 생성·수정 이력을 자동 추적하고 논리 삭제를 통해 데이터 복구 안정성 강화"
      ],
      url: "https://github.com/bbangjae/tdd-review",
      backgroundImage: "/imgs/tdd.gif",
      backgroundColor: "#000000",
    },
  ],

  about: {
    title: "About",
    paragraphs: [
      "<strong class=\"text-[#2962FF] font-semibold\">클린코드</strong>와 <strong class=\"text-[#2962FF] font-semibold\">지속가능한 코드</strong>를 추구하며, " +
      "<strong class=\"text-[#2962FF] font-semibold\">유지보수성 높은 시스템</strong>을 고민하는 개발자입니다.<br>" +
      "개인의 역할에 머무르기보다, " +
      "<strong class=\"text-[#2962FF] font-semibold\">팀의 목표를 함께 달성하는 것</strong>을 더 중요하게 생각합니다.<br><br>" +

      "모르는 것을 두려워하지 않고 " +
      "<strong class=\"text-[#2962FF] font-semibold\">능동적으로 학습</strong>하며, " +
      "기술 도입의 명확한 이유와 근거를 중요하게 여깁니다.<br>" +
      "문제의 <strong class=\"text-[#2962FF] font-semibold\">근본 원인을 정의</strong>하고, " +
      "그 과정과 <strong class=\"text-[#2962FF] font-semibold\">해결 방안</strong>을 체계적으로 " +
      "<strong class=\"text-[#2962FF] font-semibold\">기록·공유</strong>하는 문화를 지향합니다."

    ],
  },

  tech: {
    title: "Tech",
    categories: [
      {
        label: "Core",
        items:
          "Java / Spring / Spring Boot / Spring Data JPA / MySQL / Redis / AWS / Docker / GitHub Actions",
      },
      {
        label: "Experience",
        items:
          "Kafka / PostgreSQL / Prometheus / Grafana / Node.js / React.js / HTML / CSS / Python",
      },
      {
        label: "ETC",
        items: "Git / Jira / Swagger / Slack",
      },
    ],
  },

  education: {
    title: "Education",
    items: [
      {
        label: "AI를 활용한 백엔드 아키택처 심화 과정(스파르타)",
        detail: "2025.09 ~ 2025.12",
        description:
          "Spring Boot 및 MSA 기반의 대규모 시스템 설계부터 Redis · Kafka를 활용한 고 트래픽 분산 처리 및 운영 역량 확보",
      },
      {
        label: "지능형 웹서비스 풀 스택 개발 9회차(멀티 캠퍼스)",
        detail: "2022.09 ~ 2023.03",
        description:
          "학업과 병행하며 프론트엔드·백엔드 통합 프로젝트를 수행, 실무 중심의 웹 개발 역량 강화",
      },
      {
        label: "WINLAB(무선지능 네트워크 연구실)",
        detail: "2021.11 ~ 2022.02 ",
        description:
          "재학 기간 동안 강화 학습 이론 및 Q-learning  구현을 병행하며, 자기주도적인 기술 탐구 능력과 문제 해결 역량을 확보",
      },
    ],
  },
};
