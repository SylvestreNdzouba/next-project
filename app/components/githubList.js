import { github } from "./github";
import Link from "next/link";

import "nes.css/css/nes.min.css";

const GithubList = async ({ searchParams }) => {
  const { source } = await searchParams;
  const { search } = await searchParams;
  let users = [];
  let repos = [];

  if (source === "all") {
    const responseUsers = await github(`/search/users?q=${search}`);
    const responseRepos = await github(`/search/repositories?q=${search}`);
    users = responseUsers.items;
    repos = responseRepos.items;
  } else if (source === "users") {
    const responseUsers = await github(`/search/users?q=${search}`);
    users = responseUsers.items;
  } else if (source === "repositories") {
    const responseRepos = await github(`/search/repositories?q=${search}`);
    repos = responseRepos.items;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      {users.length > 0 && (
        <div className="nes-container with-title w-full md:w-2/3 lg:w-1/2 xl:w-[400px]">
          <p className="title">Users</p>
          <ul className="nes-list is-disc space-y-2">
            {users.map((user) => (
              <li key={user.id} className="break-words text-sm md:text-base">
                <Link
                  href={`/users/${user.login}`}
                  className="nes-text is-primary"
                >
                  {user.login}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {repos.length > 0 && (
        <div className="nes-container with-title w-full md:w-2/3 lg:w-1/2 xl:w-[400px]">
          <p className="title">Repositories</p>
          <ul className="nes-list is-disc space-y-2">
            {repos.map((repo) => (
              <li key={repo.id} className="break-words text-sm md:text-base">
                <Link
                  href={`/repositories/${repo.name}`}
                  className="nes-text is-success"
                >
                  {repo.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GithubList;
