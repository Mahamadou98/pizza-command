import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        <span>Straight out of the oven, straight to you.</span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;