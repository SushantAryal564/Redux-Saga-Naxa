import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Creators from "../actions/dataAction";
function Pagination() {
  const { dataRequest } = Creators;
  const data = useSelector((state) => {
    return state.data.data;
  });
  console.log("I am here", data);
  // const previousPage = useSelector((state) => {
  //   return state.data.project.prev_page;
  // });
  const nextPage = useSelector((state) => {
    return state.data.next_page;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataRequest({ page: 1 }));
  }, []);
  // const previousHandler = () => {
  //   if (previousPage) {
  //     dispatch(dataRequest({ page: previousPage }));
  //   }
  // };
  const nextHandler = () => {
    if (nextPage) {
      dispatch(dataRequest({ page: nextPage }));
    }
  };
  return (
    <div>
      <div>
        {data.length != 0
          ? data.map((element) => {
              return (
                <div className="flex gap-3">
                  <div>{element.id}</div>
                  <div>{element.name}</div>
                </div>
              );
            })
          : null}
      </div>
      <div>
        <div className="flex justify-start">
          <ul className="list-style-none flex">
            <li>
              {/*<div
                className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black-100 dark:text-black dark:hover:bg-slate-300 dark:hover:text-black"
                onClick={previousHandler}
              >
                Previous
      </div>*/}
            </li>
            <li>
              <div className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black-100 dark:text-black dark:hover:bg-slate-300 dark:hover:text-black"></div>
            </li>
            <li aria-current="page">
              <div className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black-100 dark:text-black dark:hover:bg-slate-300 dark:hover:text-black"></div>
            </li>
            <li>
              <div
                className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-black-100 dark:text-black dark:hover:bg-slate-300 dark:hover:text-black"
                onClick={nextHandler}
              >
                Next
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
