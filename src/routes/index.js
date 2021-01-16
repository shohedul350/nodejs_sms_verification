import customerRoutesConfigure from './customerRoutes';

const configureAllRoutes = (app) => {
  customerRoutesConfigure(app);
};

export default configureAllRoutes;
