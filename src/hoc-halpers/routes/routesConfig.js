import PeoplePage from "../../containers/PeoplePage/PeoplePage";
import HomePage from "../../containers/HomePages/HomePage";

const routesConfig=[
    {
      path:"/",
      exact:true,
      component:<HomePage/>
    },
    {
      path:"/people",
      exact:true,
      component:<PeoplePage/>
    },
    {}

]

export default routesConfig