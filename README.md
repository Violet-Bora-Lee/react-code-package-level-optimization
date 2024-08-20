# 프론트엔드 성능 최적화 데모

이 저장소는 React 기반 프론트엔드 애플리케이션의 성능 최적화를 시연하기 위해 만들어졌습니다. 다양한 최적화 기법을 적용하여 애플리케이션의 성능을 향상시키는 방법을 각 커밋을 통해 확인해보세요.

- 적용된 기법
  - 동적 라우팅을 이용한 코드 분할(Code Splitting with Dynamic Routing)
    - 커밋: [a789455](https://github.com/Violet-Bora-Lee/react-code-package-level-optimization/commit/a7894559217e086941c8edff3d92c34b30271eb2)
  - `package.json` 최적화(`dependencies`, `devDependencies`)
    - 커밋: [ef2950d](https://github.com/Violet-Bora-Lee/react-code-package-level-optimization/commit/ef2950de888129d9a6b337b0f6167ed89fe2a93c)
  - 트리쉐이킹(Use tree shaking by importing only necessary code)
    - 커밋: [1df2740](https://github.com/Violet-Bora-Lee/react-code-package-level-optimization/commit/1df274004acc9d7356e23e4c813639fd74f1d285)
  - 웹팩 설정으로 JS 파일 압축하기(Webpack configuration for advanced JS minification)
    - 커밋: [7dac277](https://github.com/Violet-Bora-Lee/react-code-package-level-optimization/commit/7dac2771b902b5017e416f9ced44b4f827a9aa5d)
  - 다양한 프리페칭 전략(Implement pre-fetching strategies)
    - 커밋: [f838d69](https://github.com/Violet-Bora-Lee/react-code-package-level-optimization/commit/f838d696501d00e695c040542f8cde26d8a2989b)

![프론트엔드_성능_최적화](https://github.com/Violet-Bora-Lee/react-code-package-level-optimization/blob/3487dae54668cc07951f6796037104fcdde21d00/frontend-performance.gif)

## 시작하기

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)으로 부트스트랩되었습니다.

### 필수 조건

- Node.js (>= 14.x)
- npm (>= 6.x) 또는 yarn (>= 1.x)

### 설치

프로젝트를 클론하고 필요한 패키지를 설치합니다.

```sh
git clone https://github.com/Violet-Bora-Lee/react-code-package-level-optimization.git
cd react-code-package-level-optimization
npm install (또는 yarn install)
```

### 실행

```sh
npm start (또는 yarn start)
```

### 분석 방법
```sh
npm run build:analyze (또는 yarn run build:analyze)
```
