import { github } from "@/app/components/github";
import Link from "next/link";
import "nes.css/css/nes.min.css";

const Page = async ({ params }) => {
  const { repository } = await params;

  const repositoryResponse = await github(
    `/search/repositories?q=${repository}`
  );
  const repositoryDetail = await github(
    `/repos/${repositoryResponse.items[0].full_name}`
  );

  const commits = await github(
    `/repos/${repositoryResponse.items[0].full_name}/commits`
  );

  return (
    <div className="flex flex-col items-center mt-8 space-y-6">
      <div className="nes-container with-title is-centered w-full md:w-3/4 lg:w-2/3 p-6">
        <p className="title">Repository Details</p>
        <h1 className="nes-text is-primary text-center text-xl">
          {repositoryDetail.name}
        </h1>
        <p className="mt-4 text-center">
          <span className="font-bold">Description:</span>{" "}
          {repositoryDetail.description || "No description available."}
        </p>
        <p className="mt-2 text-center">
          <span className="font-bold">Owner:</span>{" "}
          {repositoryDetail.owner.login}
        </p>
      </div>

      <div className="nes-container with-title w-full md:w-3/4 lg:w-2/3 p-6">
        <p className="title">Commits</p>
        <p className="mb-4 text-center">
          <span className="font-bold">Default Branch:</span>{" "}
          {repositoryDetail.default_branch}
        </p>
        <ul className="nes-list is-disc space-y-4">
          {commits.map((commit) => (
            <li key={commit.sha} className="break-words">
              <Link
                href={`https://github.com/${repositoryDetail.owner.login}/${repository}/commit/${commit.sha}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nes-text is-success"
              >
                <div className="flex flex-col space-y-2 p-4 bg-gray-800 rounded-lg">
                  <div>
                    <span className="font-bold text-sm text-gray-400">
                      SHA:
                    </span>
                    <span className="text-sm text-white">{commit.sha}</span>
                  </div>

                  <div>
                    <span className="font-bold text-sm text-gray-400">
                      Message:
                    </span>
                    <p className="text-sm text-white">
                      {commit.commit.message}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-sm text-gray-400">
                      Author:
                    </span>
                    <span className="text-sm text-white">
                      {commit.commit.author.name}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-sm text-gray-400">
                      Date:
                    </span>
                    <span className="text-sm text-white">
                      {new Date(commit.commit.author.date).toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section className="message -right fixed bottom-4 right-4 flex items-end space-x-2 opacity-0 animate-fadeIn">
        <div className="nes-balloon from-right is-dark max-w-xs">
          <p>Looks like you're having fun on the Repository section!</p>
        </div>
        <i className="nes-bcrikko"></i>
      </section>
    </div>
  );
};

export default Page;
