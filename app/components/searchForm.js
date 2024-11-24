"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import "nes.css/css/nes.min.css";

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchInput = formData.get("name");
    const type = formData.get("type");

    const params = new URLSearchParams(searchParams);
    params.set("source", type);
    params.set("search", searchInput);
    const queryString = params.toString();
    router.push(`?${queryString}`);
    event.target.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center mt-6 space-y-4"
    >
      <div className="nes-field">
        <input
          type="text"
          name="name"
          className="nes-input w-96 text-base"
          placeholder="Search..."
          required
        />
      </div>

      <div className="flex space-x-4">
        <label>
          <input
            type="radio"
            name="type"
            value="all"
            className="nes-radio"
            required
            defaultChecked
          />
          <span>All</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="repositories"
            className="nes-radio"
          />
          <span>Repositories</span>
        </label>
        <label>
          <input type="radio" name="type" value="users" className="nes-radio" />
          <span>Users</span>
        </label>
      </div>
      <button type="submit" className="nes-btn is-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
