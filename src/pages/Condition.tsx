import React from 'react';

function IfElse() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  let content;
  if (isLoggedIn) {
    content = <div>환영합니다, 사용자님!</div>;
  } else {
    content = <div>로그인 해주세요.</div>;
  }

  return (
    <div>
      IfElse Component
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      {content}
    </div>
  );
}

function Ternary() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      삼향연산자 Component
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      {isLoggedIn ? <p>환영합니다, 사용자님!</p> : <p>로그인 해주세요.</p>}
    </div>
  );
}

export default function Condition() {
  return (
    <div>
      <h1>Condition Page</h1>
      <IfElse />
      <Ternary />
    </div>
  );
}
