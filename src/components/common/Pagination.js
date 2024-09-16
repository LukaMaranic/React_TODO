import { observer } from "mobx-react-lite";

const Pagination = observer(({ currentPage, onNextPage, onPreviousPage }) => {
  return (
    <nav aria-label="Page navigation example" className="my-10">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPreviousPage();
            }}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNextPage();
            }}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
});

export default Pagination;
