import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh snap!</h1>
      <p>Sorry, an unexpected error has occurred. Probably the page doesn't exist on this route </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}