import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import MovieList from './components/MovieList'
import MovieDetails from "./components/MovieDetails";

function Application() {
  return (<Router>
    <CssBaseline />
    <Container maxWidth="lg">
      <Routes>
        <Route exact path="/" element={<Navigate to="/movies" />} />
        <Route exact path="/movies" element={<MovieList />} />
        <Route exact path="/moviedetails" element={<MovieDetails />} />
      </Routes>
    </Container>
  </Router>)
}

export default Application;
