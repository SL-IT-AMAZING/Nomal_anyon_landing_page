# 📸 스크린샷 교체 가이드

랜딩페이지의 플레이스홀더를 실제 제품 스크린샷으로 교체하는 방법입니다.

## 📁 스크린샷 저장 위치

모든 스크린샷은 다음 폴더에 저장하세요:
```
landing-page-backup/public/screenshots/
```

## 🎯 필요한 스크린샷 (우선순위 순)

### 1. 메인 대시보드 (Hero Section)
- **파일명**: `dashboard.png` 또는 `hero-screenshot.png`
- **위치**: `src/sections/01-Hero.tsx` (라인 43)
- **크기**: 16:9 비율 (권장: 1920x1080px)
- **설명**: ANYON 앱의 메인 화면, 전체적인 UI를 보여주는 스크린샷

**교체 방법**:
```tsx
// 기존 코드 (라인 43-52)
<div className="aspect-video bg-surface rounded-xl border border-border shadow-2xl overflow-hidden">
  <div className="w-full h-full flex items-center justify-center text-muted">
    {/* 플레이스홀더 */}
  </div>
</div>

// 교체 후
<div className="aspect-video bg-surface rounded-xl border border-border shadow-2xl overflow-hidden">
  <img
    src="/screenshots/dashboard.png"
    alt="ANYON 메인 대시보드"
    className="w-full h-full object-cover"
  />
</div>
```

### 2. AI 대화 인터페이스 (Solution Section)
- **파일명**: `ai-chat.png` 또는 `conversation.png`
- **위치**: `src/sections/05-Solution.tsx` (라인 70)
- **크기**: 16:9 비율
- **설명**: AI와 대화하는 화면, 챗봇 인터페이스

**교체 방법**:
```tsx
// 기존 플레이스홀더를 다음으로 교체
<img
  src="/screenshots/ai-chat.png"
  alt="AI 대화 인터페이스"
  className="w-full h-full object-cover"
/>
```

### 3. Before/After 비교 (Portfolio1 Section)
- **파일명**: `before-after.png`
- **위치**: `src/sections/03-Portfolio1.tsx` (라인 112)
- **크기**: 16:9 비율
- **설명**: 기존 방식 vs ANYON 사용 비교 화면

**교체 방법**:
```tsx
// 기존 플레이스홀더를 다음으로 교체
<img
  src="/screenshots/before-after.png"
  alt="Before/After 비교"
  className="w-full h-full object-cover"
/>
```

## ⚡ 빠른 교체 스크립트

모든 플레이스홀더를 한 번에 찾으려면:
```bash
cd landing-page-backup
grep -r "실제 제품 스크린샷으로 교체 예정" src/
```

## 🎨 스크린샷 최적화 팁

1. **파일 형식**: PNG (투명 배경) 또는 WebP (더 작은 용량)
2. **파일 크기**: 각 이미지 500KB 이하로 압축 (https://tinypng.com/ 사용 권장)
3. **해상도**: Retina 디스플레이를 위해 2배 크기로 저장 (예: 3840x2160px)
4. **다크 테마**: 배경이 어두운 스크린샷이 랜딩페이지 테마와 잘 어울립니다

## 🔄 교체 후 확인

```bash
cd landing-page-backup
npm run dev
```

브라우저에서 http://localhost:5175/ 열어서 이미지가 제대로 표시되는지 확인하세요.

## 📝 추가 개선 사항

스크린샷 교체 후 다음 사항도 고려해보세요:

1. **로딩 최적화**: lazy loading 추가
   ```tsx
   <img loading="lazy" src="..." alt="..." />
   ```

2. **반응형 이미지**: 다양한 화면 크기를 위한 srcset 추가
   ```tsx
   <img
     src="/screenshots/dashboard.png"
     srcset="/screenshots/dashboard-2x.png 2x"
     alt="ANYON 대시보드"
   />
   ```

3. **Alt 텍스트**: 접근성을 위해 의미있는 alt 텍스트 작성

## ❓ 도움이 필요하신가요?

스크린샷 관련 문제가 있으면:
- GitHub Issues에 질문 남기기
- Discord 커뮤니티에서 도움 요청
