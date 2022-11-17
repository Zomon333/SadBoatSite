import Home from '../page/Home.jsx'
import News from '../page/News.jsx'
import About from '../page/About.jsx'
import Contact from '../page/Contact.jsx'
import Store from '../page/Store.jsx'
import Legal from '../page/Legal.jsx'
import Unknown from '../page/Unknown.jsx'

export default function Paginator({children})
{
    switch (children) 
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

        case "legal":
            return <Legal />;
    
        default:
            return <Unknown />
            break;
    }
}