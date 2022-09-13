import React from "react";
import { Routes, Route } from "react-router-dom";
import InicioComponent from "../pure/InicioComponent";
import ExplorarComponent from "../pure/ExplorarComponent";
import MensajesComponents from "../pure/MensajesComponents";
import NotificacionesComponent from "../pure/NotificacionesComponent";
import PerfilComponent from "../pure/PerfilComponent";
import { useState } from "react";
import ErrorComponent from "../../pages/Error/ErrorComponent";

const FeedComponent = ({ tweets, setTweets, setUser, user }) => {
  const [strangeId, setStrangeId] = useState({});

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <InicioComponent
              tweets={tweets}
              setTweets={setTweets}
              setStrangeId={setStrangeId}
            />
          }
        />
        <Route path="explorar" element={<ExplorarComponent />} />
        <Route path="mensajes" element={<MensajesComponents />} />
        <Route path="avisos" element={<NotificacionesComponent />} />
        <Route
          path="perfil"
          element={
            <PerfilComponent
              user={user}
              setUser={setUser}
              tweets={tweets}
              setTweets={setTweets}
            />
          }
        />
        <Route
          path="usuario"
          element={
            <PerfilComponent
              user={user}
              setUser={setUser}
              strangeUser={strangeId}
              tweets={tweets}
              setTweets={setTweets}
            />
          }
        />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </div>
  );
};

export default FeedComponent;
