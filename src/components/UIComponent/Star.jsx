const Star = (props) => {
  // eslint-disable-next-line react/prop-types
  const starState = props.starState
  // eslint-disable-next-line react/prop-types
  const width = props.width;

  return (starState==1) ? (
    <svg
      enableBackground="new 0 0 67 63"
      height="63px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 67 63"
      width={width}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M66.27,23.696L43.28,20.355L33-0.475L22.719,20.355L-0.27,23.696L16.365,39.91l-3.927,22.896L33,51.996  l20.562,10.811L49.635,39.91L66.27,23.696z M35.327,47.57L33,46.348V10.822l5.797,11.746l1.163,2.357l2.602,0.378l12.963,1.884  l-9.38,9.143l-1.882,1.835l0.444,2.591l2.214,12.91L35.327,47.57z"
        fill="gold"
      />
    </svg>
  ) : 
        (starState==2)?
  (
    <svg enableBackground="new 0 0 67 63"
    height="63px"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 20 20"
    width={width}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" fill="gold" />
</svg>

  ):(
    <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  enableBackground="new 0 0 67 63"
  height="63px"
  id="Layer_1"
  version="1.1"
  viewBox="0 0 67 63"
  width={width}
  xmlSpace="preserve"
>
  <path
    d="M33,10.822l5.797,11.746l1.163,2.357l2.602,0.378l12.963,1.884l-9.38,9.143l-1.882,1.835l0.444,2.591  l2.214,12.91L35.327,47.57L33,46.348l-2.327,1.223l-11.594,6.096l2.214-12.91l0.444-2.591l-1.882-1.835l-9.38-9.143l12.962-1.884  l2.602-0.378l1.163-2.357L33,10.822 M33-0.475L22.719,20.355L-0.27,23.696L16.365,39.91l-3.927,22.896L33,51.996l20.562,10.811  L49.635,39.91L66.27,23.696L43.28,20.355L33-0.475L33-0.475z"
    fill="#231F20"
  />
</svg>

  )

};

export default Star;
