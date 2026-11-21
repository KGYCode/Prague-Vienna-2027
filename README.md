# Prague & Vienna 2027

[여행 일정 웹사이트](https://kgycode.github.io/Prague-Vienna-2027/) · 2027년 1월 1–8일

[Family-Trip](https://github.com/KGYCode/Family-Trip)의 HTML, CSS, 슬라이드와 지도 구조를 사용한 별도 정적 프로젝트입니다.

## 일정 수정

- `data.js`에서 항공편과 숙소 요약(`cards`), 날짜별 일정(`days`), Overview 타임라인(`overviewTimeline`)을 수정합니다. 날짜·도시를 변경하면 일정과 타임라인을 함께 수정하세요.
- 각 날짜의 `stops` 배열은 방문 순서입니다. `time`과 `desc`에 당일 예상 시각과 체류시간, `mode`와 `minutes`에 이전 장소로부터의 이동을 적습니다. `modes`에는 첫 장소 이후 이동수단 목록을 적습니다.
- `mapQuery`는 Google Maps 검색어입니다. 사진의 `src`와 `credit`은 각각 사진과 저자·라이선스가 표시된 Wikimedia Commons 파일 페이지를 가리킵니다.
- `todos`의 `done`은 처음 방문했을 때의 체크 상태입니다. `id`를 유지하면 사용자가 저장한 체크 상태가 유지됩니다. 사이트 데이터에는 예약번호, 여권, 실명, 이메일, 결제정보를 넣지 마세요.
- `index.html`을 브라우저에서 열어 확인합니다. 지도와 사진은 인터넷 연결이 필요합니다. 임베드가 차단되면 Google Maps 직접 링크를 사용하세요.

## 배포

GitHub 저장소의 **Settings → Pages → Deploy from a branch → main / (root)**를 선택합니다. 이후 main에 커밋하면 Pages가 갱신됩니다. API 키나 빌드 도구는 필요하지 않습니다.
