import LoginForm from "./components/Login";

function Auth() {


  return (
      <div style={{
          display: "flex",
          justifyContent: "start",
          width: "100vw",
          height: "100vh",
        }}>

        <LoginForm/>
        <div style={{
          backgroundImage: "url(&quot;https://alpha.uscreencdn.com/1200xnull/dZoUZZTdTrWnfp359s98_SideBanner2.jpg&quot"
        }}>
          <img src="https://alpha.uscreencdn.com/1200xnull/dZoUZZTdTrWnfp359s98_SideBanner2.jpg&quot" alt="" />
        </div>
      </div>

    


  );
}

export default Auth;
