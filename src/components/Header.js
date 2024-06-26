export const Header = () => {
  let customCSS ="code";
  let customCSS2="error";
  const isLoggedin= false;
  const greeting = isLoggedin ? <p>Welcome to Uki</p> : <p>Please Logged in first</p>;
  const itmes=['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
  return (
    <>
      <div>
        <h1 className="bannerText">React JS Tutorial with Aplications</h1>
        <p className="slogan">Learn more be smart and achieve everything</p>
        <p>Once we familiar with ReactJS we can make lot's of applications</p>
        
        {/* {JavaScript expression} */}
        <p className={customCSS}>20+30={20+30}</p>
        <p className={customCSS2} style={{fontSize:'50px', fontStyle:'italic'}}>This message shows error</p>

        {/* {Conditional Rendering} */}
        {greeting}

        {/* {JSX with Lists} */}
        <ul>{itmes.map((item,index)=>(<li key={index}>{item}</li>))}</ul>
      </div>
    </>
  );
};
