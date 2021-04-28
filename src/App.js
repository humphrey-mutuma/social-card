import './App.css';
import Avator from './components/AvatorComponent/Avotar'
import SocialCard from './components/SocialCardComponent/SocialCard'

function App() {
  return (
    <section className="Card">
      <aside className="AvatorComponent">
        <Avator />
      </aside>
      <article className="SocialCardComponent">
        <SocialCard />
      </article>
    </section>
  );
}

export default App;
