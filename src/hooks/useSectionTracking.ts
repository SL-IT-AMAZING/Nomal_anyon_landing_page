import { useEffect, useRef, useCallback } from 'react';
import { trackSectionView, trackSectionDuration } from './useAnalytics';

interface SectionTiming {
  enterTime: number | null;
  totalTime: number;
  hasTrackedView: boolean;
}

/**
 * 섹션별 체류 시간 트래킹 훅
 * Intersection Observer를 사용해 섹션 진입/이탈 시간을 측정
 */
export function useSectionTracking(sectionIds: string[]) {
  const timingsRef = useRef<Map<string, SectionTiming>>(new Map());

  // 초기화
  useEffect(() => {
    sectionIds.forEach((id) => {
      if (!timingsRef.current.has(id)) {
        timingsRef.current.set(id, {
          enterTime: null,
          totalTime: 0,
          hasTrackedView: false,
        });
      }
    });
  }, [sectionIds]);

  // 섹션 진입 처리
  const handleSectionEnter = useCallback((sectionId: string) => {
    const timing = timingsRef.current.get(sectionId);
    if (timing) {
      timing.enterTime = Date.now();

      // 첫 진입 시 section_view 이벤트 발송
      if (!timing.hasTrackedView) {
        trackSectionView(sectionId);
        timing.hasTrackedView = true;
      }
    }
  }, []);

  // 섹션 이탈 처리
  const handleSectionLeave = useCallback((sectionId: string) => {
    const timing = timingsRef.current.get(sectionId);
    if (timing && timing.enterTime) {
      const duration = Date.now() - timing.enterTime;
      timing.totalTime += duration;
      timing.enterTime = null;

      // 1초 이상 체류한 경우에만 트래킹
      if (duration >= 1000) {
        trackSectionDuration(sectionId, duration);
      }
    }
  }, []);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (!sectionId) return;

          if (entry.isIntersecting) {
            handleSectionEnter(sectionId);
          } else {
            handleSectionLeave(sectionId);
          }
        });
      },
      {
        threshold: 0.3, // 30% 이상 보여야 진입으로 처리
      }
    );

    // 섹션 요소들 관찰 시작
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // 페이지 이탈 시 현재 보고 있는 섹션의 체류 시간 전송
    const handleBeforeUnload = () => {
      timingsRef.current.forEach((timing, sectionId) => {
        if (timing.enterTime) {
          const duration = Date.now() - timing.enterTime;
          if (duration >= 1000) {
            trackSectionDuration(sectionId, duration);
          }
        }
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      observer.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [sectionIds, handleSectionEnter, handleSectionLeave]);
}
