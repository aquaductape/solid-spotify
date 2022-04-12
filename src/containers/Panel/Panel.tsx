import { Link, useLocation } from "solid-app-router";
import { onMount, Show } from "solid-js";
import {
  IconHome,
  IconHomeFilled,
  IconLibrary,
  IconLibraryFilled,
  IconSearch,
  IconSearchFilled,
} from "~/components/Icons";
const Header = () => {
  onMount(() => {
    console.log("mounted!!!!!!"); // runs on every client route change
  });
  <div>Header</div>;
};

const Panel = () => {
  const location = useLocation();

  onMount(() => {
    console.log("mounted!!!!!!");
  });
  return (
    <nav class="pt-6 bg-black">
      <ul class="flex flex-col gap-2 text-white">
        <li>
          <Link href="/" class="flex gap-1">
            {location.pathname === "/" ? <IconHomeFilled /> : <IconHome />}
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/search" class="flex gap-1">
            {location.pathname === "/search" ? (
              <IconSearchFilled />
            ) : (
              <IconSearch />
            )}
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link href="/collection/playlists" class="flex gap-1">
            {location.pathname === "/collection/playlists" ? (
              <IconLibraryFilled />
            ) : (
              <IconLibrary />
            )}
            <span>Your Library</span>
          </Link>
        </li>
      </ul>
      <ul>wtf</ul>
      <ul></ul>
    </nav>
  );
};

export default Panel;
