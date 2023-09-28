function Home() {
  return (
    <>
      <div className="home-background-image">
        <div className="home-message">
          <h2 className="personal-banking">PERSONAL BANKING</h2>
          <h6 className="boost">
            Boost your savings with up to 4.96% APY on a CD.
          </h6>
          <a href="/CreateAccount/">
            <button className="see-rates">See rates</button>
          </a>
        </div>
      </div>
    </>
  );
}


export default Home
