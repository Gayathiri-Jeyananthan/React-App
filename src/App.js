// import { LearnComponents } from "./components/LearnComponents";
// import { Header } from "./components/Header";
import { ChildComponents } from "./components/ChildComponents";
import { Student } from  "./components/Student";


function App() {
  return (
    <>
    < Student name='Gaythiri' age={23} isMarried={false}/>
    < Student name='Nirushan' age={23} isMarried={false}/>
    < Student name='Nirushan' age={23} isMarried={false}/>
    < Student />
    <ChildComponents>
      <p>This is the Sample paragraph 1</p>
      <p>This is the Sample paragraph 2</p>
      <p>This is the Sample paragraph 3</p>

    </ChildComponents>

      {/* <Header/> */}
      {/* <div className="App">
      Gayathiri Jeyananthan
    </div>
    <LearnComponents/> */}
    </>
  );
}

export default App;
