import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HomeContainer, PlayButton } from "../components/HomeAtoms";
import { joinQuery } from "../graphql/queries/join";

export default function Home() {
  const [joinLobby,{loading,data}] = useLazyQuery(joinQuery);
  const history = useHistory();

  useEffect(()=> {
    if(data) {
      history.push(`/lobby/${data.join.id}`);
    }
  },[data,history]);

  return (
    <HomeContainer>
        <PlayButton onClick={() =>joinLobby()}>Play</PlayButton>
    </HomeContainer>
  );
}