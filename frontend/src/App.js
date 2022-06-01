import './App.css';
import { BrowserRouter, Route, Switch, Redirect }  from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import LoginUsers from './Components/Users/LoginUsers';
import RegisterUser from './Components/Users/RegisterUser';
import Profile from './Components/Profile/Profile';
import ProfileUpdate from './Components/Profile/ProfileUpdate';
import Blog from './Components/Blogs/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Admin from './Components/Admin/Admin';
import Subcription from './Components/Subcription/Subcription';
import shoppingcart from './Components/Shoppingcarts/shoppingcart';
import AddBook from './Components/Book/AddBook';
import Displaybook from './Components/Book/Displaybook';
import Bookdisplay from './Components/Book/Bookdisplay';
import Payment from './Components/payment/Payment';
import Pdfdownload from './Components/Download/pdfdownload';
import Applyplan from './Components/Subcription/Applyplan';
import Author from './Components/Author/Author';
import Recommender from './Components/Recommendation/Recommender';
import Products from './Components/Shoppingcarts/Products/Products';
import Cart from './Components/Shoppingcarts/Cart/Cart';
import Subcription_plan from './Components/Admin/Subcribe';
import SingleItem from './Components/Shoppingcarts/SingleItem/SingleItem';
import { connect } from 'react-redux';
import Catalog from './Components/Catalog/Catalog';
import Credits from './Components/credits/credits';
import Reward from './Components/Author/Reward';
import Viewplan from './Components/Subcription/Viewplan';
import Applyplan1 from './Components/Subcription/Applyplan1';
import Chatbot from './Components/Chatbot/Chatbot';


function App({currentItem}) {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar/>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/admin' component={Admin} />
         <Route exact path='/subcribe' component={Subcription_plan} />
         <Route exact path='/dashboard' component={Dashboard} />
         <Route exact path='/blog'  component={Blog} />
         <Route exact path='/login' component={LoginUsers} />
         <Route exact path='/register' component={RegisterUser} />
         <Route exact path='/profile' component={Profile} />
         <Route exact path='/profile-update' component={ProfileUpdate} />
         <Route exact path='/subcription-plan' component={Subcription} />
         <Route exact path='/shoppingcart' component={shoppingcart} />
         <Route exact path='/AddBook' component={AddBook} />
         <Route exact path='/Displaybook' component={Displaybook} />
         <Route exact path='/Bookdisplay' component={Bookdisplay} />
         <Route exact path='/payment' component={Payment} />
         <Route exact path='/pdfdownload' component={Pdfdownload} />
         <Route exact path='/plan' component={Applyplan} />
         <Route exact path='/plan1' component={Applyplan1} />
         <Route exact path='/author' component={Author} />
         <Route exact path='/catalog' component={Catalog} />
         <Route exact path='/chatbot' component={Chatbot} />
         <Route exact path='/recommender' component={Recommender} />
         <Route exact path='/shoppingcart' component={Products} />
         <Route exact path='/cart' component={Cart} />
         <Route exact path='/reward' component={Reward}/>
         <Route exact path='/viewplan' component={Viewplan}/>
         <Route exact path='/creditinfo' component={Credits} />
         {!currentItem ? (<Redirect to='/shoppingcart'/>):(
           <Route exact path='/product/:id' component={SingleItem} />
         )}
       </Switch>
       <Footer/>
     </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);
