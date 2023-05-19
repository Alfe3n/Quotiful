import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { removeBookmark, clearAll } from '../Slice'

import { BsFillBookmarkCheckFill } from 'react-icons/bs'

function Bookmark() {
  const bookmarks = useSelector((state) => state.bookmarklist.bookmark)
  const dispatch = useDispatch()
  function handleBookmark(item) {
    dispatch(removeBookmark(item._id))
  }
  return (
    <div className="flex flex-col items-center min-h-screen page-container bg-violet">
      <Navbar bookmark={true} />
      {bookmarks[0] == undefined ? (
        <h1 className="mt-20 text-2xl font-extrabold cursor-pointer text-red md:text-6xl">No Bookmarks!</h1>
      ) : (
        <>
          <div className="flex justify-end w-2/3 mb-16">
            <p className="text-violet">invisble</p>
            <p className="text-lg font-bold md:text-2xl text-green cursor-pointer" onClick={() => dispatch(clearAll())}>
              Clear All
            </p>
          </div>
          {bookmarks.map((quote) => {
            return (
              <div
                key={quote._id}
                className="flex flex-col items-center justify-around w-5/6 p-4 mb-10 leading-relaxed text-white md:w-2/3 md:p-8 quote-container bg-red rounded-3xl gap-y-4 md:gap-y-8 md:leading-loose">
                <p className="text-lg text-center md:text-xl lg:2xl">{quote.content}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="hidden text-red md:block">invisible</p>
                  <p className="font-extrabold text-left md:text-lg lg:xl">~{quote.author}</p>
                  <BsFillBookmarkCheckFill className="text-xl text-white cursor-pointer" onClick={() => handleBookmark(quote)} />
                </div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

export default Bookmark
