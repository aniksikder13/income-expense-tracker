import { Fragment } from "react";
import Footer from "./navigations/Footer";
import Header from "./navigations/Header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
        <main>
            {props.children}
        </main>
      <Footer />
    </Fragment>
  )
}