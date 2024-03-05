import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userImg from '../../../assets/svg/PICA.jpg';
import {
  useGetReviewsByMenuIdQuery,
  usePostReviewMutation,
} from '../../../features/review/reviewApi';
import DescriptionLoader from '../../ui/loaders/DescriptionLoader';
const Review = ({ menu }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const auth = useSelector((state) => state.auth);

  // add to review
  const [
    postReview,
    { data, isLoading: isPostReviewLoading, error: postReviewError },
  ] = usePostReviewMutation();
  console.log("post review", data, postReviewError)
  const handlePostReview = (e) => {
    e.preventDefault();
    postReview({
      menu: menu?._id,
      user: auth?.user?._id,
      message: message,
    });
    setMessage('');
    if (postReviewError?.status === 401) {
      navigate('/login');
    }
  };
  // get review
  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetReviewsByMenuIdQuery(menu?._id);



  let content = null;
  if (isLoading) {
    content = (
      <>
        <DescriptionLoader />
        <DescriptionLoader />
        <DescriptionLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = (
      <p className="text-red-300 py-20">There is an error occured...</p>
    );
  }
  if (!isLoading && !isError && reviews?.data?.length > 0) {
    content = <p>No Reviews found</p>;
  }

  if (!isLoading && !isError && reviews?.data?.length > 0) {
    content = reviews?.data.map((review) => (
      <div
        className="my-5 flex items-center space-x-5 bg-gray-100 px-10 py-5 dark:bg-[#272b4e94] "
        key={review._id}
      >
        {review?.user.photo ? (
          <img src={review.user.photo} alt="" />
        ) : (
          <img className="w-20" src={userImg} alt="" />
        )}
        <p>{review?.message}</p>
      </div>
    ));
  }

  return (
    <div className="">
      <div className=" ">
        {/* show review */}
        {content}
      </div>
      <div className="space-y-5 bg-gray-100 dark:bg-[#272b4e94]  px-10  py-5">
        <p className="text-xl">Add a review</p>

        <form>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="border px-5 py-5 dark:bg-[#272b4e94] h-[200px] w-full"
            name="Write your review"
            placeholder="Write your review"
          ></textarea>

          <br />

          <button
            onClick={handlePostReview}
            className="px-5 py-1 mt-3 text-xl bg-orange-400 text-white cursor-pointer"
          >
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
