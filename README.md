<div align="center">

![logo](assets/pandoraLogo.png)
<h4> 누구나 부담없이 사용하는 익명 글 공유 서비스 </h4>
<h3> 판도라의 숲 </h3>
</div>

## ✅ 프로젝트 진행 기간

### 2024.01.08 ~ 2024.04.16(6주)

## **✅ 프로젝트 소개**

**🚩 서비스 한줄 소개**

`익명 글 공유 서비스
"개시글을 작성할 때 마다 랜덤닉네임 부여, 팔로워/팔로잉을 신경쓰지 않아 부담없는 글 공유 SNS 서비스 '판도라의 숲'"`

**🚩 기획 배경**

- 자신의 사소하고 비밀스러운 이야기를 공유하고 공감받고 싶어하는 사용자가 많지만  기존의 SNS는 고정된 닉네임을 사용하거나 주변 사람들과 ID를 공유하며 사용하기 때문에 완벽한 익명성을 보장하기 힘들다고 생각했습니다.
- 또한 기존의 SNS는 자신의 팔로우 하는 사람이 많을수록 소통이 더 잘 이루어지고, 해당 플랫폼에 영향을 많이 끼치고 있습니다.
- 따라서 저희는 자신의 이야기를 공유하고 공감받고 싶어하는 사용자가 부담없이 사용할 수 있도록 글 마다 랜덤닉네임을 부여하고 팔로우/팔로워가 없는 글 공유 플렛폼을 만들고자 합니다.

**🚩 기술 스택**
|  | skills |
| --- | --- |
| Backend | <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> |
| Frontend | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/redux--toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white"/> |
| Infra | <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white"> |
| 협업 툴 | <img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white"> <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white"> |
| 디자인 | <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> |



## **✅ 프로젝트 설명 및 특장점**


- 공유하고 싶은 글을 원하는 사진과 함께 공유할 수 있고, 공유된 글과 사진들을 숏츠형식으로 편하게 확인할 수 있습니다.
- 원하는 게시글에 좋아요와 댓글, 대댓글을 달 수 있습니다.
- 마음에 드는 게시글을 보관 버튼을 통해 보관하고 마이페이지에서 보관한 글을 다시 확인할 수 있습니다.
- 글을 작성하던 도중 임시저장을 할 수 있으며 다음에 다시 작성하고 싶을때 임시저장글을 불러와 다시 작성할 수 있습니다.
- 게시글을 작성할 때 마다 새로운 닉네임이 랜덤으로 부여되며, 댓글 또한 게시글 별로 랜덤 닉네임이 부여됩니다.
- 마이페이지에서 보관한 글과 내가 작성한 글을 확인할 수 있습니다.
- 내 글에 좋아요, 댓글, 대댓글이 달렸을 때 알림을 받을 수 있습니다.


**🚩 프로젝트 확장성**

판도라의 숲을 더욱 개선된 서비스로 발전시키기 위해 두 가지 확장성 또한 고려할 수 있습니다.

- 쇼츠 알고리즘 개선
    - 사용자가 증가하게 되면 사용자가 주로 관심있어 하는 글의 데이터를 수집하고 분석하여 알고리즘을 개선한다면 맞춤 컨텐츠 제공이 가능합니다.
- 성별 또는 연령대 별 게시판 생성
    - 성별 또는 연령대 정보를 수집해 해당 성별 또는 연령대의 사용자들이 작성한 게시글을 볼 수 있도록 함으로써 사용자가 더 관심 가질만한 게시글을 확인할 수 있습니다.


## ✅ 산출물

<details>
<summary> ERD </summary>
<div>

![ERD](assets/ERD.PNG)

</div>
</details>
<details>
<summary> 시스템 아키텍처 </summary>
<div>

<img width="921" alt="시스템 아키텍처" src="https://github.com/NavyHubb/StudyInitiator/assets/101810007/35cfecf5-eb26-48fd-a921-85b14c16334a">

![시스템아키텍처](assets/SystemArchitecture.png)

</div>
</details>
<details>
<summary> 기능 명세서</summary>
<div>

![기능명세서](assets/FunctionalSpecification.jpg)

</div>
</details>
<details>
<summary> 와이어 프레임 </summary>
<div>

[와이어 프레임 링크](https://www.figma.com/design/4yc4GtoT9B4qryWfcK7Scu/%ED%8C%90%EB%8F%84%EB%9D%BC%EC%9D%98-%EC%88%B2?node-id=0-1)

</div>
</details>
<details>
<summary> API 명세서</summary>
<div>

[API 명세서 링크](https://pumped-square-544.notion.site/API-deac3f36a1ad4c68ac427c155cb63c1e)

</div>
</details>


## ✅ 기능 소개

### 1. 회원가입 및 로그인 🧑👩

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/login.GIF"  width="300"/> |**회원가입 없이 게시글 조회**   <br><br> - 회원가입 없이도 게시글을 구경 할 수 있다.<br>- 댓글, 좋아요, 보관 기능을 사용하기 위해서는 로그인이 필요하다.<br><br><br><br> **로그인** <br><br>- 카카오 로그인 API를 이용한다.<br>- 첫 로그인을 하면 자동으로 회원가입이 되며 이후 로그아웃 또는 회원탈퇴가 가능하다.|


### 2. 게시글 조회, 좋아요, 보관하기 📄

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/save.GIF"  width="300"/> |**게시글 조회**   <br><br> - 무한스크롤을 통한 숏츠 형식으로 게시글이  조회된다.<br>- 게시글 내용, 사진, 프로필사진, 닉네임, 작성일자, 보관유무, 좋아요 유무, 좋아요 개수, 댓글 개수 등을 알 수 있다.<br>- 게시글의 오른쪽 위 사진확대 아이콘을 클릭하면 함께 등록된 사진들을 확인할 수 있다.<br><br><br><br> **게시글 좋아요**   <br><br> - 공감 가는 게시글은 좋아요 버튼을 통해 좋아요 수를 증가시킬 수 있다.<br><br><br><br> **게시글 보관**  <br><br> - 마음에 드는 게시글은 책갈피 버튼을 클릭해 보관할 수 있다.<br>- 보관된 게시글은 마이페이지에서 확인할 수 있다.|


### 3. 게시글 등록, 수정, 삭제, 임시저장

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/writing.GIF"  width="300"/> |**게시글 등록**   <br><br> -글 내용 및 이미지를 등록할 수 있다.<br>- 이미지는 최대5장까지 가능하며 글은 500자로 제한되어있다.<br>- 게시글을 등록할 때 마다 새로운 닉네임과 프로필 사진이 랜덤으로 배정된다.<br><br><br><br> **게시글 수정**   <br><br> - 자신이 작성한 글을 수정할 수 있다.<br>- 글은 500자로 제한되어있다.<br><br><br><br> **게시글 삭제**  <br><br>- 자신이 작성한 글을 삭제할 수 있다.<br><br><br><br> **게시글 임시저장**  <br><br> - 작성하던 게시글을 임시저장 하고 원할때 다시 불러와 작성할 수있다.<br> - 이미지도 함께 임시저장 할 수 있다.|


### 4. 칵테일 검색

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/검색1.gif"  width="300"/> |**키워드 검색**   <br><br> - 기본 화면은 좋아요 많은 순의 칵테일 리스트 제공한다.<br>- 찾고자 하는 칵테일 이름 검색을 통한 칵테일 검색할 수 있다.|
| <img src="assets/검색2.gif"  width="300"/> |**옵션 검색**   <br><br> - 도수/단맛/신맛/쓴맛/탄산감 설정을 통한 범위 내 칵테일을 필터링 해준다.|


### 5. 칵테일 상세 및 리뷰작성하기

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/칵테일상세.gif"  width="300"/> |**칵테일 상세**   <br><br> - 칵테일의 이름, 사진, 아이콘과 오각형 그래프를 통해 칵테일의 도수, 맛, 탄산감정보과 칵테일 설명, 칵테일 재료정보 제공한다.<br>- 해당 칵테일을 판매하고 있는 유성구의 칵테일바 리스트를 소개한다.|
| <img src="assets/칵테일리뷰.gif"  width="300"/> |**칵테일 리뷰**   <br><br> - 사용자는 개인이 느낀 칵테일의 맛(쓴맛, 신맛, 탄산, 단맛)을 기록하고 별점과 한줄평가를 남길 수 있다.<br>- 초기의 맛 세팅은 칵테일의 기본 맛 정보를 기준으로 세팅되어 있다.<br>- 별점은 1개부터 5개 까지 남길 수 있다.<br>- 한줄 평가와 별점을 적지 않을 경우 리뷰를 남길 수 없다.<br>자신이 쓴 리뷰만 삭제 가능하다.|


### 6. 주변 칵테일바 조회

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/지도.gif"  width="300"/> |**칵테일바 목록**   <br><br> - 유성구 기준 칵테일바 관련 정보와 위치와 가게의 목록조회를 확인할 수 있다.<br>- 지도에서 칵테일바에 해당하는 마커를 선택하면 해당 칵테일바로 바로 갈수 있게 스크롤이 내려간다.<br><br><br><br><br>**칵테일바 상세**   <br><br> - 특정 칵테일바를 선택하면 칵테일바의 상세정보를 확인 할 수 있다.<br>- 칵테일바의 위치, 이름, 주소, 영업시간 정보와 칵테일바에서 판매하는 칵테일메뉴와 가격, 시그니처 칵테일 정보를 제공한다.|


### 7. 캘린더

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/달력.gif"  width="300"/> |**월별기록**  <br><br> - 사용자가 추천받은 칵테일을 월별로 확인할 수 있다.<br>- 각각의 날짜에 있는 칵테일은 사용자가 추천받은 칵테일이고, 날짜의 테두리는 그날의 감정색을 나타낸다.<br>- <와 > 를 눌러 월이동을 할 수 있다.<br><br><br><br><br> **일별기록**   <br><br> - 월별기록에서 기록이 존재하는 특정날짜를 클릭하면 해당날짜에 추천받은 칵테일을 확인할 수 있다.<br>- 상단에서 칵테일의 설명과 칵테일의 맛정보를 확인하고, 하단에서 그날의 감정이 일기형식으로 적혀진 것을 확인 할 수 있다.|


### 8. 마이페이지

| GIF | 설명 |
| :---: | :--- |
| <img src="assets/설정페이지.gif"  width="300"/> |**설정페이지**   <br><br> - 프로필 변경을 원할 때 원하는 사진으로 프로필 사진을 바꿀 수 있다.<br>- 닉네임을 원하는 이름으로 변경할 수 있다.<br>- 비밀번호 변경을 통해 보안을 강화할 수 있다.|
| <img src="assets/나의취향.gif"  width="300"/> |**나의 취향**   <br><br> - 첫 회원가입 시 설정한 취향정보를 확인할 수 있다.<br>- 취향을 수정하고 싶은 경우 취향 변경 탭을 통해 나의 취향을 변경할 수 있다.<br>- 취향 칵테일 보러가기에서 나의 취향과 비슷한 취향을 가진 사용자들이 좋아하는 칵테일을 추천한다.|
| <img src="assets/내가마신칵테일.gif"  width="300"/> |**내가 마신 칵테일**   <br><br> - 리뷰를 남긴 칵테일의 리스트를 제공한다. 리스트는 별점 높은 순, 낮은 순, 최신 날짜 순, 오래된 날짜 순으로 정렬할 수 있다.<br>- 칵테일마다 칵테일 아이콘, 이름, 설명정보와 칵테일 별 내가 적은 리뷰 리스트를 확인할 수 있다.|
| <img src="assets/좋아요한칵테일.gif"  width="300"/> |**좋아요한 칵테일**   <br><br> - 좋아요를 누른 칵테일의 아이콘과 칵테일 이름 리스트를 제공한다.<br>- 칵테일 아이콘을 누르면 칵테일 상세정보 페이지를 확인할 수 있다.|
| <img src="assets/마이페이지.gif"  width="300"/> |**기분 통계 / 로그아웃**   <br><br> - 오늘의 칵테일을 추천 받으며 선택한 기분을 취합한 값을 매 월 원형 그래프로 시각화 한다.<br>- 매 월 각 기분이 몇 번 선택되었는지 확인할 수 있다.<br>- 로그아웃 버튼을 통해 로그아웃을 진행할 수 있다.|


## ✅ 멤버 소개

| 고은석 | 최준호 | 서만기 |
| --- | --- | --- |
| <img src=assets/kim.jpg" width="200"/> | <img src="assets/an.jpg" width="200"/> | <img src="assets/yoon.jpg" width="200"/> |
| - k8s를 이용한 인프라 구축<br>- CI/CD 파이프라인 설계<br>- 실시간 모니터링 시스템 구축 | - 대화 알고리즘 <br>- UI/UX 디자인 개발<br>- API 연결 | - 프로젝트 디자인<br>- asset 일러스트 작업<br>- API 연결 |
| 최소영 | 심규리 | 유호정 |
| <img src="assets/jo.jpg" width="200"/> | <img src="assets/lee.jpg" width="200"/> | <img src="assets/yoo.PNG" width="200"/> |
| - Light FM 사용 추천 알고리즘 구현<br>- 회원 API 구현 및 보안 설계<br>- Fast API 파이썬 서버 설계 | - API 명세서, ERD 작성<br>- 다이어리, 스토어, 메뉴, 리뷰 API 구현<br>- 전체 API 기능 테스트 및 버그 수정 | - 기능 명세서, ERD 작성<br>- 칵테일, 이미지, 좋아요 API 구현<br>- amazon S3 파일 업로드 구현 |


