import Header from './Components/Header';
import FeatureLayout from './Components/FeatureLayout';
import SignUpSection from './Components/SignUpSection';
import Footer from './Components/Footer';
import './index.css';

const articles = [
  {
    title: "Customer dashboard",
    description: "View a summary of all your customers over the last month.",
    imageUrl: "https://picsum.photos/200/300?random=1",
    rating: 4.5,
    author: "John Doe"
  },
  {
    title: "Sales report",
    description: "Detailed sales report for the last quarter.",
    imageUrl: "https://picsum.photos/200/300?random=2",
    rating: 4.0,
    author: "Jane Smith"
  },
  {
    title: "Inventory management",
    description: "Manage your inventory with ease.",
    imageUrl: "https://picsum.photos/200/300?random=3",
    rating: 5.0,
    author: "Mike Johnson"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="random-image-container">
        <img src="https://picsum.photos/500/900" alt="Random from Picsum" className="random-image" />
      </div>
      <FeatureLayout heading="Featured Articles" items={articles} buttonText="See All Articles" />
      <FeatureLayout heading="Featured Tutorials" items={articles} buttonText="See All Tutorials" />
      <SignUpSection />
      <Footer />
    </div>
  );
}


export default App;