import Welcome from "./Welcome";
import Tree from "./Tree";
import Desc from "./Desc";
import { useEth } from "../../contexts/EthContext";

function Intro() {
  const { state, dispatch } = useEth();
  return (
    <>
      <Welcome />
      <div>hello world</div>
      <Tree />
      <Desc />
    </>
  );
}

export default Intro;
