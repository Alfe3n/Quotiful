import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { BsFillBookmarkPlusFill, BsFillBookmarkCheckFill } from 'react-icons/bs'
import Navbar from '../Components/Navbar'
import { addBookmark } from '../Slice'
import { useDispatch } from 'react-redux'

function Home() {
  const dispatch = useDispatch()
  const [quote, setQuote] = useState([])
  const [category, setCatogory] = useState('')
  const [categoryOptions, setCatogoryOptions] = useState([])
  const [isBookmarked, setIsBookmarked] = useState(false)

  function randomQuote() {
    axios
      .get('https://api.quotable.io/random')
      .then((response) => {
        setQuote(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      randomQuote()
      axios
        .get('https://api.quotable.io/tags')
        .then((res) => {
          let arr = []
          res.data.map((item) => arr.push(item.name))
          setCatogoryOptions(arr)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return () => {
      isMounted = false
    }
  }, [])
  function changeCategory(e) {
    setCatogory(e.target.value)
  }
  function changeQuote() {
    if (category === 'All') {
      randomQuote()
    } else {
      axios
        .get('https://api.quotable.io/random?tags=' + category)
        .then((response) => {
          setQuote(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  function handleBookmark() {
    setIsBookmarked(!isBookmarked)
    if (!isBookmarked) dispatch(addBookmark(quote))
    else dispatch(removeBookmark(quote._id))
  }
  return (
    <div className="w-screen min-h-screen page-container bg-violet">
      <Navbar home={true} />
      <div className="flex flex-col items-center content-container gap-y-16">
        <div className="flex flex-col items-center justify-around w-5/6 p-4 leading-relaxed text-white md:p-8 md:w-2/3 quote-container bg-red rounded-3xl gap-y-4 md:gap-y-8 md:leading-loose">
          <p className="text-lg text-center md:text-xl lg:2xl">{quote.content}</p>
          <div className="flex items-center justify-between w-full ">
            <p className="hidden text-red md:block">invisible</p>
            <p className="font-extrabold text-left md:text-lg lg:xl">~{quote.author}</p>
            {isBookmarked ? (
              <BsFillBookmarkCheckFill className="text-xl text-white cursor-pointer" onClick={handleBookmark} />
            ) : (
              <BsFillBookmarkPlusFill className="text-xl text-white cursor-pointer" onClick={handleBookmark} />
            )}
          </div>
        </div>

        <select
          className="p-2 text-xs border-gray-300 rounded-full md:sm min-w-max focus:outline-none focus:ring focus:border-blue-300 md:px-8 lg:px-12"
          name="category"
          value={category}
          onChange={changeCategory}>
          <option value={'All'} onClick={changeCategory}>
            All
          </option>
          {categoryOptions.map((item, index) => (
            <option value={item} key={index} onClick={changeCategory}>
              {item}
            </option>
          ))}
        </select>
        <button
          className="px-2 py-2 mb-16 text-sm text-white rounded-full md:text-base md:px-6 lg:px-8 bg-green"
          onClick={() => {
            changeQuote()
            setIsBookmarked(false)
          }}>
          Next Quote
        </button>
      </div>
    </div>
  )
}

export default Home
