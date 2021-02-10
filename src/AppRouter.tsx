
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


/////PAGES
import { App2 } from './App2';
import { PageAbout } from './AppSites/PageAbout';
import { PagePortfolio } from './AppSites/PagePortfolio';
import { PageBlog } from './AppSites/PageBlog';

/////ARTICLES BLOGS
import { Articles } from './AppSites/ArticlesBlog/Articles';
import { PageContact } from './AppSites/PageContact';
import { PortfolioContent } from './AppSites/PortfolioContent/PorfolioContent';
import { Changelog } from './TemplateInfo/templateChangelog';
import { Licenses } from './TemplateInfo/templateLicenses';
import { StylesGuide } from './TemplateInfo/templateStyles';

export const AppRouter = () => {
    
    
    return (
      <Router>
        <div className="container">
          <Route exact path="/">
            <App2 />
          </Route>
          <Route path="/about">
            <PageAbout />
          </Route>
          <Route path="/portfolio">
            <PagePortfolio />
          </Route>
          <Route path="/blog">
            <PageBlog />
          </Route>
          <Route path="/contact">
            <PageContact />
          </Route>
          <Route
            path="/post/:id"
            render={({ match }) => <Articles match={match} />}
          />
          <Route
            path="/work/:id"
            render={({ match }) => <PortfolioContent match={match} />}
          />
          <Route path="/template-info/changelog">
            <Changelog />
          </Route>
          <Route path="/template-info/licenses">
            <Licenses />
          </Route>
          <Route path="/template-info/styles-guide">
            <StylesGuide />
          </Route>
        </div>
      </Router>
    );
}