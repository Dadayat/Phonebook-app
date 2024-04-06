import PageTitle from "../../components/PageTitle/PageTitle";

export default function Home() {
  return (
    <div>
      <PageTitle>
        Welcome to Phonebook App{" "}
        <span role="img" aria-label="Greeting icon">
          👋
        </span>
      </PageTitle>
      <p>
        With this application, you can easily create and edit your own list of
        contacts. Register or log in and let's get started.
      </p>
    </div>
  );
}
