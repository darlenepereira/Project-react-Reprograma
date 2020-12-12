import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../Styles/components/menu.css'

import PageCat from '../Page/PageCat'
import Adoption from '../Components/Adoption'
import About from '../Components/About'

const Routes = () => {
    return(
        <BrowserRouter> 
            <Switch>
                <Route path='/' exact component={PageCat} clasName='routes'></Route>
                <Route path='/About' component={About} clasName='routes'></Route>
                <Route path='/Adoption' component={Adoption} clasName='routes'></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes