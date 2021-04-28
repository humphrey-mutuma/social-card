import './App.css';
import Avator from './components/AvatorComponent/Avator'
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
