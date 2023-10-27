import Post from "../../models/PostsModel.js";

export const getPostsPublicById = async (req, res) => {
  const {id} = req.params;
  try {
    const resp = await Post.find({
      id: id,
    });
    res.json({
      message: "success",
      status_code: 200,
      result: resp,
    });
  } catch (error) {
    res.json({
      message: "Not Found",
      status_code: 404,
    });
  }
};
