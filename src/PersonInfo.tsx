interface PersonInfoProps {
  name: string;
  age: number;
}
export function PersonInfo({ name, age }: PersonInfoProps) {
  const user = {
    address: '서울시 강남구',
    phone: '010-1234-5678',
    email: 'user@example.com',
    name,
    age,
  };
  return (
    <div>
      Person Info Component: {user.name}, {user.age}
    </div>
  );
}
