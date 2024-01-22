# 공통 프로젝트

## 2주차 회고
### 김성재
- 기능 명세서 및 ERD 구상

### 안성재
- 주제 픽스 및 ERD 작성

### 윤정인
- 사용자의 니즈에 맞춰 서비스를 기획하는 법을 배운 한 주였습니다. ERD와 API를 빨리 완성해서 개발에 착수해야겠습니다.

### 조연주
- 와이어 프레임 설계, UX를 고려하여 화면 구성
- 컴포넌트 구조 설계

### 유호정
- 한 주간 주제 픽스 후 기획서를 작성하고 와이어 프레임을 설계하였다.
- 다음 단계인 자세한 목업설계와 소셜로그인 구현을 위해 figma와 react학습을 진행할 것이다.

### 이서윤
- 우리의 성과
    - 와이드 프레임 완료
- 개선할 사항
    - 백과 프론트 사이의 연결에 대한 이해 부족
- 배운 점
    - 컨설턴트님의 피드백으로 아이디어 계획에 있어서 중요점이 뭔지 깨닫게 되었다.
- 다음 단계
    - 소셜로그인 구현 및 화면 디자인
- 칭찬하기
    - 기나긴 아이디어 회의로 지쳤을텐데 다들 끝까지 에너지 넘치게 참여해서 칭찬합니다.

## 🎁 아이템 소개

# 제목: 판도라의 숲

## 개요

- *"우리의 호기심을 공유하고, 공감하는 마음으로 서로를 이해할 때, 진정한 소통이 시작된다." - John C. Maxwell*
- *"모든 이야기에는 **듣는 이의 귀**와 **말하는 이의 입**이 필요하다." - Karl Barth
  그 귀와 입들이 모이는 곳, 판도라의 숲.*
- 남에게는 직접적으로 말하지 못하지만, 누군가에게는 말하고싶은 사람들의 표현 욕구를 충족시키는 서비스
- 타인의 생각과 생활에 대해 알고싶은 사람들의 니즈도 동시에 충족 가능

## 배경

- 사람들마다 각기 다른 고민을 가지고 있고, 다른 이들의 고민 또한 궁금증을 가지고 있음.
  - 궁금증을 증폭시키기 위해 익명 요소를 도입.
- 익명 사연함에 대한 수요가 있음.

## 목표
- 자신의 이야기를 공유하고, 공감과 교류를 통해 지친 일상에 위로를 얻을 수 있는 플랫폼
- 지친사람들의 일상 속 휴식처가 되는 공간 만들기
- 자신의 이야기를 풀어내고, 타인의 이야기를 열어보며 인간의 이야기 욕구 충족
- 대화 과정에서 공감과 교류를 통해 지친 일상에 위로를 얻음
- 현실에서 풀어내지 못한 이야기가 가슴 속에 쌓여가는 문제해결
- 타인의 삶에 대한 궁금증을 해소할 마땅한 소통 창구의 결여 문제해결

## 대상(페르소나)
- 자신의 이야기를 공유하고 공감받고 싶어하는 사용자
- 다른 이의 이야기가 궁금한 사용자
- 주변 사람들에게 알리지 않고 익명으로 고민을 상담하고 싶은 사용자

## 메인기능
-‘사연함’을 만들어서 사람들의 이야기를 익명으로 제보받기(게시글 작성)
    - 게시글 작성시 태그
- 릴스/쇼츠 형식으로 무한 스크롤 해서 사용자들에게 보여주기
    - 각 게시글에는 공감, 비공감, 채팅방 조인, 댓글, 보관
- 게시글 별 1:1 or 1:N 채팅방 개설
    - 채팅방 조인 이모지 누르면 `**N명이 더 조인하면 채팅방이 시작돼요!!**` 멘트
    - 일정 개수 이상의 좋아요가 달리면 사연자가 실시간 채팅방을 개설된다
        - 채팅방은 **24시간** 후에 사라짐.
        - 채팅방 리스트를 띄워서 자유롭게 나머지 유저가 참여할 수 있게 한다
        - 채팅방 정렬 기능
- 활동 점수제도
    - 씨앗에서 나무로 티어제도?
    - 프로필 뱃지

## 부가기능
- 관심 글 보기
    - 내가 댓글 단 글 골라보기
    - 내가 보관한 글 골라보기
- 게시글에 투표 기능
- 내 일기 작성 후 보관
    - 나만보기 기능
- 게시글 내 친구들에게 공유하기 기능
- 컬러를 사용해서 글 작성
- 게시글 작성시의 감정을 적을 수 있게하기
- 고민글을 잘 들어줘요
    - 댓글에 대한 좋아요
    - 다른 댓글러들도 달 수 있음.
    - 프로필 옆에 뱃지 형식으로
- 스푼처럼 음성으로 대화하면 댓글 다는 느낌
    - https://help.twitter.com/ko/using-x/spaces 트위터 스페이스같은 기능도 괜찮을듯 단체 음성통화 및 청취
- 영상통화 기능
    - https://mediapipe-studio.webapps.google.com/home

## 차별성
- 쇼츠 형식을 통해 다양한 랜덤의 사연을 받아 볼 수 있다
    - 빠르게 다양한 소식을 확인
- 사연에 관심이 있는 사람들과 익명채팅을 할 수 있다
- 24시간 후 사라지는 채팅
    - 계속해서 대화해야 한다는 부담감 감소
    - 일정 시간 동안만 채팅을 할 수 있기 때문에, 보다 적극적으로 참여하게 됨

## 기대효과
- 자신의 이야기에 대해 타인의 반응을 확인하고 채팅방을 통해 부가적인 대화를 나눈다면 감정 표현 욕구를 충족시킬 수 있을 것이다.
- 자신의 일상을 공유하고 공감받으며 소통의 욕구를 채울 수 있을 것이다.


## ❓ 아이디어 구상

### 김성재
- 주제: 느린 영상 우체통
- 서비스 구상
  - 현재를 인식하는 순간, 과거가 되어버린다.
  - 한 달 후, 혹은 일 년 후의 나에게 영상편지를 전송하여 흘러가버린 과거를 되짚어보자
  - 그 시절의 나와 지금의 나는 어떻게 달라져있을까?
- 예상되는 어려움: 영상을 촬영하고 미래에 영상이 도착할 때까지의 호흡이 길어 리텐션 유지가 어렵다.

### 조연주
- 주제: 편지로 소통하는 숲 컨셉의 온라인 커뮤니티 사이트
- 서비스 구상
  - 숲: 배경, 관심사가 같은 사람들과 같은 그룹에 소속된다.
  - 우체통: 다른 사람들과 편지를 주고 받을 수 있다.
  - 나의 동물: 출석 체크, 데일리 미션, 편지 쓰기 활동 등을 통해 키울 수 있다.
- 피드백
  - 초점을 맞추기 → 친구들+익명 합쳐진 서비스는 없음
  - 인스턴트한 느낌
  - 집단을 어떻게 할 것인가에 대한 생각을 잡으면 좋을 듯
  - 사연만 있을지 사연과 채팅을 같이 가져갈지에 대한 고민이 필요
    - 실험 검증 필요(채팅이 있을 때 리텐션이 더 좋을지 아닐지)

### 윤정인
- 주제: 모두의 우체통
- 서비스 구상
  - 편지를 쓰고, 남이 쓴 편지도 읽어볼 수 있는 서비스
  - 가벼운 사연을 받아 게시판에 게시한 후, 24시간 후 펑한다
  - 성향이 비슷한 사람(키워드가 비슷한 사람들끼리) 실시간 채팅방에서 열어 얘기할 수 있다

## 피드백
- 게시판 형태가 아닌 쇼츠처럼 넘길 수 있는 형태로 만들면 리텐션이 좋을듯
    - 쓰레드랑 비슷하게 쭉쭉 넘기다가 내가 원하는 토픽이 나오면 들어가서 대화를 한다던가, 글을 쓴다던가 하는 장치를 만들면 재밌을 것 같다
- 웹앱 형태를 베이스로
    - 건전한 건 게시판 형태이지만, 사람들의 반응은 쇼츠가 크다

### 이서윤
- 주제: 관심사나 취미, 취향이 비슷한 익명의 누군가와 편지를 주고받는 플랫폼
- 서비스 구상
    - 인스턴트 메세지의 시대 속에 지친 사람들을 위한 느리지만, 의미있는 의사소통 
    - 편지 작성 후 나를 나타내는 키워드 표시
    - 처음엔 1:N의 형식으로 뿌리고 마음에 들면 1:1로 편지 교환
    - 우편을 받은 유저는 키워드만을 보고 우편을 볼 지 안 볼 지 결정
        - 안보기로 결정=토스기능
    - 편지 주고 받을 때 처음엔 느리게 하다가 친밀도 높아지면 주고 받는 속도 빨라지게
        - 친밀도를 1:1 사이에서도 높일 수 있지만 광고를 본다던가 편지를 더 쓴다던가 하는 외부의 행위로 높일 수도 있게
        - 처음에는 글로만 주고받다가 친밀도 높아지면 사진 공유까지 가능해지게
        - 친밀도 다다르면 음성통화, 영상통화도 가능하게
    - 골라둔 키워드랑 비슷하게 선택한 유저 몇 명의 우체통에 편지가 배송되는 형식(약간 해리포터 부엉이처럼)
    - 편지를 주고 받는 사람이 나에 대한 키워드를 정의해주면 기존 키워드에 추가하는 방식도 고려..→ LIKE랑 유사
    - 친밀도를 알이나 성장형으로 시각화할 수 있는 아이콘(or 게이지)으로 나타내도 좋을듯
- 피드백
    - 서로 허용해줄 수 있는 친구 단계를 설정하는 것이 재밌음

### 유호정
- 주제: 익명의 편지를 주고 받으며 관심사가 비슷한 사람과 대화할 수 있는 플랫폼
- 서비스 구상
    - 자신을 드러내지 않고도 관심사가 비슷한 사람이면 의견을 나누며 편지를 주고 받을 수 있다
    - 자신의 관심사와 비슷한 내용을 담은 편지를 랜덤으로 뽑거나 받아볼 수 있다.
    - 편지지를 꾸며서 익명으로 편지를 보낼 수 있다
    - 우정레벨이 높아지면 더욱 빠른 속도로 편지를 주고받을 수 있다
    - 우정레벨이 높아질수록 채팅, 전화, 영상통화 기능을 사용할 수 있다
    - 미래의 나에게 편지를 보낼 수 있다
**피드백**
- 쇼츠처럼 넘길 수 있는 형식으로 가면 좋을듯
- 어느정도 익명성을 기대서 볼 수 있도록
- 원하는 토픽이나오면 채팅으로 대화를 한다거나 장치를 만드면 재밌을듯

## ⚠️ commit 컨벤션

- "{태그}: {커밋 메세지}" 형태로 작성

### 💡 예시

`feat: 로그인 기능 구현`<br/>
`fix: 버그 수정`
<br/>
<br/>

| 태그     | 설명                                  |
| -------- | :------------------------------------ |
| feat     | 새로운 기능 추가                      |
| fix      | 버그 수정                             |
| refactor | 코드 리팩토링                         |
| comment  | 주석 추가(코드 변경 X) 혹은 오타 수정 |
| docs     | README와 같은 문서 수정               |
| merge    | merge                                 |
| rename   | 파일, 폴더명 수정 혹은 이동           |
