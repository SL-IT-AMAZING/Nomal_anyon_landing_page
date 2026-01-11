/**
 * GA4 이벤트 트래킹 훅
 */

type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
};

/**
 * GA4 이벤트 전송
 */
export const trackEvent = (
  action: string,
  params?: GtagEventParams
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

/**
 * 버튼 클릭 트래킹
 */
export const trackButtonClick = (buttonName: string): void => {
  trackEvent('click', {
    event_category: 'button',
    event_label: buttonName,
  });
};

/**
 * 폼 제출 트래킹
 */
export const trackFormSubmit = (formName: string): void => {
  trackEvent('form_submit', {
    event_category: 'form',
    event_label: formName,
  });
};

/**
 * 네비게이션 링크 클릭 트래킹
 */
export const trackNavClick = (linkName: string): void => {
  trackEvent('click', {
    event_category: 'navigation',
    event_label: linkName,
  });
};

/**
 * 외부 링크 클릭 트래킹
 */
export const trackOutboundClick = (url: string): void => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: url,
  });
};

/**
 * FAQ 아코디언 열기/닫기 트래킹
 */
export const trackFaqToggle = (question: string, isOpen: boolean): void => {
  trackEvent('faq_toggle', {
    event_category: 'faq',
    event_label: question,
    value: isOpen ? 1 : 0,
  });
};

/**
 * 언어 변경 트래킹
 */
export const trackLanguageChange = (language: string): void => {
  trackEvent('language_change', {
    event_category: 'settings',
    event_label: language,
  });
};

/**
 * 가격 플랜 클릭 트래킹
 */
export const trackPricingClick = (planName: string): void => {
  trackEvent('click', {
    event_category: 'pricing',
    event_label: planName,
  });
};

/**
 * 데모 카드 클릭 트래킹
 */
export const trackDemoCardClick = (cardName: string): void => {
  trackEvent('click', {
    event_category: 'demo',
    event_label: cardName,
  });
};

/**
 * 비디오 재생 트래킹
 */
export const trackVideoPlay = (videoName: string): void => {
  trackEvent('video_start', {
    event_category: 'video',
    event_label: videoName,
  });
};

/**
 * 페이지 뷰 트래킹 (SPA용)
 */
export const trackPageView = (pagePath: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-KBFPGV277J', {
      page_path: pagePath,
    });
  }
};

/**
 * 섹션 진입 트래킹
 */
export const trackSectionView = (sectionName: string): void => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
  });
};

/**
 * 섹션 체류 시간 트래킹
 */
export const trackSectionDuration = (sectionName: string, durationMs: number): void => {
  const durationSeconds = Math.round(durationMs / 1000);
  trackEvent('section_duration', {
    event_category: 'engagement',
    event_label: sectionName,
    value: durationSeconds,
  });
};
