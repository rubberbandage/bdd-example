import React, {FunctionComponent, useState} from 'react';
import ProfileImage from './profile.gif';
import './App.css';
import styled from "styled-components";

type ProfileProps = {
  name: string
};

const Image = styled.img.attrs({
  src: ProfileImage
})`
  border-radius: 20px;
`;

const StyledProfile = styled.div`
  border: 2px solid white;
  background-color: black;
  padding: 1rem;

  ${Image} { // Reference another component
    border: 2px solid white;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table,tr {
    border: 2px solid white;
  }
`;

type Cat = {
  name: string;
  breed: string;
};

const myCats: Cat[] = [
  {name: 'Whiskers', breed: 'Bengal'},
  {name: 'Mittens', breed: 'Siberian'},
  {name: 'Savage', breed: 'Savannah'}
];

const Profile: FunctionComponent<ProfileProps> = ({name}) => {
  const [cats, setCats] = useState<Cat[]>([])

  return (
    <StyledProfile>
      <div>
        <small>Welcome</small>
        <h1>{name}</h1>
        <Image/>
      </div>
      <button onClick={() => setCats(myCats)}>Show Cats</button>
      <button onClick={() => setCats([])}>Hide Cats</button>
      <Table>
        <tbody>
        {
          cats.map(({name, breed}) => <tr key={name}>
            <td>{name}</td>
            <td>-</td>
            <td>{breed}</td>
          </tr>)
        }
        </tbody>
      </Table>
    </StyledProfile>
  );
}

export default Profile;
