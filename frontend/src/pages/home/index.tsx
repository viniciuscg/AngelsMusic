import ItemCard from "../../components/itemCard";
import Header from "../../components/header"
import Highlight from "../../components/highlight";
import { HomeContainer } from "./style";

function Home() {

  return (
    <HomeContainer>
      <Header/>
      <Highlight/>
      <ItemCard/>
      <ItemCard/>
    </HomeContainer>
  )
}

export default Home
