import { github } from "@/app/components/github";
import Link from "next/link";
import "nes.css/css/nes.min.css";

const Page = async ({ params }) => {
  const { username } = await params;

  const user = await github(`/users/${username}`);
  const userRepos = await github(`/users/${username}/repos`);

  return (
    <div className="flex flex-col items-center mt-8 space-y-6">
      <div className="nes-container with-title is-centered w-full md:w-3/4 lg:w-2/3 p-6">
        <p className="title">User</p>
        <h1 className="nes-text is-primary text-center text-xl">{user.name}</h1>
        <img
          src={user.avatar_url}
          alt={`${user.name}'s avatar`}
          className="nes-avatar is-rounded mx-auto mt-4"
          style={{ width: "150px", height: "150px" }}
        />
        {user.bio && (
          <p className="mt-4 text-center nes-text">
            <span className="font-bold">Bio:</span> {user.bio}
          </p>
        )}
      </div>

      {userRepos.length > 0 && (
        <div className="nes-container with-title w-full md:w-3/4 lg:w-2/3 p-6">
          <p className="title">Repositories</p>
          <ul className="nes-list is-disc space-y-2">
            {userRepos.map((repo) => (
              <li key={repo.id} className="break-words">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  className="nes-text is-success"
                >
                  {repo.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <section className="message -right fixed bottom-4 right-4 flex items-end space-x-2 opacity-0 animate-fadeIn">
        <div className="nes-balloon from-right is-dark max-w-xs">
          <p>Do you want to know more about this user ?</p>
        </div>
        <i className="nes-bcrikko"></i>
      </section>
    </div>
  );
};

export default Page;
