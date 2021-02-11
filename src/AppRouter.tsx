
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

/////PAGES
import { App2 } from './App2';
import { PageAbout } from './AppSites/PageAbout';
import { PagePortfolio } from './AppSites/PagePortfolio';
import { PageBlog } from './AppSites/PageBlog';
import { PageContact } from './AppSites/PageContact';

/////ARTICLES BLOGS
import { Articles } from './AppSites/ArticlesBlog/Articles';
import { PortfolioContent } from './AppSites/PortfolioContent/PorfolioContent';

///TEMPLATES
import { Changelog } from './TemplateInfo/templateChangelog';
import { Licenses } from './TemplateInfo/templateLicenses';
import { StylesGuide } from './TemplateInfo/templateStyles';
import {ScrollToTop} from './layouts/ScrollProblem';

export const AppRouter: React.FC = () => {
    
    
    return (
      <BrowserRouter>
          <ScrollToTop/>
        <div className="container">

            <Route exact path="/" component={App2} />
            <Switch>
              <Route exact path="/about" component={PageAbout} />
              <Route exact path="/portfolio" component={PagePortfolio} />
              <Route exact path="/blog" component={PageBlog} />
              <Route exact path="/contact" component={PageContact} />
            </Switch>

            <Switch>
              <Route path="/template-info/changelog" component={Changelog} />
              <Route path="/template-info/licenses" component={Licenses} />
              <Route
                path="/template-info/styles-guide"
                component={StylesGuide}
              />
            </Switch>
            <Route
              exact
              path="/post/:id"
              render={({ match }) => <Articles match={match} />}
            />
            <Route
              exact
              path="/work/:id"
              render={({ match }) => <PortfolioContent match={match} />}
            />
         
        </div>
      </BrowserRouter>
    );
}

