import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard friend={friends[0]}/>
    <FriendCard friend={friends[1]}/>
    <FriendCard friend={friends[2]}/>
  </Wrapper>
);

export default App;
