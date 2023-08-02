const Review = () => {

    const obj = {
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
        date:"12/12/2021",
        rating:4.5,
        content:"Lorem elit. Quisquam, voluptas.",
        author:"Gurpreet Singh"
    }

  return (

    <div className="border rounded p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-semibold">{obj.title}</h3>
          <p className="text-sm text-gray-600">{obj.date}</p>
        </div>
        <p className="text-lg font-bold">{obj.rating}/5</p>
      </div>
      <p className="text-gray-800">{obj.content}</p>
      <p className="mt-2">- {obj.author}</p>
    </div>

    );
};

export default Review;
