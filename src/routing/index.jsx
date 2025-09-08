import React from "react";
import { Routes, Route } from "react-router-dom";
import NonAuthLayout from "./NonAuthLayout";

import { nonAuthroutes } from "./routes";

const Index = () => {
  return (
    <Routes>
      <Route>
        {nonAuthroutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            key={idx}
            exact={true}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Index;
