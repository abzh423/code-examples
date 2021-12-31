import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  type Issue = {
    number: number;
    title: string;
    state: string;
  };

  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/ContentPI/ContentPI/issues")
      .then((res) => {
        setIssues(res.data);
      });
  }, []);

  return (
    <>
      <h1>ContentPI Issues</h1>
      {issues.map((issue: Issue) => (
        <p key={issue.title}>
          <strong>#{issue.number}</strong>{" "}
          <a
            href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`}
            target="_blank"
            rel="noreferrer"
          >
            {issue.title}
          </a>{" "}
          {issue.state}
        </p>
      ))}
    </>
  );
}

export default App;
