import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LazyLoader } from "Layout/lazy-loader";
import AppRouter from "./router/index";

function App() {
  return (
    <React.Suspense fallback={<LazyLoader />}>
      {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
      <Router>
        <AppRouter />
      </Router>
    </React.Suspense>
  );
}

export default App;
