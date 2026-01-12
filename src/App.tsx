//import React, { useState } from 'react';
import React from 'react';

import './App.css';
import { UserInfo } from './UserInfo';
import { MyContext } from './context';
import { PersonInfo } from './PersonInfo';

// state, props, context
function App() {
  // state값은 state 함수를 통해서만 변경해야한다.
  // setState 함수 호출시 해당 컴포넌트가 재랜더링 된다.
  const [name, setName] = React.useState<string>('홍길동');
  const [age, setAge] = React.useState<number>(20);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  };

  return (
    <MyContext.Provider value={{ name, age }}>
      <input
        className="border p-1.5"
        type="text"
        placeholder="이름을 입력하세요."
        onChange={handleNameChange}
      />
      <input
        className="border p-1.5 ml-2"
        type="number"
        placeholder="나이를 입력하세요."
        onChange={handleAgeChange}
      />
      <UserInfo />
      <PersonInfo name={name} age={age} />
    </MyContext.Provider>
  );
}

export default App;
