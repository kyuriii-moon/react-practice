import { MyName } from './MyName';
import { MyAge } from './MyAge';

// interface UserInfo1Props {
//   name: string;
//   age: number;
// }

// export function UserInfo1({ name, age }: UserInfo1Props) {
//   return (
//     <>
//       <MyName name={name} />
//       <MyAge age={age} />
//     </>
//   );
// }

export function UserInfo1() {
  return (
    <>
      <MyName />
      <MyAge />
    </>
  );
}
