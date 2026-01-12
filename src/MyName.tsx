interface MyNameProps {
  name: string;
  id?: string;
  password?: string;
}

// id가 주어지지 않으면 default가 보여진다.
// password가 있으면 디브태그값 보여주고 없으면 안 보여준다. (&&) prop이 없기에 돔자제가 생성되지 않음!
export function MyName({ name, id = 'default', password }: MyNameProps) {
  return (
    <>
      <div className="text-3xl font-bold underline"> My Name: {name}</div>
      <div>ID: {id}</div>
      {password && <div>PW: {password}</div>}
    </>
  );
}
