export const getReviewsLength = (reviewsNum, review, reviews1, reviews2) => {
  if (reviewsNum === 0 && reviewsNum === null) {
    return `0 ${reviews2}`
  } else if (reviewsNum === 1) {
    return `1 ${review}`
  } else if (reviewsNum >= 2 && reviewsNum <= 4) {
    return `${reviewsNum} ${reviews1}`
  } else {
    return `${reviewsNum} ${reviews2}`
  }
}
