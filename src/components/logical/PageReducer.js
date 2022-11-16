import Home from './pages/Home.js'
import News from './pages/News.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Store from './pages/Store.js'
import Unknown from './pages/Unknown.js'

export default function Paginator(page)
{
    switch (page) 
    {
        case "home":
            return <Home />;
        
        case "news":
            return <News />;
        
        case "about":
            return <About />;
        
        case "contact":
            return <Contact />;
        
        case "store":
            return <Store />;
    
        default:
            return <Unknown />
            break;
    }
}