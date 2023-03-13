## Commit Message Guideline

첫 라인은 50자 이내이며 아래와 같은 prefix로 구분한다.

- feat: 새로운 기능 추가
- fix: 오류 수정
- docs: 코딩 컨벤션, 스타일 작업
- refactor: 코드 리팩토링
- perf : 성능 개선
- test: 테스팅 코드추가, 테스팅 수정
- build : 빌드 시스템 변경, 모듈 설치 또는 삭제
- ci : CI 설정 작업
- chore : 소스코드나 테스트파일을 수정하지 않은 작업
- revert : 이전 작업 취소
- style: 코드변화없이 포멧팅 및 세미콜론 등의 변화로 인한 작업

추가 설명 필요시 라인당 70자 이내로 작성한다.

## Project Structure

```

📦 public               ------------------- 어플리케이션에 사용되는 정적파일들
 ┃
📦 src
 ┣ 📂 components        ------------------- 레이아웃 및 공통 컴포넌트
 ┃ ┣ 📂 Component1
 ┃ ┣ 📂 Component2
 ┃ ┣ 📂 Component3
 ┣ 📂 consts            ------------------- 각종 상수관련 const 파일
 ┣ 📂 core              ------------------- 각종 핵심 파일 ? ( NativeBridge 나 중요 핵심? )
 ┣ 📂 hooks             ------------------- 각종 Custom Hooks 파일
 ┣ 📂 interfaces        ------------------- Data Interfaces
 ┃ ┣ 📜 interfaceTypes.ts
 ┃ ┗ 📜 Weverse.d.ts
 ┣ 📂 pages             ------------------- 각 페이지 담당(Dynamic Route)
 ┃ ┣ 📜 _app.tsx
 ┃ ┣ 📜 _document.tsx
 ┃ ┗ 📜 index.tx
 ┃ ┗ 📂 Page1
 ┃   📜 index.tsx
 ┃ ┗ 📂 Page2
 ┃   📜 index.tsx
 ┣ 📂 store             ------------------- 상태관리 관련
 ┃ ┣ 📜 xxx.ts
 ┃ ┣ 📜 yyy.ts
 ┃ ┗ 📜 index.ts
 ┗ 📂 utils             ------------------- 각 컴포넌트에서 사용되는 유틸 함수
 📦 styles
📜 .babelrc             ------------------- babel 관련
📜 .eslintrc            ------------------- eslint
📜 .nvmrc               ------------------- node 버전 관리를 위한 파일
📜 .prettierrc          ------------------- prettier
📜 .prettierignore      ------------------- prettier ignore
📜 tsconfig.json        ------------------- tsconfig
```

## prittier 관련 Tips

- 설정해놓은 prittier 현재폴더 지정해서 한번에 적용 시키는 방법

  적용시킬 폴더로 경로 이동 후 아래 명령어 실행 ( 이동하지않고 --write 뒤에 폴더 경로 설정해도 가능 )

```bash
npx prettier --write .
```

````

## (참고문서 - 공유된 notion 확인 )

-   eslint --init 관련 설정 (eslint --init 으로 eslint 생성)
-   typescript-eslint Rule 관련 정의

## msw 관련 초기 세팅시 아래 명령어를 통해 public/mockServiceWorker.js 생성

```bash
npx msw init public/ — save
````
