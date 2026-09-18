import type { UserProps } from "../props/UserProps";

const UserComponent = (props: UserProps) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>NIM: {props.nim}</h2>
      <h3>Prodi: {props.prodi}</h3>
      <h4>Semester: {props.semester}</h4>
    </div>
  );
};

export default UserComponent;