import ComponentMain from "../components/ComponentMain";
import ComponentScreen from "../components/ComponentScreen";


export default function Home() {
  return (
    <div className="container">
      <div className="main-styles-container">
        <ComponentScreen />
        <ComponentMain />
      </div>
    </div>

  )
}
