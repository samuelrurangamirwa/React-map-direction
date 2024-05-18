import { Footer, Header } from '../components';
import { Props } from '../types/index';

export const Layout: React.FC<Props> = ({children}) =>{
  return (
    <div>
        <Header />
            {children}
        <Footer />
    </div>
  )
}
