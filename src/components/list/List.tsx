import { useState } from "react";
import Pagination from "./Pagination";

interface ListProps<T> {
  elements: T[];
  headers: string[];
  elementMapper: (element: T) => JSX.Element;
}

const List = <T,>({ elements, headers, elementMapper }: ListProps<T>) => {
  const [activePage, setActivePage] = useState(0);

  const itemPerPage = 10;

  return (
    <div className="flex w-full flex-col overflow-scroll bg-white pb-4">
      <table className="w-full border-collapse bg-white">
        <thead className="shadow-bottom sticky top-0 bg-white">
          {headers.map((header, index) =>
            index !== headers.length - 1 ? (
              <th
                key={header === "" ? "button-header" : header}
                className="shadow-bottom sticky top-0 bg-white px-6 py-3 text-sm font-light text-gray-500"
              >
                {header}
              </th>
            ) : (
              <th
                key={header === "" ? "button-header" : header}
                className="shadow-bottom sticky top-0 bg-white px-6 py-3 text-sm font-light text-gray-500"
              >
                {header}
              </th>
            ),
          )}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {elements
            .slice(
              activePage * itemPerPage,
              activePage * itemPerPage + itemPerPage,
            )
            .map(elementMapper)}
        </tbody>
      </table>
      <Pagination
        itemCount={elements.length}
        pageSize={itemPerPage}
        setPage={setActivePage}
        activePage={activePage}
      />
    </div>
  );
};

export default List;
